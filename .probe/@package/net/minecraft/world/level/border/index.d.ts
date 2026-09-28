import { $ChunkPos, $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $WorldBorderExtension } from "@package/dev/ryanhcode/sable/mixinterface/world_border";
import { $DynamicLike } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $Enum } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $Vec3_, $AABB_ } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/level/border" {
    export class $BorderStatus extends $Enum<$BorderStatus> {
        static values(): $BorderStatus[];
        static valueOf(arg0: string): $BorderStatus;
        /**
         * Retrieves the color that the border should be, while in this state.
         */
        getColor(): number;
        static GROWING: $BorderStatus;
        static SHRINKING: $BorderStatus;
        static STATIONARY: $BorderStatus;
    }
    /**
     * Values that may be interpreted as {@link $BorderStatus}.
     */
    export type $BorderStatus_ = "growing" | "shrinking" | "stationary";
    export class $BorderChangeListener {
    }
    export interface $BorderChangeListener {
        onBorderCenterSet(border: $WorldBorder, x: number, arg2: number): void;
        onBorderSizeSet(border: $WorldBorder, damagePerBlock: number): void;
        onBorderSizeLerping(border: $WorldBorder, oldSize: number, arg2: number, newSize: number): void;
        onBorderSetDamageSafeZOne(border: $WorldBorder, damagePerBlock: number): void;
        onBorderSetDamagePerBlock(border: $WorldBorder, damagePerBlock: number): void;
        onBorderSetWarningTime(border: $WorldBorder, warningBlocks: number): void;
        onBorderSetWarningBlocks(border: $WorldBorder, warningBlocks: number): void;
    }
    export class $WorldBorder$Settings {
        getDamagePerBlock(): number;
        getWarningTime(): number;
        getWarningBlocks(): number;
        getSafeZone(): number;
        getSizeLerpTime(): number;
        getSizeLerpTarget(): number;
        write(nbt: $CompoundTag_): void;
        static read(dynamic: $DynamicLike<never>, defaultValue: $WorldBorder$Settings): $WorldBorder$Settings;
        getSize(): number;
        getCenterX(): number;
        getCenterZ(): number;
        constructor(centerX: number, arg1: number, centerZ: number, arg3: number, damagePerBlock: number, arg5: number, safeZone: number, arg7: number, warningBlocks: number);
        constructor(border: $WorldBorder);
    }
    export class $WorldBorder implements $WorldBorderExtension {
        getDistanceToBorder(x: number, arg1: number): number;
        getDistanceToBorder(entity: $Entity): number;
        getDamageSafeZone(): number;
        getDamagePerBlock(): number;
        getMinX(): number;
        handler$hio000$sable$isWithinBounds(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfoReturnable<any>): void;
        getMaxX(): number;
        getMinZ(): number;
        getMaxZ(): number;
        handler$hio000$sable$isInsideCloseToBorder(arg0: $Entity, arg1: $AABB_, arg2: $CallbackInfoReturnable<any>): void;
        setCenter(x: number, arg1: number): void;
        getLerpRemainingTime(): number;
        getLerpTarget(): number;
        lerpSizeBetween(oldSize: number, arg1: number, newSize: number): void;
        getAbsoluteMaxSize(): number;
        setDamageSafeZone(damagePerBlock: number): void;
        setDamagePerBlock(damagePerBlock: number): void;
        getLerpSpeed(): number;
        getWarningTime(): number;
        setWarningTime(size: number): void;
        getWarningBlocks(): number;
        setWarningBlocks(size: number): void;
        createSettings(): $WorldBorder$Settings;
        applySettings(serializer: $WorldBorder$Settings): void;
        setAbsoluteMaxSize(size: number): void;
        clampToBounds(x: number, arg1: number, y: number): $BlockPos;
        clampToBounds(pos: $BlockPos_): $BlockPos;
        clampToBounds(pos: $Vec3_): $BlockPos;
        getSize(): number;
        setSize(damagePerBlock: number): void;
        tick(): void;
        removeListener(listener: $BorderChangeListener): void;
        getListeners(): $List<$BorderChangeListener>;
        addListener(listener: $BorderChangeListener): void;
        getStatus(): $BorderStatus;
        isWithinBounds(x: number, arg1: number): boolean;
        isWithinBounds(box: $AABB_): boolean;
        isWithinBounds(chunkPos: $ChunkPos): boolean;
        isWithinBounds(pos: $BlockPos_): boolean;
        isWithinBounds(pos: $Vec3_): boolean;
        isWithinBounds(x: number, arg1: number, z: number): boolean;
        getCenterX(): number;
        getCenterZ(): number;
        sable$setLevel(arg0: $Level_): void;
        getCollisionShape(): $VoxelShape;
        isInsideCloseToBorder(entity: $Entity, bounds: $AABB_): boolean;
        absoluteMaxSize: number;
        static DEFAULT_SETTINGS: $WorldBorder$Settings;
        static MAX_SIZE: number;
        static MAX_CENTER_COORDINATE: number;
        constructor();
    }
}
