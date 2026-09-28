import { $Holder, $Holder_ } from "@package/net/minecraft/core";
import { $Climate$ParameterList, $Biome } from "@package/net/minecraft/world/level/biome";

declare module "@package/dev/worldgen/lithostitched/duck/mnbs" {
    export class $MNBSPLDuck {
    }
    export interface $MNBSPLDuck {
        lithostitched$getMigrationBiome(): ($Holder<$Biome>) | undefined;
        lithostitched$setParameters(parameterList: $Climate$ParameterList<$Holder_<$Biome>>): void;
        lithostitched$setMigrationBiome(optional: ($Holder_<$Biome>) | undefined): void;
    }
}
