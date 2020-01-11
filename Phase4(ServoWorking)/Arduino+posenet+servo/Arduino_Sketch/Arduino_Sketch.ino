#include<Servo.h>
char data;
Servo servo1;

void setup() {
  Serial.begin(9600);
  Serial.println("Setup Complete");
  servo1.attach(9);
  pinMode(13,OUTPUT);
  digitalWrite(13,LOW);
  servo1.write(90);
}

void loop() {
  
  if(Serial.available()){
    data = Serial.read();
  }
    if(data == '1'){
     digitalWrite(13,HIGH);
     servo1.write(180);
    }
    
    else if(data == '0'){
     digitalWrite(13,LOW);
     servo1.write(0);
    }
}
