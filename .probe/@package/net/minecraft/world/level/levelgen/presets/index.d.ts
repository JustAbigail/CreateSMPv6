import { $Holder } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Map_, $Map } from "@package/java/util";
import { $WorldPresetAccessor } from "@package/org/betterx/wover/preset/mixin";
import { $WorldDimensions } from "@package/net/minecraft/world/level/levelgen";
import { $LevelStem_, $LevelStem } from "@package/net/minecraft/world/level/dimension";

declare module "@package/net/minecraft/world/level/levelgen/presets" {
    export class $WorldPreset implements $WorldPresetAccessor {
        createWorldDimensions(): $WorldDimensions;
        overworld(): ($LevelStem) | undefined;
        wover_setDimensions(dimensions: $Map_<$ResourceKey_<$LevelStem>, $LevelStem_>): void;
        wover_getDimensions(): $Map<$ResourceKey<$LevelStem>, $LevelStem>;
        static CODEC: $Codec<$Holder<$WorldPreset>>;
        static DIRECT_CODEC: $Codec<$WorldPreset>;
        constructor(dimensions: $Map_<$ResourceKey_<$LevelStem>, $LevelStem_>);
    }
    /**
     * Values that may be interpreted as {@link $WorldPreset}.
     */
    export type $WorldPreset_ = RegistryTypes.WorldgenWorldPreset;
    export interface $WorldPreset extends RegistryMarked<RegistryTypes.WorldgenWorldPresetTag, RegistryTypes.WorldgenWorldPreset> {}
}
