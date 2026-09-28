import { $BlockPos_ } from "@package/net/minecraft/core";
import { $Path_ } from "@package/java/nio/file";
import { $ConcurrentHashMap } from "@package/java/util/concurrent";

declare module "@package/com/yungnickyoung/minecraft/betterdeserttemples/world/state" {
    export class $TempleStateCache {
        setTempleCleared(arg0: $BlockPos_, arg1: boolean): void;
        isTempleCleared(arg0: $BlockPos_): boolean;
        templeStateRegionMap: $ConcurrentHashMap<string, $TempleStateRegion>;
        constructor(arg0: $Path_);
    }
    export class $TempleStateRegion {
        setTempleCleared(arg0: $BlockPos_, arg1: boolean): void;
        isTempleCleared(arg0: $BlockPos_): boolean;
        reset(): void;
        constructor(arg0: $Path_, arg1: string);
    }
    export class $ITempleStateCacheProvider {
    }
    export interface $ITempleStateCacheProvider {
        getTempleStateCache(): $TempleStateCache;
    }
    /**
     * Values that may be interpreted as {@link $ITempleStateCacheProvider}.
     */
    export type $ITempleStateCacheProvider_ = (() => $TempleStateCache);
}
