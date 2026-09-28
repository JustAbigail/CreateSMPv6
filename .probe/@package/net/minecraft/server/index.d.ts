import { $RecipeManager } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Either, $Pair } from "@package/com/mojang/datafixers/util";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $VeilPacketManager$PacketSink } from "@package/foundry/veil/api/network";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CommandDispatcher } from "@package/com/mojang/brigadier";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $CustomPacketPayload_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $CloseableResourceManager, $ResourceManager, $PreparableReloadListener$PreparationBarrier_, $PreparableReloadListener, $SimpleJsonResourceReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $ModCheck, $SignatureValidator } from "@package/net/minecraft/util";
import { $AdvancementHolder, $AdvancementProgress, $AdvancementNode, $AdvancementHolder_, $AdvancementTree } from "@package/net/minecraft/advancements";
import { $TickRateManager, $Difficulty_ } from "@package/net/minecraft/world";
import { $CrashReport, $SystemReport } from "@package/net/minecraft";
import { $ScheduledEvents$ScheduledEvent, $ScheduledEvents, $ScheduledEvents$Callback_, $TickDuration_, $AttachedData } from "@package/dev/latvian/mods/kubejs/util";
import { $Proxy, $URI } from "@package/java/net";
import { $GameProfile, $GameProfileRepository_, $GameProfileRepository } from "@package/com/mojang/authlib";
import { $MinecraftServerExt } from "@package/gg/essential/mixins/ext/server";
import { $MinecraftServerAccessor } from "@package/net/createmod/ponder/mixin/accessor";
import { $Component_, $ChatType$Bound_, $Component, $ChatDecorator } from "@package/net/minecraft/network/chat";
import { $ServerConnectionListener, $TextFilter } from "@package/net/minecraft/server/network";
import { $StructureTemplateManager } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ServerScriptManager } from "@package/dev/latvian/mods/kubejs/server";
import { $MinecraftServerExtension } from "@package/foundry/veil/ext";
import { $WorldData, $LevelStorageSource$LevelStorageAccess, $LevelResource, $CommandStorage, $PlayerDataStorage } from "@package/net/minecraft/world/level/storage";
import { $RegionStorageInfo_, $ChunkIOErrorReporter } from "@package/net/minecraft/world/level/chunk/storage";
import { $CommandSource, $Commands, $Commands$CommandSelection_, $CommandSourceStack } from "@package/net/minecraft/commands";
import { $RemoteDebugSampleType_, $SampleLogger } from "@package/net/minecraft/util/debugchart";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $CommandFunction } from "@package/net/minecraft/commands/functions";
import { $PlayerSelector_, $ReloadableServerResourcesKJS, $MinecraftServerKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $AABB_ } from "@package/net/minecraft/world/phys";
import { $MinecraftSessionService } from "@package/com/mojang/authlib/minecraft";
import { $JsonElement_ } from "@package/com/google/gson";
import { $ServerStatus, $ServerStatus_, $ServerStatus$Favicon_, $ServerStatus$Favicon } from "@package/net/minecraft/network/protocol/status";
import { $IdentifiableResourceReloadListener } from "@package/net/fabricmc/fabric/api/resource";
import { $SavedData$Factory } from "@package/net/minecraft/world/level/saveddata";
import { $IServerDataAPI, $IOpenPACMinecraftServer } from "@package/xaero/pac/common/server";
import { $Queue, $UUID_, $Map, $Set, $UUID, $List, $Map_, $Collection_, $List_, $Collection } from "@package/java/util";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $Consumer_, $Function_, $BooleanSupplier_ } from "@package/java/util/function";
import { $ChunkProgressListenerFactory_, $ChunkProgressListener } from "@package/net/minecraft/server/level/progress";
import { $HolderGetter$Provider, $BlockPos_, $Registry, $HolderLookup$Provider, $RegistryAccess$Frozen, $LayeredRegistryAccess } from "@package/net/minecraft/core";
import { $ServerPlayerGameMode, $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Path_, $Path } from "@package/java/nio/file";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $ICondition$IContext } from "@package/net/neoforged/neoforge/common/conditions";
import { $MinecraftServerAccessor as $MinecraftServerAccessor$1 } from "@package/gg/essential/mixins/transformers/server";
import { $Enum, $RuntimeException, $Iterable, $Thread, $Throwable, $Record, $AutoCloseable, $Runnable_, $Runnable } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $File_ } from "@package/java/io";
import { $GameType, $WorldDataConfiguration, $GameRules, $GameType_, $ChunkPos, $WorldDataConfiguration_, $LevelSettings, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $TagManager } from "@package/net/minecraft/tags";
import { $ProfileResults, $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $GameProfileCache, $PlayerList } from "@package/net/minecraft/server/players";
import { $KeyPair } from "@package/java/security";
import { $CoroutineDispatcher, $CoroutineScope } from "@package/kotlinx/coroutines";
import { $TemporalAmount_ } from "@package/java/time/temporal";
import { $CustomBossEvents } from "@package/net/minecraft/server/bossevents";
import { $ServicesKeySet, $ServicesKeySet_, $YggdrasilAuthenticationService } from "@package/com/mojang/authlib/yggdrasil";
import { $IProfilingServerFunctionManager, $ITimeTrackingServer } from "@package/org/embeddedt/modernfix/duck";
import { $PotionBrewing } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $TickTaskSchedulerImpl } from "@package/foundry/veil/impl";
import { $FabricOriginalKnownPacksGetter } from "@package/net/fabricmc/fabric/impl/resource/loader";
import { $Scoreboard, $Objective, $ScoreboardSaveData } from "@package/net/minecraft/world/scores";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as players from "@package/net/minecraft/server/players";
export * as packs from "@package/net/minecraft/server/packs";
export * as level from "@package/net/minecraft/server/level";
export * as network from "@package/net/minecraft/server/network";
export * as bossevents from "@package/net/minecraft/server/bossevents";

declare module "@package/net/minecraft/server" {
    export class $PlayerAdvancements {
        award(advancement: $AdvancementHolder_, criterionKey: string): boolean;
        setSelectedTab(advancement: $AdvancementHolder_ | null): void;
        setPlayer(serverPlayer: $ServerPlayer): void;
        stopListening(): void;
        handler$jbg000$fabric_events_interaction_v0$preventOwnerOverride(arg0: $ServerPlayer, arg1: $CallbackInfo): void;
        handler$jbg000$fabric_events_interaction_v0$preventGrantCriterion(arg0: $AdvancementHolder_, arg1: string, arg2: $CallbackInfoReturnable<any>): void;
        handler$dcp000$betterend$be_award(arg0: $AdvancementHolder_, arg1: string, arg2: $CallbackInfoReturnable<any>): void;
        flushDirty(serverPlayer: $ServerPlayer): void;
        getOrStartProgress(advancement: $AdvancementHolder_): $AdvancementProgress;
        revoke(advancement: $AdvancementHolder_, criterionKey: string): boolean;
        reload(manager: $ServerAdvancementManager): void;
        save(): void;
        constructor(dataFixer: $DataFixer, playerList: $PlayerList, manager: $ServerAdvancementManager, playerSavePath: $Path_, player: $ServerPlayer);
    }
    export class $RegistryLayer extends $Enum<$RegistryLayer> {
        static createRegistryAccess(): $LayeredRegistryAccess<$RegistryLayer>;
        static values(): $RegistryLayer[];
        static valueOf(arg0: string): $RegistryLayer;
        static WORLDGEN: $RegistryLayer;
        static DIMENSIONS: $RegistryLayer;
        static RELOADABLE: $RegistryLayer;
        static STATIC: $RegistryLayer;
    }
    /**
     * Values that may be interpreted as {@link $RegistryLayer}.
     */
    export type $RegistryLayer_ = "static" | "worldgen" | "dimensions" | "reloadable";
    export class $MinecraftServer$ReloadableResources extends $Record implements $AutoCloseable {
        managers(): $ReloadableServerResources;
        close(): void;
        resourceManager(): $CloseableResourceManager;
        constructor(resourceManager: $CloseableResourceManager, managers: $ReloadableServerResources);
    }
    /**
     * Values that may be interpreted as {@link $MinecraftServer$ReloadableResources}.
     */
    export type $MinecraftServer$ReloadableResources_ = { resourceManager?: $CloseableResourceManager, managers?: $ReloadableServerResources,  } | [resourceManager?: $CloseableResourceManager, managers?: $ReloadableServerResources, ];
    export class $ReloadableServerRegistries$Holder {
        getLootTable(lootTableKey: $ResourceKey_<$LootTable>): $LootTable;
        getKeys(registryKey: $ResourceKey_<$Registry<never>>): $Collection<$ResourceLocation>;
        get(): $RegistryAccess$Frozen;
        lookup(): $HolderGetter$Provider;
        constructor(registries: $RegistryAccess$Frozen);
    }
    export class $ServerFunctionLibrary implements $PreparableReloadListener, $IdentifiableResourceReloadListener {
        getAvailableTags(): $Iterable<$ResourceLocation>;
        reload(stage: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        getTag(location: $ResourceLocation_): $Collection<$CommandFunction<$CommandSourceStack>>;
        getFunction(location: $ResourceLocation_): ($CommandFunction<$CommandSourceStack>) | undefined;
        getFunctions(): $Map<$ResourceLocation, $CommandFunction<$CommandSourceStack>>;
        getFabricId(): $ResourceLocation;
        getFabricDependencies(): $Collection<any>;
        getName(): string;
        static TYPE_KEY: $ResourceKey<$Registry<$CommandFunction<$CommandSourceStack>>>;
        constructor(functionCompilationLevel: number, dispatcher: $CommandDispatcher<$CommandSourceStack>);
    }
    export class $MinecraftServer extends $ReentrantBlockableEventLoop<$TickTask> implements $ServerInfo, $ChunkIOErrorReporter, $CommandSource, $AutoCloseable, $IOpenPACMinecraftServer, $ITimeTrackingServer, $VeilPacketManager$PacketSink, $MinecraftServerExtension, $MinecraftServerAccessor, $MinecraftServerKJS, $FabricOriginalKnownPacksGetter, $MinecraftServerAccessor$1, $MinecraftServerExt {
        reloadableRegistries(): $ReloadableServerRegistries$Holder;
        sendSystemMessage(component: $Component_): void;
        getCommands(): $Commands;
        createCommandSourceStack(): $CommandSourceStack;
        getPersistentData(): $CompoundTag;
        isLevelEnabled(level: $Level_): boolean;
        /**
         * Initialises the server and starts it.
         */
        acceptsSuccess(): boolean;
        /**
         * Initialises the server and starts it.
         */
        acceptsFailure(): boolean;
        /**
         * Initialises the server and starts it.
         */
        shouldInformAdmins(): boolean;
        getCustomBossEvents(): $CustomBossEvents;
        setDifficulty(difficulty: $Difficulty_, forced: boolean): void;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setDifficultyLocked(waitForServer: boolean): void;
        logChatMessage(content: $Component_, boundChatType: $ChatType$Bound_, header: string | null): void;
        getServerResourcePack(): ($MinecraftServer$ServerResourcePackInfo) | undefined;
        getWorldPath(levelResource: $LevelResource): $Path;
        /**
         * Initialises the server and starts it.
         */
        initServer(): boolean;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        loadLevel(): void;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getServerModName(): string;
        getModdedStatus(): $ModCheck;
        createLevels(listener: $ChunkProgressListener): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        forceDifficulty(): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        waitUntilNextTick(): void;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getOperatorUserPermissionLevel(): number;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getFunctionCompilationLevel(): number;
        /**
         * Initialises the server and starts it.
         */
        shouldRconBroadcast(): boolean;
        saveAllChunks(suppressLog: boolean, flush: boolean, forced: boolean): boolean;
        saveEverything(suppressLog: boolean, flush: boolean, forced: boolean): boolean;
        handler$bic000$veil$stopServer(arg0: $CallbackInfo): void;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getLocalIp(): string;
        setLocalIp(serverId: string): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        runServer(): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        endMetricsRecordingTick(): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        onServerExit(): void;
        publishServer(gameMode: $GameType_ | null, commands: boolean, port: number): boolean;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        stop(): void;
        /**
         * Sets the game type for all worlds.
         */
        setDefaultGameType(gameMode: $GameType_): void;
        getServerDirectory(): $Path;
        /**
         * Called on exit from the main run() loop.
         */
        onServerCrash(report: $CrashReport): void;
        /**
         * Initialises the server and starts it.
         */
        isTickTimeLoggingEnabled(): boolean;
        getTickTimeLogger(): $SampleLogger;
        /**
         * Initialises the server and starts it.
         */
        static throwIfFatalException(): boolean;
        static setFatalException(fatalException: $RuntimeException): void;
        handler$jlj000$essential$runTasks(ci: $CallbackInfo): void;
        /**
         * Drive the executor until the given BooleanSupplier returns true
         */
        tickChildren(isDone: $BooleanSupplier_): void;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getStatusJson(): string;
        getAverageTickTimeNanos(): number;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        onTickRateChanged(): void;
        /**
         * Initialises the server and starts it.
         */
        enforceSecureProfile(): boolean;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getMaxPlayers(): number;
        /**
         * Initialises the server and starts it.
         */
        hidesOnlinePlayers(): boolean;
        addTickable(tickable: $Runnable_): void;
        levelKeys(): $Set<$ResourceKey<$Level>>;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getServerVersion(): string;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getPlayerCount(): number;
        /**
         * Returns an array of the usernames of all the connected players.
         */
        getPlayerNames(): string[];
        fillServerSystemReport(report: $SystemReport): $SystemReport;
        getSingleplayerProfile(): $GameProfile;
        setSingleplayerProfile(singleplayerProfile: $GameProfile | null): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        initializeKeyPair(): void;
        handler$jlp000$essential$onSetDifficulty(ci: $CallbackInfo, difficulty: $Difficulty_): void;
        getScaledTrackingDistance(trackingDistance: number): number;
        /**
         * Initialises the server and starts it.
         */
        isSpawningMonsters(): boolean;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setDemo(waitForServer: boolean): void;
        /**
         * Initialises the server and starts it.
         */
        isResourcePackRequired(): boolean;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getRateLimitPacketsPerSecond(): number;
        /**
         * Initialises the server and starts it.
         */
        usesAuthentication(): boolean;
        /**
         * Initialises the server and starts it.
         */
        getPreventProxyConnections(): boolean;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setPreventProxyConnections(waitForServer: boolean): void;
        /**
         * Initialises the server and starts it.
         */
        isEpollEnabled(): boolean;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setPvpAllowed(waitForServer: boolean): void;
        /**
         * Initialises the server and starts it.
         */
        isFlightAllowed(): boolean;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setFlightAllowed(waitForServer: boolean): void;
        setMotd(serverId: string): void;
        setPlayerList(list: $PlayerList): void;
        handler$jmb000$essential$onSetGameType(gameMode: $GameType_, ci: $CallbackInfo): void;
        /**
         * Initialises the server and starts it.
         */
        hasGui(): boolean;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getSpawnProtectionRadius(): number;
        /**
         * Initialises the server and starts it.
         */
        repliesToStatus(): boolean;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getPlayerIdleTimeout(): number;
        setPlayerIdleTimeout(idleTimeout: number): void;
        getSessionService(): $MinecraftSessionService;
        getProfileRepository(): $GameProfileRepository;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        invalidateStatus(): void;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getCompressionThreshold(): number;
        getNextTickTime(): number;
        /**
         * Replaces currently selected list of datapacks, reloads them, and sends new data to players.
         */
        reloadResources(selectedIds: $Collection_<string>): $CompletableFuture<void>;
        static configurePackRepository(packRepository: $PackRepository, initialDataConfig: $WorldDataConfiguration_, initMode: boolean, safeMode: boolean): $WorldDataConfiguration;
        kickUnlistedPlayers(commandSource: $CommandSourceStack): void;
        /**
         * Initialises the server and starts it.
         */
        isEnforceWhitelist(): boolean;
        getPackRepository(): $PackRepository;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setEnforceWhitelist(waitForServer: boolean): void;
        getCurrentSmoothedTickTime(): number;
        getTickTimesNanos(): number[];
        isSingleplayerOwner(profile: $GameProfile): boolean;
        /**
         * @deprecated
         */
        forgeGetWorldMap(): $Map<$ResourceKey<$Level>, $ServerLevel>;
        /**
         * @deprecated
         * Directly calls System.exit(0), instantly killing the program.
         */
        markWorldsDirty(): void;
        dumpServerProperties(path: $Path_): void;
        /**
         * Initialises the server and starts it.
         */
        isRecordingMetrics(): boolean;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        stopRecordingMetrics(): void;
        /**
         * Initialises the server and starts it.
         */
        isCurrentlySaving(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isTimeProfilerRunning(): boolean;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        startTimeProfiler(): void;
        stopTimeProfiler(): $ProfileResults;
        /**
         * Initialises the server and starts it.
         */
        logIPs(): boolean;
        subscribeToDebugSample(player: $ServerPlayer, sampleType: $RemoteDebugSampleType_): void;
        /**
         * Initialises the server and starts it.
         */
        acceptsTransfers(): boolean;
        reportChunkLoadFailure(throwable: $Throwable, regionStorageInfo: $RegionStorageInfo_, chunkPos: $ChunkPos): void;
        reportChunkSaveFailure(throwable: $Throwable, regionStorageInfo: $RegionStorageInfo_, chunkPos: $ChunkPos): void;
        setXaero_OPAC_ServerData(arg0: $IServerDataAPI): void;
        getXaero_OPAC_ServerData(): $IServerDataAPI;
        mfix$getLastTickStartTime(): number;
        veil$getScheduler(): $TickTaskSchedulerImpl;
        veil$getOrCreateScheduler(): $TickTaskSchedulerImpl;
        getOverworld(): $ServerLevel;
        fabric_getOriginalKnownPacks(): $List<any>;
        getEssential$coroutineScope(): $CoroutineScope;
        static spin<S extends $MinecraftServer>(threadFunction: $Function_<$Thread, S>): S;
        /**
         * Gets KeyPair instanced in MinecraftServer.
         */
        getKeyPair(): $KeyPair;
        getConnection(): $ServerConnectionListener;
        createTextFilterForPlayer(player: $ServerPlayer): $TextFilter;
        createGameModeForPlayer(player: $ServerPlayer): $ServerPlayerGameMode;
        getSpawnRadius(level: $ServerLevel | null): number;
        getTickTime(arg0: $ResourceKey_<$Level>): number[];
        /**
         * Initialises the server and starts it.
         */
        isPvpAllowed(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isCommandBlockEnabled(): boolean;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getTickCount(): number;
        getProfilePermissions(profile: $GameProfile): number;
        getForcedGameType(): $GameType;
        getDefaultGameType(): $GameType;
        restoreInventories(): $Map<any, any>;
        getPlayerList(): $PlayerList;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        forceTimeSynchronization(): void;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getMaxChainedNeighborUpdates(): number;
        /**
         * Initialises the server and starts it.
         */
        forceSynchronousWrites(): boolean;
        getStructureManager(): $StructureTemplateManager;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getAbsoluteMaxWorldSize(): number;
        /**
         * Initialises the server and starts it.
         */
        isSpawningAnimals(): boolean;
        /**
         * Initialises the server and starts it.
         */
        areNpcsEnabled(): boolean;
        isUnderSpawnProtection(level: $ServerLevel, pos: $BlockPos_, player: $Player): boolean;
        /**
         * Drive the executor until the given BooleanSupplier returns true
         */
        tickServer(isDone: $BooleanSupplier_): void;
        getProfileCache(): $GameProfileCache;
        getChatDecorator(): $ChatDecorator;
        getAllLevels(): $Iterable<$ServerLevel>;
        getCommandStorage(): $CommandStorage;
        getServerResources(): $MinecraftServer$ReloadableResources;
        /**
         * Gets the worldServer by the given dimension.
         */
        getLevel(dimension: $ResourceKey_<$Level>): $ServerLevel;
        getFile(path: string): $Path;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getPort(): number;
        /**
         * Initialises the server and starts it.
         */
        isShutdown(): boolean;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        halt(waitForServer: boolean): void;
        /**
         * Initialises the server and starts it.
         */
        isStopped(): boolean;
        getStatus(): $ServerStatus;
        /**
         * Initialises the server and starts it.
         */
        isRunning(): boolean;
        setPort(idleTimeout: number): void;
        setId(serverId: string): void;
        /**
         * Initialises the server and starts it.
         */
        isDedicated(): boolean;
        getProfiler(): $ProfilerFiller;
        getFunctions(): $ServerFunctionManager;
        getProxy(): $Proxy;
        getRecipeManager(): $RecipeManager;
        getScheduledEvents(): $ScheduledEvents;
        doRunTask(task: $TickTask): void;
        getEssential$dispatcher(): $CoroutineDispatcher;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        essential$updateServerStatus(): void;
        sendPacket(arg0: $Packet<any>): void;
        /**
         * Initialises the server and starts it.
         */
        isHardcore(): boolean;
        fillSystemReport(report: $SystemReport): $SystemReport;
        startRecordingMetrics(output: $Consumer_<$ProfileResults>, onMetricsRecordingFinished: $Consumer_<$Path>): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        finishRecordingMetrics(): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        cancelRecordingMetrics(): void;
        getWorldData(): $WorldData;
        tickRateManager(): $ServerTickRateManager;
        getAdvancements(): $ServerAdvancementManager;
        registries(): $LayeredRegistryAccess<$RegistryLayer>;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setUsesAuthentication(waitForServer: boolean): void;
        /**
         * Initialises the server and starts it.
         */
        isReady(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isDemo(): boolean;
        registryAccess(): $RegistryAccess$Frozen;
        /**
         * Initialises the server and starts it.
         */
        isSingleplayer(): boolean;
        getResourceManager(): $ResourceManager;
        /**
         * Initialises the server and starts it.
         */
        isPaused(): boolean;
        wrapRunnable(runnable: $Runnable_): $TickTask;
        shouldRun(runnable: $TickTask): boolean;
        getFixerUpper(): $DataFixer;
        getProfileKeySignatureValidator(): $SignatureValidator;
        /**
         * Initialises the server and starts it.
         */
        isPublished(): boolean;
        getGameRules(): $GameRules;
        getScoreboard(): $ServerScoreboard;
        potionBrewing(): $PotionBrewing;
        overworld(): $ServerLevel;
        getData(): $AttachedData<any>;
        serverLinks(): $ServerLinks;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getMotd(): string;
        getWorldScreenshotFile(): ($Path) | undefined;
        reportMisplacedChunk(arg0: $ChunkPos, arg1: $ChunkPos, arg2: $RegionStorageInfo_): void;
        /**
         * Initialises the server and starts it.
         */
        alwaysAccepts(): boolean;
        sendPacket(...arg0: $CustomPacketPayload_[]): void;
        getLevel(dimension: $ResourceLocation_): $ServerLevel;
        getAdvancement(id: $ResourceLocation_): $AdvancementNode;
        getPlayer(selector: $PlayerSelector_): $ServerPlayer;
        self(): $MinecraftServer;
        getName(): $Component;
        tell(component: $Component_): void;
        setStatusMessage(component: $Component_): void;
        /**
         * Runs the specified console command.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(serverId: string): void;
        /**
         * Runs the specified console command. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(serverId: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
        getMcEntities(): $Iterable<$Entity>;
        getEntityByUUID(id: $UUID_): $Entity;
        getEntityByNetworkID(id: number): $Entity;
        getMcPlayers(): $List<$Player>;
        getPlayers(): $EntityArrayList;
        sendData(channel: string, data: $CompoundTag_): void;
        sendData(serverId: string): void;
        scheduleInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeating(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeatingInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        schedule(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        getEntities(): $EntityArrayList;
        getDisplayName(): $Component;
        catnip$getStorageSource(): $LevelStorageSource$LevelStorageAccess;
        getServerThread(): $Thread;
        invokeLoadFavicon(): ($ServerStatus$Favicon) | undefined;
        setFavicon(arg0: $ServerStatus$Favicon_): void;
        invokeCreateMetadata(): $ServerStatus;
        setMetadata(arg0: $ServerStatus_): void;
        static VANILLA_BRAND: string;
        proxy: $Proxy;
        static ANONYMOUS_PLAYER_PROFILE: $GameProfile;
        pendingRunnables: $Queue<$TickTask>;
        nextTickTimeNanos: number;
        resources: $MinecraftServer$ReloadableResources;
        worldData: $WorldData;
        services: $Services;
        storageSource: $LevelStorageSource$LevelStorageAccess;
        static ABSOLUTE_MAX_WORLD_SIZE: number;
        static DEMO_SETTINGS: $LevelSettings;
        playerDataStorage: $PlayerDataStorage;
        constructor(serverThread: $Thread, storageSource: $LevelStorageSource$LevelStorageAccess, packRepository: $PackRepository, worldStem: $WorldStem_, proxy: $Proxy, fixerUpper: $DataFixer, services: $Services_, progressListenerFactory: $ChunkProgressListenerFactory_);
    }
    export class $WorldStem extends $Record implements $AutoCloseable {
        dataPackResources(): $ReloadableServerResources;
        handler$dgp000$wover$captureRegistry(arg0: $CloseableResourceManager, arg1: $ReloadableServerResources, arg2: $LayeredRegistryAccess<any>, arg3: $WorldData, arg4: $CallbackInfo): void;
        handler$dgk000$wover$captureResourceManager(arg0: $CloseableResourceManager, arg1: $ReloadableServerResources, arg2: $LayeredRegistryAccess<any>, arg3: $WorldData, arg4: $CallbackInfo): void;
        localvar$dgi000$wover$createWorldStem(arg0: $LayeredRegistryAccess<any>): $LayeredRegistryAccess<any>;
        close(): void;
        resourceManager(): $CloseableResourceManager;
        registries(): $LayeredRegistryAccess<$RegistryLayer>;
        worldData(): $WorldData;
        constructor(arg0: $CloseableResourceManager, arg1: $ReloadableServerResources, arg2: $LayeredRegistryAccess<$RegistryLayer_>, arg3: $WorldData);
    }
    /**
     * Values that may be interpreted as {@link $WorldStem}.
     */
    export type $WorldStem_ = { resourceManager?: $CloseableResourceManager, dataPackResources?: $ReloadableServerResources, registries?: $LayeredRegistryAccess<$RegistryLayer_>, worldData?: $WorldData,  } | [resourceManager?: $CloseableResourceManager, dataPackResources?: $ReloadableServerResources, registries?: $LayeredRegistryAccess<$RegistryLayer_>, worldData?: $WorldData, ];
    export class $ServerScoreboard extends $Scoreboard {
        getObjectiveDisplaySlotCount(objective: $Objective): number;
        setDirty(): void;
        stopTrackingObjective(objective: $Objective): void;
        startTrackingObjective(objective: $Objective): void;
        addDirtyListener(runnable: $Runnable_): void;
        getStartTrackingPackets(objective: $Objective): $List<$Packet<never>>;
        getStopTrackingPackets(objective: $Objective): $List<$Packet<never>>;
        dataFactory(): $SavedData$Factory<$ScoreboardSaveData>;
        static HIDDEN_SCORE_PREFIX: string;
        constructor(server: $MinecraftServer);
    }
    export class $ServerAdvancementManager extends $SimpleJsonResourceReloadListener implements $IdentifiableResourceReloadListener {
        getAllAdvancements(): $Collection<$AdvancementHolder>;
        handler$dhp000$wover$addRuntimeRecipeAdvancements(arg0: $Map_<any, any>, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $CallbackInfo): void;
        get(location: $ResourceLocation_): $AdvancementHolder;
        apply(object: $Map_<$ResourceLocation_, $JsonElement_>, resourceManager: $ResourceManager, profiler: $ProfilerFiller): void;
        tree(): $AdvancementTree;
        getFabricId(): $ResourceLocation;
        getFabricDependencies(): $Collection<any>;
        constructor(registries: $HolderLookup$Provider);
    }
    export class $ServerInfo {
    }
    export interface $ServerInfo {
        getMaxPlayers(): number;
        getServerVersion(): string;
        getPlayerCount(): number;
        getMotd(): string;
    }
    export class $ServerLinks$KnownLinkType extends $Enum<$ServerLinks$KnownLinkType> {
        static values(): $ServerLinks$KnownLinkType[];
        static valueOf(arg0: string): $ServerLinks$KnownLinkType;
        create(uri: $URI): $ServerLinks$Entry;
        static SUPPORT: $ServerLinks$KnownLinkType;
        static FORUMS: $ServerLinks$KnownLinkType;
        static STATUS: $ServerLinks$KnownLinkType;
        static ANNOUNCEMENTS: $ServerLinks$KnownLinkType;
        static COMMUNITY: $ServerLinks$KnownLinkType;
        static BUG_REPORT: $ServerLinks$KnownLinkType;
        static NEWS: $ServerLinks$KnownLinkType;
        static COMMUNITY_GUIDELINES: $ServerLinks$KnownLinkType;
        static FEEDBACK: $ServerLinks$KnownLinkType;
        static WEBSITE: $ServerLinks$KnownLinkType;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerLinks$KnownLinkType>;
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks$KnownLinkType}.
     */
    export type $ServerLinks$KnownLinkType_ = "bug_report" | "community_guidelines" | "support" | "status" | "feedback" | "community" | "website" | "forums" | "news" | "announcements";
    export class $ReloadableServerResources implements $ReloadableServerResourcesKJS {
        getCommands(): $Commands;
        getRegistryLookup(): $HolderLookup$Provider;
        getFunctionLibrary(): $ServerFunctionLibrary;
        updateRegistryTags(): void;
        static loadResources(resourceManager: $ResourceManager, registries: $LayeredRegistryAccess<$RegistryLayer_>, enabledFeatures: $FeatureFlagSet, commandSelection: $Commands$CommandSelection_, functionCompilationLevel: number, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<$ReloadableServerResources>;
        getConditionContext(): $ICondition$IContext;
        kjs$getTagManager(): $TagManager;
        kjs$getServerScriptManager(): $ServerScriptManager;
        listeners(): $List<$PreparableReloadListener>;
        fullRegistries(): $ReloadableServerRegistries$Holder;
        getRecipeManager(): $RecipeManager;
        getAdvancements(): $ServerAdvancementManager;
    }
    export class $ServerTickRateManager extends $TickRateManager {
        isSprinting(): boolean;
        checkShouldSprintThisTick(): boolean;
        endTickWork(): void;
        stepGameIfPaused(sprintTime: number): boolean;
        stopStepping(): boolean;
        stopSprinting(): boolean;
        requestGameToSprint(sprintTime: number): boolean;
        updateJoiningPlayer(player: $ServerPlayer): void;
        static MIN_TICKRATE: number;
        runGameElements: boolean;
        constructor(server: $MinecraftServer);
    }
    export class $ServerLinks extends $Record {
        untrust(): $List<$ServerLinks$UntrustedEntry>;
        findKnownType(type: $ServerLinks$KnownLinkType_): ($ServerLinks$Entry) | undefined;
        isEmpty(): boolean;
        entries(): $List<$ServerLinks$Entry>;
        static UNTRUSTED_LINKS_STREAM_CODEC: $StreamCodec<$ByteBuf, $List<$ServerLinks$UntrustedEntry>>;
        static TYPE_STREAM_CODEC: $StreamCodec<$ByteBuf, $Either<$ServerLinks$KnownLinkType, $Component>>;
        static EMPTY: $ServerLinks;
        constructor(arg0: $List_<$ServerLinks$Entry_>);
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks}.
     */
    export type $ServerLinks_ = { entries?: $List_<$ServerLinks$Entry_>,  } | [entries?: $List_<$ServerLinks$Entry_>, ];
    export class $TickTask implements $Runnable {
        /**
         * Get the server time when this task was scheduled
         */
        getTick(): number;
        run(): void;
        constructor(tick: number, runnable: $Runnable_);
    }
    export class $ServerLinks$Entry extends $Record {
        link(): $URI;
        type(): $Either<$ServerLinks$KnownLinkType, $Component>;
        displayName(): $Component;
        static knownType(type: $ServerLinks$KnownLinkType_, link: $URI): $ServerLinks$Entry;
        static custom(type: $Component_, link: $URI): $ServerLinks$Entry;
        constructor(arg0: $Either<$ServerLinks$KnownLinkType_, $Component_>, arg1: $URI);
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks$Entry}.
     */
    export type $ServerLinks$Entry_ = { type?: $Either<$ServerLinks$KnownLinkType_, $Component_>, link?: $URI,  } | [type?: $Either<$ServerLinks$KnownLinkType_, $Component_>, link?: $URI, ];
    export class $WorldLoader$PackConfig extends $Record {
        packRepository(): $PackRepository;
        initialDataConfig(): $WorldDataConfiguration;
        initMode(): boolean;
        createResourceManager(): $Pair<$WorldDataConfiguration, $CloseableResourceManager>;
        safeMode(): boolean;
        constructor(packRepository: $PackRepository, initialDataConfig: $WorldDataConfiguration_, safeMode: boolean, initMode: boolean);
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$PackConfig}.
     */
    export type $WorldLoader$PackConfig_ = { safeMode?: boolean, initialDataConfig?: $WorldDataConfiguration_, packRepository?: $PackRepository, initMode?: boolean,  } | [safeMode?: boolean, initialDataConfig?: $WorldDataConfiguration_, packRepository?: $PackRepository, initMode?: boolean, ];
    export class $MinecraftServer$ServerResourcePackInfo extends $Record {
        prompt(): $Component;
        hash(): string;
        url(): string;
        id(): $UUID;
        isRequired(): boolean;
        constructor(id: $UUID_, url: string, hash: string, isRequired: boolean, prompt: $Component_ | null);
    }
    /**
     * Values that may be interpreted as {@link $MinecraftServer$ServerResourcePackInfo}.
     */
    export type $MinecraftServer$ServerResourcePackInfo_ = { prompt?: $Component_, isRequired?: boolean, url?: string, hash?: string, id?: $UUID_,  } | [prompt?: $Component_, isRequired?: boolean, url?: string, hash?: string, id?: $UUID_, ];
    export class $ServerLinks$UntrustedEntry extends $Record {
        link(): string;
        type(): $Either<$ServerLinks$KnownLinkType, $Component>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerLinks$UntrustedEntry>;
        constructor(arg0: $Either<$ServerLinks$KnownLinkType_, $Component_>, arg1: string);
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks$UntrustedEntry}.
     */
    export type $ServerLinks$UntrustedEntry_ = { type?: $Either<$ServerLinks$KnownLinkType_, $Component_>, link?: string,  } | [type?: $Either<$ServerLinks$KnownLinkType_, $Component_>, link?: string, ];
    export class $Services extends $Record {
        servicesKeySet(): $ServicesKeySet;
        profileKeySignatureValidator(): $SignatureValidator;
        profileRepository(): $GameProfileRepository;
        static create(authenticationService: $YggdrasilAuthenticationService, profileRepository: $File_): $Services;
        sessionService(): $MinecraftSessionService;
        profileCache(): $GameProfileCache;
        canValidateProfileKeys(): boolean;
        constructor(arg0: $MinecraftSessionService, arg1: $ServicesKeySet_, arg2: $GameProfileRepository_, arg3: $GameProfileCache);
    }
    /**
     * Values that may be interpreted as {@link $Services}.
     */
    export type $Services_ = { sessionService?: $MinecraftSessionService, servicesKeySet?: $ServicesKeySet_, profileCache?: $GameProfileCache, profileRepository?: $GameProfileRepository_,  } | [sessionService?: $MinecraftSessionService, servicesKeySet?: $ServicesKeySet_, profileCache?: $GameProfileCache, profileRepository?: $GameProfileRepository_, ];
    export class $ServerFunctionManager implements $IProfilingServerFunctionManager {
        mfix$getProfilingResults(): string;
        getFunctionNames(): $Iterable<$ResourceLocation>;
        replaceLibrary(reloader: $ServerFunctionLibrary): void;
        getGameLoopSender(): $CommandSourceStack;
        getTagNames(): $Iterable<$ResourceLocation>;
        getTag(functionTagIdentifier: $ResourceLocation_): $Collection<$CommandFunction<$CommandSourceStack>>;
        get(functionIdentifier: $ResourceLocation_): ($CommandFunction<$CommandSourceStack>) | undefined;
        execute(_function: $CommandFunction<$CommandSourceStack>, source: $CommandSourceStack): void;
        tick(): void;
        getDispatcher(): $CommandDispatcher<$CommandSourceStack>;
        constructor(server: $MinecraftServer, library: $ServerFunctionLibrary);
    }
}
