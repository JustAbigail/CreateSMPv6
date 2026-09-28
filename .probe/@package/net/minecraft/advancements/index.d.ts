import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $ExistingFileHelper } from "@package/net/neoforged/neoforge/common/data";
import { $PlayerAdvancements } from "@package/net/minecraft/server";
import { $DataResult, $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $List, $Map_, $Set_, $Collection_, $List_, $Collection, $Map, $Set } from "@package/java/util";
import { $CriterionValidator } from "@package/net/minecraft/advancements/critereon";
import { $StringRepresentable, $ProblemReporter } from "@package/net/minecraft/util";
import { $CacheableFunction } from "@package/net/minecraft/commands";
import { $Instant } from "@package/java/time";
import { $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $ChatFormatting } from "@package/net/minecraft";
import { $HolderGetter$Provider_ } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $IAdvancementBuilderExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $WithConditions } from "@package/net/neoforged/neoforge/common/conditions";
import { $AdvancementNodeKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Enum, $Record, $Comparable, $Iterable } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as critereon from "@package/net/minecraft/advancements/critereon";

declare module "@package/net/minecraft/advancements" {
    export class $DisplayInfo {
        getBackground(): ($ResourceLocation) | undefined;
        shouldShowToast(): boolean;
        shouldAnnounceChat(): boolean;
        getY(): number;
        getDescription(): $Component;
        isHidden(): boolean;
        getType(): $AdvancementType;
        getIcon(): $ItemStack;
        getTitle(): $Component;
        setLocation(x: number, y: number): void;
        getX(): number;
        static CODEC: $Codec<$DisplayInfo>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $DisplayInfo>;
        constructor(icon: $ItemStack_, title: $Component_, description: $Component_, background: ($ResourceLocation_) | undefined, type: $AdvancementType_, showToast: boolean, announceChat: boolean, hidden: boolean);
    }
    export class $Advancement$Builder implements $IAdvancementBuilderExtension {
        addCriterion(key: string, criterion: $Criterion_<never>): $Advancement$Builder;
        rewards(rewards: $AdvancementRewards_): $Advancement$Builder;
        rewards(rewardsBuilder: $AdvancementRewards$Builder): $Advancement$Builder;
        sendsTelemetryEvent(): $Advancement$Builder;
        static recipeAdvancement(): $Advancement$Builder;
        static advancement(): $Advancement$Builder;
        requirements(requirementsStrategy: $AdvancementRequirements$Strategy_): $Advancement$Builder;
        requirements(requirements: $AdvancementRequirements_): $Advancement$Builder;
        /**
         * @deprecated
         */
        parent(parentId: $ResourceLocation_): $Advancement$Builder;
        parent(parent: $AdvancementHolder_): $Advancement$Builder;
        save(output: $Consumer_<$AdvancementHolder>, id: string): $AdvancementHolder;
        display(display: $DisplayInfo): $Advancement$Builder;
        display(icon: $ItemLike_, title: $Component_, description: $Component_, background: $ResourceLocation_ | null, type: $AdvancementType_, showToast: boolean, announceChat: boolean, hidden: boolean): $Advancement$Builder;
        display(icon: $ItemStack_, title: $Component_, description: $Component_, background: $ResourceLocation_ | null, type: $AdvancementType_, showToast: boolean, announceChat: boolean, hidden: boolean): $Advancement$Builder;
        build(id: $ResourceLocation_): $AdvancementHolder;
        /**
         * Saves this builder with the given id using the `ExistingFileHelper` to check if the parent is already known.
         */
        save(saver: $Consumer_<$AdvancementHolder>, id: $ResourceLocation_, fileHelper: $ExistingFileHelper): $AdvancementHolder;
        constructor();
    }
    export class $AdvancementRequirements$Strategy {
        static OR: $AdvancementRequirements$Strategy;
        static AND: $AdvancementRequirements$Strategy;
    }
    export interface $AdvancementRequirements$Strategy {
        create(criteria: $Collection_<string>): $AdvancementRequirements;
    }
    /**
     * Values that may be interpreted as {@link $AdvancementRequirements$Strategy}.
     */
    export type $AdvancementRequirements$Strategy_ = ((arg0: $Collection<string>) => $AdvancementRequirements_);
    export interface $CriterionTrigger<T> extends RegistryMarked<RegistryTypes.TriggerTypeTag, RegistryTypes.TriggerType> {}
    export class $CriterionTrigger<T extends $CriterionTriggerInstance> {
    }
    export interface $CriterionTrigger<T extends $CriterionTriggerInstance> {
        addPlayerListener(playerAdvancements: $PlayerAdvancements, listener: $CriterionTrigger$Listener_<T>): void;
        removePlayerListener(playerAdvancements: $PlayerAdvancements, listener: $CriterionTrigger$Listener_<T>): void;
        removePlayerListeners(playerAdvancements: $PlayerAdvancements): void;
        createCriterion(triggerInstance: T): $Criterion<T>;
        codec(): $Codec<T>;
    }
    /**
     * Values that may be interpreted as {@link $CriterionTrigger}.
     */
    export type $CriterionTrigger_<T> = RegistryTypes.TriggerType;
    export class $AdvancementNode implements $AdvancementNodeKJS {
        addChild(child: $AdvancementNode): void;
        children(): $Iterable<$AdvancementNode>;
        advancement(): $Advancement;
        parent(): $AdvancementNode;
        root(): $AdvancementNode;
        holder(): $AdvancementHolder;
        static getRoot(node: $AdvancementNode): $AdvancementNode;
        getId(): $ResourceLocation;
        getParent(): $AdvancementNode;
        getChildren(): $Set<$AdvancementNode>;
        addChild(child: $AdvancementNode): void;
        getDisplayText(): $Component;
        hasDisplay(): boolean;
        getDescription(): $Component;
        getDisplay(): $DisplayInfo;
        self(): $AdvancementNode;
        getTitle(): $Component;
        constructor(holder: $AdvancementHolder_, parent: $AdvancementNode | null);
    }
    export class $AdvancementTree {
        remove(advancements: $Set_<$ResourceLocation_>): void;
        get(id: $ResourceLocation_): $AdvancementNode;
        get(advancement: $AdvancementHolder_): $AdvancementNode;
        clear(): void;
        addAll(advancements: $Collection_<$AdvancementHolder_>): void;
        roots(): $Iterable<$AdvancementNode>;
        nodes(): $Collection<$AdvancementNode>;
        setListener(listener: $AdvancementTree$Listener | null): void;
        constructor();
    }
    export class $CriterionProgress {
        getObtained(): $Instant;
        grant(): void;
        static fromNetwork(buffer: $FriendlyByteBuf): $CriterionProgress;
        serializeToNetwork(buffer: $FriendlyByteBuf): void;
        revoke(): void;
        isDone(): boolean;
        constructor();
        constructor(obtained: $Instant);
    }
    export class $AdvancementRewards$Builder {
        /**
         * Adds the given recipe to the rewards.
         */
        addRecipe(recipeId: $ResourceLocation_): $AdvancementRewards$Builder;
        addLootTable(lootTable: $ResourceKey_<$LootTable>): $AdvancementRewards$Builder;
        /**
         * Adds the given amount of experience. (Not a direct setter)
         */
        addExperience(experience: number): $AdvancementRewards$Builder;
        /**
         * Adds the given recipe to the rewards.
         */
        runs(recipeId: $ResourceLocation_): $AdvancementRewards$Builder;
        static loot(lootTable: $ResourceKey_<$LootTable>): $AdvancementRewards$Builder;
        /**
         * Adds the given amount of experience. (Not a direct setter)
         */
        static experience(experience: number): $AdvancementRewards$Builder;
        /**
         * Adds the given recipe to the rewards.
         */
        static recipe(recipeId: $ResourceLocation_): $AdvancementRewards$Builder;
        /**
         * Adds the given recipe to the rewards.
         */
        static "function"(recipeId: $ResourceLocation_): $AdvancementRewards$Builder;
        build(): $AdvancementRewards;
        constructor();
    }
    export class $AdvancementTree$Listener {
    }
    export interface $AdvancementTree$Listener {
        onAddAdvancementRoot(advancement: $AdvancementNode): void;
        onRemoveAdvancementRoot(advancement: $AdvancementNode): void;
        onAddAdvancementTask(advancement: $AdvancementNode): void;
        onRemoveAdvancementTask(advancement: $AdvancementNode): void;
        onAdvancementsCleared(): void;
    }
    export class $Criterion<T extends $CriterionTriggerInstance> extends $Record {
        triggerInstance(): T;
        trigger(): $CriterionTrigger<T>;
        static CODEC: $Codec<$Criterion<never>>;
        constructor(arg0: $CriterionTrigger_<T>, arg1: T);
    }
    /**
     * Values that may be interpreted as {@link $Criterion}.
     */
    export type $Criterion_<T> = { trigger?: $CriterionTrigger_<$CriterionTriggerInstance_>, triggerInstance?: $CriterionTriggerInstance_,  } | [trigger?: $CriterionTrigger_<$CriterionTriggerInstance_>, triggerInstance?: $CriterionTriggerInstance_, ];
    export class $Advancement extends $Record {
        criteria(): $Map<string, $Criterion<never>>;
        rewards(): $AdvancementRewards;
        sendsTelemetryEvent(): boolean;
        requirements(): $AdvancementRequirements;
        isRoot(): boolean;
        name(): ($Component) | undefined;
        static name(advancement: $AdvancementHolder_): $Component;
        parent(): ($ResourceLocation) | undefined;
        validate(reporter: $ProblemReporter, lootData: $HolderGetter$Provider_): void;
        display(): ($DisplayInfo) | undefined;
        static CODEC: $Codec<$Advancement>;
        static CONDITIONAL_CODEC: $Codec<($WithConditions<$Advancement>) | undefined>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Advancement>;
        constructor(parent: ($ResourceLocation_) | undefined, display: ($DisplayInfo) | undefined, rewards: $AdvancementRewards_, criteria: $Map_<string, $Criterion_<never>>, requirements: $AdvancementRequirements_, sendsTelemetryEvent: boolean);
        constructor(parent: ($ResourceLocation_) | undefined, display: ($DisplayInfo) | undefined, rewards: $AdvancementRewards_, criteria: $Map_<string, $Criterion_<never>>, requirements: $AdvancementRequirements_, sendsTelemetryEvent: boolean, name: ($Component_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $Advancement}.
     */
    export type $Advancement_ = { parent?: ($ResourceLocation_) | undefined, display?: ($DisplayInfo) | undefined, rewards?: $AdvancementRewards_, name?: ($Component_) | undefined, requirements?: $AdvancementRequirements_, sendsTelemetryEvent?: boolean, criteria?: $Map_<string, $Criterion_<never>>,  } | [parent?: ($ResourceLocation_) | undefined, display?: ($DisplayInfo) | undefined, rewards?: $AdvancementRewards_, name?: ($Component_) | undefined, requirements?: $AdvancementRequirements_, sendsTelemetryEvent?: boolean, criteria?: $Map_<string, $Criterion_<never>>, ];
    export class $AdvancementRequirements extends $Record {
        static anyOf(requirements: $Collection_<string>): $AdvancementRequirements;
        static allOf(requirements: $Collection_<string>): $AdvancementRequirements;
        requirements(): $List<$List<string>>;
        size(): number;
        test(predicate: $Predicate_<string>): boolean;
        isEmpty(): boolean;
        count(filter: $Predicate_<string>): number;
        validate(requirements: $Set_<string>): $DataResult<$AdvancementRequirements>;
        write(buffer: $FriendlyByteBuf): void;
        names(): $Set<string>;
        static CODEC: $Codec<$AdvancementRequirements>;
        static EMPTY: $AdvancementRequirements;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: $List_<$List_<string>>);
    }
    /**
     * Values that may be interpreted as {@link $AdvancementRequirements}.
     */
    export type $AdvancementRequirements_ = { requirements?: $List_<$List_<string>>,  } | [requirements?: $List_<$List_<string>>, ];
    export class $AdvancementRewards extends $Record {
        recipes(): $List<$ResourceLocation>;
        grant(player: $ServerPlayer): void;
        loot(): $List<$ResourceKey<$LootTable>>;
        experience(): number;
        "function"(): ($CacheableFunction) | undefined;
        static CODEC: $Codec<$AdvancementRewards>;
        static EMPTY: $AdvancementRewards;
        constructor(experience: number, loot: $List_<$ResourceKey_<$LootTable>>, recipes: $List_<$ResourceLocation_>, arg3: ($CacheableFunction) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $AdvancementRewards}.
     */
    export type $AdvancementRewards_ = { recipes?: $List_<$ResourceLocation_>, function?: ($CacheableFunction) | undefined, loot?: $List_<$ResourceKey_<$LootTable>>, experience?: number,  } | [recipes?: $List_<$ResourceLocation_>, function?: ($CacheableFunction) | undefined, loot?: $List_<$ResourceKey_<$LootTable>>, experience?: number, ];
    export class $AdvancementHolder extends $Record {
        value(): $Advancement;
        id(): $ResourceLocation;
        static LIST_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $List<$AdvancementHolder>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AdvancementHolder>;
        constructor(arg0: $ResourceLocation_, arg1: $Advancement_);
    }
    /**
     * Values that may be interpreted as {@link $AdvancementHolder}.
     */
    export type $AdvancementHolder_ = { id?: $ResourceLocation_, value?: $Advancement_,  } | [id?: $ResourceLocation_, value?: $Advancement_, ];
    export class $CriterionTrigger$Listener<T extends $CriterionTriggerInstance> extends $Record {
        criterion(): string;
        advancement(): $AdvancementHolder;
        run(playerAdvancements: $PlayerAdvancements): void;
        trigger(): T;
        constructor(arg0: T, arg1: $AdvancementHolder_, arg2: string);
    }
    /**
     * Values that may be interpreted as {@link $CriterionTrigger$Listener}.
     */
    export type $CriterionTrigger$Listener_<T> = { trigger?: $CriterionTriggerInstance_, advancement?: $AdvancementHolder_, criterion?: string,  } | [trigger?: $CriterionTriggerInstance_, advancement?: $AdvancementHolder_, criterion?: string, ];
    export class $CriterionTriggerInstance {
    }
    export interface $CriterionTriggerInstance {
        validate(validator: $CriterionValidator): void;
    }
    /**
     * Values that may be interpreted as {@link $CriterionTriggerInstance}.
     */
    export type $CriterionTriggerInstance_ = ((arg0: $CriterionValidator) => void);
    export class $AdvancementType extends $Enum<$AdvancementType> implements $StringRepresentable {
        getChatColor(): $ChatFormatting;
        createAnnouncement(advancement: $AdvancementHolder_, player: $ServerPlayer): $MutableComponent;
        getDisplayName(): $Component;
        static values(): $AdvancementType[];
        static valueOf(arg0: string): $AdvancementType;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CHALLENGE: $AdvancementType;
        static TASK: $AdvancementType;
        static GOAL: $AdvancementType;
        static CODEC: $Codec<$AdvancementType>;
    }
    /**
     * Values that may be interpreted as {@link $AdvancementType}.
     */
    export type $AdvancementType_ = "task" | "challenge" | "goal";
    export class $AdvancementProgress implements $Comparable<$AdvancementProgress> {
        getProgressText(): $Component;
        getFirstProgressDate(): $Instant;
        grantProgress(criterionName: string): boolean;
        revokeProgress(criterionName: string): boolean;
        static fromNetwork(buffer: $FriendlyByteBuf): $AdvancementProgress;
        serializeToNetwork(buffer: $FriendlyByteBuf): void;
        getRemainingCriteria(): $Iterable<string>;
        hasProgress(): boolean;
        getCompletedCriteria(): $Iterable<string>;
        getCriterion(criterionName: string): $CriterionProgress;
        getPercent(): number;
        compareTo(other: $AdvancementProgress): number;
        update(requirements: $AdvancementRequirements_): void;
        isDone(): boolean;
        static CODEC: $Codec<$AdvancementProgress>;
        constructor();
    }
}
