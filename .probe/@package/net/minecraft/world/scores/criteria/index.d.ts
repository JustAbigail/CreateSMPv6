import { $Set } from "@package/java/util";
import { $Enum } from "@package/java/lang";
import { $StringRepresentable$EnumCodec, $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/world/scores/criteria" {
    export class $ObjectiveCriteria {
        static registerCustom(name: string, readOnly: boolean, renderType: $ObjectiveCriteria$RenderType_): $ObjectiveCriteria;
        static registerCustom(name: string): $ObjectiveCriteria;
        static getCustomCriteriaNames(): $Set<string>;
        getName(): string;
        isReadOnly(): boolean;
        static byName(name: string): ($ObjectiveCriteria) | undefined;
        getDefaultRenderType(): $ObjectiveCriteria$RenderType;
        static DEATH_COUNT: $ObjectiveCriteria;
        static ARMOR: $ObjectiveCriteria;
        static TRIGGER: $ObjectiveCriteria;
        static KILL_COUNT_ALL: $ObjectiveCriteria;
        static AIR: $ObjectiveCriteria;
        static LEVEL: $ObjectiveCriteria;
        static DUMMY: $ObjectiveCriteria;
        static EXPERIENCE: $ObjectiveCriteria;
        static HEALTH: $ObjectiveCriteria;
        static KILL_COUNT_PLAYERS: $ObjectiveCriteria;
        static TEAM_KILL: $ObjectiveCriteria[];
        static KILLED_BY_TEAM: $ObjectiveCriteria[];
        static FOOD: $ObjectiveCriteria;
        constructor(name: string, readOnly: boolean, renderType: $ObjectiveCriteria$RenderType_);
        constructor(name: string);
    }
    export class $ObjectiveCriteria$RenderType extends $Enum<$ObjectiveCriteria$RenderType> implements $StringRepresentable {
        static values(): $ObjectiveCriteria$RenderType[];
        static valueOf(renderType: string): $ObjectiveCriteria$RenderType;
        getId(): string;
        getSerializedName(): string;
        static byId(renderType: string): $ObjectiveCriteria$RenderType;
        getRemappedEnumConstantName(): string;
        static CODEC: $StringRepresentable$EnumCodec<$ObjectiveCriteria$RenderType>;
        static HEARTS: $ObjectiveCriteria$RenderType;
        static INTEGER: $ObjectiveCriteria$RenderType;
    }
    /**
     * Values that may be interpreted as {@link $ObjectiveCriteria$RenderType}.
     */
    export type $ObjectiveCriteria$RenderType_ = "integer" | "hearts";
}
