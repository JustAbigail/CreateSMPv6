import { $GameRules$BooleanValue, $GameRules$Key, $GameRules$Category_, $GameRules$Value, $GameRules$Type } from "@package/net/minecraft/world/level";
import { $ServerStatus$Favicon_, $ServerStatus$Favicon, $ServerStatus, $ServerStatus_ } from "@package/net/minecraft/network/protocol/status";
import { $Thread } from "@package/java/lang";
export * as integrated from "@package/gg/essential/mixins/transformers/server/integrated";

declare module "@package/gg/essential/mixins/transformers/server" {
    export class $GameRulesAccessor {
        static invokeRegister<T extends $GameRules$Value<T>>(name: string, category: $GameRules$Category_, type: $GameRules$Type<T>): $GameRules$Key<T>;
    }
    export interface $GameRulesAccessor {
    }
    export class $GameRulesBooleanValueAccessor {
        static invokeCreate(defaultValue: boolean): $GameRules$Type<$GameRules$BooleanValue>;
    }
    export interface $GameRulesBooleanValueAccessor {
    }
    export class $MinecraftServerAccessor {
    }
    export interface $MinecraftServerAccessor {
        getServerThread(): $Thread;
        invokeLoadFavicon(): ($ServerStatus$Favicon) | undefined;
        setFavicon(arg0: $ServerStatus$Favicon_): void;
        invokeCreateMetadata(): $ServerStatus;
        setMetadata(arg0: $ServerStatus_): void;
        get serverThread(): $Thread;
        set favicon(value: $ServerStatus$Favicon_);
        set metadata(value: $ServerStatus_);
    }
}
