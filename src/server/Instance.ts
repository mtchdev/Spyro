import { Socket } from 'socket.io';
type Sender = (data: any) => void;
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
                send: (data: any): void => {
                    if (!data.id) { return; }

                    IO.emit(data.id, data);
                },
                wait: (id: string | number, callback: any): void => {
                    if (typeof id === 'number') {
                        id = id.toString();
                    }

                    IO.on(id, (data?: any) => callback(data ? data : null));
                }
            };

            console.log('Server started on port ' + this.port);
        } catch (e) {
            console.log('An error occurred.');
            throw new Error(e);
        }
    }

}
