import { $BlockPos } from "@package/net/minecraft/core";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";

declare module "@package/de/mrjulsen/paw/block/extended" {
    export class $BlockPlaceContextExtension {
    }
    export interface $BlockPlaceContextExtension {
        paw$getPlacedOnPos(): $BlockPos;
        paw$getPlacedOnState(): $BlockState;
    }
}
