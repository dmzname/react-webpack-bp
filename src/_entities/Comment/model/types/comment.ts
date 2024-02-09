import { IUser } from "_entities/User";

export interface IComment {
    id: string;
    text: string;
    user: IUser;
}