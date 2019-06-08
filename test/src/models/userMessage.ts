import {Message} from './message';

export interface UserMessage extends Message {
    userid: string
    username: string
}
