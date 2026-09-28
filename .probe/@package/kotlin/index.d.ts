import { $Serializable } from "@package/java/io";
import { $Object } from "@package/java/lang";
export * as collections from "@package/kotlin/collections";
export * as enums from "@package/kotlin/enums";
export * as coroutines from "@package/kotlin/coroutines";
export * as random from "@package/kotlin/random";
export * as jvm from "@package/kotlin/jvm";
export * as sequences from "@package/kotlin/sequences";

declare module "@package/kotlin" {
    export class $Lazy<T> {
    }
    export interface $Lazy<T> {
        getValue(): T;
        isInitialized(): boolean;
    }
    export class $Function<R> {
    }
    export interface $Function<R> {
    }
    export class $Unit {
        static INSTANCE: $Unit;
    }
    export class $Pair<A, B> implements $Serializable {
        copy(arg0: A, arg1: B): $Pair<A, B>;
        getFirst(): A;
        getSecond(): B;
        component1(): A;
        component2(): B;
        static copy$default(arg0: $Pair<any, any>, arg1: $Object, arg2: $Object, arg3: number, arg4: $Object): $Pair<any, any>;
        constructor(arg0: A, arg1: B);
    }
}
