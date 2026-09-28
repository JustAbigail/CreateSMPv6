
declare module "@package/de/mrjulsen/mcdragonlib/util" {
    export class $Pair<A, B> {
        static of<A, B>(first: A, second: B): $Pair<A, B>;
        getFirst(): A;
        swap(pair: $Pair<A, B>): $Pair<A, B>;
        getSecond(): B;
        constructor(value1: A, value2: B);
    }
}
