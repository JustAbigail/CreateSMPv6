import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Item_, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $AbstractCookingRecipe, $RecipeSerializer_, $Ingredient_, $Recipe, $AbstractCookingRecipe$Factory_, $CraftingBookCategory } from "@package/net/minecraft/world/item/crafting";
import { $FabricRecipeExporter } from "@package/net/fabricmc/fabric/api/datagen/v1/recipe";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $List_ } from "@package/java/util";
import { $RecipeOutputMixin, $RecipeExporterMixin } from "@package/net/fabricmc/fabric/mixin/datagen/recipe";
import { $ItemPredicate_, $EnterBlockTrigger$TriggerInstance, $ItemPredicate$Builder, $MinMaxBounds$Ints_, $InventoryChangeTrigger$TriggerInstance } from "@package/net/minecraft/advancements/critereon";
import { $BlockFamily, $CachedOutput_, $BlockFamily$Variant_, $DataProvider, $PackOutput$PathProvider, $PackOutput } from "@package/net/minecraft/data";
import { $AdvancementHolder_, $Advancement$Builder, $Criterion_, $Criterion } from "@package/net/minecraft/advancements";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $IRecipeOutputExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ICondition } from "@package/net/neoforged/neoforge/common/conditions";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Enum } from "@package/java/lang";

declare module "@package/net/minecraft/data/recipes" {
    export class $ShapedRecipeBuilder implements $RecipeBuilder {
        showNotification(showNotification: boolean): $ShapedRecipeBuilder;
        getResult(): $Item;
        pattern(groupName: string): $ShapedRecipeBuilder;
        save(recipeOutput: $RecipeOutput, id: $ResourceLocation_): void;
        /**
         * Adds a key to the recipe pattern.
         */
        define(symbol: string, item: $ItemLike_): $ShapedRecipeBuilder;
        /**
         * Adds a key to the recipe pattern.
         */
        define(symbol: string, ingredient: $Ingredient_): $ShapedRecipeBuilder;
        /**
         * Adds a key to the recipe pattern.
         */
        define(symbol: string, tag: $TagKey_<$Item>): $ShapedRecipeBuilder;
        /**
         * Creates a new builder for a shaped recipe.
         */
        static shaped(category: $RecipeCategory_, result: $ItemLike_, count: number): $ShapedRecipeBuilder;
        /**
         * Creates a new builder for a shaped recipe.
         */
        static shaped(category: $RecipeCategory_, result: $ItemLike_): $ShapedRecipeBuilder;
        static shaped(arg0: $RecipeCategory_, arg1: $ItemStack_): $ShapedRecipeBuilder;
        save(recipeOutput: $RecipeOutput): void;
        save(recipeOutput: $RecipeOutput, id: string): void;
        unlockedBy(name: string, criterion: $Criterion_<never>): $RecipeBuilder;
        group(groupName: string | null): $RecipeBuilder;
        constructor(category: $RecipeCategory_, result: $ItemLike_, count: number);
        constructor(arg0: $RecipeCategory_, arg1: $ItemStack_);
    }
    export class $RecipeBuilder {
        static getDefaultRecipeId(itemLike: $ItemLike_): $ResourceLocation;
        static determineBookCategory(category: $RecipeCategory_): $CraftingBookCategory;
        static ROOT_RECIPE_ADVANCEMENT: $ResourceLocation;
    }
    export interface $RecipeBuilder {
        unlockedBy(name: string, criterion: $Criterion_<never>): $RecipeBuilder;
        getResult(): $Item;
        group(groupName: string | null): $RecipeBuilder;
        save(recipeOutput: $RecipeOutput): void;
        save(recipeOutput: $RecipeOutput, id: string): void;
        save(recipeOutput: $RecipeOutput, id: $ResourceLocation_): void;
    }
    export class $RecipeCategory extends $Enum<$RecipeCategory> {
        getFolderName(): string;
        static values(): $RecipeCategory[];
        static valueOf(arg0: string): $RecipeCategory;
        static BUILDING_BLOCKS: $RecipeCategory;
        static REDSTONE: $RecipeCategory;
        static TRANSPORTATION: $RecipeCategory;
        static COMBAT: $RecipeCategory;
        static MISC: $RecipeCategory;
        static BREWING: $RecipeCategory;
        static DECORATIONS: $RecipeCategory;
        static TOOLS: $RecipeCategory;
        static FOOD: $RecipeCategory;
    }
    /**
     * Values that may be interpreted as {@link $RecipeCategory}.
     */
    export type $RecipeCategory_ = "building_blocks" | "decorations" | "redstone" | "transportation" | "tools" | "combat" | "food" | "brewing" | "misc";
    export class $RecipeOutput {
    }
    export interface $RecipeOutput extends $IRecipeOutputExtension, $RecipeOutputMixin, $FabricRecipeExporter, $RecipeExporterMixin {
        advancement(): $Advancement$Builder;
        getRecipeIdentifier(arg0: $ResourceLocation_): $ResourceLocation;
        accept(location: $ResourceLocation_, recipe: $Recipe<never>, advancement: $AdvancementHolder_ | null): void;
    }
    export class $RecipeProvider implements $DataProvider {
        static grate(recipeOutput: $RecipeOutput, bulbBlock: $Block_, material: $Block_): void;
        static wall(recipeOutput: $RecipeOutput, category: $RecipeCategory_, chiseledResult: $ItemLike_, material: $ItemLike_): void;
        static netheriteSmithing(recipeOutput: $RecipeOutput, ingredientItem: $Item_, category: $RecipeCategory_, resultItem: $Item_): void;
        static trimSmithing(recipeOutput: $RecipeOutput, ingredientItem: $Item_, location: $ResourceLocation_): void;
        static twoByTwoPacker(recipeOutput: $RecipeOutput, category: $RecipeCategory_, chiseledResult: $ItemLike_, material: $ItemLike_): void;
        static threeByThreePacker(recipeOutput: $RecipeOutput, category: $RecipeCategory_, chiseledResult: $ItemLike_, material: $ItemLike_): void;
        static threeByThreePacker(recipeOutput: $RecipeOutput, category: $RecipeCategory_, packed: $ItemLike_, unpacked: $ItemLike_, criterionName: string): void;
        static planksFromLog(recipeOutput: $RecipeOutput, planks: $ItemLike_, logs: $TagKey_<$Item>, resultCount: number): void;
        static planksFromLogs(recipeOutput: $RecipeOutput, planks: $ItemLike_, logs: $TagKey_<$Item>, resultCount: number): void;
        static woodFromLogs(recipeOutput: $RecipeOutput, banner: $ItemLike_, material: $ItemLike_): void;
        static woodenBoat(recipeOutput: $RecipeOutput, banner: $ItemLike_, material: $ItemLike_): void;
        static chestBoat(recipeOutput: $RecipeOutput, banner: $ItemLike_, material: $ItemLike_): void;
        static buttonBuilder(button: $ItemLike_, material: $Ingredient_): $RecipeBuilder;
        static doorBuilder(button: $ItemLike_, material: $Ingredient_): $RecipeBuilder;
        static fenceBuilder(button: $ItemLike_, material: $Ingredient_): $RecipeBuilder;
        static fenceGateBuilder(button: $ItemLike_, material: $Ingredient_): $RecipeBuilder;
        static pressurePlate(recipeOutput: $RecipeOutput, banner: $ItemLike_, material: $ItemLike_): void;
        static pressurePlateBuilder(category: $RecipeCategory_, result: $ItemLike_, material: $Ingredient_): $RecipeBuilder;
        static slabBuilder(category: $RecipeCategory_, result: $ItemLike_, material: $Ingredient_): $RecipeBuilder;
        static stairBuilder(button: $ItemLike_, material: $Ingredient_): $RecipeBuilder;
        static trapdoorBuilder(button: $ItemLike_, material: $Ingredient_): $RecipeBuilder;
        static signBuilder(button: $ItemLike_, material: $Ingredient_): $RecipeBuilder;
        static hangingSign(recipeOutput: $RecipeOutput, banner: $ItemLike_, material: $ItemLike_): void;
        static colorBlockWithDye(recipeOutput: $RecipeOutput, dyes: $List_<$Item_>, dyeableItems: $List_<$Item_>, group: string): void;
        static bedFromPlanksAndWool(recipeOutput: $RecipeOutput, banner: $ItemLike_, material: $ItemLike_): void;
        static stainedGlassFromGlassAndDye(recipeOutput: $RecipeOutput, banner: $ItemLike_, material: $ItemLike_): void;
        static stainedGlassPaneFromStainedGlass(recipeOutput: $RecipeOutput, banner: $ItemLike_, material: $ItemLike_): void;
        static stainedGlassPaneFromGlassPaneAndDye(recipeOutput: $RecipeOutput, banner: $ItemLike_, material: $ItemLike_): void;
        static coloredTerracottaFromTerracottaAndDye(recipeOutput: $RecipeOutput, banner: $ItemLike_, material: $ItemLike_): void;
        static concretePowder(recipeOutput: $RecipeOutput, banner: $ItemLike_, material: $ItemLike_): void;
        static wallBuilder(category: $RecipeCategory_, result: $ItemLike_, material: $Ingredient_): $RecipeBuilder;
        static polished(recipeOutput: $RecipeOutput, category: $RecipeCategory_, chiseledResult: $ItemLike_, material: $ItemLike_): void;
        static polishedBuilder(category: $RecipeCategory_, result: $ItemLike_, material: $Ingredient_): $RecipeBuilder;
        static cut(recipeOutput: $RecipeOutput, category: $RecipeCategory_, chiseledResult: $ItemLike_, material: $ItemLike_): void;
        static cutBuilder(category: $RecipeCategory_, chiseledResult: $ItemLike_, material: $Ingredient_): $ShapedRecipeBuilder;
        static chiseled(recipeOutput: $RecipeOutput, category: $RecipeCategory_, chiseledResult: $ItemLike_, material: $ItemLike_): void;
        static mosaicBuilder(recipeOutput: $RecipeOutput, category: $RecipeCategory_, chiseledResult: $ItemLike_, material: $ItemLike_): void;
        static chiseledBuilder(category: $RecipeCategory_, chiseledResult: $ItemLike_, material: $Ingredient_): $ShapedRecipeBuilder;
        static stonecutterResultFromBase(recipeOutput: $RecipeOutput, category: $RecipeCategory_, chiseledResult: $ItemLike_, material: $ItemLike_): void;
        static stonecutterResultFromBase(recipeOutput: $RecipeOutput, category: $RecipeCategory_, result: $ItemLike_, material: $ItemLike_, resultCount: number): void;
        static smeltingResultFromBase(recipeOutput: $RecipeOutput, banner: $ItemLike_, material: $ItemLike_): void;
        static copySmithingTemplate(recipeOutput: $RecipeOutput, template: $ItemLike_, baseMaterial: $TagKey_<$Item>): void;
        static copySmithingTemplate(recipeOutput: $RecipeOutput, template: $ItemLike_, baseItem: $Ingredient_): void;
        static copySmithingTemplate(recipeOutput: $RecipeOutput, banner: $ItemLike_, material: $ItemLike_): void;
        static waxRecipes(recipeOutput: $RecipeOutput, enabledFeatures: $FeatureFlagSet): void;
        static copperBulb(recipeOutput: $RecipeOutput, bulbBlock: $Block_, material: $Block_): void;
        static generateRecipes(recipeOutput: $RecipeOutput, blockFamily: $BlockFamily, requiredFeatures: $FeatureFlagSet): void;
        static getBaseBlock(family: $BlockFamily, variant: $BlockFamily$Variant_): $Block;
        static insideOf(block: $Block_): $Criterion<$EnterBlockTrigger$TriggerInstance>;
        static inventoryTrigger(...predicates: $ItemPredicate_[]): $Criterion<$InventoryChangeTrigger$TriggerInstance>;
        static inventoryTrigger(...items: $ItemPredicate$Builder[]): $Criterion<$InventoryChangeTrigger$TriggerInstance>;
        static getHasName(itemLike: $ItemLike_): string;
        static getItemName(itemLike: $ItemLike_): string;
        static getSimpleRecipeName(itemLike: $ItemLike_): string;
        static getConversionRecipeName(result: $ItemLike_, ingredient: $ItemLike_): string;
        static getSmeltingRecipeName(itemLike: $ItemLike_): string;
        static getBlastingRecipeName(itemLike: $ItemLike_): string;
        buildRecipes(recipeOutput: $RecipeOutput): void;
        buildRecipes(arg0: $RecipeOutput, arg1: $HolderLookup$Provider): void;
        static banner(recipeOutput: $RecipeOutput, banner: $ItemLike_, material: $ItemLike_): void;
        static candle(recipeOutput: $RecipeOutput, banner: $ItemLike_, material: $ItemLike_): void;
        static carpet(recipeOutput: $RecipeOutput, banner: $ItemLike_, material: $ItemLike_): void;
        generateForEnabledBlockFamilies(recipeOutput: $RecipeOutput, enabledFeatures: $FeatureFlagSet): void;
        buildAdvancement(output: $CachedOutput_, registries: $HolderLookup$Provider, advancement: $AdvancementHolder_): $CompletableFuture<never>;
        buildAdvancement(arg0: $CachedOutput_, arg1: $HolderLookup$Provider, arg2: $AdvancementHolder_, ...arg3: $ICondition[]): $CompletableFuture<never>;
        handler$fpk000$tfmg$getName(arg0: $CallbackInfoReturnable<any>): void;
        static oneToOneConversionRecipe(recipeOutput: $RecipeOutput, result: $ItemLike_, ingredient: $ItemLike_, group: string | null, resultCount: number): void;
        static oneToOneConversionRecipe(recipeOutput: $RecipeOutput, result: $ItemLike_, ingredient: $ItemLike_, group: string | null): void;
        static oreSmelting(recipeOutput: $RecipeOutput, ingredients: $List_<$ItemLike_>, category: $RecipeCategory_, result: $ItemLike_, experience: number, cookingTime: number, group: string): void;
        static oreCooking<T extends $AbstractCookingRecipe>(recipeOutput: $RecipeOutput, serializer: $RecipeSerializer_<T>, recipeFactory: $AbstractCookingRecipe$Factory_<T>, ingredients: $List_<$ItemLike_>, category: $RecipeCategory_, result: $ItemLike_, experience: number, cookingTime: number, group: string, suffix: string): void;
        static oreBlasting(recipeOutput: $RecipeOutput, ingredients: $List_<$ItemLike_>, category: $RecipeCategory_, result: $ItemLike_, experience: number, cookingTime: number, group: string): void;
        static nineBlockStorageRecipes(recipeOutput: $RecipeOutput, unpackedCategory: $RecipeCategory_, unpacked: $ItemLike_, packedCategory: $RecipeCategory_, packed: $ItemLike_, packedName: string, packedGroup: string | null, unpackedName: string, unpackedGroup: string | null): void;
        static nineBlockStorageRecipes(recipeOutput: $RecipeOutput, unpackedCategory: $RecipeCategory_, unpacked: $ItemLike_, packedCategory: $RecipeCategory_, packed: $ItemLike_): void;
        static nineBlockStorageRecipesWithCustomPacking(recipeOutput: $RecipeOutput, unpackedCategory: $RecipeCategory_, unpacked: $ItemLike_, packedCategory: $RecipeCategory_, packed: $ItemLike_, unpackedName: string, unpackedGroup: string): void;
        static nineBlockStorageRecipesRecipesWithCustomUnpacking(recipeOutput: $RecipeOutput, unpackedCategory: $RecipeCategory_, unpacked: $ItemLike_, packedCategory: $RecipeCategory_, packed: $ItemLike_, unpackedName: string, unpackedGroup: string): void;
        static cookRecipes<T extends $AbstractCookingRecipe>(recipeOutput: $RecipeOutput, cookingMethod: string, cookingSerializer: $RecipeSerializer_<T>, recipeFactory: $AbstractCookingRecipe$Factory_<T>, cookingTime: number): void;
        static simpleCookingRecipe<T extends $AbstractCookingRecipe>(recipeOutput: $RecipeOutput, cookingMethod: string, cookingSerializer: $RecipeSerializer_<T>, recipeFactory: $AbstractCookingRecipe$Factory_<T>, cookingTime: number, material: $ItemLike_, result: $ItemLike_, experience: number): void;
        static slab(recipeOutput: $RecipeOutput, category: $RecipeCategory_, chiseledResult: $ItemLike_, material: $ItemLike_): void;
        static has(count: $MinMaxBounds$Ints_, item: $ItemLike_): $Criterion<$InventoryChangeTrigger$TriggerInstance>;
        static has(itemLike: $ItemLike_): $Criterion<$InventoryChangeTrigger$TriggerInstance>;
        static has(tag: $TagKey_<$Item>): $Criterion<$InventoryChangeTrigger$TriggerInstance>;
        /**
         * Gets a name for this provider, to use in logging.
         */
        getName(): string;
        run(output: $CachedOutput_, registries: $HolderLookup$Provider): $CompletableFuture<never>;
        run(output: $CachedOutput_): $CompletableFuture<never>;
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(output: $PackOutput, registries: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $ShapelessRecipeBuilder implements $RecipeBuilder {
        unlockedBy(name: string, criterion: $Criterion_<never>): $ShapelessRecipeBuilder;
        static shapeless(arg0: $RecipeCategory_, arg1: $ItemStack_): $ShapelessRecipeBuilder;
        /**
         * Creates a new builder for a shapeless recipe.
         */
        static shapeless(category: $RecipeCategory_, result: $ItemLike_): $ShapelessRecipeBuilder;
        /**
         * Creates a new builder for a shapeless recipe.
         */
        static shapeless(category: $RecipeCategory_, result: $ItemLike_, count: number): $ShapelessRecipeBuilder;
        getResult(): $Item;
        group(groupName: string | null): $ShapelessRecipeBuilder;
        save(recipeOutput: $RecipeOutput, id: $ResourceLocation_): void;
        /**
         * Adds an ingredient multiple times.
         */
        requires(ingredient: $Ingredient_, quantity: number): $ShapelessRecipeBuilder;
        /**
         * Adds an ingredient that can be any item in the given tag.
         */
        requires(tag: $TagKey_<$Item>): $ShapelessRecipeBuilder;
        /**
         * Adds an ingredient.
         */
        requires(ingredient: $Ingredient_): $ShapelessRecipeBuilder;
        /**
         * Adds an ingredient of the given item.
         */
        requires(item: $ItemLike_): $ShapelessRecipeBuilder;
        /**
         * Adds the given ingredient multiple times.
         */
        requires(item: $ItemLike_, quantity: number): $ShapelessRecipeBuilder;
        save(arg0: $RecipeOutput): void;
        save(arg0: $RecipeOutput, arg1: string): void;
        constructor(category: $RecipeCategory_, result: $ItemLike_, count: number);
        constructor(arg0: $RecipeCategory_, arg1: $ItemStack_);
    }
}
