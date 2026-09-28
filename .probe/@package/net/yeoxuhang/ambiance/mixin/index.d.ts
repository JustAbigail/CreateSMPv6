import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";

declare module "@package/net/yeoxuhang/ambiance/mixin" {
    export class $BlockEntityAccessor {
    }
    export interface $BlockEntityAccessor {
        invokeSaveAdditional(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityAccessor}.
     */
    export type $BlockEntityAccessor_ = ((arg0: $CompoundTag, arg1: $HolderLookup$Provider) => void);
}
