export interface IMessage {
    _id: number;
    text: string;
    createdAt: Date;
    user: {
        _id: number,
        name: string,
    };
    vietnamese: string;
    suggestions: string[];
}
