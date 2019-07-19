import SpyroServerInstance from './Instance';
import { getPortPromise } from 'portfinder';

const PORT = Number.parseInt(process.env.APP_PORT, 0x0);
if (isNaN(PORT)) {
    throw new Error('Type of port is not a number');
}

(async () => {

    try {
        await getPortPromise({
            port: PORT
        });
    } catch (e) {
        throw new Error('Port in use');
    }

    new SpyroServerInstance(PORT);

})();
