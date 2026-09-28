import { $Predicate as $Predicate$1 } from "@package/java/util/function";
import { $Object } from "@package/java/lang";

declare module "@package/com/google/common/base" {
    export class $Predicate<T> {
    }
    export interface $Predicate<T> extends $Predicate$1<T> {
        equals(object: $Object): boolean;
        test(input: T): boolean;
        apply(input: T): boolean;
    }
}
