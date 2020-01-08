from flask import Flask, render_template
from flask_socketio import SocketIO

app = Flask(__name__)
app.config['SECRET_KEY'] = 'vnkdjnfjknfl1232#'
socketio = SocketIO(app)

@app.route('/')
def sessions():
    print('INITIALIZING....')
    return render_template('index.html')

@socketio.on('my event')
def handle_my_custom_event(json, methods=['GET', 'POST']):
    rightelbowY = json['val']['pose']['keypoints'][8]['position']['y']
    rightshoulderY = json['val']['pose']['keypoints'][6]['position']['y']
    confidenceRE = json['val']['pose']['keypoints'][8]['score']
    confidenceRS = json['val']['pose']['keypoints'][6]['score']

    # rightelbowY = json['val']['pose']['rightElbow']['y']
    # rightshoulderY = json['val']['pose']['rightShoulder']['y']
    # confidenceRE = json['val']['pose']['rightElbow']['confidence']
    # confidenceRS = json['val']['pose']['rightShoulder']['confidence']

    # print(" reY : ",rightelbowY)
    # print(" rsY : ",rightshoulderY)
    # print(" confidenceRE : ",confidenceRE)
    # print(" confidenceRS : ",confidenceRS)

    if rightelbowY < rightshoulderY:
        print('HANDS UP !!!')
    else:
        print('hands down ...')
    

if __name__ == '__main__':
    socketio.run(app, debug=True)