import ResponsePipe from '../ResponsePipe';
import {Spyro} from 'src/SpyroClient';

export interface Position {
    x: number;
    y: number;
    z: number;
};

export class PositionTransformer {
    public static transform(x: number, y: number, z: number) {
        let transformedPosition: Position = {
            x: x,
            y: y,
            z: z
        }

        return transformedPosition;
    }

    public static onlySendCoordinates(id: string | number, positions: Position) {
        let formatted = ResponsePipe.format(id, positions);
        Spyro.send(formatted);
    }
}
