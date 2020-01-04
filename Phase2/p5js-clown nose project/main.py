from flask import Flask, render_template
from flask_socketio import SocketIO

app = Flask(__name__)
app.config['SECRET_KEY'] = 'vnkdjnfjknfl1232#'
socketio = SocketIO(app)

@app.route('/')
def sessions():
    print('message was received!!!')
    return render_template('index.html')

def messageReceived(methods=['GET', 'POST']):
    print('message was received!!!')

@socketio.on('my event')
def handle_my_custom_event(json, methods=['GET', 'POST']):
    # print('received my event: ' + str(json))
    res = str(json)
    # print(json)
    print("x ",json['val']['pose']['nose']['x'])
    print("y ",json['val']['pose']['nose']['y'])
    print("confidence ",json['val']['pose']['nose']['confidence'])
    

if __name__ == '__main__':
    socketio.run(app, debug=True)