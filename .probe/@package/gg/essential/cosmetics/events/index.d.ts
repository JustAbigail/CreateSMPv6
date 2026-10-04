import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $KSerializer } from "@package/kotlinx/serialization";
import { $SerialDescriptor } from "@package/kotlinx/serialization/descriptors";
import { $EnumEntries } from "@package/kotlin/enums";
import { $Set_, $Set } from "@package/java/util";
import { $BedrockModel } from "@package/gg/essential/model";
import { $Object, $Enum } from "@package/java/lang";
import { $CompositeEncoder } from "@package/kotlinx/serialization/encoding";
import { $Lazy } from "@package/kotlin";
import { $SerializationConstructorMarker } from "@package/kotlinx/serialization/internal";

declare module "@package/gg/essential/cosmetics/events" {
    export class $AnimationEvent {
        component3(): string;
        component4(): $AnimationEvent;
        component5(): $Set<string>;
        component6(): number;
        component7(): number;
        component8(): number;
        component9(): number;
        static write$Self$cosmetics(arg0: $AnimationEvent, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        getOnComplete(): $AnimationEvent;
        getSkips(): number;
        static getOnComplete$annotations(): void;
        static getTriggerInOtherCosmetic$annotations(): void;
        getTriggerInOtherCosmetic(): $Set<string>;
        static getTotalTime$default(arg0: $AnimationEvent, arg1: $BedrockModel, arg2: number, arg3: number, arg4: $Object): number;
        getLoops(): number;
        getProbability(): number;
        getName(): string;
        getPriority(): number;
        getType(): $AnimationEventType;
        copy(arg0: $AnimationEventType_, arg1: $AnimationTarget_, arg2: string, arg3: $AnimationEvent, arg4: $Set_<string>, arg5: number, arg6: number, arg7: number, arg8: number): $AnimationEvent;
        getTarget(): $AnimationTarget;
        getTotalTime(arg0: $BedrockModel, arg1: number): number;
        component1(): $AnimationEventType;
        component2(): $AnimationTarget;
        static copy$default(arg0: $AnimationEvent, arg1: $AnimationEventType_, arg2: $AnimationTarget_, arg3: string, arg4: $AnimationEvent, arg5: $Set_<any>, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: $Object): $AnimationEvent;
        static Companion: $AnimationEvent$Companion;
        constructor(arg0: number, arg1: $AnimationEventType_, arg2: $AnimationTarget_, arg3: string, arg4: $AnimationEvent, arg5: $Set_<any>, arg6: number, arg7: number, arg8: number, arg9: number, arg10: $SerializationConstructorMarker);
        constructor(arg0: $AnimationEventType_, arg1: $AnimationTarget_, arg2: string, arg3: $AnimationEvent, arg4: $Set_<string>, arg5: number, arg6: number, arg7: number, arg8: number);
        constructor(arg0: $AnimationEventType_, arg1: $AnimationTarget_, arg2: string, arg3: $AnimationEvent, arg4: $Set_<any>, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: $DefaultConstructorMarker);
        get onComplete(): $AnimationEvent;
        get skips(): number;
        static get onComplete$annotations(): void;
        static get triggerInOtherCosmetic$annotations(): void;
        get triggerInOtherCosmetic(): $Set<string>;
        get loops(): number;
        get probability(): number;
        get name(): string;
        get priority(): number;
        get type(): $AnimationEventType;
        get target(): $AnimationTarget;
    }
    export class $AnimationTarget extends $Enum<$AnimationTarget> {
        static values(): $AnimationTarget[];
        static valueOf(arg0: string): $AnimationTarget;
        static getEntries(): $EnumEntries<$AnimationTarget>;
        static ALL: $AnimationTarget;
        static OTHERS: $AnimationTarget;
        static SELF: $AnimationTarget;
        static get entries(): $EnumEntries<$AnimationTarget>;
    }
    /**
     * Values that may be interpreted as {@link $AnimationTarget}.
     */
    export type $AnimationTarget_ = "self" | "others" | "all";
    export class $AnimationEventType extends $Enum<$AnimationEventType> {
        static values(): $AnimationEventType[];
        static valueOf(arg0: string): $AnimationEventType;
        static getEntries(): $EnumEntries<$AnimationEventType>;
        static SNEAK_END: $AnimationEventType;
        static EQUIP: $AnimationEventType;
        static JUMP_START: $AnimationEventType;
        static SWING: $AnimationEventType;
        static ON_DAMAGE: $AnimationEventType;
        static LEAVE_WORLD: $AnimationEventType;
        static FLY_ON: $AnimationEventType;
        static EMOTE: $AnimationEventType;
        static FLY_MOVE_START: $AnimationEventType;
        static JUMP_END: $AnimationEventType;
        static TEXTURE_ANIMATION_START: $AnimationEventType;
        static FLY_OFF: $AnimationEventType;
        static IDLE: $AnimationEventType;
        static SNEAK_START: $AnimationEventType;
        static TICK: $AnimationEventType;
        static WALK_START: $AnimationEventType;
        static FLY_MOVE_END: $AnimationEventType;
        static JOIN_WORLD: $AnimationEventType;
        static WALK_END: $AnimationEventType;
        static BY_OTHER: $AnimationEventType;
        static get entries(): $EnumEntries<$AnimationEventType>;
    }
    /**
     * Values that may be interpreted as {@link $AnimationEventType}.
     */
    export type $AnimationEventType_ = "equip" | "join_world" | "leave_world" | "jump_start" | "jump_end" | "walk_start" | "walk_end" | "swing" | "sneak_start" | "sneak_end" | "fly_on" | "fly_off" | "fly_move_start" | "fly_move_end" | "on_damage" | "tick" | "idle" | "texture_animation_start" | "emote" | "by_other";
    export class $AnimationEvent$Companion {
        serializer(): $KSerializer<$AnimationEvent>;
        constructor(arg0: $DefaultConstructorMarker);
    }
}
