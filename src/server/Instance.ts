import { Socket } from 'socket.io';

export default class SpyroServerInstance {

    public socket: Socket;
    private port: number;

    constructor(port: number) {
        this.port = port;
        this.start();
    }

    start() {
        try {
            this.socket = require('socket.io')(this.port);
            console.log('Server started on port ' + this.port);
        } catch (e) {
            console.log('An error occurred.');
            throw new Error(e);
        }
    }

}
