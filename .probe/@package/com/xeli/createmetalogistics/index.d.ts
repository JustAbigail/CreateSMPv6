import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Map_, $Map } from "@package/java/util";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as recipe from "@package/com/xeli/createmetalogistics/recipe";
export * as integration from "@package/com/xeli/createmetalogistics/integration";

declare module "@package/com/xeli/createmetalogistics" {
    export class $ChunkLoader$GlobalChunkLoader {
        constructor();
        constructor(arg0: $BlockEntity);
    }
    export class $GlobalStationHasChunkloaders {
    }
    export interface $GlobalStationHasChunkloaders {
        getConnectedLoaders(): $Map<$BlockPos, $ChunkLoader$GlobalChunkLoader>;
    }
    /**
     * Values that may be interpreted as {@link $GlobalStationHasChunkloaders}.
     */
    export type $GlobalStationHasChunkloaders_ = (() => $Map_<$BlockPos_, $ChunkLoader$GlobalChunkLoader>);
}
