import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $Codec } from "@package/com/mojang/serialization";
import { $AdvancementBehaviour } from "@package/com/simibubi/create/foundation/advancement";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $PackagerBlockEntityAccessor as $PackagerBlockEntityAccessor$1 } from "@package/net/liukrast/deployer/lib/mixin/accessors";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $List, $Map, $List_ } from "@package/java/util";
import { $PackageOrderWithCrafts, $PackageOrderWithCrafts_ } from "@package/com/simibubi/create/content/logistics/stockTicker";
import { $BigItemStack } from "@package/com/simibubi/create/content/logistics";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $Predicate_ } from "@package/java/util/function";
import { $Clearable, $Container } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $PRExtension } from "@package/net/liukrast/deployer/lib/mixinExtensions";
import { $Record } from "@package/java/lang";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $IItemHandler, $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $InventoryIdentifier, $InventoryIdentifier_ } from "@package/com/simibubi/create/api/packager";
import { $InvManipulationBehaviour, $VersionedInventoryTrackerBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/inventory";
import { $MutableInt, $MutableBoolean } from "@package/org/apache/commons/lang3/mutable";
import { $PackagerBlockEntityAccessor } from "@package/net/zlt/create_vibrant_vaults/mixin/accessor";
import { $LogisticallyLinkedBehaviour$RequestType_ } from "@package/com/simibubi/create/content/logistics/packagerLink";
import { $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/content/logistics/packager" {
    export class $PackagerBlockEntity extends $SmartBlockEntity implements $Clearable, $PackagerBlockEntityAccessor$1, $PackagerBlockEntityAccessor {
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        triggerStockCheck(): void;
        unwrapBox(arg0: $ItemStack_, arg1: boolean): boolean;
        isTargetingSameInventory(arg0: $IdentifiedInventory_): boolean;
        getAvailableItems(): $InventorySummary;
        recheckIfLinksPresent(): void;
        clearContent(): void;
        handler$fba000$createmetalogistics$getAvailableItems(arg0: $CallbackInfoReturnable<any>, arg1: $InventorySummary): void;
        redstoneModeActive(): boolean;
        updateSignAddress(): void;
        flashLink(): void;
        isTooBusyFor(arg0: $LogisticallyLinkedBehaviour$RequestType_): boolean;
        attemptToSend(arg0: $List_<$PackagingRequest_>): void;
        getTrayOffset(arg0: number): number;
        getRenderedBox(): $ItemStack;
        activate(): void;
        getAdvancement(): $AdvancementBehaviour;
        getInvVersionTracker(): $VersionedInventoryTrackerBehaviour;
        invokeGetLinkPos(): $BlockPos;
        invokeSupportsBlockEntity(arg0: $BlockEntity): boolean;
        createVibrantVaults$getInventory(): $PackagerItemHandler;
        targetInventory: $InvManipulationBehaviour;
        level: $Level;
        previouslyUnwrapped: $ItemStack;
        queuedExitingPackages: $List<$BigItemStack>;
        customComputerAddress: string;
        static ATTACHMENTS_NBT_KEY: string;
        buttonCooldown: number;
        inventory: $PackagerItemHandler;
        animationTicks: number;
        computerBehaviour: $AbstractComputerBehaviour;
        hasCustomComputerAddress: boolean;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        worldPosition: $BlockPos;
        redstonePowered: boolean;
        heldBox: $ItemStack;
        signBasedAddress: string;
        animationInward: boolean;
        static CYCLE: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get availableItems(): $InventorySummary;
        get renderedBox(): $ItemStack;
        get advancement(): $AdvancementBehaviour;
        get invVersionTracker(): $VersionedInventoryTrackerBehaviour;
    }
    export class $PackagerItemHandler implements $IItemHandlerModifiable {
        getSlots(): number;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        getSlotLimit(arg0: number): number;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        getStackInSlot(arg0: number): $ItemStack;
        kjs$isMutable(): boolean;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        kjs$self(): $IItemHandler;
        kjs$getBlock(level: $Level_): $LevelBlock;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        clear(match: $ItemPredicate_): void;
        clear(): void;
        find(): number;
        find(match: $ItemPredicate_): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        getWidth(): number;
        getHeight(): number;
        setChanged(): void;
        getAllItems(): $List<$ItemStack>;
        asContainer(): $Container;
        isEmpty(): boolean;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        constructor(arg0: $PackagerBlockEntity);
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
        get empty(): boolean;
    }
    export class $IdentifiedInventory extends $Record {
        identifier(): $InventoryIdentifier;
        handler(): $IItemHandler;
        constructor(identifier: $InventoryIdentifier_, handler: $IItemHandler);
    }
    /**
     * Values that may be interpreted as {@link $IdentifiedInventory}.
     */
    export type $IdentifiedInventory_ = { handler?: $IItemHandler, identifier?: $InventoryIdentifier_,  } | [handler?: $IItemHandler, identifier?: $InventoryIdentifier_, ];
    export class $InventorySummary {
        divideAndSendTo(arg0: $ServerPlayer, arg1: $BlockPos_): void;
        getTotalOfMatching(arg0: $Predicate_<$ItemStack>): number;
        addAllItemStacks(arg0: $List_<$ItemStack_>): void;
        getItemMap(): $Map<$Item, $List<$BigItemStack>>;
        getCountOf(arg0: $ItemStack_): number;
        addAllBigItemStacks(arg0: $List_<$BigItemStack>): void;
        getStacksByCount(): $List<$BigItemStack>;
        getStacks(): $List<$BigItemStack>;
        isEmpty(): boolean;
        add(arg0: $BigItemStack): void;
        add(arg0: $ItemStack_): void;
        add(arg0: $InventorySummary): void;
        add(arg0: $ItemStack_, arg1: number): void;
        copy(): $InventorySummary;
        erase(arg0: $ItemStack_): boolean;
        getTotalCount(): number;
        static CODEC: $Codec<$InventorySummary>;
        contributingLinks: number;
        static EMPTY: $InventorySummary;
        constructor();
        get itemMap(): $Map<$Item, $List<$BigItemStack>>;
        get stacksByCount(): $List<$BigItemStack>;
        get stacks(): $List<$BigItemStack>;
        get empty(): boolean;
        get totalCount(): number;
    }
    export class $PackagingRequest extends $Record implements $PRExtension {
        finalLink(): $MutableBoolean;
        packageCounter(): $MutableInt;
        deployer$flag(): void;
        orderId(): number;
        linkIndex(): number;
        deployer$isFlagged(): boolean;
        subtract(arg0: number): void;
        item(): $ItemStack;
        context(): $PackageOrderWithCrafts;
        isEmpty(): boolean;
        count(): $MutableInt;
        getCount(): number;
        static create(arg0: $ItemStack_, arg1: number, arg2: string, arg3: number, arg4: $MutableBoolean, arg5: number, arg6: number, arg7: $PackageOrderWithCrafts_): $PackagingRequest;
        address(): string;
        constructor(item: $ItemStack_, count: $MutableInt, address: string, linkIndex: number, finalLink: $MutableBoolean, packageCounter: $MutableInt, orderId: number, context: $PackageOrderWithCrafts_);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $PackagingRequest}.
     */
    export type $PackagingRequest_ = { count?: $MutableInt, orderId?: number, linkIndex?: number, packageCounter?: $MutableInt, address?: string, item?: $ItemStack_, finalLink?: $MutableBoolean, context?: $PackageOrderWithCrafts_,  } | [count?: $MutableInt, orderId?: number, linkIndex?: number, packageCounter?: $MutableInt, address?: string, item?: $ItemStack_, finalLink?: $MutableBoolean, context?: $PackageOrderWithCrafts_, ];
}
