import { Academic } from "./academic.model";

export class User {
    id: number;
    name: string;
    email: string;
    academic: Array<Academic>;
}