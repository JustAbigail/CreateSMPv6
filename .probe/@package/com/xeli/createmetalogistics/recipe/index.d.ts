import { $Level_ } from "@package/net/minecraft/world/level";
import { $Function0_, $Function1_, $Function0 } from "@package/kotlin/jvm/functions";
import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $RecipeSerializer, $Ingredient_, $Ingredient, $Recipe, $RecipeInput, $RecipeType } from "@package/net/minecraft/world/item/crafting";
import { $Component } from "@package/net/minecraft/network/chat";
import { $CustomDeployerRecipeCanBeDisplayed } from "@package/com/xeli/createmetalogistics/integration";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $UUID, $List, $List_ } from "@package/java/util";
import { $BigItemStack } from "@package/com/simibubi/create/content/logistics";
import { $DeployerBlockEntity } from "@package/com/simibubi/create/content/kinetics/deployer";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $IntFunction } from "@package/java/util/function";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $SlotFilter_ } from "@package/dev/latvian/mods/kubejs/util";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $EnumEntries } from "@package/kotlin/enums";
import { $Enum } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $PackagerLinkBlockEntity } from "@package/com/simibubi/create/content/logistics/packagerLink";
import { $Pair } from "@package/kotlin";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/xeli/createmetalogistics/recipe" {
    export class $PresetCustomDeployerRecipe$MyRecipeInput implements $RecipeInput {
        getRealInputStack(): $ItemStack;
        getRealItemInHand(): $ItemStack;
        getTargetDeployer(): $DeployerBlockEntity;
        getContextStockLink(): ($Function0<$PackagerLinkBlockEntity>) | undefined;
        getContextSign(): ($Function0<string>) | undefined;
        getItem(arg0: number): $ItemStack;
        size(): number;
        isEmpty(): boolean;
        findAll(): $List<$ItemStack>;
        findAll(filter: $SlotFilter_): $List<$ItemStack>;
        find(filter: $SlotFilter_, skip: number): $ItemStack;
        find(filter: $SlotFilter_): $ItemStack;
        self(): $RecipeInput;
        constructor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $DeployerBlockEntity, arg3: ($Function0_<$PackagerLinkBlockEntity>) | undefined, arg4: ($Function0_<string>) | undefined);
        get realInputStack(): $ItemStack;
        get realItemInHand(): $ItemStack;
        get targetDeployer(): $DeployerBlockEntity;
        get contextStockLink(): ($Function0<$PackagerLinkBlockEntity>) | undefined;
        get contextSign(): ($Function0<string>) | undefined;
        get empty(): boolean;
    }
    export interface $PresetCustomDeployerRecipe extends RegistryMarked<RegistryTypes.CreatemetalogisticsFakeDeployingTag, RegistryTypes.CreatemetalogisticsFakeDeploying> {}
    export class $DeployingWithDataPresetTransformation$Companion {
        onManifestData(arg0: $ItemStack_, arg1: $Function1_<$List<$BigItemStack>, $Pair<$List<$BigItemStack>, $List<$BigItemStack>>>): $Pair<$ItemStack, $List<$ItemStack>>;
        getBY_ID(): $IntFunction<$DeployingWithDataPresetTransformation>;
        getID_STREAM_CODEC(): $StreamCodec<$ByteBuf, $DeployingWithDataPresetTransformation>;
        getSignContentsOrBlank(arg0: $PresetCustomDeployerRecipe$MyRecipeInput): string;
        onTicketData(arg0: $ItemStack_, arg1: $Function1_<$List<$BigItemStack>, $Pair<$List<$BigItemStack>, $List<$BigItemStack>>>): $Pair<$ItemStack, $List<$ItemStack>>;
        getHeldNetwork(arg0: $PresetCustomDeployerRecipe$MyRecipeInput): $UUID;
        onBothManifestsAndTicketData(arg0: $ItemStack_, arg1: $Function1_<$List<$BigItemStack>, $Pair<$List<$BigItemStack>, $List<$BigItemStack>>>): $Pair<$ItemStack, $List<$ItemStack>>;
        getStockNetwork(arg0: $PresetCustomDeployerRecipe$MyRecipeInput): $UUID;
        constructor(arg0: $DefaultConstructorMarker);
        get BY_ID(): $IntFunction<$DeployingWithDataPresetTransformation>;
        get ID_STREAM_CODEC(): $StreamCodec<$ByteBuf, $DeployingWithDataPresetTransformation>;
    }
    export class $PresetCustomDeployerRecipe implements $Recipe<$PresetCustomDeployerRecipe$MyRecipeInput>, $CustomDeployerRecipeCanBeDisplayed {
        getHeldItem(): $Ingredient;
        getTransformation(): $DeployingWithDataPresetTransformation;
        getTargetItem(): $Ingredient;
        getMainOutput(): $List<$ItemStack>;
        getSideOutputs(): $List<$List<$ItemStack>>;
        getDescriptionAsKeys(): ($List<string>) | undefined;
        getRequiresStockLinkOpt(): (boolean) | undefined;
        getCanUseConnectedSignOpt(): (boolean) | undefined;
        produceSideItems(arg0: $PresetCustomDeployerRecipe$MyRecipeInput, arg1: $HolderLookup$Provider): $List<$ItemStack>;
        getPossibleResultItems(): $List<$ItemStack>;
        getPossibleSideOutputs(): $List<$List<$ItemStack>>;
        getRequiresStockLink(): boolean;
        getCanUseConnectedSign(): boolean;
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        getSerializer(): $RecipeSerializer<never>;
        assemble(arg0: $PresetCustomDeployerRecipe$MyRecipeInput, arg1: $HolderLookup$Provider): $ItemStack;
        getDescription(): $List<$Component>;
        matches(arg0: $PresetCustomDeployerRecipe$MyRecipeInput, arg1: $Level_): boolean;
        getType(): $RecipeType<never>;
        isSpecial(): boolean;
        isIncomplete(): boolean;
        getIngredients(): $NonNullList<$Ingredient>;
        showNotification(): boolean;
        handler$ejk000$bclib$bcl_getRemainingItems(arg0: $RecipeInput, arg1: $CallbackInfoReturnable<any>): void;
        getToastSymbol(): $ItemStack;
        getRemainingItems(arg0: $PresetCustomDeployerRecipe$MyRecipeInput): $NonNullList<$ItemStack>;
        getGroup(): string;
        constructor(arg0: $Ingredient_, arg1: $Ingredient_, arg2: $List_<$ItemStack_>, arg3: $List_<$List_<$ItemStack_>>, arg4: ($List_<string>) | undefined, arg5: $DeployingWithDataPresetTransformation_, arg6: (boolean) | undefined, arg7: (boolean) | undefined);
        get heldItem(): $Ingredient;
        get transformation(): $DeployingWithDataPresetTransformation;
        get targetItem(): $Ingredient;
        get mainOutput(): $List<$ItemStack>;
        get sideOutputs(): $List<$List<$ItemStack>>;
        get descriptionAsKeys(): ($List<string>) | undefined;
        get requiresStockLinkOpt(): (boolean) | undefined;
        get canUseConnectedSignOpt(): (boolean) | undefined;
        get possibleResultItems(): $List<$ItemStack>;
        get possibleSideOutputs(): $List<$List<$ItemStack>>;
        get requiresStockLink(): boolean;
        get canUseConnectedSign(): boolean;
        get serializer(): $RecipeSerializer<never>;
        get description(): $List<$Component>;
        get type(): $RecipeType<never>;
        get special(): boolean;
        get incomplete(): boolean;
        get ingredients(): $NonNullList<$Ingredient>;
        get toastSymbol(): $ItemStack;
        get group(): string;
    }
    /**
     * Values that may be interpreted as {@link $PresetCustomDeployerRecipe}.
     */
    export type $PresetCustomDeployerRecipe_ = RegistryTypes.CreatemetalogisticsFakeDeploying;
    export class $DeployingWithDataPresetTransformation extends $Enum<$DeployingWithDataPresetTransformation> implements $StringRepresentable {
        static access$getBY_ID$cp(): $IntFunction<any>;
        static access$getID_STREAM_CODEC$cp(): $StreamCodec<any, any>;
        bothOutputs(arg0: $PresetCustomDeployerRecipe$MyRecipeInput, arg1: $PresetCustomDeployerRecipe_, arg2: $HolderLookup$Provider): $Pair<$ItemStack, $List<$ItemStack>>;
        static values(): $DeployingWithDataPresetTransformation[];
        static valueOf(arg0: string): $DeployingWithDataPresetTransformation;
        static getEntries(): $EnumEntries<$DeployingWithDataPresetTransformation>;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static Companion: $DeployingWithDataPresetTransformation$Companion;
        static CONVERT_TO_TICKET: $DeployingWithDataPresetTransformation;
        static TAKE_ONE_ITEM_STACK: $DeployingWithDataPresetTransformation;
        static FILTER: $DeployingWithDataPresetTransformation;
        static RENAME_PACKAGE: $DeployingWithDataPresetTransformation;
        static TAKE_ONE_ITEM_TYPE: $DeployingWithDataPresetTransformation;
        static TRANSFER_CLIPBOARD_CONTENTS: $DeployingWithDataPresetTransformation;
        static TAKE_ONE_ITEM: $DeployingWithDataPresetTransformation;
        static EDIT_TICKET_ADDRESS: $DeployingWithDataPresetTransformation;
        static FILTER_HAS_IN_NETWORK: $DeployingWithDataPresetTransformation;
        constructor(arg0: string, arg1: number, arg2: $DefaultConstructorMarker);
        static get entries(): $EnumEntries<$DeployingWithDataPresetTransformation>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $DeployingWithDataPresetTransformation}.
     */
    export type $DeployingWithDataPresetTransformation_ = "filter_has_in_network" | "filter" | "take_one_item" | "take_one_item_stack" | "take_one_item_type" | "convert_to_ticket" | "edit_ticket_address" | "rename_package" | "transfer_clipboard_contents";
}
