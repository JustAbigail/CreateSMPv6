import { $HTTPResponse } from "@package/dev/latvian/apps/tinyserver/http/response";
import { $JsonObject_, $JsonObject, $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $Event } from "@package/net/neoforged/bus/api";
import { $Logger } from "@package/org/slf4j";
import { $WSHandler } from "@package/dev/latvian/apps/tinyserver/ws";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Pattern } from "@package/java/util/regex";
import { $List, $Collection, $Map, $Set } from "@package/java/util";
import { $NativeEventWrapper$Listeners, $NativeEventWrapper$Listeners$Key } from "@package/dev/latvian/mods/kubejs/plugin/builtin/wrapper";
import { $WeakReference } from "@package/java/lang/ref";
import { $Predicate, $Predicate_, $Supplier } from "@package/java/util/function";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $Lazy, $LogType, $RegistryAccessContainer, $LogType_ } from "@package/dev/latvian/mods/kubejs/util";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ClassFilter } from "@package/dev/latvian/mods/kubejs/plugin";
import { $Thread, $Throwable, $Enum, $Record, $Class, $Runnable_, $Comparable, $Object, $Runnable } from "@package/java/lang";
import { $KJSHTTPRequest, $KJSWSSession } from "@package/dev/latvian/mods/kubejs/web";
import { $Context, $ContextFactory } from "@package/dev/latvian/mods/rhino";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as data from "@package/dev/latvian/mods/kubejs/script/data";

declare module "@package/dev/latvian/mods/kubejs/script" {
    export class $SourceLine extends $Record {
        isUnknown(): boolean;
        static of(): $SourceLine;
        static of(source: string, line: number): $SourceLine;
        line(): number;
        source(): string;
        static write(buf: $FriendlyByteBuf, sourceLine: $SourceLine_): void;
        static read(buf: $FriendlyByteBuf): $SourceLine;
        static fromJson(json: $JsonObject_): $SourceLine;
        toJson(): $JsonObject;
        static UNKNOWN: $SourceLine;
        constructor(source: string, line: number);
    }
    /**
     * Values that may be interpreted as {@link $SourceLine}.
     */
    export type $SourceLine_ = { source?: string, line?: number,  } | [source?: string, line?: number, ];
    export class $ScriptManager {
        loadFromDirectory(): void;
        collectScripts(pack: $ScriptPack, dir: $Path_, path: string): void;
        loadPackFromDirectory(path: $Path_, name: string, exampleFile: boolean): void;
        loadAdditional(): void;
        isClassAllowed(name: string): boolean;
        reload(): void;
        unload(): void;
        getRegistries(): $RegistryAccessContainer;
        scriptType: $ScriptType;
        canListenEvents: boolean;
        packs: $Map<string, $ScriptPack>;
        contextFactory: $KubeJSContextFactory;
        constructor(t: $ScriptType_);
    }
    export class $ScriptPackInfo {
        displayName: $Component;
        namespace: string;
        pathStart: string;
        scripts: $List<$ScriptFileInfo>;
        constructor(n: string, p: string);
    }
    export class $KubeJSFileWatcherThread extends $Thread {
        reload: $Runnable;
        scriptType: $ScriptType;
        static MIN_PRIORITY: number;
        files: $ScriptFile[];
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(scriptType: $ScriptType_, files: $ScriptFile[], reload: $Runnable_);
    }
    export class $WithScriptContext {
    }
    export interface $WithScriptContext {
        cx(): $Context;
    }
    /**
     * Values that may be interpreted as {@link $WithScriptContext}.
     */
    export type $WithScriptContext_ = (() => $Context);
    export class $ConsoleLine implements $Supplier<$JsonElement> {
        withExternalFile(path: $Path_): $ConsoleLine;
        customData(key: string, data: $JsonElement_, override: boolean): $ConsoleLine;
        withSourceLine(sourceLine: $SourceLine_): $ConsoleLine;
        withSourceLine(source: string, line: number): $ConsoleLine;
        get(): $JsonElement;
        toJson(): $JsonObject;
        getText(): string;
        console: $ConsoleJS;
        static EMPTY_ARRAY: $ConsoleLine[];
        sourceLines: $Collection<$SourceLine>;
        externalFile: $Path;
        stackTrace: $List<string>;
        message: string;
        type: $LogType;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ConsoleLine>;
        timestamp: number;
        group: string;
        constructor(console: $ConsoleJS, timestamp: number, message: string);
    }
    export class $PlatformWrapper$ModInfo {
        getCustomName(): string;
        getVersion(): string;
        getName(): string;
        setName(n: string): void;
        getId(): string;
        constructor(i: string);
    }
    export class $ScriptFile implements $Comparable<$ScriptFile> {
        skipLoading(): string;
        getProperty(s: string, def: string): string;
        compareTo(o: $ScriptFile): number;
        load(): void;
        getProperties(s: string): $List<string>;
        getPriority(): number;
        lastModified: number;
        lines: string[];
        pack: $ScriptPack;
        info: $ScriptFileInfo;
        constructor(pack: $ScriptPack, info: $ScriptFileInfo);
    }
    export class $PlatformWrapper {
        static getMcVersion(): string;
        static breakpoint(...args: $Object[]): void;
        static setModName(modId: string, name: string): void;
        static getMinecraftVersionString(): string;
        static getCurrentThreadName(): string;
        static getPackMode(): string;
        static getInfo(modID: string): $PlatformWrapper$ModInfo;
        static isGeneratingData(): boolean;
        /**
         * @deprecated
         */
        static getName(): string;
        static isLoaded(modId: string): boolean;
        static getList(): $Set<string>;
        static getMods(): $Map<string, $PlatformWrapper$ModInfo>;
        static isDevelopmentEnvironment(): boolean;
        static isClientEnvironment(): boolean;
        static getModVersion(): string;
        /**
         * @deprecated
         */
        static isForge(): boolean;
        /**
         * @deprecated
         */
        static isFabric(): boolean;
        static getMinecraftVersion(): number;
        constructor();
    }
    export class $ScriptPack {
        manager: $ScriptManager;
        scripts: $List<$ScriptFile>;
        info: $ScriptPackInfo;
        constructor(m: $ScriptManager, i: $ScriptPackInfo);
    }
    export class $ScriptType extends $Enum<$ScriptType> implements $ScriptTypePredicate, $ScriptTypeHolder {
        getLogFile(): $Path;
        isStartup(): boolean;
        getValidTypes(): $List<$ScriptType>;
        static values(): $ScriptType[];
        test(type: $ScriptType_): boolean;
        static valueOf(name: string): $ScriptType;
        isClient(): boolean;
        isServer(): boolean;
        kjs$getScriptType(): $ScriptType;
        or(arg0: $Predicate_<$ScriptType>): $Predicate<$ScriptType>;
        and(arg0: $Predicate_<$ScriptType>): $Predicate<$ScriptType>;
        negate(): $Predicate<$ScriptType>;
        console: $ConsoleJS;
        path: $Path;
        nativeEventListeners: $Map<$NativeEventWrapper$Listeners$Key, $NativeEventWrapper$Listeners>;
        static SERVER: $ScriptType;
        fileWatcherThread: $KubeJSFileWatcherThread;
        static VALUES: $ScriptType[];
        static STARTUP: $ScriptType;
        classFilter: $Lazy<$ClassFilter>;
        static CLIENT: $ScriptType;
        nameStrip: string;
    }
    /**
     * Values that may be interpreted as {@link $ScriptType}.
     */
    export type $ScriptType_ = "startup" | "server" | "client";
    export class $ScriptTypePredicate {
        static ALL: $ScriptTypePredicate;
        static STARTUP_OR_CLIENT: $ScriptTypePredicate;
        static COMMON: $ScriptTypePredicate;
        static STARTUP_OR_SERVER: $ScriptTypePredicate;
    }
    export interface $ScriptTypePredicate extends $Predicate<$ScriptType> {
        getValidTypes(): $List<$ScriptType>;
        test(type: $ScriptType_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ScriptTypePredicate}.
     */
    export type $ScriptTypePredicate_ = ((type: $ScriptType) => boolean);
    export class $KubeJSContextFactory extends $ContextFactory {
        manager: $ScriptManager;
        constructor(manager: $ScriptManager);
    }
    export class $ConsoleJS {
        static getCurrent(): $ConsoleJS;
        shouldPrintDebug(): boolean;
        static methodPattern(c: $Class<never>, method: string): $Pattern;
        setMuted(m: boolean): void;
        getMuted(): boolean;
        getDebugEnabled(): boolean;
        setWriteToFile(m: boolean): void;
        getWriteToFile(): boolean;
        infof(message: string, ...args: $Object[]): $ConsoleLine;
        warnf(message: string, ...args: $Object[]): $ConsoleLine;
        errorf(message: string, ...args: $Object[]): $ConsoleLine;
        debugf(message: string, ...args: $Object[]): $ConsoleLine;
        getScriptLine(): number;
        errorsComponent(command: string): $Component;
        getErrorsResponse(ctx: $KJSHTTPRequest): $HTTPResponse;
        getWarningsResponse(ctx: $KJSHTTPRequest): $HTTPResponse;
        resetFile(): void;
        printClass(className: string, tree: boolean): void;
        printClass(className: string): void;
        startCapturingErrors(): void;
        groupEnd(): void;
        group(): void;
        log(...message: $Object[]): void;
        flush(sync: boolean): void;
        info(message: $Object): $ConsoleLine;
        getLogger(): $Logger;
        trace(): void;
        debug(message: $Object): $ConsoleLine;
        error(message: $Object): $ConsoleLine;
        error(message: string, throwable: $Throwable): $ConsoleLine;
        error(message: string, error: $Throwable, exitPattern: $Pattern): $ConsoleLine;
        error(message: string, sourceLine: $SourceLine_, error: $Throwable, exitPattern: $Pattern): $ConsoleLine;
        warn(message: string, error: $Throwable): $ConsoleLine;
        warn(message: string, sourceLine: $SourceLine_, error: $Throwable, exitPattern: $Pattern): $ConsoleLine;
        warn(message: string, error: $Throwable, exitPattern: $Pattern): $ConsoleLine;
        warn(message: $Object): $ConsoleLine;
        writeToFile(type: $LogType_, line: string): void;
        writeToFile(type: $LogType_, timestamp: number, line: string): void;
        printObject(o: $Object): void;
        printObject(o: $Object, tree: boolean): void;
        handleError(line: $ConsoleLine, error: $Throwable, exitPattern: $Pattern, print: boolean): void;
        setDebugEnabled(m: boolean): void;
        stopCapturingErrors(): void;
        static SERVER: $ConsoleJS;
        scriptType: $ScriptType;
        static STARTUP: $ConsoleJS;
        wsBroadcaster: $WSHandler<$KJSHTTPRequest, $KJSWSSession>;
        static CLIENT: $ConsoleJS;
        contextFactory: $WeakReference<$ContextFactory>;
        constructor(m: $ScriptType_, log: $Logger);
    }
    export class $ScriptFileInfo {
        path: $Path;
        file: string;
        location: string;
        id: $ResourceLocation;
        pack: $ScriptPackInfo;
        locationPath: string;
        constructor(p: $ScriptPackInfo, ph: $Path_, f: string);
    }
    export class $ScriptTypeHolder {
    }
    export interface $ScriptTypeHolder {
        kjs$getScriptType(): $ScriptType;
    }
    /**
     * Values that may be interpreted as {@link $ScriptTypeHolder}.
     */
    export type $ScriptTypeHolder_ = (() => $ScriptType_);
    export class $ScriptsLoadedEvent extends $Event {
        constructor();
    }
}
