import { Value } from "./value";

export interface Stock {
    name: string;
    abreviation: string;
    values: Value[];
    picture: string;
}