import { $IClaimingModeAPI_ } from "@package/xaero/pac/common/claims/player/mode/api";
import { $Predicate, $BiPredicate, $Function } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $PlayerConfigType } from "@package/xaero/pac/common/server/player/config/api";
import { $IServerPlayerConfigGroupManagerAPI } from "@package/xaero/pac/common/server/player/config/group/api";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Enum, $Class } from "@package/java/lang";
import { $UUID_, $UUID, $List } from "@package/java/util";
import { $IPlayerConfigClientStorageAPI } from "@package/xaero/pac/client/player/config/api";

declare module "@package/xaero/pac/common/server/player/config/api/v2" {
    export class $IPlayerConfigAPI$SetResult extends $Enum<$IPlayerConfigAPI$SetResult> {
        static values(): $IPlayerConfigAPI$SetResult[];
        static valueOf(arg0: string): $IPlayerConfigAPI$SetResult;
        static SUCCESS: $IPlayerConfigAPI$SetResult;
        static ILLEGAL_OPTION: $IPlayerConfigAPI$SetResult;
        static NOT_DIRECTLY_CONFIGURABLE: $IPlayerConfigAPI$SetResult;
        static INVALID: $IPlayerConfigAPI$SetResult;
        static DEFAULTED: $IPlayerConfigAPI$SetResult;
    }
    /**
     * Values that may be interpreted as {@link $IPlayerConfigAPI$SetResult}.
     */
    export type $IPlayerConfigAPI$SetResult_ = "invalid" | "illegal_option" | "defaulted" | "success" | "not_directly_configurable";
    export class $IPlayerConfigManagerAPI {
    }
    export interface $IPlayerConfigManagerAPI {
        getOptionForId(arg0: string): $IPlayerConfigOptionSpecAPI<never>;
        getPartyOwnerConfig(arg0: $UUID_): $IPlayerConfigAPI;
        getServerClaimConfig(): $IPlayerConfigAPI;
        getWildernessConfig(): $IPlayerConfigAPI;
        getDefaultConfig(): $IPlayerConfigAPI;
        getExpiredClaimConfig(): $IPlayerConfigAPI;
        getAllOptionsStream(): $Stream<$IPlayerConfigOptionSpecAPI<never>>;
        getLoadedConfig(arg0: $UUID_ | null): $IPlayerConfigAPI;
        get serverClaimConfig(): $IPlayerConfigAPI;
        get wildernessConfig(): $IPlayerConfigAPI;
        get defaultConfig(): $IPlayerConfigAPI;
        get expiredClaimConfig(): $IPlayerConfigAPI;
        get allOptionsStream(): $Stream<$IPlayerConfigOptionSpecAPI<never>>;
    }
    export class $IPlayerConfigOptionSpecAPI<T> {
    }
    export interface $IPlayerConfigOptionSpecAPI<T> {
        getShortenedId(): string;
        getCommentTranslation(): string;
        getCommentTranslationArgs(): string[];
        getClientSideValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, T>;
        getServerSideValidator(): $BiPredicate<$IPlayerConfigAPI, T>;
        getTooltipPrefix(): string;
        getCommandInputParser(): $Function<string, T>;
        getComponentWriter(): $Function<T, $Component>;
        getConfigTypeFilter(): $Predicate<$PlayerConfigType>;
        isDirectlyConfigurable(): boolean;
        getTranslationArgs(): string[];
        isOverridable(): boolean;
        getId(): string;
        getType(): $Class<T>;
        getDefaultValue(): T;
        getPath(): $List<string>;
        getComment(): string;
        getTranslation(): string;
        get shortenedId(): string;
        get commentTranslation(): string;
        get commentTranslationArgs(): string[];
        get clientSideValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, T>;
        get serverSideValidator(): $BiPredicate<$IPlayerConfigAPI, T>;
        get tooltipPrefix(): string;
        get commandInputParser(): $Function<string, T>;
        get componentWriter(): $Function<T, $Component>;
        get configTypeFilter(): $Predicate<$PlayerConfigType>;
        get directlyConfigurable(): boolean;
        get translationArgs(): string[];
        get overridable(): boolean;
        get id(): string;
        get type(): $Class<T>;
        get defaultValue(): T;
        get path(): $List<string>;
        get comment(): string;
        get translation(): string;
    }
    export class $IPlayerConfigAPI {
    }
    export interface $IPlayerConfigAPI {
        getSubId(): string;
        getPlayerGroups(): $IServerPlayerConfigGroupManagerAPI;
        subConfigExists(arg0: string): boolean;
        subConfigExists(arg0: number): boolean;
        getEffectiveSubConfig(arg0: number): $IPlayerConfigAPI;
        getEffectiveSubConfig(arg0: string): $IPlayerConfigAPI;
        getSubCount(): number;
        getSubConfigLimit(): number;
        getSubConfig(arg0: string): $IPlayerConfigAPI;
        tryToSet<T>(arg0: $IPlayerConfigOptionSpecAPI<T>, arg1: T | null): $IPlayerConfigAPI$SetResult;
        getUsedSubConfig(): $IPlayerConfigAPI;
        getUsedSubConfig(arg0: $IClaimingModeAPI_): $IPlayerConfigAPI;
        getEffective<T>(arg0: $IPlayerConfigOptionSpecAPI<T>): T;
        getSubConfigIds(): $List<string>;
        getFromEffectiveConfig<T>(arg0: $IPlayerConfigOptionSpecAPI<T>): T;
        isOptionAllowed(arg0: $IPlayerConfigOptionSpecAPI<never>): boolean;
        getDefaultRawValue<T>(arg0: $IPlayerConfigOptionSpecAPI<T>): T;
        getSubIndex(): number;
        tryToReset<T>(arg0: $IPlayerConfigOptionSpecAPI<T>): $IPlayerConfigAPI$SetResult;
        /**
         * @deprecated
         */
        getUsedServerSubConfig(): $IPlayerConfigAPI;
        getSubConfigAPIStream(): $Stream<$IPlayerConfigAPI>;
        isBeingDeleted(): boolean;
        getPlayerId(): $UUID;
        getType(): $PlayerConfigType;
        getRaw<T>(arg0: $IPlayerConfigOptionSpecAPI<T>): T;
        createSubConfig(arg0: string): $IPlayerConfigAPI;
        get subId(): string;
        get playerGroups(): $IServerPlayerConfigGroupManagerAPI;
        get subCount(): number;
        get subConfigLimit(): number;
        get subConfigIds(): $List<string>;
        get subIndex(): number;
        get usedServerSubConfig(): $IPlayerConfigAPI;
        get subConfigAPIStream(): $Stream<$IPlayerConfigAPI>;
        get beingDeleted(): boolean;
        get playerId(): $UUID;
        get type(): $PlayerConfigType;
    }
}
