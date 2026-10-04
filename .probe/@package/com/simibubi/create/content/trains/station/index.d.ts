import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $PackagePortBlockEntity } from "@package/com/simibubi/create/content/logistics/packagePort";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $ITrackBlock, $TrackTargetingBehaviour } from "@package/com/simibubi/create/content/trains/track";
import { $SingleBlockEntityEdgePoint } from "@package/com/simibubi/create/content/trains/signal";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $UUID, $UUID_, $List_, $Map } from "@package/java/util";
import { $Train } from "@package/com/simibubi/create/content/trains/entity";
import { $WeakReference } from "@package/java/lang/ref";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $DimensionPalette, $TrackNode, $TrackNodeLocation } from "@package/com/simibubi/create/content/trains/graph";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $DoorControlBehaviour } from "@package/com/simibubi/create/content/decoration/slidingDoor";
import { $MapDecoration } from "@package/net/minecraft/world/level/saveddata/maps";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $WorldAttached, $Couple } from "@package/net/createmod/catnip/data";
import { $LevelAccessor, $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $IItemHandlerModifiable, $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $GlobalStationHasChunkloaders } from "@package/com/xeli/createmetalogistics";
import { $IHaveGoggleInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $TransformableBlockEntity } from "@package/com/simibubi/create/api/contraption/transformable";
import { $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/content/trains/station" {
    export class $StationBlockEntity extends $SmartBlockEntity implements $TransformableBlockEntity, $IHaveGoggleInformation {
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        trackClicked(arg0: $Player, arg1: $InteractionHand_, arg2: $ITrackBlock, arg3: $BlockState_, arg4: $BlockPos_): boolean;
        getStation(): $GlobalStation;
        getAutoSchedule(): $ItemStack;
        dropSchedule(arg0: $ServerPlayer, arg1: $Train): void;
        resolveFlagAngle(): boolean;
        addToGoggleTooltip(tooltip: $List_<any>, isPlayerSneaking: boolean): boolean;
        assemble(arg0: $UUID_): void;
        getAssemblyDirection(): $Direction;
        cancelAssembly(): void;
        updateName(arg0: string): boolean;
        isAssembling(): boolean;
        refreshAssemblyInfo(): void;
        isValidBogeyOffset(arg0: number): boolean;
        enterAssemblyMode(arg0: $ServerPlayer): boolean;
        tryDisassembleTrain(arg0: $ServerPlayer): boolean;
        tryEnterAssemblyMode(): boolean;
        exitAssemblyMode(): boolean;
        updateMapColor(arg0: number): void;
        attachPackagePort(arg0: $PackagePortBlockEntity): void;
        removePackagePort(arg0: $PackagePortBlockEntity): void;
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        containedFluidTooltip(arg0: $List_<$Component_>, arg1: boolean, arg2: $IFluidHandler): boolean;
        getIcon(arg0: boolean): $ItemStack;
        worldPosition: $BlockPos;
        lastDisassembledTrainName: $Component;
        flag: $LerpedFloat;
        static assemblyAreas: $WorldAttached<$Map<$BlockPos, $BoundingBox>>;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        doorControls: $DoorControlBehaviour;
        lastDisassembledMapColorIndex: number;
        computerBehaviour: $AbstractComputerBehaviour;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        edgePoint: $TrackTargetingBehaviour<$GlobalStation>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get station(): $GlobalStation;
        get autoSchedule(): $ItemStack;
        get assemblyDirection(): $Direction;
        get assembling(): boolean;
    }
    export class $GlobalStation extends $SingleBlockEntityEdgePoint implements $GlobalStationHasChunkloaders {
        getPresentTrain(): $Train;
        handler$fao000$createmetalogistics$modifyConstructor(arg0: $CallbackInfo): void;
        handler$fao000$createmetalogistics$read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean, arg3: $DimensionPalette, arg4: $CallbackInfo): void;
        handler$fao000$createmetalogistics$write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $DimensionPalette, arg3: $CallbackInfo): void;
        canApproachFrom(arg0: $TrackNode): boolean;
        reserveFor(arg0: $Train): void;
        getNearestTrain(): $Train;
        cancelReservation(arg0: $Train): void;
        trainDeparted(arg0: $Train): void;
        getImminentTrain(): $Train;
        runMailTransfer(): void;
        getConnectedLoaders(): $Map<any, any>;
        handler$fao000$createmetalogistics$runMailTransfer(arg0: $CallbackInfo): void;
        edgeLocation: $Couple<$TrackNodeLocation>;
        blockEntityPos: $BlockPos;
        connectedPorts: $Map<$BlockPos, $GlobalPackagePort>;
        connectedLoaders: $Map<any, any>;
        blockEntityDimension: $ResourceKey<$Level>;
        name: string;
        assembling: boolean;
        id: $UUID;
        position: number;
        nearestTrain: $WeakReference<$Train>;
        constructor();
        get presentTrain(): $Train;
        get imminentTrain(): $Train;
    }
    export class $GlobalPackagePort {
        saveOfflineBuffer(arg0: $IItemHandlerModifiable): void;
        restoreOfflineBuffer(arg0: $IItemHandlerModifiable): void;
        address: string;
        primed: boolean;
        offlineBuffer: $ItemStackHandler;
        constructor();
    }
    export class $StationMapData {
    }
    export interface $StationMapData {
        toggleStation(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $StationBlockEntity): boolean;
        addStationMarker(arg0: $StationMarker): void;
    }
    export class $StationMarker {
        static fromWorld(arg0: $BlockGetter, arg1: $BlockPos_): $StationMarker;
        static createStationDecoration(arg0: number, arg1: number, arg2: ($Component_) | undefined): $MapDecoration;
        getSource(): $BlockPos;
        getName(): $Component;
        static load(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $StationMarker;
        getId(): string;
        save(arg0: $HolderLookup$Provider): $CompoundTag;
        getTarget(): $BlockPos;
        constructor(arg0: $BlockPos_, arg1: $BlockPos_, arg2: $Component_);
        get source(): $BlockPos;
        get name(): $Component;
        get id(): string;
        get target(): $BlockPos;
    }
}
