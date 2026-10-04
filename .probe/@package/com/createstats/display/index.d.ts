import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $AntennaTier, $AntennaTier_ } from "@package/com/createstats/antenna";

declare module "@package/com/createstats/display" {
    export class $DisplayLinkDimensionExtension {
    }
    export interface $DisplayLinkDimensionExtension {
        createStats$getTargetDimension(): $ResourceLocation;
        createStats$getTargetTypeId(): $ResourceLocation;
        createStats$setTargetDimension(arg0: $ResourceLocation_): void;
        createStats$setTargetTypeId(arg0: $ResourceLocation_): void;
        createStats$setTargetAntennaTier(arg0: $AntennaTier_): void;
        createStats$setStoredTargetPos(arg0: $BlockPos_): void;
        createStats$getTargetAntennaTier(): $AntennaTier;
        createStats$getStoredTargetPos(): $BlockPos;
    }
}
