interface Response {
    id: string | number;
    time: number;
    payload: any;
};

export default class ResponsePipe {
    public static format(id: string | number, data: any): Response {
        return {
            id: id,
            payload: data,
            time: 1
        };
    }
}
