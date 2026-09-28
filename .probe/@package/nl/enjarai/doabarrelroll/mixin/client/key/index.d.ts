import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";

declare module "@package/nl/enjarai/doabarrelroll/mixin/client/key" {
    export class $KeyBindingAccessor {
    }
    export interface $KeyBindingAccessor {
        getKey(): $InputConstants$Key;
    }
    /**
     * Values that may be interpreted as {@link $KeyBindingAccessor}.
     */
    export type $KeyBindingAccessor_ = (() => $InputConstants$Key);
}
