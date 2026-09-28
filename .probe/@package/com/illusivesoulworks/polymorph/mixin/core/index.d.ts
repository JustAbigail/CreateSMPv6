import { $NonNullList } from "@package/net/minecraft/core";
import { $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CraftingContainer, $ResultContainer } from "@package/net/minecraft/world/inventory";

declare module "@package/com/illusivesoulworks/polymorph/mixin/core" {
    export class $AccessorCraftingMenu {
    }
    export interface $AccessorCraftingMenu {
        getPlayer(): $Player;
        getResultSlots(): $ResultContainer;
        getCraftSlots(): $CraftingContainer;
    }
    export class $AccessorInventoryMenu {
    }
    export interface $AccessorInventoryMenu {
        getResultSlots(): $ResultContainer;
        getOwner(): $Player;
        getCraftSlots(): $CraftingContainer;
    }
    export class $AccessorSmithingTrimRecipe {
    }
    export interface $AccessorSmithingTrimRecipe {
        getAddition(): $Ingredient;
        getBase(): $Ingredient;
        getTemplate(): $Ingredient;
    }
    export class $AccessorCrafterMenu {
    }
    export interface $AccessorCrafterMenu {
        callRefreshRecipeResult(): void;
    }
    /**
     * Values that may be interpreted as {@link $AccessorCrafterMenu}.
     */
    export type $AccessorCrafterMenu_ = (() => void);
    export class $AccessorAbstractFurnaceBlockEntity {
    }
    export interface $AccessorAbstractFurnaceBlockEntity {
        getItems(): $NonNullList<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $AccessorAbstractFurnaceBlockEntity}.
     */
    export type $AccessorAbstractFurnaceBlockEntity_ = (() => $NonNullList<$ItemStack_>);
    export class $AccessorSmithingTransformRecipe {
    }
    export interface $AccessorSmithingTransformRecipe {
        getAddition(): $Ingredient;
        getBase(): $Ingredient;
        getTemplate(): $Ingredient;
    }
}
