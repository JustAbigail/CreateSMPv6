import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $Component } from "@package/net/minecraft/network/chat";
import { $List } from "@package/java/util";

declare module "@package/com/xeli/createmetalogistics/integration" {
    export class $CustomDeployerRecipeCanBeDisplayed {
    }
    export interface $CustomDeployerRecipeCanBeDisplayed {
        getTargetItem(): $Ingredient;
        getPossibleResultItems(): $List<$ItemStack>;
        getPossibleSideOutputs(): $List<$List<$ItemStack>>;
        getHeldItem(): $Ingredient;
        getDescription(): $List<$Component>;
    }
}
