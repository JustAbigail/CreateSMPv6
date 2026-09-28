import { $DataResult, $DynamicOps, $Codec } from "@package/com/mojang/serialization";
import { $DyeColor_, $Rarity_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $Spliterator, $Iterator, $List, $Map_, $UUID_, $Set_, $List_, $Map, $Map$Entry, $Set } from "@package/java/util";
import { $Unit_ } from "@package/net/minecraft/util";
import { $Predicate, $Supplier_, $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $Reference2ObjectMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $Holder_ } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $IDataComponentHolderExtension, $IDataComponentMapBuilderExtensions } from "@package/net/neoforged/neoforge/common/extensions";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $PotionContents_, $Potion } from "@package/net/minecraft/world/item/alchemy";
import { DataComponentTypes, RegistryMarked, RegistryTypes } from "@special/types";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $ComponentFunctions } from "@package/dev/latvian/mods/kubejs/component";
import { $Record, $Object, $Iterable } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $FabricComponentMapBuilder } from "@package/net/fabricmc/fabric/api/item/v1";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/core/component" {
    export class $DataComponentPatch$SplitResult extends $Record {
        added(): $DataComponentMap;
        removed(): $Set<$DataComponentType<never>>;
        static EMPTY: $DataComponentPatch$SplitResult;
        constructor(added: $DataComponentMap_, removed: $Set_<$DataComponentType_<never>>);
    }
    /**
     * Values that may be interpreted as {@link $DataComponentPatch$SplitResult}.
     */
    export type $DataComponentPatch$SplitResult_ = { removed?: $Set_<$DataComponentType_<never>>, added?: $DataComponentMap_,  } | [removed?: $Set_<$DataComponentType_<never>>, added?: $DataComponentMap_, ];
    export class $DataComponentPatch$Builder implements $ComponentFunctions {
        kjs$get(type: $DataComponentType_<any>): $Object;
        kjs$remove(type: $DataComponentType_<any>): $ComponentFunctions;
        remove<T>(component: $DataComponentType_<T>): $DataComponentPatch$Builder;
        build(): $DataComponentPatch;
        getComponentMap(): $DataComponentMap;
        setEntityData(tag: $CompoundTag_): void;
        setProfile(name: string, uuid: $UUID_): void;
        setProfile(profile: $GameProfile): void;
        setBaseColor(color: $DyeColor_): void;
        setBlockStateProperties(properties: $Map_<string, string>): void;
        setLockCode(lock: string): void;
        setContainerLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        setContainerLootTable(lootTable: $ResourceKey_<$LootTable>): void;
        setAdditionalTooltipHidden(): void;
        setUnit(component: $DataComponentType_<$Unit_>): $ComponentFunctions;
        patch(components: $DataComponentPatch_): $ComponentFunctions;
        resetComponents(): $ComponentFunctions;
        getComponentString(): string;
        setCustomData(tag: $CompoundTag_): void;
        getCustomData(): $CompoundTag;
        setRarity(rarity: $Rarity_): void;
        setCustomName(name: $Component_): void;
        getCustomName(): $Component;
        setLore(lines: $List_<$Component_>, styledLines: $List_<$Component_>): void;
        setLore(lines: $List_<$Component_>): void;
        setCustomModelData(data: number): void;
        setTooltipHidden(): void;
        setGlintOverride(override: boolean): void;
        setDyedColor(color: $KubeColor_): void;
        setDyedColorWithTooltip(color: $KubeColor_): void;
        setPotionContents(contents: $PotionContents_): void;
        setPotionId(potion: $Holder_<$Potion>): void;
        constructor();
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
    }
    export class $DataComponentPredicate implements $Predicate<$DataComponentMap> {
        static allOf(expectedComponents: $DataComponentMap_): $DataComponentPredicate;
        asPatch(): $DataComponentPatch;
        alwaysMatches(): boolean;
        test(components: $DataComponentMap_): boolean;
        test(components: $DataComponentHolder_): boolean;
        static builder(): $DataComponentPredicate$Builder;
        or(arg0: $Predicate_<$DataComponentMap>): $Predicate<$DataComponentMap>;
        negate(): $Predicate<$DataComponentMap>;
        and(arg0: $Predicate_<$DataComponentMap>): $Predicate<$DataComponentMap>;
        static CODEC: $Codec<$DataComponentPredicate>;
        static EMPTY: $DataComponentPredicate;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $DataComponentPredicate>;
        constructor(expectedComponents: $List_<$TypedDataComponent_<never>>);
    }
    export class $DataComponentPatch {
        size(): number;
        get<T>(component: $DataComponentType_<T>): (T) | undefined;
        static toString(map: $Reference2ObjectMap<$DataComponentType_<never>, (never) | undefined>): string;
        isEmpty(): boolean;
        split(): $DataComponentPatch$SplitResult;
        static builder(): $DataComponentPatch$Builder;
        entrySet(): $Set<$Map$Entry<$DataComponentType<never>, (never) | undefined>>;
        forget(predicate: $Predicate_<$DataComponentType<never>>): $DataComponentPatch;
        static CODEC: $Codec<$DataComponentPatch>;
        static EMPTY: $DataComponentPatch;
        map: $Reference2ObjectMap<$DataComponentType<never>, (never) | undefined>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $DataComponentPatch>;
        constructor(map: $Reference2ObjectMap<$DataComponentType_<never>, (never) | undefined>);
    }
    /**
     * Values that may be interpreted as {@link $DataComponentPatch}.
     */
    export type $DataComponentPatch_ = Partial<DataComponentTypes.InputMap>;
    export class $DataComponentHolder {
    }
    export interface $DataComponentHolder extends $IDataComponentHolderExtension {
        has(component: $DataComponentType_<never>): boolean;
        get<T>(component: $DataComponentType_<T>): T;
        getOrDefault<T>(component: $DataComponentType_<T>, defaultValue: T): T;
        getComponents(): $DataComponentMap;
    }
    /**
     * Values that may be interpreted as {@link $DataComponentHolder}.
     */
    export type $DataComponentHolder_ = (() => $DataComponentMap_);
    export class $DataComponentMap {
        static makeCodecFromMap(codec: $Codec<$Map_<$DataComponentType_<never>, $Object>>): $Codec<$DataComponentMap>;
        static makeCodec(codec: $Codec<$DataComponentType_<never>>): $Codec<$DataComponentMap>;
        static builder(): $DataComponentMap$Builder;
        static composite(map1: $DataComponentMap_, map2: $DataComponentMap_): $DataComponentMap;
        static CODEC: $Codec<$DataComponentMap>;
        static EMPTY: $DataComponentMap;
        [Symbol.iterator](): Iterator<$TypedDataComponent<never>>
    }
    export interface $DataComponentMap extends $Iterable<$TypedDataComponent<never>> {
        has(component: $DataComponentType_<never>): boolean;
        size(): number;
        get<T>(component: $DataComponentType_<T>): T;
        isEmpty(): boolean;
        iterator(): $Iterator<$TypedDataComponent<never>>;
        stream(): $Stream<$TypedDataComponent<never>>;
        filter(predicate: $Predicate_<$DataComponentType<never>>): $DataComponentMap;
        keySet(): $Set<$DataComponentType<never>>;
        getOrDefault<T>(component: $DataComponentType_<T>, defaultValue: T): T;
        getTyped<T>(component: $DataComponentType_<T>): $TypedDataComponent<T>;
        [Symbol.iterator](): Iterator<$TypedDataComponent<never>>
    }
    /**
     * Values that may be interpreted as {@link $DataComponentMap}.
     */
    export type $DataComponentMap_ = Partial<DataComponentTypes.InputMap>;
    export class $DataComponentPredicate$Builder {
        build(): $DataComponentPredicate;
        expect<T>(component: $DataComponentType_<T>, value: T): $DataComponentPredicate$Builder;
        constructor();
    }
    export interface $DataComponentType<T> extends RegistryMarked<RegistryTypes.EnchantmentEffectComponentTypeTag, RegistryTypes.EnchantmentEffectComponentType> {}
    export class $TypedDataComponent<T> extends $Record {
        encodeValue<D>(ops: $DynamicOps<D>): $DataResult<D>;
        static fromEntryUnchecked(entry: $Map$Entry<$DataComponentType_<never>, $Object>): $TypedDataComponent<never>;
        static createUnchecked<T>(type: $DataComponentType_<T>, value: $Object): $TypedDataComponent<T>;
        type(): $DataComponentType<T>;
        value(): T;
        applyTo(map: $PatchedDataComponentMap): void;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $TypedDataComponent<never>>;
        constructor(arg0: $DataComponentType_<T>, arg1: T);
    }
    /**
     * Values that may be interpreted as {@link $TypedDataComponent}.
     */
    export type $TypedDataComponent_<T> = { value?: any, type?: $DataComponentType_<any>,  } | [value?: any, type?: $DataComponentType_<any>, ];
    export class $DataComponentType<T> {
        static builder<T>(): $DataComponentType$Builder<T>;
        static CODEC: $Codec<$DataComponentType<never>>;
        static VALUE_MAP_CODEC: $Codec<$Map<$DataComponentType<never>, $Object>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $DataComponentType<never>>;
        static PERSISTENT_CODEC: $Codec<$DataComponentType<never>>;
    }
    export interface $DataComponentType<T> {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        codecOrThrow(): $Codec<T>;
        isTransient(): boolean;
        codec(): $Codec<T>;
    }
    /**
     * Values that may be interpreted as {@link $DataComponentType}.
     */
    export type $DataComponentType_<T> = RegistryTypes.DataComponentType | RegistryTypes.EnchantmentEffectComponentType;
    export class $PatchedDataComponentMap implements $DataComponentMap {
        isPatchEmpty(): boolean;
        static fromPatch(prototype: $DataComponentMap_, patch: $DataComponentPatch_): $PatchedDataComponentMap;
        restorePatch(patch: $DataComponentPatch_): void;
        asPatch(): $DataComponentPatch;
        remove<T>(component: $DataComponentType_<T>): T;
        size(): number;
        get<T>(component: $DataComponentType_<T>): T;
        iterator(): $Iterator<$TypedDataComponent<never>>;
        set<T>(component: $DataComponentType_<T>, value: T | null): T;
        keySet(): $Set<$DataComponentType<never>>;
        copy(): $PatchedDataComponentMap;
        setAll(prototype: $DataComponentMap_): void;
        applyPatch(patch: $DataComponentPatch_): void;
        has(arg0: $DataComponentType_<never>): boolean;
        isEmpty(): boolean;
        stream(): $Stream<$TypedDataComponent<never>>;
        filter(arg0: $Predicate_<$DataComponentType<never>>): $DataComponentMap;
        getOrDefault<T>(component: $DataComponentType_<T>, value: T): T;
        getTyped<T>(arg0: $DataComponentType_<T>): $TypedDataComponent<T>;
        spliterator(): $Spliterator<$TypedDataComponent<never>>;
        forEach(arg0: $Consumer_<$TypedDataComponent<never>>): void;
        copyOnWrite: boolean;
        constructor(prototype: $DataComponentMap_);
        [Symbol.iterator](): Iterator<$TypedDataComponent<never>>
    }
    export class $DataComponentMap$Builder implements $IDataComponentMapBuilderExtensions, $FabricComponentMapBuilder, $ComponentFunctions {
        getOrEmpty(arg0: $DataComponentType_<any>): $List<any>;
        getOrCreate(arg0: $DataComponentType_<any>, arg1: $Supplier_<any>): $Object;
        kjs$get(type: $DataComponentType_<any>): $Object;
        kjs$remove(type: $DataComponentType_<any>): $ComponentFunctions;
        kjs$getComponentMap(): $DataComponentMap;
        setUnchecked<T>(component: $DataComponentType_<T>, value: $Object | null): void;
        addAll(components: $DataComponentMap_): $DataComponentMap$Builder;
        build(): $DataComponentMap;
        setEntityData(tag: $CompoundTag_): void;
        setProfile(name: string, uuid: $UUID_): void;
        setProfile(profile: $GameProfile): void;
        setBaseColor(color: $DyeColor_): void;
        setBlockStateProperties(properties: $Map_<string, string>): void;
        setLockCode(lock: string): void;
        setContainerLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        setContainerLootTable(lootTable: $ResourceKey_<$LootTable>): void;
        setAdditionalTooltipHidden(): void;
        setUnit(component: $DataComponentType_<$Unit_>): $ComponentFunctions;
        patch(components: $DataComponentPatch_): $ComponentFunctions;
        resetComponents(): $ComponentFunctions;
        getComponentString(): string;
        setCustomData(tag: $CompoundTag_): void;
        getCustomData(): $CompoundTag;
        setRarity(rarity: $Rarity_): void;
        setCustomName(name: $Component_): void;
        getCustomName(): $Component;
        setLore(lines: $List_<$Component_>, styledLines: $List_<$Component_>): void;
        setLore(lines: $List_<$Component_>): void;
        setCustomModelData(data: number): void;
        setTooltipHidden(): void;
        setGlintOverride(override: boolean): void;
        setDyedColor(color: $KubeColor_): void;
        setDyedColorWithTooltip(color: $KubeColor_): void;
        setPotionContents(contents: $PotionContents_): void;
        setPotionId(potion: $Holder_<$Potion>): void;
        constructor();
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
    }
    export class $DataComponentType$Builder<T> {
        persistent(codec: $Codec<T>): $DataComponentType$Builder<T>;
        networkSynchronized(streamCodec: $StreamCodec<$RegistryFriendlyByteBuf, T>): $DataComponentType$Builder<T>;
        cacheEncoding(): $DataComponentType$Builder<T>;
        build(): $DataComponentType<T>;
        constructor();
    }
}
