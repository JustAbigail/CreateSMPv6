import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $List } from "@package/java/util";

declare module "@package/net/fabricmc/fabric/api/resource/conditions/v1" {
    export class $ResourceCondition {
        static CONDITION_CODEC: $Codec<$ResourceCondition>;
        static CODEC: $Codec<$ResourceCondition>;
        static LIST_CODEC: $Codec<$List<$ResourceCondition>>;
    }
    export interface $ResourceCondition {
        test(arg0: $HolderLookup$Provider): boolean;
        getType(): $ResourceConditionType<never>;
        get type(): $ResourceConditionType<never>;
    }
}
