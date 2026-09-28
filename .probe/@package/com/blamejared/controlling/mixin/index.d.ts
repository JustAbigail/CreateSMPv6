import { $Map } from "@package/java/util";
import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";

declare module "@package/com/blamejared/controlling/mixin" {
    export class $AccessKeyMapping {
    }
    export interface $AccessKeyMapping {
        controlling$getKey(): $InputConstants$Key;
    }
    /**
     * Values that may be interpreted as {@link $AccessKeyMapping}.
     */
    export type $AccessKeyMapping_ = (() => $InputConstants$Key);
    export class $AccessInputConstantsKey {
        static controlling$getNAME_MAP(): $Map<string, $InputConstants$Key>;
    }
    export interface $AccessInputConstantsKey {
    }
}
