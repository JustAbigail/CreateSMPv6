import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ICurio$DropRule } from "@package/top/theillusivec4/curios/api/type/capability";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $AttributeModifier_, $AttributeModifier, $AttributeModifier$Operation_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Map, $Collection, $Set } from "@package/java/util";

declare module "@package/top/theillusivec4/curios/api/type/inventory" {
    export class $IDynamicStackHandler {
    }
    export interface $IDynamicStackHandler extends $IItemHandlerModifiable {
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        getPreviousStackInSlot(arg0: number): $ItemStack;
        setPreviousStackInSlot(arg0: number, arg1: $ItemStack_): void;
        grow(arg0: number): void;
        shrink(arg0: number): void;
        getSlots(): number;
        getStackInSlot(arg0: number): $ItemStack;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
    }
    export class $ICurioStacksHandler {
    }
    export interface $ICurioStacksHandler {
        removeModifier(arg0: $ResourceLocation_): void;
        addTransientModifier(arg0: $AttributeModifier_): void;
        isVisible(): boolean;
        deserializeNBT(arg0: $CompoundTag_): void;
        serializeNBT(): $CompoundTag;
        copyModifiers(arg0: $ICurioStacksHandler): void;
        updateActiveState(arg0: number): void;
        getPermanentModifiers(): $Set<$AttributeModifier>;
        getCachedModifiers(): $Set<$AttributeModifier>;
        getModifiersByOperation(arg0: $AttributeModifier$Operation_): $Collection<$AttributeModifier>;
        clearCachedModifiers(): void;
        getSyncTag(): $CompoundTag;
        applySyncTag(arg0: $CompoundTag_): void;
        /**
         * @deprecated
         */
        getSizeShift(): number;
        canToggleRendering(): boolean;
        hasCosmetic(): boolean;
        getDropRule(): $ICurio$DropRule;
        getActiveStates(): $NonNullList<boolean>;
        getCosmeticStacks(): $IDynamicStackHandler;
        clearModifiers(): void;
        addPermanentModifier(arg0: $AttributeModifier_): void;
        getIdentifier(): string;
        getStacks(): $IDynamicStackHandler;
        getModifiers(): $Map<$ResourceLocation, $AttributeModifier>;
        update(): void;
        /**
         * @deprecated
         */
        grow(arg0: number): void;
        /**
         * @deprecated
         */
        shrink(arg0: number): void;
        getSlots(): number;
        getRenders(): $NonNullList<boolean>;
    }
}
