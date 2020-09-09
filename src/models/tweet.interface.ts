import { users } from "./users.interface";

export interface tweet {
    text: string;
    user?: users;
    date: Date;
    userId?: string;
}