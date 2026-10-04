import { $InputStream, $BufferedReader } from "@package/java/io";
import { $JsonElement_, $JsonElement, $Gson } from "@package/com/google/gson";
import { $PipelineReloadableResourceManagerAccessor } from "@package/foundry/veil/mixin/pipeline/accessor";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Executor_, $CompletableFuture, $Executor } from "@package/java/util/concurrent";
import { $ContextAwareReloadListener } from "@package/net/neoforged/neoforge/resource";
import { $List, $Map_, $Map, $Set, $Collection_, $List_ } from "@package/java/util";
import { $ZipEntry, $ZipFile } from "@package/java/util/zip";
import { $Unit_ } from "@package/net/minecraft/util";
import { $MetadataSectionSerializer } from "@package/net/minecraft/server/packs/metadata";
import { $Predicate_ } from "@package/java/util/function";
import { $PackSource, $KnownPack } from "@package/net/minecraft/server/packs/repository";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $Path_ } from "@package/java/nio/file";
import { $PackType, $PackResources, $PackType_ } from "@package/net/minecraft/server/packs";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $FabricResource } from "@package/net/fabricmc/fabric/impl/resource/loader";
import { $Object, $AutoCloseable } from "@package/java/lang";

declare module "@package/net/minecraft/server/packs/resources" {
    export class $ResourceManagerReloadListener {
    }
    export interface $ResourceManagerReloadListener extends $PreparableReloadListener {
        onResourceManagerReload(resourceManager: $ResourceManager): void;
        reload(stage: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
    }
    /**
     * Values that may be interpreted as {@link $ResourceManagerReloadListener}.
     */
    export type $ResourceManagerReloadListener_ = ((arg0: $ResourceManager) => void);
    export class $ResourceProvider {
        static fromMap(resources: $Map_<$ResourceLocation_, $Resource>): $ResourceProvider;
        static EMPTY: $ResourceProvider;
    }
    export interface $ResourceProvider {
        openAsReader(location: $ResourceLocation_): $BufferedReader;
        getResourceOrThrow(location: $ResourceLocation_): $Resource;
        getResource(location: $ResourceLocation_): ($Resource) | undefined;
        open(location: $ResourceLocation_): $InputStream;
    }
    /**
     * Values that may be interpreted as {@link $ResourceProvider}.
     */
    export type $ResourceProvider_ = ((arg0: $ResourceLocation) => ($Resource) | undefined);
    export class $CloseableResourceManager {
    }
    export interface $CloseableResourceManager extends $ResourceManager, $AutoCloseable {
        close(): void;
    }
    export class $PreparableReloadListener$PreparationBarrier {
    }
    export interface $PreparableReloadListener$PreparationBarrier {
        wait<T>(backgroundResult: T): $CompletableFuture<T>;
    }
    /**
     * Values that may be interpreted as {@link $PreparableReloadListener$PreparationBarrier}.
     */
    export type $PreparableReloadListener$PreparationBarrier_ = ((arg0: any) => $CompletableFuture<any>);
    export class $IoSupplier<T> {
        static create(path: $Path_): $IoSupplier<$InputStream>;
        static create(zipFile: $ZipFile, zipEntry: $ZipEntry): $IoSupplier<$InputStream>;
    }
    export interface $IoSupplier<T> {
        get(): T;
    }
    /**
     * Values that may be interpreted as {@link $IoSupplier}.
     */
    export type $IoSupplier_<T> = (() => T);
    export class $PreparableReloadListener {
    }
    export interface $PreparableReloadListener {
        reload(preparationBarrier: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        getName(): string;
        get name(): string;
    }
    /**
     * Values that may be interpreted as {@link $PreparableReloadListener}.
     */
    export type $PreparableReloadListener_ = ((arg0: $PreparableReloadListener$PreparationBarrier, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor, arg5: $Executor) => $CompletableFuture<void>);
    export class $SimpleJsonResourceReloadListener extends $SimplePreparableReloadListener<$Map<$ResourceLocation, $JsonElement>> {
        getPreparedPath(arg0: $ResourceLocation_): $ResourceLocation;
        static scanDirectory(resourceManager: $ResourceManager, name: string, gson: $Gson, output: $Map_<$ResourceLocation_, $JsonElement_>): void;
        /**
         * Performs any reloading that can be done off-thread, such as file IO
         */
        prepare(resourceManager: $ResourceManager, profiler: $ProfilerFiller): $Map<$ResourceLocation, $JsonElement>;
        constructor(gson: $Gson, directory: string);
    }
    export class $ReloadableResourceManager implements $ResourceManager, $AutoCloseable, $PipelineReloadableResourceManagerAccessor {
        registerReloadListenerIfNotPresent(listener: $PreparableReloadListener_): void;
        listPacks(): $Stream<$PackResources>;
        listResourceStacks(path: string, filter: $Predicate_<$ResourceLocation>): $Map<$ResourceLocation, $List<$Resource>>;
        getResource(location: $ResourceLocation_): ($Resource) | undefined;
        close(): void;
        listResources(path: string, filter: $Predicate_<$ResourceLocation>): $Map<$ResourceLocation, $Resource>;
        getNamespaces(): $Set<string>;
        registerReloadListener(listener: $PreparableReloadListener_): void;
        createReload(backgroundExecutor: $Executor_, gameExecutor: $Executor_, waitingFor: $CompletableFuture<$Unit_>, resourcePacks: $List_<$PackResources>): $ReloadInstance;
        getResourceStack(location: $ResourceLocation_): $List<$Resource>;
        openAsReader(arg0: $ResourceLocation_): $BufferedReader;
        getResourceOrThrow(arg0: $ResourceLocation_): $Resource;
        open(arg0: $ResourceLocation_): $InputStream;
        getListeners(): $List<$PreparableReloadListener>;
        type: $PackType;
        constructor(type: $PackType_);
        get namespaces(): $Set<string>;
        get listeners(): $List<$PreparableReloadListener>;
    }
    /**
     * @deprecated
     */
    export class $SimplePreparableReloadListener<T> extends $ContextAwareReloadListener implements $PreparableReloadListener {
        fabric_getRegistryLookup(): $HolderLookup$Provider;
        fabric_applyResourceConditions(arg0: $ResourceManager, arg1: $ProfilerFiller, arg2: $Object, arg3: $HolderLookup$Provider): void;
        apply(object: T, resourceManager: $ResourceManager, profiler: $ProfilerFiller): void;
        /**
         * Performs any reloading that can be done off-thread, such as file IO
         */
        prepare(resourceManager: $ResourceManager, profiler: $ProfilerFiller): T;
        constructor();
    }
    export class $ResourceManager {
    }
    export interface $ResourceManager extends $ResourceProvider {
        listPacks(): $Stream<$PackResources>;
        listResourceStacks(path: string, filter: $Predicate_<$ResourceLocation>): $Map<$ResourceLocation, $List<$Resource>>;
        listResources(path: string, filter: $Predicate_<$ResourceLocation>): $Map<$ResourceLocation, $Resource>;
        getNamespaces(): $Set<string>;
        getResourceStack(location: $ResourceLocation_): $List<$Resource>;
        get namespaces(): $Set<string>;
    }
    export class $Resource implements $FabricResource {
        getFabricPackSource(): $PackSource;
        openAsReader(): $BufferedReader;
        source(): $PackResources;
        open(): $InputStream;
        metadata(): $ResourceMetadata;
        knownPackInfo(): ($KnownPack) | undefined;
        sourcePackId(): string;
        constructor(source: $PackResources, streamSupplier: $IoSupplier_<$InputStream>, metadataSupplier: $IoSupplier_<$ResourceMetadata>);
        constructor(source: $PackResources, streamSupplier: $IoSupplier_<$InputStream>);
        get fabricPackSource(): $PackSource;
    }
    export class $ResourceMetadata {
        static fromJsonStream(stream: $InputStream): $ResourceMetadata;
        static EMPTY_SUPPLIER: $IoSupplier<$ResourceMetadata>;
        static EMPTY: $ResourceMetadata;
    }
    export interface $ResourceMetadata {
        copySections(serializers: $Collection_<$MetadataSectionSerializer<never>>): $ResourceMetadata;
        getSection<T>(serializer: $MetadataSectionSerializer<T>): (T) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $ResourceMetadata}.
     */
    export type $ResourceMetadata_ = ((arg0: $MetadataSectionSerializer<any>) => (T) | undefined);
    export class $ReloadInstance {
    }
    export interface $ReloadInstance {
        done(): $CompletableFuture<never>;
        isDone(): boolean;
        getActualProgress(): number;
        checkExceptions(): void;
        get actualProgress(): number;
    }
}
