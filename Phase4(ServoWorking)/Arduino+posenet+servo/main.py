#FOR COMMUNICATION WITH JS
from flask import Flask, render_template
from flask_socketio import SocketIO

# FOR SERIAL COMMUNICATION WITH ARDUINO
import serial
import time
Arduino = serial.Serial('com4', 9600)
time.sleep(2)

#FOR ANGLE CALCULATION
import math
def getAngle(a, b, c):
    ang = math.degrees(math.atan2(c[1]-b[1], c[0]-b[0]) - math.atan2(a[1]-b[1], a[0]-b[0]))
    if ang < 0 :
        return 360-ang
    else:
        return ang

app = Flask(__name__)
app.config['SECRET_KEY'] = 'vnkdjnfjknfl1232#'
socketio = SocketIO(app)

@app.route('/')
def sessions():
    print('INITIALIZING....')
    return render_template('index.html')

@socketio.on('my event')
def handle_my_custom_event(json):
    
    rightelbowX = json['val']['pose']['keypoints'][8]['position']['x']
    rightshoulderX = json['val']['pose']['keypoints'][6]['position']['x']
    rightwristX = json['val']['pose']['keypoints'][10]['position']['x']
    
    rightelbowY = json['val']['pose']['keypoints'][8]['position']['y']
    rightshoulderY = json['val']['pose']['keypoints'][6]['position']['y']
    rightwristY = json['val']['pose']['keypoints'][10]['position']['y']
    
    a = (rightwristX,rightwristY)
    b = (rightelbowX,rightelbowY)
    c = (rightshoulderX,rightshoulderY)
    ang = getAngle(a, b, c) 
    ANGLE=int(ang)
    print('ANGLE : ' + str(ANGLE))

    Arduino.write(str(ANGLE))
    

if __name__ == '__main__':
    socketio.run(app)





 
