import { $Function_, $Function } from "@package/java/util/function";
import { $TagBuilder, $TagKey, $TagKey_, $TagEntry } from "@package/net/minecraft/tags";
import { $ExistingFileHelper } from "@package/net/neoforged/neoforge/common/data";
import { $HolderLookup$Provider, $Registry } from "@package/net/minecraft/core";
import { $ITagAppenderExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Path } from "@package/java/nio/file";
import { $FileHelperDataProvider } from "@package/fuzs/puzzleslib/neoforge/impl/data";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Map, $List_ } from "@package/java/util";
import { $CachedOutput_, $DataProvider, $PackOutput$PathProvider, $PackOutput } from "@package/net/minecraft/data";

declare module "@package/net/minecraft/data/tags" {
    export class $IntrinsicHolderTagsProvider<T> extends $TagsProvider<T> {
        tag(tag: $TagKey_<T>): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>;
        registryKey: $ResourceKey<$Registry<T>>;
        builders: $Map<$ResourceLocation, $TagBuilder>;
        pathProvider: $PackOutput$PathProvider;
        existingFileHelper: $ExistingFileHelper;
        modId: string;
        /**
         * @deprecated
         */
        constructor(output: $PackOutput, registryKey: $ResourceKey_<$Registry<T>>, lookupProvider: $CompletableFuture<$HolderLookup$Provider>, keyExtractor: $Function_<T, $ResourceKey<T>>);
        constructor(arg0: $PackOutput, arg1: $ResourceKey_<$Registry<T>>, arg2: $CompletableFuture<$HolderLookup$Provider>, arg3: $CompletableFuture<$TagsProvider$TagLookup_<T>>, arg4: $Function_<T, $ResourceKey<T>>, arg5: string, arg6: $ExistingFileHelper);
        constructor(arg0: $PackOutput, arg1: $ResourceKey_<$Registry<T>>, arg2: $CompletableFuture<$HolderLookup$Provider>, arg3: $Function_<T, $ResourceKey<T>>, arg4: string, arg5: $ExistingFileHelper);
        /**
         * @deprecated
         */
        constructor(output: $PackOutput, registryKey: $ResourceKey_<$Registry<T>>, lookupProvider: $CompletableFuture<$HolderLookup$Provider>, parentProvider: $CompletableFuture<$TagsProvider$TagLookup_<T>>, keyExtractor: $Function_<T, $ResourceKey<T>>);
    }
    export class $TagsProvider$TagAppender<T> implements $ITagAppenderExtension<T> {
        addTag(tag: $TagKey_<T>): $TagsProvider$TagAppender<T>;
        addOptionalTag(location: $ResourceLocation_): $TagsProvider$TagAppender<T>;
        getInternalBuilder(): $TagBuilder;
        addOptional(location: $ResourceLocation_): $TagsProvider$TagAppender<T>;
        /**
         * @deprecated
         */
        getModID(): string;
        add(arg0: $TagEntry): $TagsProvider$TagAppender<T>;
        add(key: $ResourceKey_<T>): $TagsProvider$TagAppender<T>;
        add(...keys: $ResourceKey_<T>[]): $TagsProvider$TagAppender<T>;
        addAll(keys: $List_<$ResourceKey_<T>>): $TagsProvider$TagAppender<T>;
        addOptionalTag(tag: $TagKey_<T>): $TagsProvider$TagAppender<T>;
        addOptionalTags(...arg0: $TagKey_<T>[]): $TagsProvider$TagAppender<T>;
        addTags(...arg0: $TagKey_<T>[]): $TagsProvider$TagAppender<T>;
        remove(arg0: $ResourceLocation_, ...arg1: $ResourceLocation_[]): $TagsProvider$TagAppender<T>;
        remove(key: $ResourceKey_<T>): $TagsProvider$TagAppender<T>;
        remove(arg0: $ResourceKey_<T>, ...arg1: $ResourceKey_<T>[]): $TagsProvider$TagAppender<T>;
        remove(tag: $TagKey_<T>): $TagsProvider$TagAppender<T>;
        remove(arg0: $TagKey_<T>, ...arg1: $TagKey_<T>[]): $TagsProvider$TagAppender<T>;
        remove(location: $ResourceLocation_): $TagsProvider$TagAppender<T>;
        replace(): $TagsProvider$TagAppender<T>;
        replace(arg0: boolean): $TagsProvider$TagAppender<T>;
        builder: $TagBuilder;
        constructor(builder: $TagBuilder);
        /**
         * @deprecated
         */
        constructor(arg0: $TagBuilder, arg1: string);
    }
    export class $TagsProvider$TagLookup<T> {
        static empty<T>(): $TagsProvider$TagLookup<T>;
    }
    export interface $TagsProvider$TagLookup<T> extends $Function<$TagKey<T>, ($TagBuilder) | undefined> {
        contains(key: $TagKey_<$TagKey<T>>): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TagsProvider$TagLookup}.
     */
    export type $TagsProvider$TagLookup_<T> = (() => void);
    export class $TagsProvider<T> implements $DataProvider, $FileHelperDataProvider {
        contentsGetter(): $CompletableFuture<$TagsProvider$TagLookup<T>>;
        addTags(provider: $HolderLookup$Provider): void;
        createContentsProvider(): $CompletableFuture<$HolderLookup$Provider>;
        getOrCreateRawBuilder(tag: $TagKey_<T>): $TagBuilder;
        puzzleslib$setExistingFileHelper(fileHelper: $ExistingFileHelper): void;
        tag(tag: $TagKey_<T>): $TagsProvider$TagAppender<T>;
        /**
         * Gets a name for this provider, to use in logging.
         */
        getName(): string;
        run(output: $CachedOutput_): $CompletableFuture<never>;
        getPath(arg0: $ResourceLocation_): $Path;
        registryKey: $ResourceKey<$Registry<T>>;
        builders: $Map<$ResourceLocation, $TagBuilder>;
        pathProvider: $PackOutput$PathProvider;
        existingFileHelper: $ExistingFileHelper;
        modId: string;
        constructor(arg0: $PackOutput, arg1: $ResourceKey_<$Registry<T>>, arg2: $CompletableFuture<$HolderLookup$Provider>, arg3: $CompletableFuture<$TagsProvider$TagLookup_<T>>, arg4: string, arg5: $ExistingFileHelper);
        /**
         * @deprecated
         */
        constructor(output: $PackOutput, registryKey: $ResourceKey_<$Registry<T>>, lookupProvider: $CompletableFuture<$HolderLookup$Provider>, parentProvider: $CompletableFuture<$TagsProvider$TagLookup_<T>>);
        constructor(output: $PackOutput, registryKey: $ResourceKey_<$Registry<T>>, lookupProvider: $CompletableFuture<$HolderLookup$Provider>);
        constructor(arg0: $PackOutput, arg1: $ResourceKey_<$Registry<T>>, arg2: $CompletableFuture<$HolderLookup$Provider>, arg3: string, arg4: $ExistingFileHelper);
    }
}
