import { $GlobalMixin } from "@package/dev/emi/emi/mixin";
import { $EmiStack, $EmiIngredient } from "@package/dev/emi/emi/api/stack";
import { $Predicate } from "@package/java/util/function";
import { $WidgetHolder } from "@package/dev/emi/emi/api/widget";
import { $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $EmiRenderable_, $EmiRenderable } from "@package/dev/emi/emi/api/render";
import { $ClientTooltipComponent } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Comparator, $List, $List_, $Map } from "@package/java/util";
export * as handler from "@package/dev/emi/emi/api/recipe/handler";

declare module "@package/dev/emi/emi/api/recipe" {
    export class $EmiPlayerInventory implements $GlobalMixin {
        canCraft(recipe: $EmiRecipe): boolean;
        canCraft(recipe: $EmiRecipe, amount: number): boolean;
        getCraftables(): $List<$EmiIngredient>;
        getCraftAvailability(recipe: $EmiRecipe): $List<boolean>;
        isEqual(other: $EmiPlayerInventory): boolean;
        static of(entity: $Player): $EmiPlayerInventory;
        getPredicate(): $Predicate<$EmiRecipe>;
        inventory: $Map<$EmiStack, $EmiStack>;
        /**
         * @deprecated
         */
        constructor(entity: $Player);
        constructor(stacks: $List_<$EmiStack>);
        get craftables(): $List<$EmiIngredient>;
        get predicate(): $Predicate<$EmiRecipe>;
    }
    export class $EmiRecipe {
    }
    export interface $EmiRecipe extends $GlobalMixin {
        getCatalysts(): $List<$EmiIngredient>;
        getDisplayHeight(): number;
        supportsRecipeTree(): boolean;
        hideCraftable(): boolean;
        getBackingRecipe(): $RecipeHolder<never>;
        getDisplayWidth(): number;
        getInputs(): $List<$EmiIngredient>;
        getId(): $ResourceLocation;
        getOutputs(): $List<$EmiStack>;
        getCategory(): $EmiRecipeCategory;
        addWidgets(arg0: $WidgetHolder): void;
        get catalysts(): $List<$EmiIngredient>;
        get displayHeight(): number;
        get backingRecipe(): $RecipeHolder<never>;
        get displayWidth(): number;
        get inputs(): $List<$EmiIngredient>;
        get id(): $ResourceLocation;
        get outputs(): $List<$EmiStack>;
        get category(): $EmiRecipeCategory;
    }
    export class $EmiRecipeCategory implements $EmiRenderable, $GlobalMixin {
        renderSimplified(draw: $GuiGraphics, x: number, y: number, delta: number): void;
        getTooltip(): $List<$ClientTooltipComponent>;
        getSort(): $Comparator<$EmiRecipe>;
        getName(): $Component;
        getId(): $ResourceLocation;
        render(draw: $GuiGraphics, x: number, y: number, delta: number): void;
        simplified: $EmiRenderable;
        sorter: $Comparator<$EmiRecipe>;
        icon: $EmiRenderable;
        id: $ResourceLocation;
        constructor(id: $ResourceLocation_, icon: $EmiRenderable_);
        constructor(id: $ResourceLocation_, icon: $EmiRenderable_, simplified: $EmiRenderable_);
        constructor(id: $ResourceLocation_, icon: $EmiRenderable_, simplified: $EmiRenderable_, sorter: $Comparator<$EmiRecipe>);
        get tooltip(): $List<$ClientTooltipComponent>;
        get sort(): $Comparator<$EmiRecipe>;
        get name(): $Component;
    }
    export class $EmiRecipeDecorator {
    }
    export interface $EmiRecipeDecorator extends $GlobalMixin {
        decorateRecipe(arg0: $EmiRecipe, arg1: $WidgetHolder): void;
    }
    /**
     * Values that may be interpreted as {@link $EmiRecipeDecorator}.
     */
    export type $EmiRecipeDecorator_ = ((arg0: $EmiRecipe, arg1: $WidgetHolder) => void);
}
