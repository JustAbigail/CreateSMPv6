import { $Level_ } from "@package/net/minecraft/world/level";
import { $UnknownReceipBookCategory } from "@package/org/betterx/bclib/interfaces";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $RecipeSerializer, $Ingredient, $Ingredient_, $Recipe, $RecipeInput, $RecipeType } from "@package/net/minecraft/world/item/crafting";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $List } from "@package/java/util";
import { $Container } from "@package/net/minecraft/world";
import { $HolderLookup$Provider, $NonNullList, $Holder } from "@package/net/minecraft/core";
import { $SlotFilter_ } from "@package/dev/latvian/mods/kubejs/util";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Iterable } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/org/betterx/bclib/recipes" {
    export class $AnvilRecipe implements $Recipe<$AnvilRecipeInput>, $UnknownReceipBookCategory {
        static getHammerSlot(arg0: $Container): number;
        getHammer(arg0: $AnvilRecipeInput): $ItemStack;
        static getAllHammers(): $Iterable<$Holder<$Item>>;
        static getIngredientSlot(arg0: $Container): number;
        getMainIngredient(): $Ingredient;
        static isHammer(arg0: $Item_): boolean;
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        getIngredients(): $NonNullList<$Ingredient>;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        getSerializer(): $RecipeSerializer<never>;
        getAllowedTools(): $TagKey<$Item>;
        checkHammerDurability(arg0: $AnvilRecipeInput, arg1: $Player): boolean;
        getIngredient(arg0: $AnvilRecipeInput): $ItemStack;
        getInputCount(): number;
        craft(arg0: $AnvilRecipeInput, arg1: $Player): $ItemStack;
        getAnvilLevel(): number;
        assemble(arg0: $AnvilRecipeInput, arg1: $HolderLookup$Provider): $ItemStack;
        matches(arg0: $AnvilRecipeInput, arg1: $Level_): boolean;
        matches(arg0: $AnvilRecipeInput): boolean;
        static register(): void;
        canUse(arg0: $Item_): boolean;
        getType(): $RecipeType<never>;
        isSpecial(): boolean;
        getDamage(): number;
        isIncomplete(): boolean;
        showNotification(): boolean;
        handler$ejk000$bclib$bcl_getRemainingItems(arg0: $RecipeInput, arg1: $CallbackInfoReturnable<any>): void;
        getToastSymbol(): $ItemStack;
        getRemainingItems(arg0: $AnvilRecipeInput): $NonNullList<$ItemStack>;
        getGroup(): string;
        static GROUP: string;
        static SERIALIZER: $AnvilRecipe$Serializer;
        static ID: $ResourceLocation;
        static TYPE: $RecipeType<$AnvilRecipe>;
        constructor(arg0: $Ingredient_, arg1: $ItemStack_, arg2: number, arg3: $TagKey_<$Item>, arg4: number, arg5: number);
        static get allHammers(): $Iterable<$Holder<$Item>>;
        get mainIngredient(): $Ingredient;
        get ingredients(): $NonNullList<$Ingredient>;
        get serializer(): $RecipeSerializer<never>;
        get allowedTools(): $TagKey<$Item>;
        get inputCount(): number;
        get anvilLevel(): number;
        get type(): $RecipeType<never>;
        get special(): boolean;
        get damage(): number;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
        get group(): string;
    }
    export class $AnvilRecipeInput implements $RecipeInput {
        hasHammer(): boolean;
        getHammer(): $ItemStack;
        hasIngerdient(): boolean;
        getIngredient(): $ItemStack;
        getItem(arg0: number): $ItemStack;
        size(): number;
        isEmpty(): boolean;
        findAll(): $List<$ItemStack>;
        findAll(filter: $SlotFilter_): $List<$ItemStack>;
        find(filter: $SlotFilter_, skip: number): $ItemStack;
        find(filter: $SlotFilter_): $ItemStack;
        self(): $RecipeInput;
        INGREDIENT_SLOT: number;
        HAMMER_SLOT: number;
        constructor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $TagKey_<$Item>);
        get hammer(): $ItemStack;
        get ingredient(): $ItemStack;
        get empty(): boolean;
    }
    export class $AnvilRecipe$Serializer implements $RecipeSerializer<$AnvilRecipe> {
        static fromNetwork(arg0: $RegistryFriendlyByteBuf): $AnvilRecipe;
        static toNetwork(arg0: $RegistryFriendlyByteBuf, arg1: $AnvilRecipe): void;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $AnvilRecipe>;
        codec(): $MapCodec<$AnvilRecipe>;
        static CODEC: $MapCodec<$AnvilRecipe>;
        static ITEM_TAG_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $TagKey<$Item>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AnvilRecipe>;
        constructor();
    }
}
