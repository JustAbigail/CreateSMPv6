import { $Level_ } from "@package/net/minecraft/world/level";
import { $Container } from "@package/net/minecraft/world";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ItemStackHandlerAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $InventoryKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $List } from "@package/java/util";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
export * as wrapper from "@package/net/neoforged/neoforge/items/wrapper";

declare module "@package/net/neoforged/neoforge/items" {
    export class $ItemStackHandler implements $IItemHandler, $IItemHandlerModifiable, $INBTSerializable<$CompoundTag>, $ItemStackHandlerAccessor {
        deserializeNBT(provider: $HolderLookup$Provider, nbt: $CompoundTag_): void;
        serializeNBT(provider: $HolderLookup$Provider): $CompoundTag;
        setSize(size: number): void;
        getSlots(): number;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getStackInSlot(slot: number): $ItemStack;
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
        create$getStacks(): $NonNullList<$ItemStack>;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        constructor();
        constructor(stacks: $NonNullList<$ItemStack_>);
        constructor(size: number);
        set size(value: number);
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
        get empty(): boolean;
    }
    export class $IItemHandlerModifiable {
    }
    export interface $IItemHandlerModifiable extends $IItemHandler {
        /**
         * Overrides the stack in the given slot. This method is used by the
         * standard Forge helper methods and classes. It is not intended for
         * general use by other mods, and the handler may throw an error if it
         * is called unexpectedly.
         */
        setStackInSlot(slot: number, stack: $ItemStack_): void;
    }
    export class $IItemHandler {
    }
    export interface $IItemHandler extends $InventoryKJS {
        /**
         * Returns the number of slots available
         */
        getSlots(): number;
        /**
         * Inserts an ItemStack into the given slot and return the remainder.
         * The ItemStack *should not* be modified in this function!
         * 
         * Note: This behaviour is subtly different from `FluidAction)`
         */
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Extracts an ItemStack from the given slot.
         * 
         * The returned value must be empty if nothing is extracted,
         * otherwise its stack size must be less than or equal to `amount` and `ItemStack#getMaxStackSize()`.
         */
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        /**
         * Retrieves the maximum stack size allowed to exist in the given slot.
         */
        getSlotLimit(slot: number): number;
        /**
         * This function re-implements the vanilla function `Container#canPlaceItem(int, ItemStack)`.
         * It should be used instead of simulated insertions in cases where the contents and state of the inventory are
         * irrelevant, mainly for the purpose of automation and logic (for instance, testing if a minecart can wait
         * to deposit its items into a full inventory, or if the items in the minecart can never be placed into the
         * inventory and should move on).
         * 
         * - isItemValid is false when insertion of the item is never valid.
         * - When isItemValid is true, no assumptions can be made and insertion must be simulated case-by-case.
         * - The actual items in the inventory, its fullness, or any other state are **not** considered by isItemValid.
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        kjs$isMutable(): boolean;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        kjs$self(): $IItemHandler;
        /**
         * Returns the ItemStack in a given slot.
         * 
         * The result's stack size may be greater than the itemstack's max size.
         * 
         * If the result is empty, then the slot is empty.
         * 
         * **IMPORTANT:** This ItemStack *MUST NOT* be modified. This method is not for
         * altering an inventory's contents. Any implementers who are able to detect
         * modification through this method should throw an exception.
         * 
         * ***SERIOUSLY: DO NOT MODIFY THE RETURNED ITEMSTACK***
         */
        getStackInSlot(slot: number): $ItemStack;
        kjs$getBlock(level: $Level_): $LevelBlock;
        /**
         * Returns the number of slots available
         */
        getSlots(): number;
        /**
         * Returns the ItemStack in a given slot.
         * 
         * The result's stack size may be greater than the itemstack's max size.
         * 
         * If the result is empty, then the slot is empty.
         * 
         * **IMPORTANT:** This ItemStack *MUST NOT* be modified. This method is not for
         * altering an inventory's contents. Any implementers who are able to detect
         * modification through this method should throw an exception.
         * 
         * ***SERIOUSLY: DO NOT MODIFY THE RETURNED ITEMSTACK***
         */
        getStackInSlot(slot: number): $ItemStack;
        /**
         * Inserts an ItemStack into the given slot and return the remainder.
         * The ItemStack *should not* be modified in this function!
         * 
         * Note: This behaviour is subtly different from `FluidAction)`
         */
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Extracts an ItemStack from the given slot.
         * 
         * The returned value must be empty if nothing is extracted,
         * otherwise its stack size must be less than or equal to `amount` and `ItemStack#getMaxStackSize()`.
         */
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        /**
         * Retrieves the maximum stack size allowed to exist in the given slot.
         */
        getSlotLimit(slot: number): number;
        /**
         * This function re-implements the vanilla function `Container#canPlaceItem(int, ItemStack)`.
         * It should be used instead of simulated insertions in cases where the contents and state of the inventory are
         * irrelevant, mainly for the purpose of automation and logic (for instance, testing if a minecart can wait
         * to deposit its items into a full inventory, or if the items in the minecart can never be placed into the
         * inventory and should move on).
         * 
         * - isItemValid is false when insertion of the item is never valid.
         * - When isItemValid is true, no assumptions can be made and insertion must be simulated case-by-case.
         * - The actual items in the inventory, its fullness, or any other state are **not** considered by isItemValid.
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
    }
}
