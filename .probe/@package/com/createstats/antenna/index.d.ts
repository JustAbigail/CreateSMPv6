import { $Enum } from "@package/java/lang";

declare module "@package/com/createstats/antenna" {
    export class $AntennaTier extends $Enum<$AntennaTier> {
        isAttached(): boolean;
        getRangeMultiplier(): number;
        isCrossDimensional(): boolean;
        static values(): $AntennaTier[];
        static valueOf(arg0: string): $AntennaTier;
        static byName(arg0: string): $AntennaTier;
        getSerializedName(): string;
        static SMALL: $AntennaTier;
        static TRT: $AntennaTier;
        static NONE: $AntennaTier;
        static ADVANCED: $AntennaTier;
    }
    /**
     * Values that may be interpreted as {@link $AntennaTier}.
     */
    export type $AntennaTier_ = "none" | "small" | "advanced" | "trt";
}
