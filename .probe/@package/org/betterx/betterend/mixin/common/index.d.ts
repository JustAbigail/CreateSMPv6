import { $Holder, $Holder_ } from "@package/net/minecraft/core";
import { $NoiseGeneratorSettings, $NoiseSettings } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/org/betterx/betterend/mixin/common" {
    export class $NoiseInterpolatorAccessor {
    }
    export interface $NoiseInterpolatorAccessor {
        be_getSlice0(): number[][];
        be_getSlice1(): number[][];
    }
    export class $NoiseChunkAccessor {
    }
    export interface $NoiseChunkAccessor {
        bnv_getCellCountXZ(): number;
        bnv_getFirstCellZ(): number;
        bnv_getNoiseSettings(): $NoiseSettings;
        bnv_getCellCountY(): number;
        bnv_getCellNoiseMinY(): number;
    }
    export class $NoiseBasedChunkGeneratorAccessor {
    }
    export interface $NoiseBasedChunkGeneratorAccessor {
        be_getSettings(): $Holder<$NoiseGeneratorSettings>;
    }
    /**
     * Values that may be interpreted as {@link $NoiseBasedChunkGeneratorAccessor}.
     */
    export type $NoiseBasedChunkGeneratorAccessor_ = (() => $Holder_<$NoiseGeneratorSettings>);
}
