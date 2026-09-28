import { $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack } from "@package/net/minecraft/world/item";

declare module "@package/dev/kikugie/elytratrims/mixin/common" {
    export class $SmithingTransformRecipeAccessor {
    }
    export interface $SmithingTransformRecipeAccessor {
        getAddition(): $Ingredient;
        getResult(): $ItemStack;
        getBase(): $Ingredient;
        getTemplate(): $Ingredient;
    }
}
