import {ICast} from "./castInterface";

export interface ICredit<DATA> {
    id: number;
    cast: DATA[];
}