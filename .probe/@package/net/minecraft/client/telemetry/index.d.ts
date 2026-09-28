import { $GameType_, $Level_ } from "@package/net/minecraft/world/level";
import { $LongList } from "@package/it/unimi/dsi/fastutil/longs";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $Minecraft, $User } from "@package/net/minecraft/client";
import { $UUID, $List, $Map_, $Map, $Set, $List_ } from "@package/java/util";
import { $GameLoadTimesEvent$Measurement } from "@package/net/minecraft/client/telemetry/events";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Instant, $Duration_ } from "@package/java/time";
import { $AdvancementHolder_ } from "@package/net/minecraft/advancements";
import { $Consumer_, $Consumer } from "@package/java/util/function";
import { $Path } from "@package/java/nio/file";
import { $Enum, $Record, $Object, $AutoCloseable } from "@package/java/lang";
import { $TelemetrySession, $TelemetryPropertyContainer, $UserApiService, $TelemetryEvent } from "@package/com/mojang/authlib/minecraft";
export * as events from "@package/net/minecraft/client/telemetry/events";

declare module "@package/net/minecraft/client/telemetry" {
    export class $ClientTelemetryManager implements $AutoCloseable {
        createWorldSessionManager(newWorld: boolean, worldLoadDuration: $Duration_ | null, minigameName: string | null): $WorldSessionTelemetryManager;
        getLogDirectory(): $Path;
        close(): void;
        getOutsideSessionSender(): $TelemetryEventSender;
        constructor(minecraft: $Minecraft, userApiService: $UserApiService, user: $User);
    }
    export class $TelemetryProperty$ServerType extends $Enum<$TelemetryProperty$ServerType> implements $StringRepresentable {
        static values(): $TelemetryProperty$ServerType[];
        static valueOf(arg0: string): $TelemetryProperty$ServerType;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static OTHER: $TelemetryProperty$ServerType;
        static CODEC: $Codec<$TelemetryProperty$ServerType>;
        static LOCAL: $TelemetryProperty$ServerType;
        static REALM: $TelemetryProperty$ServerType;
    }
    /**
     * Values that may be interpreted as {@link $TelemetryProperty$ServerType}.
     */
    export type $TelemetryProperty$ServerType_ = "realm" | "local" | "server";
    export class $TelemetryProperty$GameMode extends $Enum<$TelemetryProperty$GameMode> implements $StringRepresentable {
        static values(): $TelemetryProperty$GameMode[];
        static valueOf(arg0: string): $TelemetryProperty$GameMode;
        id(): number;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static SURVIVAL: $TelemetryProperty$GameMode;
        static SPECTATOR: $TelemetryProperty$GameMode;
        static CODEC: $Codec<$TelemetryProperty$GameMode>;
        static CREATIVE: $TelemetryProperty$GameMode;
        static ADVENTURE: $TelemetryProperty$GameMode;
        static HARDCORE: $TelemetryProperty$GameMode;
    }
    /**
     * Values that may be interpreted as {@link $TelemetryProperty$GameMode}.
     */
    export type $TelemetryProperty$GameMode_ = "survival" | "creative" | "adventure" | "spectator" | "hardcore";
    export class $WorldSessionTelemetryManager {
        worldSessionStart(): void;
        onAdvancementDone(level: $Level_, advancement: $AdvancementHolder_): void;
        onPlayerInfoReceived(gameType: $GameType_, isHardcore: boolean): void;
        onServerBrandReceived(serverBrand: string): void;
        setTime(time: number): void;
        tick(): void;
        onDisconnect(): void;
        constructor(sender: $TelemetryEventSender_, newWorld: boolean, worldLoadDuration: $Duration_ | null, minigameName: string | null);
    }
    export class $TelemetryEventType {
        isOptIn(): boolean;
        "export"(session: $TelemetrySession, propertyMap: $TelemetryPropertyMap): $TelemetryEvent;
        static values(): $List<$TelemetryEventType>;
        static builder(id: string, exportKey: string): $TelemetryEventType$Builder;
        contains<T>(property: $TelemetryProperty_<T>): boolean;
        id(): string;
        properties(): $List<$TelemetryProperty<never>>;
        description(): $MutableComponent;
        title(): $MutableComponent;
        codec(): $MapCodec<$TelemetryEventInstance>;
        static CODEC: $Codec<$TelemetryEventType>;
        static WORLD_LOADED: $TelemetryEventType;
        static ADVANCEMENT_MADE: $TelemetryEventType;
        static WORLD_UNLOADED: $TelemetryEventType;
        static PERFORMANCE_METRICS: $TelemetryEventType;
        static GAME_LOAD_TIMES: $TelemetryEventType;
        static REGISTRY: $Map<string, $TelemetryEventType>;
        static WORLD_LOAD_TIMES: $TelemetryEventType;
        constructor(id: string, exportKey: string, properties: $List_<$TelemetryProperty_<never>>, isOptIn: boolean);
    }
    export class $TelemetryEventInstance extends $Record {
        "export"(session: $TelemetrySession): $TelemetryEvent;
        type(): $TelemetryEventType;
        properties(): $TelemetryPropertyMap;
        static CODEC: $Codec<$TelemetryEventInstance>;
        constructor(arg0: $TelemetryEventType, arg1: $TelemetryPropertyMap);
    }
    /**
     * Values that may be interpreted as {@link $TelemetryEventInstance}.
     */
    export type $TelemetryEventInstance_ = { properties?: $TelemetryPropertyMap, type?: $TelemetryEventType,  } | [properties?: $TelemetryPropertyMap, type?: $TelemetryEventType, ];
    export class $TelemetryEventType$Builder {
        defineAll(properties: $List_<$TelemetryProperty_<never>>): $TelemetryEventType$Builder;
        register(): $TelemetryEventType;
        define<T>(property: $TelemetryProperty_<T>): $TelemetryEventType$Builder;
        optIn(): $TelemetryEventType$Builder;
        constructor(id: string, exportKey: string);
    }
    export class $TelemetryPropertyMap$Builder {
        putIfNotNull<T>(key: $TelemetryProperty_<T>, value: T | null): $TelemetryPropertyMap$Builder;
        put<T>(key: $TelemetryProperty_<T>, value: T): $TelemetryPropertyMap$Builder;
        putAll(propertyMap: $TelemetryPropertyMap): $TelemetryPropertyMap$Builder;
        build(): $TelemetryPropertyMap;
        constructor();
    }
    export class $TelemetryEventSender {
        static DISABLED: $TelemetryEventSender;
    }
    export interface $TelemetryEventSender {
        send(eventType: $TelemetryEventType, arg1: $Consumer_<$TelemetryPropertyMap$Builder>): void;
        decorate(arg0: $Consumer_<$TelemetryPropertyMap$Builder>): $TelemetryEventSender;
    }
    /**
     * Values that may be interpreted as {@link $TelemetryEventSender}.
     */
    export type $TelemetryEventSender_ = ((arg0: $TelemetryEventType, arg1: $Consumer<$TelemetryPropertyMap$Builder>) => void);
    export class $TelemetryProperty$Exporter<T> {
    }
    export interface $TelemetryProperty$Exporter<T> {
        apply(container: $TelemetryPropertyContainer, arg1: string, arg2: T): void;
    }
    /**
     * Values that may be interpreted as {@link $TelemetryProperty$Exporter}.
     */
    export type $TelemetryProperty$Exporter_<T> = ((arg0: $TelemetryPropertyContainer, arg1: string, arg2: T) => void);
    export class $TelemetryProperty<T> extends $Record {
        "export"(propertyMap: $TelemetryPropertyMap, container: $TelemetryPropertyContainer): void;
        id(): string;
        static create<T>(id: string, exportKey: string, codec: $Codec<T>, exporter: $TelemetryProperty$Exporter_<T>): $TelemetryProperty<T>;
        static makeLong(id: string, exportKey: string): $TelemetryProperty<number>;
        static string(id: string, exportKey: string): $TelemetryProperty<string>;
        static bool(id: string, exportKey: string): $TelemetryProperty<boolean>;
        static integer(id: string, exportKey: string): $TelemetryProperty<number>;
        static uuid(id: string, exportKey: string): $TelemetryProperty<$UUID>;
        title(): $MutableComponent;
        codec(): $Codec<T>;
        exporter(): $TelemetryProperty$Exporter<T>;
        static gameLoadMeasurement(id: string, exportKey: string): $TelemetryProperty<$GameLoadTimesEvent$Measurement>;
        static longSamples(id: string, exportKey: string): $TelemetryProperty<$LongList>;
        exportKey(): string;
        static RENDER_TIME_SAMPLES: $TelemetryProperty<$LongList>;
        static LOAD_TIME_BOOTSTRAP_MS: $TelemetryProperty<$GameLoadTimesEvent$Measurement>;
        static USED_MEMORY_SAMPLES: $TelemetryProperty<$LongList>;
        static LOAD_TIME_TOTAL_TIME_MS: $TelemetryProperty<$GameLoadTimesEvent$Measurement>;
        static GAME_VERSION: $TelemetryProperty<string>;
        static EVENT_TIMESTAMP_UTC: $TelemetryProperty<$Instant>;
        static USER_ID: $TelemetryProperty<string>;
        static OPT_IN: $TelemetryProperty<boolean>;
        static WORLD_SESSION_ID: $TelemetryProperty<$UUID>;
        static MINECRAFT_SESSION_ID: $TelemetryProperty<$UUID>;
        static DEDICATED_MEMORY_KB: $TelemetryProperty<number>;
        static PLATFORM: $TelemetryProperty<string>;
        static GAME_MODE: $TelemetryProperty<$TelemetryProperty$GameMode>;
        static CLIENT_ID: $TelemetryProperty<string>;
        static TICKS_SINCE_LOAD: $TelemetryProperty<number>;
        static SECONDS_SINCE_LOAD: $TelemetryProperty<number>;
        static SERVER_MODDED: $TelemetryProperty<boolean>;
        static OPERATING_SYSTEM: $TelemetryProperty<string>;
        static ADVANCEMENT_GAME_TIME: $TelemetryProperty<number>;
        static CLIENT_MODDED: $TelemetryProperty<boolean>;
        static NUMBER_OF_SAMPLES: $TelemetryProperty<number>;
        static LAUNCHER_NAME: $TelemetryProperty<string>;
        static NEW_WORLD: $TelemetryProperty<boolean>;
        static SERVER_TYPE: $TelemetryProperty<$TelemetryProperty$ServerType>;
        static REALMS_MAP_CONTENT: $TelemetryProperty<string>;
        static RENDER_DISTANCE: $TelemetryProperty<number>;
        static LOAD_TIME_PRE_WINDOW_MS: $TelemetryProperty<$GameLoadTimesEvent$Measurement>;
        static ADVANCEMENT_ID: $TelemetryProperty<string>;
        static LOAD_TIME_LOADING_OVERLAY_MS: $TelemetryProperty<$GameLoadTimesEvent$Measurement>;
        static FRAME_RATE_SAMPLES: $TelemetryProperty<$LongList>;
        static WORLD_LOAD_TIME_MS: $TelemetryProperty<number>;
        constructor(arg0: string, arg1: string, arg2: $Codec<T>, arg3: $TelemetryProperty$Exporter_<T>);
    }
    /**
     * Values that may be interpreted as {@link $TelemetryProperty}.
     */
    export type $TelemetryProperty_<T> = { codec?: $Codec<any>, exporter?: $TelemetryProperty$Exporter_<any>, exportKey?: string, id?: string,  } | [codec?: $Codec<any>, exporter?: $TelemetryProperty$Exporter_<any>, exportKey?: string, id?: string, ];
    export class $TelemetryPropertyMap {
        propertySet(): $Set<$TelemetryProperty<never>>;
        get<T>(key: $TelemetryProperty_<T>): T;
        static builder(): $TelemetryPropertyMap$Builder;
        static createCodec(properties: $List_<$TelemetryProperty_<never>>): $MapCodec<$TelemetryPropertyMap>;
        entries: $Map<$TelemetryProperty<never>, $Object>;
        constructor(entries: $Map_<$TelemetryProperty_<never>, $Object>);
    }
}
