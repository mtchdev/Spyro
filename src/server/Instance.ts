import { Socket } from 'socket.io';
type Sender = (id: string | number, data: any) => void;
type Receiver = (id: string | number, callback: any) => void;

interface Spyro {
    send: Sender;
    wait: Receiver;
};

export default class SpyroServerInstance {

    public socket: Spyro;
    private port: number;

    constructor(port: number) {
        this.port = port;
        this.start();
    }

    start(): void {
        try {
            const IO: Socket = require('socket.io')(this.port);
            this.socket = {
                send: (id: string | number, data: any): void => {
                    // TODO: pipe response, send
                    if (typeof id === 'number') {
                        id = id.toString();
                    }

                    IO.emit(id, data);
                },
                wait: (id: string | number, callback: any): void => {
                    callback(true);
                }
            };

            console.log('Server started on port ' + this.port);
        } catch (e) {
            console.log('An error occurred.');
            throw new Error(e);
        }
    }

}
