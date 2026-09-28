import { $Enum } from "@package/java/lang";
import { $List_ } from "@package/java/util";

declare module "@package/net/irisshaders/iris/features" {
    export class $FeatureFlags extends $Enum<$FeatureFlags> {
        isUsable(): boolean;
        getHumanReadableName(): string;
        static getInvalidStatus(arg0: $List_<$FeatureFlags_>): string;
        static values(): $FeatureFlags[];
        static valueOf(arg0: string): $FeatureFlags;
        static getValue(arg0: string): $FeatureFlags;
        static isInvalid(arg0: string): boolean;
        static HIGHER_SHADOWCOLOR: $FeatureFlags;
        static CAN_DISABLE_WEATHER: $FeatureFlags;
        static TESSELLATION_SHADERS: $FeatureFlags;
        static SEPARATE_HARDWARE_SAMPLERS: $FeatureFlags;
        static REVERSED_CULLING: $FeatureFlags;
        static PER_BUFFER_BLENDING: $FeatureFlags;
        static BLOCK_EMISSION_ATTRIBUTE: $FeatureFlags;
        static SSBO: $FeatureFlags;
        static UNKNOWN: $FeatureFlags;
        static COMPUTE_SHADERS: $FeatureFlags;
        static ENTITY_TRANSLUCENT: $FeatureFlags;
        static CUSTOM_IMAGES: $FeatureFlags;
    }
    /**
     * Values that may be interpreted as {@link $FeatureFlags}.
     */
    export type $FeatureFlags_ = "separate_hardware_samplers" | "higher_shadowcolor" | "custom_images" | "per_buffer_blending" | "compute_shaders" | "tessellation_shaders" | "entity_translucent" | "reversed_culling" | "block_emission_attribute" | "can_disable_weather" | "ssbo" | "unknown";
}
