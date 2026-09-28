import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";

declare module "@package/com/vladiscrafter/createidlx/util/bridge" {
    export class $DisplayLinkVisualizationConfigHolder {
    }
    export interface $DisplayLinkVisualizationConfigHolder {
        createidlx$getVisualizationConfig(): $CompoundTag;
        createidlx$setVisualizationConfig(arg0: $CompoundTag_): void;
    }
}
