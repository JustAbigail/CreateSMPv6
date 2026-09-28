import { $ItemStack, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $Potion, $PotionBrewing$Mix } from "@package/net/minecraft/world/item/alchemy";
import { $PoseStack, $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $BakedModel, $ModelResourceLocation, $ModelResourceLocation_ } from "@package/net/minecraft/client/resources/model";
import { $ClientTooltipPositioner_, $ClientTooltipPositioner, $ClientTooltipComponent } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $List, $List_, $Map_, $Map } from "@package/java/util";
import { $Font } from "@package/net/minecraft/client/gui";

declare module "@package/dev/emi/emi/mixin/accessor" {
    export class $DrawContextAccessor {
    }
    export interface $DrawContextAccessor {
        invokeDrawTooltip(arg0: $Font, arg1: $List_<$ClientTooltipComponent>, arg2: number, arg3: number, arg4: $ClientTooltipPositioner_): void;
    }
    /**
     * Values that may be interpreted as {@link $DrawContextAccessor}.
     */
    export type $DrawContextAccessor_ = ((arg0: $Font, arg1: $List<$ClientTooltipComponent>, arg2: number, arg3: number, arg4: $ClientTooltipPositioner) => void);
    export class $HandledScreenAccessor {
    }
    export interface $HandledScreenAccessor {
        getFocusedSlot(): $Slot;
        getBackgroundWidth(): number;
        getBackgroundHeight(): number;
        invokeGetSlotAt(arg0: number, arg1: number): $Slot;
        getY(): number;
        getX(): number;
    }
    export class $BakedModelManagerAccessor {
    }
    export interface $BakedModelManagerAccessor {
        getModels(): $Map<$ModelResourceLocation, $BakedModel>;
    }
    /**
     * Values that may be interpreted as {@link $BakedModelManagerAccessor}.
     */
    export type $BakedModelManagerAccessor_ = (() => $Map_<$ModelResourceLocation_, $BakedModel>);
    export class $SmithingTrimRecipeAccessor {
    }
    export interface $SmithingTrimRecipeAccessor {
        getAddition(): $Ingredient;
        getBase(): $Ingredient;
        getTemplate(): $Ingredient;
    }
    export class $SmithingTransformRecipeAccessor {
    }
    export interface $SmithingTransformRecipeAccessor {
        getAddition(): $Ingredient;
        getBase(): $Ingredient;
        getTemplate(): $Ingredient;
    }
    export class $ItemRendererAccessor {
    }
    export interface $ItemRendererAccessor {
        invokeRenderBakedItemModel(arg0: $BakedModel, arg1: $ItemStack_, arg2: number, arg3: number, arg4: $PoseStack, arg5: $VertexConsumer): void;
    }
    /**
     * Values that may be interpreted as {@link $ItemRendererAccessor}.
     */
    export type $ItemRendererAccessor_ = ((arg0: $BakedModel, arg1: $ItemStack, arg2: number, arg3: number, arg4: $PoseStack, arg5: $VertexConsumer) => void);
    export class $BrewingRecipeRegistryAccessor {
    }
    export interface $BrewingRecipeRegistryAccessor {
        getItemRecipes(): $List<$PotionBrewing$Mix<$Item>>;
        getPotionTypes(): $List<$Ingredient>;
        getPotionRecipes(): $List<$PotionBrewing$Mix<$Potion>>;
    }
}
