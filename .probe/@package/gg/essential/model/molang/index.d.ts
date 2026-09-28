import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $KSerializer } from "@package/kotlinx/serialization";
import { $ParticleSystem$Locator } from "@package/gg/essential/model";
import { $UUID } from "@package/java/util";
import { $Object } from "@package/java/lang";

declare module "@package/gg/essential/model/molang" {
    export class $MolangQueryTime {
    }
    export interface $MolangQueryTime extends $MolangQuery {
        getTime(): number;
    }
    /**
     * Values that may be interpreted as {@link $MolangQueryTime}.
     */
    export type $MolangQueryTime_ = (() => number);
    export class $MolangQueryEntity {
    }
    export interface $MolangQueryEntity extends $MolangQuery, $MolangQueryTime {
        getUuid(): $UUID;
        getModifiedMoveSpeed(): number;
        getModifiedDistanceMoved(): number;
        getLocator(): $ParticleSystem$Locator;
        getLifeTime(): number;
        getTime(): number;
    }
    export class $Molang$Companion {
        getZERO(): $Molang;
        getONE(): $Molang;
        literal(arg0: number): $Molang;
        serializer(): $KSerializer<$Molang>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $MolangExpression {
        static Companion: $MolangExpression$Companion;
    }
    export interface $MolangExpression extends $MolangEvalImpl {
    }
    /**
     * Values that may be interpreted as {@link $MolangExpression}.
     */
    export type $MolangExpression_ = (() => void);
    export class $MolangQuery {
    }
    export interface $MolangQuery {
    }
    export class $Molang {
        static access$getZERO$cp(): $Molang;
        static access$getONE$cp(): $Molang;
        copy(arg0: $MolangExpression_): $Molang;
        "eval"(arg0: $MolangContext): number;
        getExpression(): $MolangExpression;
        component1(): $MolangExpression;
        static copy$default(arg0: $Molang, arg1: $MolangExpression_, arg2: number, arg3: $Object): $Molang;
        static Companion: $Molang$Companion;
        constructor(arg0: $MolangExpression_);
    }
    export class $MolangContext {
        getQuery(): $MolangQuery;
        getVariables(): $Variables;
        constructor(arg0: $MolangQuery, arg1: $Variables);
        constructor(arg0: $MolangQuery, arg1: $Variables, arg2: number, arg3: $DefaultConstructorMarker);
    }
}
