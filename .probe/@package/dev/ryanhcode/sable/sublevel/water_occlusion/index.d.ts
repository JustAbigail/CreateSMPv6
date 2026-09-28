import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BoundedBitVolume3i } from "@package/dev/ryanhcode/sable/util";
import { $Set } from "@package/java/util";
import { $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/dev/ryanhcode/sable/sublevel/water_occlusion" {
    export class $WaterOcclusionContainer<T extends $WaterOcclusionRegion> {
        isOccluded(arg0: $Vec3_): boolean;
        getRegions(): $Set<T>;
        getOccludingRegion(arg0: $Vec3_): T;
        removeRegion(arg0: $WaterOcclusionRegion): void;
        static getContainer(arg0: $Level_): $WaterOcclusionContainer<never>;
        markDirty(arg0: $BlockPos_): void;
        addRegion(arg0: $BoundedBitVolume3i): $WaterOcclusionRegion;
        constructor(arg0: $Level_);
    }
    export class $WaterOcclusionRegion {
        getVolume(): $BoundedBitVolume3i;
        markDirty(): void;
        isDirty(): boolean;
        constructor(arg0: $BoundedBitVolume3i);
    }
}
