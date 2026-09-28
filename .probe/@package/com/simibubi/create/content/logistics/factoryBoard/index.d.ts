import { $Codec } from "@package/com/mojang/serialization";
import { $AdvancementBehaviour } from "@package/com/simibubi/create/foundation/advancement";
import { $FactoryPanelBehaviourAccessor } from "@package/net/liukrast/deployer/lib/mixin/accessors";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $UUID, $List, $EnumMap, $UUID_, $Map, $Set, $Optional } from "@package/java/util";
import { $FilteringBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/filtering";
import { $BehaviourType, $BlockEntityBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $WeakReference } from "@package/java/lang/ref";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Supplier_ } from "@package/java/util/function";
import { $MenuProvider } from "@package/net/minecraft/world";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $WidthModifier } from "@package/net/liukrast/eg/mixinExtension";
import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $FPBEExtension, $FPCExtension, $FPBExtension } from "@package/net/liukrast/deployer/lib/mixinExtensions";
import { $Enum, $Record, $Runnable_, $Object } from "@package/java/lang";
import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $BlockAndTintGetter, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $MutableComponent, $Component } from "@package/net/minecraft/network/chat";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $FactoryPanelSupportAccessor } from "@package/net/liukrast/deployer/lib/mixin";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $PackagerBlockEntity } from "@package/com/simibubi/create/content/logistics/packager";
import { $FactoryPanelBlockEntityMixinDuck } from "@package/net/zlt/create_vibrant_vaults/duck";
import { $PanelConnection, $PanelConnectionBuilder, $PanelConnection_, $ProvidesConnection } from "@package/net/liukrast/deployer/lib/logistics/board/connection";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $ModBlocks$VibrantVaultColor } from "@package/net/zlt/create_vibrant_vaults/block";
import { $RequestPromiseQueue } from "@package/com/simibubi/create/content/logistics/packagerLink";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $BlockEntityType, $BlockEntityType_ } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/logistics/factoryBoard" {
    export class $FactoryPanelBlock$PanelState extends $Enum<$FactoryPanelBlock$PanelState> {
        static values(): $FactoryPanelBlock$PanelState[];
        static valueOf(arg0: string): $FactoryPanelBlock$PanelState;
        static PASSIVE: $FactoryPanelBlock$PanelState;
        static ACTIVE: $FactoryPanelBlock$PanelState;
    }
    /**
     * Values that may be interpreted as {@link $FactoryPanelBlock$PanelState}.
     */
    export type $FactoryPanelBlock$PanelState_ = "passive" | "active";
    export class $FactoryPanelBehaviour extends $FilteringBehaviour implements $MenuProvider, $ProvidesConnection, $FPBExtension, $FactoryPanelBehaviourAccessor, $WidthModifier {
        displayScreen(arg0: $Player): void;
        addConnection(arg0: $FactoryPanelPosition_): void;
        setNetwork(arg0: $UUID_): void;
        getUnloadedLinks(): number;
        resetTimer(): void;
        deployer$getConnectionValue(arg0: $PanelConnection_<any>): $Optional<any>;
        checkForRedstoneInput(): void;
        panelBE(): $FactoryPanelBlockEntity;
        disconnectAll(): void;
        isMissingAddress(): boolean;
        disconnectAllLinks(): void;
        resetTimerSlightly(): void;
        deployer$getInputConnections(): $Set<any>;
        deployer$getOutputConnections(): $Set<any>;
        static getTypeForSlot(arg0: $FactoryPanelBlock$PanelSlot_): $BehaviourType<never>;
        getFrogAddress(): string;
        extra_gauges$getWidth(): number;
        extra_gauges$setWidth(arg0: number): void;
        getPanelPosition(): $FactoryPanelPosition;
        static linkAt(arg0: $BlockAndTintGetter, arg1: $FactoryPanelConnection): $FactoryPanelSupportBehaviour;
        static linkAt(arg0: $BlockAndTintGetter, arg1: $FactoryPanelPosition_): $FactoryPanelSupportBehaviour;
        getConnectionValue(arg0: $PanelConnection_<any>): $Optional<any>;
        getAllValuesWithSource(arg0: $PanelConnection_<any>): $List<any>;
        addConnections(arg0: $PanelConnectionBuilder): void;
        getInputConnections(): $Set<any>;
        getOutputConnections(): $Set<any>;
        deployer$getExtra(): $Map<any, any>;
        getPromised(): number;
        getLevelInStorage(): number;
        getIngredientStatusColor(): number;
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        getDisplayName(): $Component;
        static at(arg0: $BlockAndTintGetter, arg1: $FactoryPanelConnection): $FactoryPanelBehaviour;
        static at(arg0: $BlockAndTintGetter, arg1: $FactoryPanelPosition_): $FactoryPanelBehaviour;
        enable(): void;
        disable(): void;
        moveTo(arg0: $FactoryPanelPosition_, arg1: $ServerPlayer): void;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        getConnectionValue<T>(arg0: $DeferredHolder<$PanelConnection_<never>, $PanelConnection_<T>>): (T) | undefined;
        overrideConnectionColor(arg0: number, arg1: $FactoryPanelConnection, arg2: number): number;
        getAllValues<T>(arg0: $PanelConnection_<T>): $List<T>;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        shouldCloseCurrentScreen(): boolean;
        deployer$tickRequests(): void;
        deployer$invokeNotifyRedstoneOutputs(): void;
        static TOP_LEFT: $BehaviourType<$FactoryPanelBehaviour>;
        upTo: boolean;
        static BOTTOM_RIGHT: $BehaviourType<$FactoryPanelBehaviour>;
        restockerPromises: $RequestPromiseQueue;
        slot: $FactoryPanelBlock$PanelSlot;
        activeCraftingArrangement: $List<$ItemStack>;
        network: $UUID;
        recipeAddress: string;
        targeting: $Set<$FactoryPanelPosition>;
        redstonePowered: boolean;
        blockEntity: $SmartBlockEntity;
        static TOP_RIGHT: $BehaviourType<$FactoryPanelBehaviour>;
        promisedSatisfied: boolean;
        static BOTTOM_LEFT: $BehaviourType<$FactoryPanelBehaviour>;
        static TYPE: $BehaviourType<$FilteringBehaviour>;
        forceClearPromises: boolean;
        waitingForNetwork: boolean;
        satisfied: boolean;
        targetedByLinks: $Map<$BlockPos, $FactoryPanelConnection>;
        bulb: $LerpedFloat;
        count: number;
        active: boolean;
        targetedBy: $Map<$FactoryPanelPosition, $FactoryPanelConnection>;
        recipeOutput: number;
        customLabel: $MutableComponent;
        promiseClearingInterval: number;
        constructor(arg0: $FactoryPanelBlockEntity, arg1: $FactoryPanelBlock$PanelSlot_);
    }
    export class $FactoryPanelBlock$PanelType extends $Enum<$FactoryPanelBlock$PanelType> {
        static values(): $FactoryPanelBlock$PanelType[];
        static valueOf(arg0: string): $FactoryPanelBlock$PanelType;
        static NETWORK: $FactoryPanelBlock$PanelType;
        static PACKAGER: $FactoryPanelBlock$PanelType;
    }
    /**
     * Values that may be interpreted as {@link $FactoryPanelBlock$PanelType}.
     */
    export type $FactoryPanelBlock$PanelType_ = "network" | "packager";
    export class $FactoryPanelBlock$PanelSlot extends $Enum<$FactoryPanelBlock$PanelSlot> implements $StringRepresentable {
        static values(): $FactoryPanelBlock$PanelSlot[];
        static valueOf(arg0: string): $FactoryPanelBlock$PanelSlot;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static TOP_LEFT: $FactoryPanelBlock$PanelSlot;
        yOffset: number;
        static CODEC: $Codec<$FactoryPanelBlock$PanelSlot>;
        xOffset: number;
        static BOTTOM_RIGHT: $FactoryPanelBlock$PanelSlot;
        static TOP_RIGHT: $FactoryPanelBlock$PanelSlot;
        static BOTTOM_LEFT: $FactoryPanelBlock$PanelSlot;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $FactoryPanelBlock$PanelSlot>;
    }
    /**
     * Values that may be interpreted as {@link $FactoryPanelBlock$PanelSlot}.
     */
    export type $FactoryPanelBlock$PanelSlot_ = "top_left" | "top_right" | "bottom_left" | "bottom_right";
    export class $FactoryPanelConnection implements $FPCExtension {
        calculatePathDiff(arg0: $BlockState_, arg1: $FactoryPanelPosition_): $Vec3;
        deployer$setLinkMode(arg0: $PanelConnection_<any>): void;
        deployer$getLinkMode(): $PanelConnection<any>;
        getPath(arg0: $Level_, arg1: $BlockState_, arg2: $FactoryPanelPosition_): $List<$Direction>;
        path: $List<$Direction>;
        amount: number;
        static CODEC: $Codec<$FactoryPanelConnection>;
        cachedSource: $WeakReference<$Object>;
        success: boolean;
        from: $FactoryPanelPosition;
        arrowBendMode: number;
        constructor(arg0: $FactoryPanelPosition_, arg1: number);
        constructor(arg0: $FactoryPanelPosition_, arg1: number, arg2: number);
    }
    export class $FactoryPanelBlockEntity extends $SmartBlockEntity implements $FPBEExtension, $FactoryPanelBlockEntityMixinDuck {
        getRestockedPackager(): $PackagerBlockEntity;
        createVibrantVaults$getRestockerColor(): $ModBlocks$VibrantVaultColor;
        addPanel(arg0: $FactoryPanelBlock$PanelSlot_, arg1: $UUID_): boolean;
        activePanels(): number;
        removePanel(arg0: $FactoryPanelBlock$PanelSlot_): boolean;
        deployer$getExtraDrops(): $List<any>;
        getShape(): $VoxelShape;
        redraw: boolean;
        worldPosition: $BlockPos;
        advancements: $AdvancementBehaviour;
        level: $Level;
        panels: $EnumMap<$FactoryPanelBlock$PanelSlot, $FactoryPanelBehaviour>;
        restocker: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        lastShape: $VoxelShape;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $FactoryPanelPosition extends $Record {
        slot(): $FactoryPanelBlock$PanelSlot;
        pos(): $BlockPos;
        static CODEC: $Codec<$FactoryPanelPosition>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $FactoryPanelPosition>;
        constructor(pos: $BlockPos_, slot: $FactoryPanelBlock$PanelSlot_);
    }
    /**
     * Values that may be interpreted as {@link $FactoryPanelPosition}.
     */
    export type $FactoryPanelPosition_ = { pos?: $BlockPos_, slot?: $FactoryPanelBlock$PanelSlot_,  } | [pos?: $BlockPos_, slot?: $FactoryPanelBlock$PanelSlot_, ];
    export class $FactoryPanelSupportBehaviour extends $BlockEntityBehaviour implements $FactoryPanelSupportAccessor {
        shouldPanelBePowered(): boolean;
        notifyLink(): void;
        notifyPanels(): void;
        isOutput(): boolean;
        getLinkedPanels(): $List<$FactoryPanelPosition>;
        shouldBePoweredTristate(): boolean;
        connect(arg0: $FactoryPanelBehaviour): void;
        disconnect(arg0: $FactoryPanelBehaviour): void;
        deployer$setChanged(arg0: boolean): void;
        blockEntity: $SmartBlockEntity;
        static TYPE: $BehaviourType<$FactoryPanelSupportBehaviour>;
        constructor(arg0: $SmartBlockEntity, arg1: $Supplier_<boolean>, arg2: $Supplier_<boolean>, arg3: $Runnable_);
    }
}
