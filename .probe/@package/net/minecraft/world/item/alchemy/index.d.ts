import { $PotionAccessor } from "@package/com/yungnickyoung/minecraft/yungsapi/mixin/accessor";
import { $BrewingRecipeRegistryAccessor } from "@package/dev/emi/emi/mixin/accessor";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Ingredient_, $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $Component } from "@package/net/minecraft/network/chat";
import { $FabricBrewingRecipeRegistryBuilder } from "@package/net/fabricmc/fabric/api/registry";
import { $MobEffectInstance } from "@package/net/minecraft/world/effect";
import { $PotionBrewingAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $FeatureFlag, $FeatureFlagSet, $FeatureElement } from "@package/net/minecraft/world/flag";
import { $List, $List_, $OptionalInt } from "@package/java/util";
import { $Consumer_ } from "@package/java/util/function";
import { $Holder_, $RegistryAccess, $Holder } from "@package/net/minecraft/core";
import { $IBrewingRecipe } from "@package/net/neoforged/neoforge/common/brewing";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Iterable_, $Record, $Iterable } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/item/alchemy" {
    /**
     * Defines a type of potion in the game. These are used to associate one or more effects with items such as the bottled potion or the tipped arrows.
     */
    export class $Potion implements $FeatureElement, $PotionAccessor {
        /**
         * Checks if the potion contains any instant effects such as instant health or instant damage.
         * @return Whether the potion contained an instant effect.
         */
        hasInstantEffects(): boolean;
        /**
         * Gets the base effects applied by the potion.
         * @return The effects applied by the potion.
         */
        getEffects(): $List<$MobEffectInstance>;
        static getName(potion: ($Holder_<$Potion>) | undefined, descriptionId: string): string;
        requiredFeatures(...requiredFeatures: $FeatureFlag[]): $Potion;
        requiredFeatures(): $FeatureFlagSet;
        isEnabled(arg0: $FeatureFlagSet): boolean;
        getName(): string;
        setName(arg0: string): void;
        static CODEC: $Codec<$Holder<$Potion>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$Potion>>;
        constructor(...effects: $MobEffectInstance[]);
        constructor(name: string | null, ...effects: $MobEffectInstance[]);
        get effects(): $List<$MobEffectInstance>;
    }
    /**
     * Values that may be interpreted as {@link $Potion}.
     */
    export type $Potion_ = RegistryTypes.Potion;
    export class $PotionBrewing$Builder implements $FabricBrewingRecipeRegistryBuilder {
        registerPotionRecipe(arg0: $Holder_<any>, arg1: $Ingredient_, arg2: $Holder_<any>): void;
        addMix(input: $Holder_<$Potion>, reagent: $Item_, result: $Holder_<$Potion>): void;
        addRecipe(arg0: $Ingredient_, arg1: $Ingredient_, arg2: $ItemStack_): void;
        addRecipe(arg0: $IBrewingRecipe): void;
        addContainerRecipe(input: $Item_, reagent: $Item_, result: $Item_): void;
        addStartMix(reagent: $Item_, result: $Holder_<$Potion>): void;
        registerItemRecipe(arg0: $Item_, arg1: $Ingredient_, arg2: $Item_): void;
        registerRecipes(arg0: $Ingredient_, arg1: $Holder_<any>): void;
        getEnabledFeatures(): $FeatureFlagSet;
        build(): $PotionBrewing;
        addContainer(container: $Item_): void;
        enabledFeatures: $FeatureFlagSet;
        containerMixes: $List<$PotionBrewing$Mix<$Item>>;
        potionMixes: $List<$PotionBrewing$Mix<$Potion>>;
        constructor(enabledFeatures: $FeatureFlagSet);
    }
    export class $PotionContents extends $Record {
        customColor(): (number) | undefined;
        getAllEffects(): $Iterable<$MobEffectInstance>;
        withPotion(potion: $Holder_<$Potion>): $PotionContents;
        static getColorOptional(effects: $Iterable_<$MobEffectInstance>): $OptionalInt;
        hasEffects(): boolean;
        withEffectAdded(effect: $MobEffectInstance): $PotionContents;
        static addPotionTooltip(effects: $Iterable_<$MobEffectInstance>, tooltipAdder: $Consumer_<$Component>, durationFactor: number, ticksPerSecond: number): void;
        addPotionTooltip(tooltipAdder: $Consumer_<$Component>, durationFactor: number, ticksPerSecond: number): void;
        customEffects(): $List<$MobEffectInstance>;
        forEachEffect(action: $Consumer_<$MobEffectInstance>): void;
        is(potion: $Holder_<$Potion>): boolean;
        static getColor(effects: $Iterable_<$MobEffectInstance>): number;
        getColor(): number;
        static getColor(potion: $Holder_<$Potion>): number;
        static createItemStack(item: $Item_, potion: $Holder_<$Potion>): $ItemStack;
        potion(): ($Holder<$Potion>) | undefined;
        static CODEC: $Codec<$PotionContents>;
        static EMPTY: $PotionContents;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PotionContents>;
        constructor(potion: $Holder_<$Potion>);
        constructor(potion: ($Holder_<$Potion>) | undefined, customColor: (number) | undefined, customEffects: $List_<$MobEffectInstance>);
        get allEffects(): $Iterable<$MobEffectInstance>;
    }
    /**
     * Values that may be interpreted as {@link $PotionContents}.
     */
    export type $PotionContents_ = { customColor?: (number) | undefined, customEffects?: $List_<$MobEffectInstance>, potion?: ($Holder_<$Potion>) | undefined,  } | [customColor?: (number) | undefined, customEffects?: $List_<$MobEffectInstance>, potion?: ($Holder_<$Potion>) | undefined, ];
    export class $PotionBrewing implements $BrewingRecipeRegistryAccessor, $PotionBrewingAccessor {
        isBrewablePotion(potion: $Holder_<$Potion>): boolean;
        static addVanillaMixes(builder: $PotionBrewing$Builder): void;
        isContainerIngredient(stack: $ItemStack_): boolean;
        isPotionIngredient(stack: $ItemStack_): boolean;
        hasContainerMix(reagent: $ItemStack_, potionItem: $ItemStack_): boolean;
        hasPotionMix(reagent: $ItemStack_, potionItem: $ItemStack_): boolean;
        isIngredient(stack: $ItemStack_): boolean;
        hasMix(reagent: $ItemStack_, potionItem: $ItemStack_): boolean;
        getRecipes(): $List<$IBrewingRecipe>;
        isInput(stack: $ItemStack_): boolean;
        /**
         * @deprecated
         */
        static bootstrap(enabledFeatures: $FeatureFlagSet): $PotionBrewing;
        static bootstrap(arg0: $FeatureFlagSet, arg1: $RegistryAccess): $PotionBrewing;
        mix(potion: $ItemStack_, potionItem: $ItemStack_): $ItemStack;
        getPotionTypes(): $List<$Ingredient>;
        getPotionRecipes(): $List<$PotionBrewing$Mix<$Potion>>;
        getItemRecipes(): $List<$PotionBrewing$Mix<$Item>>;
        create$getPotionMixes(): $List<$PotionBrewing$Mix<$Potion>>;
        create$getContainerMixes(): $List<$PotionBrewing$Mix<$Item>>;
        create$isContainer(stack: $ItemStack_): boolean;
        static BREWING_TIME_SECONDS: number;
        static EMPTY: $PotionBrewing;
        constructor(containers: $List_<$Ingredient_>, potionMixes: $List_<$PotionBrewing$Mix_<$Potion_>>, containerMixes: $List_<$PotionBrewing$Mix_<$Item_>>);
        constructor(arg0: $List_<$Ingredient_>, arg1: $List_<$PotionBrewing$Mix_<$Potion_>>, arg2: $List_<$PotionBrewing$Mix_<$Item_>>, arg3: $List_<$IBrewingRecipe>);
        get recipes(): $List<$IBrewingRecipe>;
        get potionTypes(): $List<$Ingredient>;
        get potionRecipes(): $List<$PotionBrewing$Mix<$Potion>>;
        get itemRecipes(): $List<$PotionBrewing$Mix<$Item>>;
    }
    export class $PotionBrewing$Mix<T> extends $Record {
        ingredient(): $Ingredient;
        from(): $Holder<T>;
        to(): $Holder<T>;
        constructor(from: $Holder_<T>, ingredient: $Ingredient_, to: $Holder_<T>);
    }
    /**
     * Values that may be interpreted as {@link $PotionBrewing$Mix}.
     */
    export type $PotionBrewing$Mix_<T> = { to?: $Holder_<any>, from?: $Holder_<any>, ingredient?: $Ingredient_,  } | [to?: $Holder_<any>, from?: $Holder_<any>, ingredient?: $Ingredient_, ];
    export interface $Potion extends RegistryMarked<RegistryTypes.PotionTag, RegistryTypes.Potion> {}
}
