import { $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $List } from "@package/java/util";

declare module "@package/com/xeli/createmetalogistics/integration" {
    export class $CustomDeployerRecipeCanBeDisplayed {
    }
    export interface $CustomDeployerRecipeCanBeDisplayed {
        getHeldItem(): $Ingredient;
        getTargetItem(): $Ingredient;
        getPossibleResultItems(): $List<$ItemStack>;
        getPossibleSideOutputs(): $List<$List<$ItemStack>>;
        getDescription(): $List<$Component>;
        get heldItem(): $Ingredient;
        get targetItem(): $Ingredient;
        get possibleResultItems(): $List<$ItemStack>;
        get possibleSideOutputs(): $List<$List<$ItemStack>>;
        get description(): $List<$Component>;
    }
}
