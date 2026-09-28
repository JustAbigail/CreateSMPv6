import { $Codec } from "@package/com/mojang/serialization";
import { $Enum } from "@package/java/lang";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/dev/worldgen/lithostitched/api/util" {
    export class $InjectionType extends $Enum<$InjectionType> implements $StringRepresentable {
        static values(): $InjectionType[];
        static valueOf(name: string): $InjectionType;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$InjectionType>;
        static APPEND: $InjectionType;
        static PREPEND: $InjectionType;
    }
    /**
     * Values that may be interpreted as {@link $InjectionType}.
     */
    export type $InjectionType_ = "prepend" | "append";
}
