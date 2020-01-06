#include<Servo.h>

String ang;
char data;
Servo servo1;

void setup() {
  Serial.begin(9600);
  Serial.println("Setup Complete");
  servo1.attach(9);
}

void loop() {
  while(Serial.available()) data = Serial.read();
//  int Ang = ang.toInt();
//  servo1.write(Ang);
//  delay(15);
 if(data == '1'){
  servo1.write(180);
 }
  else if(data == '0'){
  servo1.write(0);
 }
}
