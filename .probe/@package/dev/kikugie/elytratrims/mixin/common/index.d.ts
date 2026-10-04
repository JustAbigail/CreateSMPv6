import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Ingredient } from "@package/net/minecraft/world/item/crafting";

declare module "@package/dev/kikugie/elytratrims/mixin/common" {
    export class $SmithingTransformRecipeAccessor {
    }
    export interface $SmithingTransformRecipeAccessor {
        getAddition(): $Ingredient;
        getBase(): $Ingredient;
        getResult(): $ItemStack;
        getTemplate(): $Ingredient;
        get addition(): $Ingredient;
        get base(): $Ingredient;
        get result(): $ItemStack;
        get template(): $Ingredient;
    }
}
