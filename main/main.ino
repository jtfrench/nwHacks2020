// Arduino Code for nwHacks Project 2020
// Team: Josh French, Josh Jessup, Andrew Yan, Imran Adamjee
// Date: January 11 & 12, 2020

// setup shit
  #include <Wire.h>
  #include "MMA7660.h"
  MMA7660 accelemeter;

// variables for getAccels 
  float ax,ay,az; // variables to hold the accelerations
  float prevAX, prevAY, prevAZ; // previous acceleration values to compare against

// variables for detection////
  #define buzzerOutput 8
  boolean detected = false;
  int detectedCount = 0;
  int detectedDuration = 100; // the amount of time that button/buzzer/light is on for
  int detectedDelay = 200;  // the amount of time before another contraction can be detected



// variables for calcThresholds /////
  float N = 15; // abitrary value used to change deviation of high and low thresholds
  float low_thresh = 0;
  float high_thresh = 0;


// variables for smoothSignal /////////
  const int pinAdc = A0;
  const int sS_numReadings = 80;
  int sS_readings[sS_numReadings];      // the readings from the analog input
  int sS_readIndex = 0;                 // the index of the current reading
  int sS_total = 0;                     // the running total
  int average = 0;                      // the average signal


// variables for standardDev /////////
  const int sample_size = 50;     // the size of the sample to consider for standard deviation calc
  const int sample_lag = 200;      // the standard deviation is calculated for the sample_size values that lag this much behind the current
  
  const int totalReadings = sample_size + sample_lag;   // the total number of values in array for standardDev
  
  int readings[totalReadings];      // the readings from the analog input
  int readIndex = 0;              // the index of the current reading
  
  float mean = 0;
  float mean_total = 0 ;
  float mean_readings[sample_size]; 
  int mean_readIndex = 0;
  unsigned long sd = 0;
  float sd_total = 0;
  float sd_readings[sample_size];
  int sd_readIndex = 0;


void setup()
{
 accelemeter.init();  
 Serial.begin(9600);
 //Serial.println("Grove - Sound Sensor Test...");

  // Intialize acceleration values
  accelemeter.getAcceleration(&ax,&ay,&az); // get accel values
  prevAX = ax;
  prevAY = ay;
  prevAZ = az;
  
 
}

void loop()
{

    
    Serial.println("accleration of X/Y/Z: ");
    Serial.print(ax);
    Serial.println(" g");
    Serial.print(ay);
    Serial.println(" g");
    Serial.print(az);
    Serial.println(" g");
    Serial.println("*************");
    delay(500);

  // Sound Sensor shit
    smoothSignal();
    standardDev();
    calcThresholds();

  // Accelemeter shit
    checkAccels();

  // Detection shit
    detect();

  // Serial print sound values
    Serial.print(average);
    Serial.print(",");
    Serial.print(low_thresh);
    Serial.print(",");
    Serial.print(high_thresh);
    Serial.print(",");
    Serial.println(mean);

    delay(10);
}

void smoothSignal() {
  // subtract the last reading:
  sS_total = sS_total - sS_readings[sS_readIndex];
  // read from the sensor:
  sS_readings[sS_readIndex] = analogRead(pinAdc);
  // add the reading to the total:
  sS_total = sS_total + sS_readings[sS_readIndex];
  // advance to the next position in the array:
  sS_readIndex = sS_readIndex + 1;

  // if we're at the end of the array...
  if (sS_readIndex >= sS_numReadings) {
    // ...wrap around to the beginning:
    sS_readIndex = 0;
  }

  // calculate the average:
  average = sS_total / sS_numReadings;
  // send it to the computer as ASCII digits
  // Convert the analog reading (which goes from 0 - 1023) to a voltage (0 - 5V):
  //float voltage = average * (5.0 / 1023.0);
}

void standardDev() { 
  // store the current value of average:
  readings[readIndex] = average;
  // advance to the next position in the array:
  readIndex = readIndex + 1;

  // if we're at the end of the array...
  if (readIndex >= totalReadings) {
    // ...wrap around to the beginning:
    readIndex = 0;
  }

  // sum a total for mean calc
  int j = mean_readIndex;
    for(int count=0; count < sample_size; count++) {

      if(j >= totalReadings) { 
          j=0;
        }
      
      // subtract the last reading:
      mean_total = mean_total - mean_readings[mean_readIndex];
      // read from the sensor:
      mean_readings[mean_readIndex] = readings[j];
      // add the reading to the total:
      mean_total = mean_total + mean_readings[mean_readIndex];
      // advance to the next position in the array:
      mean_readIndex = mean_readIndex + 1;
    
      if(mean_readIndex >= sample_size) { 
         mean_readIndex = 0;
      }
  
      j++;
    }
    
  // calc the mean
  mean = mean_total / sample_size;


  // sum a total for sd calc
  int i = readIndex;
  for(int count=0; count < sample_size; count++) {

    if(i >= totalReadings) { 
      i=0;
    }

    // subtract the last reading:
    sd_total = sd_total - sd_readings[sd_readIndex];
    // read from the sensor:
    sd_readings[sd_readIndex] = sq(abs(readings[i] - mean));
    // add the reading to the total:
    sd_total = sd_total + sd_readings[sd_readIndex];
    // advance to the next position in the array:
    sd_readIndex = sd_readIndex + 1;

    if(sd_readIndex >= sample_size) { 
      sd_readIndex=0;
    }

    i++;
  }
  
  // calc the sd
  sd = abs(sqrt( sd_total / sample_size ));

}

/* calcThreholds:
 *  calculates the high and low thresholds used for detection
 *  uses mean, standard deviation and sensitivity (N)
 */
void calcThresholds(){
  low_thresh = mean - (N * (sd+0.1));
  high_thresh = mean + (N * (sd+0.1));
}

/* stopSignaling:
 *  turns off all the components
 */
void stopSignaling(){
  digitalWrite(buzzerOutput, LOW);
}

void detect(){
    
    if (!detected) {
      if(average > high_thresh || average < (low_thresh - 1) || ax > (prevAX+0.5) || ay > (prevAY+0.5) || az > (prevAZ+0.5)) {
        detected = true;
        digitalWrite(buzzerOutput, HIGH);
      }
    }
    
    else if (detectedCount < detectedDuration) {
        detectedCount++;
    }
    else if (detectedCount >= detectedDuration && detectedCount < detectedDelay) {
        digitalWrite(buzzerOutput, LOW);
        detectedCount++;
    }
    else {
        detectedCount = 0;
        detected = false;
    }
}

void checkAccels(){
    
    accelemeter.getAcceleration(&ax,&ay,&az); // get accel values

}
