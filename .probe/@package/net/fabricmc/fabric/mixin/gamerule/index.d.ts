import { $GameRules$Key, $GameRules$Type } from "@package/net/minecraft/world/level";
import { $Map } from "@package/java/util";

declare module "@package/net/fabricmc/fabric/mixin/gamerule" {
    export class $GameRulesIntRuleAccessor {
    }
    export interface $GameRulesIntRuleAccessor {
        getValue(): number;
        setValue(arg0: number): void;
    }
    export class $GameRulesAccessor {
        static getRuleTypes(): $Map<$GameRules$Key<never>, $GameRules$Type<never>>;
    }
    export interface $GameRulesAccessor {
    }
}
