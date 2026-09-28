import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $UUID, $List, $Map, $Set } from "@package/java/util";
import { $FilteringBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/filtering";
import { $BehaviourType, $ValueBoxTransform } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $FactoryPanelConnection, $FactoryPanelBlock$PanelType_, $FactoryPanelBehaviour, $FactoryPanelBlock$PanelSlot_, $FactoryPanelBlock$PanelSlot, $FactoryPanelBlockEntity, $FactoryPanelPosition, $FactoryPanelBlock$PanelState_ } from "@package/com/simibubi/create/content/logistics/factoryBoard";
import { $PanelConnection_, $PanelInteractionBuilder, $PanelValue, $ProvidesConnection } from "@package/net/liukrast/deployer/lib/logistics/board/connection";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Enum, $Record, $Class } from "@package/java/lang";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $RequestPromiseQueue } from "@package/com/simibubi/create/content/logistics/packagerLink";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as connection from "@package/net/liukrast/deployer/lib/logistics/board/connection";

declare module "@package/net/liukrast/deployer/lib/logistics/board" {
    export class $AbstractPanelBehaviour$BulbState extends $Enum<$AbstractPanelBehaviour$BulbState> {
        static values(): $AbstractPanelBehaviour$BulbState[];
        static valueOf(arg0: string): $AbstractPanelBehaviour$BulbState;
        static DISABLED: $AbstractPanelBehaviour$BulbState;
        static RED: $AbstractPanelBehaviour$BulbState;
        static GREEN: $AbstractPanelBehaviour$BulbState;
    }
    /**
     * Values that may be interpreted as {@link $AbstractPanelBehaviour$BulbState}.
     */
    export type $AbstractPanelBehaviour$BulbState_ = "disabled" | "red" | "green";
    export interface $PanelType<T> extends RegistryMarked<RegistryTypes.DeployerPanelsTag, RegistryTypes.DeployerPanels> {}
    export class $AbstractPanelBehaviour$AttachedBlock extends $Record {
        state(): $BlockState;
        pos(): $BlockPos;
        level(): $Level;
        constructor(level: $Level_, pos: $BlockPos_, state: $BlockState_);
    }
    /**
     * Values that may be interpreted as {@link $AbstractPanelBehaviour$AttachedBlock}.
     */
    export type $AbstractPanelBehaviour$AttachedBlock_ = { state?: $BlockState_, level?: $Level_, pos?: $BlockPos_,  } | [state?: $BlockState_, level?: $Level_, pos?: $BlockPos_, ];
    export class $AbstractPanelBehaviour$ConnectionValue<T> extends $Record {
        value(): T;
        connection(): $FactoryPanelConnection;
        constructor(connection: $FactoryPanelConnection, value: T);
    }
    /**
     * Values that may be interpreted as {@link $AbstractPanelBehaviour$ConnectionValue}.
     */
    export type $AbstractPanelBehaviour$ConnectionValue_<T> = { value?: any, connection?: $FactoryPanelConnection,  } | [value?: any, connection?: $FactoryPanelConnection, ];
    export class $AbstractPanelBehaviour extends $FactoryPanelBehaviour implements $ProvidesConnection {
        hasInteraction(arg0: string): boolean;
        addInteractions(arg0: $PanelInteractionBuilder): void;
        getTargetedByExtra(): $Map<$BlockPos, $FactoryPanelConnection>;
        notifiedFromInput(): void;
        getInteraction(): $AbstractPanelBehaviour$AttachedBlock;
        getInteraction(arg0: string): $AbstractPanelBehaviour$AttachedBlock;
        hasInteractionUncached(arg0: string, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_): boolean;
        easyRead(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        easyWrite(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        canBePointed(arg0: $FactoryPanelBehaviour): string;
        canPoint(arg0: $FactoryPanelBehaviour): string;
        notifyOutputs(): void;
        getBulbState(): $AbstractPanelBehaviour$BulbState;
        getPanelType(): $PanelType<never>;
        isInInteraction(): boolean;
        getInteractionBlockEntity(arg0: string): $BlockEntity;
        getDefaultConnectionAmount(): number;
        onConnectionAdded(arg0: $FactoryPanelConnection): void;
        onShortInteract(arg0: $Player, arg1: $InteractionHand_, arg2: $Direction_, arg3: $BlockHitResult, arg4: boolean): void;
        getItemDrops(): $List<$ItemStack>;
        canConnect(arg0: $FactoryPanelBehaviour): string;
        getDisplayLinkComponent(arg0: boolean): $MutableComponent;
        getItem(): $Item;
        reset(): void;
        static getValue<T>(arg0: $FactoryPanelConnection, arg1: $PanelConnection_<T>, arg2: $FactoryPanelBehaviour): $PanelValue<T>;
        getModel(arg0: $FactoryPanelBlock$PanelState_, arg1: $FactoryPanelBlock$PanelType_): $PartialModel;
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
        constructor(arg0: $ValueBoxTransform, arg1: $PanelType_<never>, arg2: $FactoryPanelBlockEntity, arg3: $FactoryPanelBlock$PanelSlot_);
        constructor(arg0: $PanelType_<never>, arg1: $FactoryPanelBlockEntity, arg2: $FactoryPanelBlock$PanelSlot_);
    }
    export class $PanelType<T extends $AbstractPanelBehaviour> {
        asClass(): $Class<T>;
        create(arg0: $FactoryPanelBlockEntity, arg1: $FactoryPanelBlock$PanelSlot_): $AbstractPanelBehaviour;
        constructor(arg0: $PanelType$Constructor_<T>, arg1: $Class<T>);
    }
    /**
     * Values that may be interpreted as {@link $PanelType}.
     */
    export type $PanelType_<T> = RegistryTypes.DeployerPanels;
    export class $PanelType$Constructor<T extends $AbstractPanelBehaviour> {
    }
    export interface $PanelType$Constructor<T extends $AbstractPanelBehaviour> {
        apply(arg0: $PanelType_<T>, arg1: $FactoryPanelBlockEntity, arg2: $FactoryPanelBlock$PanelSlot_): T;
    }
    /**
     * Values that may be interpreted as {@link $PanelType$Constructor}.
     */
    export type $PanelType$Constructor_<T> = ((arg0: $PanelType<T>, arg1: $FactoryPanelBlockEntity, arg2: $FactoryPanelBlock$PanelSlot) => T);
}
