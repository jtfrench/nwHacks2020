// Arduino Code for nwHacks Project 2020
// Team: Josh French, Josh Jessup, Andrew Yan, Imran Adamjee
// Date: January 11 & 12, 2020

#include <Wire.h>
#include "MMA7660.h"
MMA7660 accelemeter;
const int pinAdc = A0;

void setup()
{
 accelemeter.init();  
 Serial.begin(9600);
 //Serial.println("Grove - Sound Sensor Test...");
}

void loop()
{
  // Accelerometer shit
    int8_t x;
    int8_t y;
    int8_t z;
    float ax,ay,az;
    accelemeter.getXYZ(&x,&y,&z);
    
    Serial.print("x = ");
      Serial.println(x); 
      Serial.print("y = ");
      Serial.println(y);   
      Serial.print("z = ");
      Serial.println(z);
    
    accelemeter.getAcceleration(&ax,&ay,&az);
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
   long sum = 0;
   for(int i=0; i<32; i++)
   {
   sum += analogRead(pinAdc);
   }
   sum >>= 4;
   Serial.println("Sound sensor reading:");
   Serial.println(sum);
   delay(10);
}
