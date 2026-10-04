import { $Function1_, $Function0 } from "@package/kotlin/jvm/functions";
import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $MutableState, $State, $State_ } from "@package/gg/essential/gui/elementa/state/v2";
import { $ReferenceHolder_ } from "@package/gg/essential/elementa/state/v2";
import { $Continuation } from "@package/kotlin/coroutines";
import { $CoroutineDispatcher, $CoroutineScope } from "@package/kotlinx/coroutines";
import { $UUID, $Map_, $Set, $Set_ } from "@package/java/util";
import { $IntegratedServer } from "@package/net/minecraft/client/server";
import { $UIdentifier } from "@package/gg/essential/util";
import { $Instant } from "@package/java/time";
import { $MutableTrackedList, $TrackedList } from "@package/gg/essential/gui/elementa/state/v2/collections";
import { $Path } from "@package/java/nio/file";
import { $EnumEntries } from "@package/kotlin/enums";
import { $Enum, $Object } from "@package/java/lang";
import { $Unit } from "@package/kotlin";

declare module "@package/gg/essential/sps" {
    export class $IntegratedServerManager {
    }
    export interface $IntegratedServerManager {
        getLastPlayed(): $Instant;
        getThirdPartyVoicePort(): $State<number>;
        getCoroutineScope(): $CoroutineScope;
        getOpenToLan(): $State<boolean>;
        getWhitelist(): $State<$Set<$UUID>>;
        getMaxPlayers(): $State<number>;
        setWhitelistSource(arg0: $State_<$Set<$UUID>>): void;
        setOpsSource(arg0: $State_<$Set<$UUID>>): void;
        setResourcePackSource(arg0: $State_<$IntegratedServerManager$ServerResourcePack>): void;
        setDifficultySource(arg0: $MutableState<$IntegratedServerManager$Difficulty_>): void;
        setDifficultyLockedSource(arg0: $MutableState<boolean>): void;
        setDefaultGameModeSource(arg0: $MutableState<$IntegratedServerManager$GameMode_>): void;
        setGameRulesSource(arg0: $IntegratedServerManager$SuspendingMutableState<$Map_<$UIdentifier, string>>): void;
        setCheatsEnabledSource(arg0: $State_<boolean>): void;
        getWorldFolder(): $Path;
        getServerPort(): $State<number>;
        getConnectedGuests(): $State<$TrackedList<$UUID>>;
        getServerDispatcher(): $CoroutineDispatcher;
        getStatusResponseJson(): $State<string>;
        setOpenToLanSource(arg0: $State_<boolean>): void;
        getConnectedPlayers(): $State<$TrackedList<$UUID>>;
        get lastPlayed(): $Instant;
        get thirdPartyVoicePort(): $State<number>;
        get coroutineScope(): $CoroutineScope;
        get openToLan(): $State<boolean>;
        get whitelist(): $State<$Set<$UUID>>;
        get maxPlayers(): $State<number>;
        set whitelistSource(value: $State_<$Set<$UUID>>);
        set opsSource(value: $State_<$Set<$UUID>>);
        set resourcePackSource(value: $State_<$IntegratedServerManager$ServerResourcePack>);
        set difficultySource(value: $MutableState<$IntegratedServerManager$Difficulty_>);
        set difficultyLockedSource(value: $MutableState<boolean>);
        set defaultGameModeSource(value: $MutableState<$IntegratedServerManager$GameMode_>);
        set gameRulesSource(value: $IntegratedServerManager$SuspendingMutableState<$Map_<$UIdentifier, string>>);
        set cheatsEnabledSource(value: $State_<boolean>);
        get worldFolder(): $Path;
        get serverPort(): $State<number>;
        get connectedGuests(): $State<$TrackedList<$UUID>>;
        get serverDispatcher(): $CoroutineDispatcher;
        get statusResponseJson(): $State<string>;
        set openToLanSource(value: $State_<boolean>);
        get connectedPlayers(): $State<$TrackedList<$UUID>>;
    }
    export class $McIntegratedServerManager implements $IntegratedServerManager {
        getLastPlayed(): $Instant;
        getThirdPartyVoicePort(): $MutableState<number>;
        getCoroutineScope(): $CoroutineScope;
        getOpenToLan(): $State<boolean>;
        getWhitelist(): $State<$Set<$UUID>>;
        updateServerStatusResponse(statusJson: string): void;
        getMaxPlayers(): $MutableState<number>;
        getAppliedServerResourcePack(): ($IntegratedServerManager$ServerResourcePack) | undefined;
        setWhitelistSource(source: $State_<$Set<$UUID>>): void;
        setOpsSource(source: $State_<$Set<$UUID>>): void;
        setResourcePackSource(source: $State_<$IntegratedServerManager$ServerResourcePack>): void;
        setDifficultySource(source: $MutableState<$IntegratedServerManager$Difficulty_>): void;
        setDifficultyLockedSource(source: $MutableState<boolean>): void;
        setDefaultGameModeSource(source: $MutableState<$IntegratedServerManager$GameMode_>): void;
        setGameRulesSource(source: $IntegratedServerManager$SuspendingMutableState<$Map_<$UIdentifier, string>>): void;
        setCheatsEnabledSource(source: $State_<boolean>): void;
        getWorldFolder(): $Path;
        getConnectedGuests(): $State<$TrackedList<$UUID>>;
        getServerDispatcher(): $CoroutineDispatcher;
        getStatusResponseJson(): $State<string>;
        setAppliedServerResourcePack(arg0: ($IntegratedServerManager$ServerResourcePack) | undefined): void;
        setAppliedCheatsEnabled(arg0: boolean): void;
        getAppliedOpenToLan(): boolean;
        setAppliedOpenToLan(arg0: boolean): void;
        isDifficultyControlledByState(): boolean;
        setDifficultyControlledByState(arg0: boolean): void;
        isDifficultyLockedControlledByState(): boolean;
        setDifficultyLockedControlledByState(arg0: boolean): void;
        isDefaultGameModeControlledByState(): boolean;
        setDefaultGameModeControlledByState(arg0: boolean): void;
        setGameRulesControlledByState(arg0: boolean): void;
        setOpenToLanSource(source: $State_<boolean>): void;
        static access$applyWhitelist($this: $McIntegratedServerManager, desiredWhitelist: $Set_<any>, $completion: $Continuation<any>): $Object;
        static access$applyOps($this: $McIntegratedServerManager, desiredOps: $Set_<any>, $completion: $Continuation<any>): $Object;
        static access$getMutableStatusResponseJson$p($this: $McIntegratedServerManager): $MutableState<any>;
        static access$getGameRulesSourceState$p($this: $McIntegratedServerManager): $MutableState<any>;
        static access$getHostUuid$p($this: $McIntegratedServerManager): $UUID;
        isGameRulesControlledByState(): boolean;
        updateServerGameRules(): void;
        updateServerGameRules(changes: $Map_<$UIdentifier, string>): void;
        getAppliedCheatsEnabled(): boolean;
        getConnectedPlayers(): $MutableState<$MutableTrackedList<$UUID>>;
        getServer(): $IntegratedServer;
        getServerPort(): $State<number>;
        static Companion: $McIntegratedServerManager$Companion;
        constructor(server: $IntegratedServer);
        get lastPlayed(): $Instant;
        get thirdPartyVoicePort(): $MutableState<number>;
        get coroutineScope(): $CoroutineScope;
        get openToLan(): $State<boolean>;
        get whitelist(): $State<$Set<$UUID>>;
        get maxPlayers(): $MutableState<number>;
        set whitelistSource(value: $State_<$Set<$UUID>>);
        set opsSource(value: $State_<$Set<$UUID>>);
        set resourcePackSource(value: $State_<$IntegratedServerManager$ServerResourcePack>);
        set difficultySource(value: $MutableState<$IntegratedServerManager$Difficulty_>);
        set difficultyLockedSource(value: $MutableState<boolean>);
        set defaultGameModeSource(value: $MutableState<$IntegratedServerManager$GameMode_>);
        set gameRulesSource(value: $IntegratedServerManager$SuspendingMutableState<$Map_<$UIdentifier, string>>);
        set cheatsEnabledSource(value: $State_<boolean>);
        get worldFolder(): $Path;
        get connectedGuests(): $State<$TrackedList<$UUID>>;
        get serverDispatcher(): $CoroutineDispatcher;
        get statusResponseJson(): $State<string>;
        set openToLanSource(value: $State_<boolean>);
        get connectedPlayers(): $MutableState<$MutableTrackedList<$UUID>>;
        get server(): $IntegratedServer;
        get serverPort(): $State<number>;
    }
    export class $IntegratedServerManager$ServerResourcePack {
        copy(arg0: string, arg1: string): $IntegratedServerManager$ServerResourcePack;
        getUrl(): string;
        getChecksum(): string;
        component1(): string;
        component2(): string;
        static copy$default(arg0: $IntegratedServerManager$ServerResourcePack, arg1: string, arg2: string, arg3: number, arg4: $Object): $IntegratedServerManager$ServerResourcePack;
        constructor(arg0: string, arg1: string);
        get url(): string;
        get checksum(): string;
    }
    export class $IntegratedServerManager$Difficulty$Companion {
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $IntegratedServerManager$GameMode extends $Enum<$IntegratedServerManager$GameMode> {
        static values(): $IntegratedServerManager$GameMode[];
        static valueOf(arg0: string): $IntegratedServerManager$GameMode;
        static getEntries(): $EnumEntries<$IntegratedServerManager$GameMode>;
        static Companion: $IntegratedServerManager$GameMode$Companion;
        static Adventure: $IntegratedServerManager$GameMode;
        static Creative: $IntegratedServerManager$GameMode;
        static Spectator: $IntegratedServerManager$GameMode;
        static Survival: $IntegratedServerManager$GameMode;
        static get entries(): $EnumEntries<$IntegratedServerManager$GameMode>;
    }
    /**
     * Values that may be interpreted as {@link $IntegratedServerManager$GameMode}.
     */
    export type $IntegratedServerManager$GameMode_ = "survival" | "creative" | "adventure" | "spectator";
    export class $IntegratedServerManager$SuspendingMutableState<T> {
        static access$set$jd(arg0: $IntegratedServerManager$SuspendingMutableState<any>, arg1: $Object, arg2: $Continuation<any>): $Object;
        static access$get$jd(arg0: $IntegratedServerManager$SuspendingMutableState<any>): $Object;
        static access$getUntracked$jd(arg0: $IntegratedServerManager$SuspendingMutableState<any>): $Object;
        static access$onSetValue$jd(arg0: $IntegratedServerManager$SuspendingMutableState<any>, arg1: $ReferenceHolder_, arg2: $Function1_<any, any>): $Function0<any>;
        static set$suspendImpl<T>(arg0: $IntegratedServerManager$SuspendingMutableState<T>, arg1: T, arg2: $Continuation<$Unit>): $Object;
    }
    export interface $IntegratedServerManager$SuspendingMutableState<T> extends $State<T> {
        set(arg0: T, arg1: $Continuation<$Unit>): $Object;
        set(arg0: $Function1_<T, T>, arg1: $Continuation<$Unit>): $Object;
    }
    export class $IntegratedServerManager$GameMode$Companion {
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $McIntegratedServerManager$Companion {
        constructor($constructor_marker: $DefaultConstructorMarker);
    }
    export class $IntegratedServerManager$Difficulty extends $Enum<$IntegratedServerManager$Difficulty> {
        static values(): $IntegratedServerManager$Difficulty[];
        static valueOf(arg0: string): $IntegratedServerManager$Difficulty;
        static getEntries(): $EnumEntries<$IntegratedServerManager$Difficulty>;
        static Companion: $IntegratedServerManager$Difficulty$Companion;
        static Easy: $IntegratedServerManager$Difficulty;
        static Peaceful: $IntegratedServerManager$Difficulty;
        static Hard: $IntegratedServerManager$Difficulty;
        static Normal: $IntegratedServerManager$Difficulty;
        static get entries(): $EnumEntries<$IntegratedServerManager$Difficulty>;
    }
    /**
     * Values that may be interpreted as {@link $IntegratedServerManager$Difficulty}.
     */
    export type $IntegratedServerManager$Difficulty_ = "peaceful" | "easy" | "normal" | "hard";
}
