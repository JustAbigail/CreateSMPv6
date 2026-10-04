import { $Codec } from "@package/com/mojang/serialization";
import { $Comparator } from "@package/java/util";

declare module "@package/net/liukrast/deployer/lib/logistics/packagerLink" {
    export class $GenericRequestPromise<V> {
        static ageComparator(): $Comparator<$GenericRequestPromise<never>>;
        static simpleCodec<V>(arg0: $Codec<V>): $Codec<$GenericRequestPromise<V>>;
        tick(): void;
        ticksExisted: number;
        promisedStack: V;
        constructor(arg0: number, arg1: V);
        constructor(arg0: V);
    }
}
