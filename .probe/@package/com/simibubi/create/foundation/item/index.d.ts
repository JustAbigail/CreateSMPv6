import { $BiPredicate_, $Consumer_ } from "@package/java/util/function";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ItemStack, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ItemHandlerContainer, $SyncedBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $IItemHandler, $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $Enum } from "@package/java/lang";
import { $ItemTooltipEvent } from "@package/net/neoforged/neoforge/event/entity/player";

declare module "@package/com/simibubi/create/foundation/item" {
    export class $SmartInventory extends $ItemHandlerContainer implements $IItemHandlerModifiable, $INBTSerializable<$CompoundTag> {
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        whenContentsChanged(arg0: $Consumer_<number>): $SmartInventory;
        forbidInsertion(): $SmartInventory;
        withMaxStackSize(arg0: number): $SmartInventory;
        getStackLimit(arg0: number, arg1: $ItemStack_): number;
        allowExtraction(): $SmartInventory;
        allowInsertion(): $SmartInventory;
        forbidExtraction(): $SmartInventory;
        getSlots(): number;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        getSlotLimit(arg0: number): number;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        getStackInSlot(arg0: number): $ItemStack;
        kjs$self(): $IItemHandler;
        constructor(arg0: number, arg1: $SyncedBlockEntity);
        constructor(arg0: $IItemHandlerModifiable, arg1: number, arg2: boolean);
        constructor(arg0: number, arg1: $SyncedBlockEntity, arg2: number, arg3: boolean);
        constructor(arg0: number, arg1: $SyncedBlockEntity, arg2: $BiPredicate_<number, $ItemStack>);
        constructor(arg0: number, arg1: $SyncedBlockEntity, arg2: number, arg3: boolean, arg4: $BiPredicate_<number, $ItemStack>);
        get slots(): number;
    }
    export class $ItemHelper$ExtractionCountMode extends $Enum<$ItemHelper$ExtractionCountMode> {
        static values(): $ItemHelper$ExtractionCountMode[];
        static valueOf(arg0: string): $ItemHelper$ExtractionCountMode;
        static EXACTLY: $ItemHelper$ExtractionCountMode;
        static UPTO: $ItemHelper$ExtractionCountMode;
    }
    /**
     * Values that may be interpreted as {@link $ItemHelper$ExtractionCountMode}.
     */
    export type $ItemHelper$ExtractionCountMode_ = "exactly" | "upto";
    export class $TooltipModifier {
        static mapNull(arg0: $TooltipModifier_): $TooltipModifier;
        static EMPTY: $TooltipModifier;
        static REGISTRY: $SimpleRegistry<$Item, $TooltipModifier>;
    }
    export interface $TooltipModifier {
        andThen(arg0: $TooltipModifier_): $TooltipModifier;
        modify(arg0: $ItemTooltipEvent): void;
    }
    /**
     * Values that may be interpreted as {@link $TooltipModifier}.
     */
    export type $TooltipModifier_ = ((arg0: $ItemTooltipEvent) => void);
}
