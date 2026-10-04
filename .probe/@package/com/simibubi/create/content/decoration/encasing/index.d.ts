import { $BiPredicate_ } from "@package/java/util/function";
import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $CTSpriteShiftEntry } from "@package/com/simibubi/create/foundation/block/connected";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Block_ } from "@package/net/minecraft/world/level/block";

declare module "@package/com/simibubi/create/content/decoration/encasing" {
    export class $CasingConnectivity$Entry {
        isSideValid(arg0: $BlockState_, arg1: $Direction_): boolean;
        getCasing(): $CTSpriteShiftEntry;
        register(): void;
        get casing(): $CTSpriteShiftEntry;
    }
    export class $CasingConnectivity {
        makeCasing(arg0: $Block_, arg1: $CTSpriteShiftEntry): void;
        get(arg0: $BlockState_): $CasingConnectivity$Entry;
        make(arg0: $Block_, arg1: $CTSpriteShiftEntry): void;
        make(arg0: $Block_, arg1: $CTSpriteShiftEntry, arg2: $BiPredicate_<$BlockState, $Direction>): void;
        constructor();
    }
}
