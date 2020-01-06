#include<Servo.h>

char data;
Servo servo;

void setup() {
  Serial.begin(9600);
  pinMode(13,OUTPUT);
  digitalWrite(13,LOW);
  Serial.println("Setup Complete");
  servo.attach(9);
}

void loop() {
  while(Serial.available()){
    data = Serial.read();
    if(data == '1'){
      digitalWrite(13,HIGH);
      servo.write(180);
      delay(1000);
    }
    else if(data == '0'){
      digitalWrite(13,LOW);
      servo.write(0);
      delay(1000);
    }
  }
}
