import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CreateAdvancement } from "@package/com/simibubi/create/foundation/advancement";
import { $FluidStack, $IFluidTank } from "@package/net/neoforged/neoforge/fluids";
import { $IInteractionChecker } from "@package/com/simibubi/create/foundation/utility";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $PartialSafeNBT } from "@package/com/simibubi/create/api/schematic/nbt";
import { $List, $Set_, $List_, $Collection } from "@package/java/util";
import { $RenderedBehaviourExtension, $KineticBehaviourExtension, $ItemRequirementBehaviourExtension } from "@package/com/cake/azimuth/behaviour/extensions";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $BehaviourType, $BlockEntityBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $Container } from "@package/net/minecraft/world";
import { $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos, $Direction$Axis_, $BlockPos_, $Direction$Axis, $HolderGetter } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Runnable_, $Object } from "@package/java/lang";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $SpecialBlockEntityItemRequirement } from "@package/com/simibubi/create/api/schematic/requirement";
import { $VirtualBlockEntity } from "@package/net/createmod/ponder/api";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $SuperBlockEntityBehaviour, $AzimuthSmartBlockEntityExtension } from "@package/com/cake/azimuth/behaviour";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as behaviour from "@package/com/simibubi/create/foundation/blockEntity/behaviour";

declare module "@package/com/simibubi/create/foundation/blockEntity" {
    export class $SyncedBlockEntity extends $BlockEntity {
        notifyUpdate(): void;
        blockHolderGetter(): $HolderGetter<$Block>;
        readClient(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        writeClient(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $CompoundTag;
        sendData(): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $ItemHandlerContainer implements $Container {
        removeItem(arg0: number, arg1: number): $ItemStack;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        setItem(arg0: number, arg1: $ItemStack_): void;
        clearContent(): void;
        getItem(arg0: number): $ItemStack;
        isEmpty(): boolean;
        getMaxStackSize(): number;
        setChanged(): void;
        stillValid(arg0: $Player): boolean;
        getContainerSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        countItem(arg0: $Item_): number;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        getMaxStackSize(arg0: $ItemStack_): number;
        self(): $Container;
        getBlock(level: $Level_): $LevelBlock;
        isMutable(): boolean;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        clear(): void;
        getWidth(): number;
        getHeight(): number;
        setChanged(): void;
        asContainer(): $Container;
        isEmpty(): boolean;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        find(): number;
        count(match: $ItemPredicate_): number;
        count(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        getAllItems(): $List<$ItemStack>;
        constructor(arg0: $IItemHandlerModifiable);
    }
    export class $CachedRenderBBBlockEntity extends $SyncedBlockEntity {
        getRenderBoundingBox(): $AABB;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $IMultiBlockEntityContainer {
    }
    export interface $IMultiBlockEntityContainer {
        getController(): $BlockPos;
        getExtraData(): $Object;
        removeController(arg0: boolean): void;
        notifyMultiUpdated(): void;
        getMainConnectionAxis(): $Direction$Axis;
        getLastKnownPos(): $BlockPos;
        preventConnectivityUpdate(): void;
        getMainAxisOf(arg0: $BlockEntity): $Direction$Axis;
        setExtraData(arg0: $Object): void;
        modifyExtraData(arg0: $Object): $Object;
        getControllerBE<T extends $BlockEntity>(): T;
        getWidth(): number;
        getHeight(): number;
        isController(): boolean;
        getMaxWidth(): number;
        setController(arg0: $BlockPos_): void;
        getMaxLength(arg0: $Direction$Axis_, arg1: number): number;
        setWidth(arg0: number): void;
        setHeight(arg0: number): void;
    }
    export class $IMultiBlockEntityContainer$Fluid {
    }
    export interface $IMultiBlockEntityContainer$Fluid extends $IMultiBlockEntityContainer {
        hasTank(): boolean;
        getTankSize(arg0: number): number;
        setTankSize(arg0: number, arg1: number): void;
        getTank(arg0: number): $IFluidTank;
        getFluid(arg0: number): $FluidStack;
    }
    export class $SmartBlockEntity extends $CachedRenderBBBlockEntity implements $PartialSafeNBT, $IInteractionChecker, $SpecialBlockEntityItemRequirement, $VirtualBlockEntity, $AzimuthSmartBlockEntityExtension {
        award(arg0: $CreateAdvancement): void;
        azimuth$getSuperBehaviours(): $SuperBlockEntityBehaviour[];
        lazyTick(): void;
        addBehaviours(arg0: $List_<$BlockEntityBehaviour>): void;
        getRequiredItems(arg0: $BlockState_): $ItemRequirement;
        writeSafe(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        setLazyTickRate(arg0: number): void;
        handler$zek000$azimuth$constructWithAdditionalBehaviours(arg0: $BlockEntityType_<any>, arg1: $BlockPos_, arg2: $BlockState_, arg3: $CallbackInfo): void;
        addBehavioursDeferred(arg0: $List_<$BlockEntityBehaviour>): void;
        forEachBehaviour(arg0: $Consumer_<$BlockEntityBehaviour>): void;
        handler$zek000$azimuth$setRemoved(arg0: $CallbackInfo): void;
        getBehaviour<T extends $BlockEntityBehaviour>(arg0: $BehaviourType<T>): T;
        getAllBehaviours(): $Collection<$BlockEntityBehaviour>;
        attachBehaviourLate(arg0: $BlockEntityBehaviour): void;
        removeBehaviour(arg0: $BehaviourType<never>): void;
        markVirtual(): void;
        isChunkUnloaded(): boolean;
        canPlayerUse(arg0: $Player): boolean;
        sendToMenu(arg0: $RegistryFriendlyByteBuf): void;
        refreshBlockState(): void;
        registerAwardables(arg0: $List_<$BlockEntityBehaviour>, ...arg1: $CreateAdvancement[]): void;
        awardIfNear(arg0: $CreateAdvancement, arg1: number): void;
        azimuth$updateBehaviourExtensionCache(): void;
        azimuth$searchExtensionBehaviours(arg0: $Predicate_<any>): $List<any>;
        azimuth$searchSuperBehaviours(): $SuperBlockEntityBehaviour[];
        azimuth$addCacheClearListener(arg0: $Runnable_): void;
        azimuth$getItemRequirementExtensionCache(): $ItemRequirementBehaviourExtension[];
        azimuth$getRenderedExtensionCache(): $RenderedBehaviourExtension[];
        azimuth$getKineticExtensionCache(): $KineticBehaviourExtension[];
        azimuth$invalidateRenderBoundingBox(): void;
        invalidate(): void;
        remove(): void;
        isVirtual(): boolean;
        initialize(): void;
        destroy(): void;
        tick(): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
}
