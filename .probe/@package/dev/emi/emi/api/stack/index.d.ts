import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Component } from "@package/net/minecraft/network/chat";
import { $List, $List_ } from "@package/java/util";
import { $GlobalMixin } from "@package/dev/emi/emi/mixin";
import { $Function_ } from "@package/java/util/function";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $EmiRenderable } from "@package/dev/emi/emi/api/render";
import { $ClientTooltipComponent } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $DataComponentType_, $DataComponentPatch_, $DataComponentPatch } from "@package/net/minecraft/core/component";
import { $EmiRecipe } from "@package/dev/emi/emi/api/recipe";
import { $Object, $Class } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
export * as serializer from "@package/dev/emi/emi/api/stack/serializer";

declare module "@package/dev/emi/emi/api/stack" {
    export class $EmiIngredient {
        static of<T>(key: $TagKey_<T>): $EmiIngredient;
        static of<T>(key: $TagKey_<T>, amount: number): $EmiIngredient;
        static of(ingredient: $Ingredient_): $EmiIngredient;
        static of(ingredient: $Ingredient_, amount: number): $EmiIngredient;
        static of(list: $List_<$EmiIngredient>, amount: number): $EmiIngredient;
        static of(list: $List_<$EmiIngredient>): $EmiIngredient;
        static areEqual(a: $EmiIngredient, b: $EmiIngredient): boolean;
        static RENDER_AMOUNT: number;
        static RENDER_INGREDIENT: number;
        static RENDER_ICON: number;
        static RENDER_REMAINDER: number;
    }
    export interface $EmiIngredient extends $EmiRenderable, $GlobalMixin {
        getTooltip(): $List<$ClientTooltipComponent>;
        getEmiStacks(): $List<$EmiStack>;
        setChance(arg0: number): $EmiIngredient;
        setAmount(arg0: number): $EmiIngredient;
        getChance(): number;
        isEmpty(): boolean;
        copy(): $EmiIngredient;
        render(draw: $GuiGraphics, x: number, y: number, delta: number): void;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getAmount(): number;
    }
    export class $EmiStackInteraction implements $GlobalMixin {
        getRecipeContext(): $EmiRecipe;
        isClickable(): boolean;
        isEmpty(): boolean;
        getStack(): $EmiIngredient;
        static EMPTY: $EmiStackInteraction;
        constructor(stack: $EmiIngredient);
        constructor(stack: $EmiIngredient, recipe: $EmiRecipe, clickable: boolean);
    }
    export class $Comparison implements $GlobalMixin {
        static compareComponents(): $Comparison;
        static compareData<T>(arg0: $Function_<$EmiStack, T>): $Comparison;
        compare(a: $EmiStack, b: $EmiStack): boolean;
        static of(comparator: $Comparison$Predicate_): $Comparison;
        static of(comparator: $Comparison$Predicate_, hashFunction: $Comparison$HashFunction_): $Comparison;
        getHash(stack: $EmiStack): number;
        static DEFAULT_COMPARISON: $Comparison;
    }
    export class $Comparison$Predicate {
    }
    export interface $Comparison$Predicate extends $GlobalMixin {
        test(arg0: $EmiStack, arg1: $EmiStack): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Comparison$Predicate}.
     */
    export type $Comparison$Predicate_ = ((arg0: $EmiStack, arg1: $EmiStack) => boolean);
    export class $EmiStack implements $EmiIngredient, $GlobalMixin {
        getTooltip(): $List<$ClientTooltipComponent>;
        getRemainder(): $EmiStack;
        getEmiStacks(): $List<$EmiStack>;
        setChance(chance: number): $EmiStack;
        setRemainder(stack: $EmiStack): $EmiStack;
        getComponentChanges(): $DataComponentPatch;
        getKeyOfType<T>(clazz: $Class<T>): T;
        getTooltipText(): $List<$Component>;
        getChance(): number;
        getName(): $Component;
        get<T>(type: $DataComponentType_<T>): T;
        isEmpty(): boolean;
        static of(item: $ItemLike_, componentChanges: $DataComponentPatch_): $EmiStack;
        static of(item: $ItemLike_): $EmiStack;
        static of(item: $ItemLike_, amount: number): $EmiStack;
        static of(stack: $ItemStack_): $EmiStack;
        static of(fluid: $Fluid_, componentChanges: $DataComponentPatch_, amount: number): $EmiStack;
        static of(fluid: $Fluid_, componentChanges: $DataComponentPatch_): $EmiStack;
        static of(fluid: $Fluid_, amount: number): $EmiStack;
        static of(fluid: $Fluid_): $EmiStack;
        static of(item: $ItemLike_, componentChanges: $DataComponentPatch_, amount: number): $EmiStack;
        static of(stack: $ItemStack_, amount: number): $EmiStack;
        getKey(): $Object;
        getId(): $ResourceLocation;
        getOrDefault<T>(type: $DataComponentType_<T>, fallback: T): T;
        copy(): $EmiStack;
        isEqual(stack: $EmiStack, comparison: $Comparison): boolean;
        isEqual(stack: $EmiStack): boolean;
        comparison(comparison: $Comparison): $EmiStack;
        comparison(comparison: $Function_<$Comparison, $Comparison>): $EmiStack;
        getItemStack(): $ItemStack;
        getAmount(): number;
        render(draw: $GuiGraphics, x: number, y: number, delta: number): void;
        setAmount(arg0: number): $EmiIngredient;
        static EMPTY: $EmiStack;
        constructor();
    }
    export class $Comparison$HashFunction {
    }
    export interface $Comparison$HashFunction extends $GlobalMixin {
        hash(arg0: $EmiStack): number;
    }
    /**
     * Values that may be interpreted as {@link $Comparison$HashFunction}.
     */
    export type $Comparison$HashFunction_ = ((arg0: $EmiStack) => number);
}
