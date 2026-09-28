import { $IntList } from "@package/it/unimi/dsi/fastutil/ints";
import { $TagKeyMixin } from "@package/net/fabricmc/fabric/mixin/tag";
import { $Codec } from "@package/com/mojang/serialization";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $IdentifiableResourceReloadListener } from "@package/net/fabricmc/fabric/api/resource";
import { $FabricTagKey } from "@package/net/fabricmc/fabric/api/tag";
import { $ResourceManager, $PreparableReloadListener$PreparationBarrier_, $PreparableReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $List, $Map_, $Map, $Collection_, $Collection } from "@package/java/util";
import { $ExtraCodecs$TagOrElementLocation } from "@package/net/minecraft/util";
import { $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $Holder_, $RegistryAccess, $Registry, $Holder } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $ITagBuilderExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { RegistryTypes } from "@special/types";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $TagManagerKJS, $ReloadableServerResourcesKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Record } from "@package/java/lang";

declare module "@package/net/minecraft/tags" {
    export class $TagNetworkSerialization$NetworkPayload {
        applyToRegistry<T>(registry: $Registry<T>): void;
        size(): number;
        write(buffer: $FriendlyByteBuf): void;
        static read(buffer: $FriendlyByteBuf): $TagNetworkSerialization$NetworkPayload;
        tags: $Map<$ResourceLocation, $IntList>;
        constructor(tags: $Map_<$ResourceLocation_, $IntList>);
    }
    export class $TagEntry {
        visitRequiredDependencies(visitor: $Consumer_<$ResourceLocation>): void;
        visitOptionalDependencies(visitor: $Consumer_<$ResourceLocation>): void;
        withRequired(arg0: boolean): $TagEntry;
        elementOrTag(): $ExtraCodecs$TagOrElementLocation;
        static optionalTag(elementLocation: $ResourceLocation_): $TagEntry;
        isTag(): boolean;
        verifyIfPresent(elementPredicate: $Predicate_<$ResourceLocation>, tagPredicate: $Predicate_<$ResourceLocation>): boolean;
        static optionalElement(elementLocation: $ResourceLocation_): $TagEntry;
        static tag(elementLocation: $ResourceLocation_): $TagEntry;
        getId(): $ResourceLocation;
        static element(elementLocation: $ResourceLocation_): $TagEntry;
        build<T>(lookup: $TagEntry$Lookup<T>, consumer: $Consumer_<T>): boolean;
        isRequired(): boolean;
        static CODEC: $Codec<$TagEntry>;
        id: $ResourceLocation;
        required: boolean;
        constructor(id: $ResourceLocation_, tag: boolean, required: boolean);
    }
    export class $TagManager implements $PreparableReloadListener, $TagManagerKJS, $IdentifiableResourceReloadListener {
        kjs$setResources(resources: $ReloadableServerResourcesKJS): void;
        kjs$getResources(): $ReloadableServerResourcesKJS;
        reload(stage: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        getResult(): $List<$TagManager$LoadResult<never>>;
        getFabricId(): $ResourceLocation;
        getFabricDependencies(): $Collection<any>;
        getName(): string;
        constructor(registryAccess: $RegistryAccess);
    }
    export class $TagManager$LoadResult<T> extends $Record {
        tags(): $Map<$ResourceLocation, $Collection<$Holder<T>>>;
        key(): $ResourceKey<$Registry<T>>;
        constructor(arg0: $ResourceKey_<$Registry<T>>, arg1: $Map_<$ResourceLocation_, $Collection_<$Holder_<T>>>);
    }
    /**
     * Values that may be interpreted as {@link $TagManager$LoadResult}.
     */
    export type $TagManager$LoadResult_<T> = { key?: $ResourceKey_<$Registry<any>>, tags?: $Map_<$ResourceLocation_, $Collection_<$Holder_<any>>>,  } | [key?: $ResourceKey_<$Registry<any>>, tags?: $Map_<$ResourceLocation_, $Collection_<$Holder_<any>>>, ];
    export class $TagKey<T> extends $Record implements $FabricTagKey, $TagKeyMixin {
        /**
         * @note_to_llm `TagKey` is a reference to a tag. KubeJS has special type wrapper for `TagKey<T>`
         * that allows you to use string literals as `TagKey`. For example, "forge:ores" can be used as a `TagKey<Item>`.
         * Check available literals for tags using the #tool:prunoideae.probejs/listRegistries and #tool:prunoideae.probejs/queryTagsByRegex tools.
         */
        isFor(registry: $ResourceKey_<$Registry<never>>): boolean;
        static hashedCodec<T>(registry: $ResourceKey_<$Registry<T>>): $Codec<$TagKey<T>>;
        cast<E>(registry: $ResourceKey_<$Registry<E>>): ($TagKey<E>) | undefined;
        location(): $ResourceLocation;
        static create<T>(registry: $ResourceKey_<$Registry<T>>, location: $ResourceLocation_): $TagKey<T>;
        registry(): $ResourceKey<$Registry<T>>;
        static codec<T>(registry: $ResourceKey_<$Registry<T>>): $Codec<$TagKey<T>>;
        getTranslationKey(): string;
        getName(): $Component;
        /**
         * @deprecated
         */
        constructor(registry: $ResourceKey_<$Registry<T>>, location: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $TagKey}.
     */
    export type $TagKey_<T> = RegistryTypes.ResolveTag<T>;
    export class $TagBuilder implements $ITagBuilderExtension {
        addTag(elementLocation: $ResourceLocation_): $TagBuilder;
        addOptionalElement(elementLocation: $ResourceLocation_): $TagBuilder;
        addOptionalTag(elementLocation: $ResourceLocation_): $TagBuilder;
        getRemoveEntries(): $Stream<$TagEntry>;
        isReplace(): boolean;
        addElement(elementLocation: $ResourceLocation_): $TagBuilder;
        remove(entry: $TagEntry): $TagBuilder;
        replace(arg0: boolean): $TagBuilder;
        replace(): $TagBuilder;
        add(entry: $TagEntry): $TagBuilder;
        static create(): $TagBuilder;
        build(): $List<$TagEntry>;
        removeTag(elementLocation: $ResourceLocation_): $TagBuilder;
        /**
         * @deprecated
         */
        removeTag(arg0: $ResourceLocation_, arg1: string): $TagBuilder;
        getRawBuilder(): $TagBuilder;
        /**
         * @deprecated
         */
        removeElement(arg0: $ResourceLocation_, arg1: string): $TagBuilder;
        removeElement(elementLocation: $ResourceLocation_): $TagBuilder;
        /**
         * @deprecated
         */
        remove(arg0: $TagEntry, arg1: string): $TagBuilder;
        entries: $List<$TagEntry>;
        constructor();
    }
    export class $TagLoader$EntryWithSource extends $Record {
        remove(): boolean;
        source(): string;
        entry(): $TagEntry;
        constructor(arg0: $TagEntry, arg1: string);
        constructor(entry: $TagEntry, source: string, remove: boolean);
    }
    /**
     * Values that may be interpreted as {@link $TagLoader$EntryWithSource}.
     */
    export type $TagLoader$EntryWithSource_ = { entry?: $TagEntry, source?: string, remove?: boolean,  } | [entry?: $TagEntry, source?: string, remove?: boolean, ];
    export class $TagEntry$Lookup<T> {
    }
    export interface $TagEntry$Lookup<T> {
        tag(tagLocation: $ResourceLocation_): $Collection<T>;
        element(elementLocation: $ResourceLocation_): T;
    }
}
