import { $Level, $LevelAccessor } from "@package/net/minecraft/world/level";
import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $TrackTargetingBehaviour } from "@package/com/simibubi/create/content/trains/track";
import { $UUID, $Map, $Set, $UUID_ } from "@package/java/util";
import { $Train } from "@package/com/simibubi/create/content/trains/entity";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $TrackNodeLocation, $TrackGraph, $EdgePointType, $TrackEdge, $DimensionPalette, $TrackNode } from "@package/com/simibubi/create/content/trains/graph";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Enum } from "@package/java/lang";
import { $TransformableBlockEntity } from "@package/com/simibubi/create/api/contraption/transformable";
import { $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
import { $Couple } from "@package/net/createmod/catnip/data";

declare module "@package/com/simibubi/create/content/trains/signal" {
    export class $SignalEdgeGroup {
        resolveColor(): void;
        removeIntersection(arg0: $UUID_): void;
        putIntersection(arg0: $UUID_, arg1: $UUID_): void;
        isOccupiedUnless(arg0: $SignalBoundary): boolean;
        isOccupiedUnless(arg0: $Train): boolean;
        removeAdjacent(arg0: $UUID_): void;
        putAdjacent(arg0: $UUID_): void;
        asFallback(): $SignalEdgeGroup;
        write(): $CompoundTag;
        static read(arg0: $CompoundTag_): $SignalEdgeGroup;
        fallbackGroup: boolean;
        color: $EdgeGroupColor;
        reserved: $SignalBoundary;
        intersectingResolved: $Set<$SignalEdgeGroup>;
        adjacent: $Set<$UUID>;
        id: $UUID;
        trains: $Set<$Train>;
        intersecting: $Map<$UUID, $UUID>;
        constructor(arg0: $UUID_);
    }
    export class $SignalBlockEntity$OverlayState extends $Enum<$SignalBlockEntity$OverlayState> {
        static values(): $SignalBlockEntity$OverlayState[];
        static valueOf(arg0: string): $SignalBlockEntity$OverlayState;
        static RENDER: $SignalBlockEntity$OverlayState;
        static SKIP: $SignalBlockEntity$OverlayState;
        static DUAL: $SignalBlockEntity$OverlayState;
    }
    /**
     * Values that may be interpreted as {@link $SignalBlockEntity$OverlayState}.
     */
    export type $SignalBlockEntity$OverlayState_ = "render" | "skip" | "dual";
    export class $SignalBlockEntity$SignalState extends $Enum<$SignalBlockEntity$SignalState> {
        isRedLight(arg0: number): boolean;
        isYellowLight(arg0: number): boolean;
        isGreenLight(arg0: number): boolean;
        static values(): $SignalBlockEntity$SignalState[];
        static valueOf(arg0: string): $SignalBlockEntity$SignalState;
        static RED: $SignalBlockEntity$SignalState;
        static YELLOW: $SignalBlockEntity$SignalState;
        static INVALID: $SignalBlockEntity$SignalState;
        static GREEN: $SignalBlockEntity$SignalState;
    }
    /**
     * Values that may be interpreted as {@link $SignalBlockEntity$SignalState}.
     */
    export type $SignalBlockEntity$SignalState_ = "red" | "yellow" | "green" | "invalid";
    export class $SignalBlock$SignalType extends $Enum<$SignalBlock$SignalType> implements $StringRepresentable {
        static values(): $SignalBlock$SignalType[];
        static valueOf(arg0: string): $SignalBlock$SignalType;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static ENTRY_SIGNAL: $SignalBlock$SignalType;
        static CROSS_SIGNAL: $SignalBlock$SignalType;
    }
    /**
     * Values that may be interpreted as {@link $SignalBlock$SignalType}.
     */
    export type $SignalBlock$SignalType_ = "entry_signal" | "cross_signal";
    export class $SignalBoundary extends $TrackEdgePoint {
        isForcedRed(arg0: boolean): boolean;
        isForcedRed(arg0: $TrackNode): boolean;
        setGroupAndUpdate(arg0: $TrackNode, arg1: $UUID_): void;
        updateBlockEntityPower(arg0: $SignalBlockEntity): void;
        getOverlayFor(arg0: $BlockPos_): $SignalBlockEntity$OverlayState;
        getStateFor(arg0: $BlockPos_): $SignalBlockEntity$SignalState;
        cycleSignalType(arg0: $BlockPos_): void;
        setGroup(arg0: boolean, arg1: $UUID_): void;
        getGroup(arg0: $TrackNode): $UUID;
        getTypeFor(arg0: $BlockPos_): $SignalBlock$SignalType;
        queueUpdate(arg0: $TrackNode): void;
        edgeLocation: $Couple<$TrackNodeLocation>;
        sidesToUpdate: $Couple<boolean>;
        types: $Couple<$SignalBlock$SignalType>;
        cachedStates: $Couple<$SignalBlockEntity$SignalState>;
        groups: $Couple<$UUID>;
        id: $UUID;
        position: number;
        blockEntities: $Couple<$Map<$BlockPos, boolean>>;
        constructor();
    }
    export class $TrackEdgePoint {
        isPrimary(arg0: $TrackNode): boolean;
        onRemoved(arg0: $TrackGraph): void;
        getLocationOn(arg0: $TrackEdge): number;
        canCoexistWith(arg0: $EdgePointType<never>, arg1: boolean): boolean;
        blockEntityAdded(arg0: $BlockEntity, arg1: boolean): void;
        blockEntityRemoved(arg0: $BlockPos_, arg1: boolean): void;
        canNavigateVia(arg0: $TrackNode): boolean;
        setType(arg0: $EdgePointType<never>): void;
        canMerge(): boolean;
        invalidate(arg0: $LevelAccessor): void;
        write(arg0: $FriendlyByteBuf, arg1: $DimensionPalette): void;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $DimensionPalette): void;
        read(arg0: $FriendlyByteBuf, arg1: $DimensionPalette): void;
        read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean, arg3: $DimensionPalette): void;
        getId(): $UUID;
        getType(): $EdgePointType<never>;
        tick(arg0: $TrackGraph, arg1: boolean): void;
        setLocation(arg0: $Couple<$TrackNodeLocation>, arg1: number): void;
        setId(arg0: $UUID_): void;
        edgeLocation: $Couple<$TrackNodeLocation>;
        id: $UUID;
        position: number;
        constructor();
    }
    export class $SignalBlockEntity extends $SmartBlockEntity implements $TransformableBlockEntity {
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        enterState(arg0: $SignalBlockEntity$SignalState_): void;
        getReportedPower(): boolean;
        isPowered(): boolean;
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        getState(): $SignalBlockEntity$SignalState;
        setOverlay(arg0: $SignalBlockEntity$OverlayState_): void;
        getOverlay(): $SignalBlockEntity$OverlayState;
        getSignal(): $SignalBoundary;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        computerBehaviour: $AbstractComputerBehaviour;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        edgePoint: $TrackTargetingBehaviour<$SignalBoundary>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $SingleBlockEntityEdgePoint extends $TrackEdgePoint {
        getBlockEntityDimension(): $ResourceKey<$Level>;
        getBlockEntityPos(): $BlockPos;
        edgeLocation: $Couple<$TrackNodeLocation>;
        blockEntityPos: $BlockPos;
        blockEntityDimension: $ResourceKey<$Level>;
        id: $UUID;
        position: number;
        constructor();
    }
}
