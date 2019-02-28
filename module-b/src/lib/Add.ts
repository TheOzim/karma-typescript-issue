import { Calc } from "module-a";

export class Add {
    private calc: Calc;
    constructor () {
        this.calc = new Calc();
    }
    public add(a: number, b:number): number {
        return this.calc.add(a, b);
    }
}
