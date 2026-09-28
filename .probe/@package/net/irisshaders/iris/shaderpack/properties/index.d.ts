import { $Int2ObjectMap, $IntList, $Int2ObjectArrayMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $ImageInformation } from "@package/net/irisshaders/iris/shaderpack";
import { $ShaderPackOptions } from "@package/net/irisshaders/iris/shaderpack/option";
import { $StringPair, $OptionalBoolean, $Tri } from "@package/net/irisshaders/iris/helpers";
import { $ViewportData } from "@package/net/irisshaders/iris/gl/framebuffer";
import { $ImmutableList, $ImmutableMap, $ImmutableSet } from "@package/com/google/common/collect";
import { $PackRenderTargetDirectivesAccessor } from "@package/io/homo/superresolution/shadercompat/mixin/core";
import { $ProgramSource } from "@package/net/irisshaders/iris/shaderpack/programs";
import { $List, $EnumMap, $Set_, $ArrayList, $Map, $Set } from "@package/java/util";
import { $TextureType, $TextureDefinition, $TextureScaleOverride, $InternalTextureFormat } from "@package/net/irisshaders/iris/gl/texture";
import { $ShaderStorageInfo } from "@package/net/irisshaders/iris/gl/buffer";
import { $AlphaTest, $BufferBlendInformation, $BlendModeOverride } from "@package/net/irisshaders/iris/gl/blending";
import { $Object2ObjectMap, $Object2BooleanMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $DirectiveHolder } from "@package/net/irisshaders/iris/shaderpack/parsing";
import { $CustomUniforms$Builder } from "@package/net/irisshaders/iris/uniforms/custom";
import { $Iterable_, $Enum, $Record } from "@package/java/lang";
import { $TextureStage } from "@package/net/irisshaders/iris/shaderpack/texture";
import { $Vector2i, $Vector4f } from "@package/org/joml";

declare module "@package/net/irisshaders/iris/shaderpack/properties" {
    export class $ShadowCullState extends $Enum<$ShadowCullState> {
        static values(): $ShadowCullState[];
        static valueOf(arg0: string): $ShadowCullState;
        static DISTANCE: $ShadowCullState;
        static REVERSED: $ShadowCullState;
        static DEFAULT: $ShadowCullState;
        static ADVANCED: $ShadowCullState;
    }
    /**
     * Values that may be interpreted as {@link $ShadowCullState}.
     */
    export type $ShadowCullState_ = "default" | "advanced" | "reversed" | "distance";
    export class $PackRenderTargetDirectives$RenderTargetSettings {
        shouldClear(): boolean;
        getInternalFormat(): $InternalTextureFormat;
        getClearColor(): ($Vector4f) | undefined;
        constructor();
    }
    export class $IndirectPointer extends $Record {
        offset(): number;
        buffer(): number;
        constructor(buffer: number, offset: number);
    }
    /**
     * Values that may be interpreted as {@link $IndirectPointer}.
     */
    export type $IndirectPointer_ = { offset?: number, buffer?: number,  } | [offset?: number, buffer?: number, ];
    export class $ProgramDirectives {
        getExplicitFlips(): $ImmutableMap<number, boolean>;
        hasUnknownDrawBuffers(): boolean;
        getBufferBlendOverrides(): $List<$BufferBlendInformation>;
        getBlendModeOverride(): ($BlendModeOverride) | undefined;
        getViewportScale(): $ViewportData;
        getMipmappedBuffers(): $ImmutableSet<number>;
        withOverriddenDrawBuffers(arg0: number[]): $ProgramDirectives;
        getAlphaTestOverride(): ($AlphaTest) | undefined;
        getDrawBuffers(): number[];
        constructor(arg0: $ProgramSource, arg1: $ShaderProperties, arg2: $Set_<number>, arg3: $BlendModeOverride);
    }
    export class $ShaderProperties {
        getWeather(): $OptionalBoolean;
        getDHCloudSetting(): $CloudSetting;
        getConcurrentCompute(): $OptionalBoolean;
        getBufferObjects(): $Int2ObjectArrayMap<$ShaderStorageInfo>;
        getIrisCustomImages(): $List<$ImageInformation>;
        getExplicitFlips(): $Object2ObjectMap<string, $Object2BooleanMap<string>>;
        getIrisCustomTextures(): $Object2ObjectMap<string, $TextureDefinition>;
        supportsColorCorrection(): $OptionalBoolean;
        getFallbackTex(): number;
        getCustomUniforms(): $CustomUniforms$Builder;
        getBufferBlendOverrides(): $Object2ObjectMap<string, $ArrayList<$BufferBlendInformation>>;
        getRequiredFeatureFlags(): $List<string>;
        getOptionalFeatureFlags(): $List<string>;
        getProfiles(): $Map<string, $List<string>>;
        getConditionallyEnabledPrograms(): $Object2ObjectMap<string, string>;
        getNoiseTexturePath(): (string) | undefined;
        getCustomTextures(): $EnumMap<$TextureStage, $Object2ObjectMap<string, $TextureDefinition>>;
        getSliderOptions(): $List<string>;
        getMainScreenColumnCount(): (number) | undefined;
        getSubScreenColumnCount(): $Map<string, number>;
        getSubScreenOptions(): $Map<string, $List<string>>;
        getMainScreenOptions(): ($List<string>) | undefined;
        euphoriaPatcher$getProfiles2(): $Map<any, any>;
        getIndirectPointers(): $Object2ObjectMap<string, $IndirectPointer>;
        getSun(): $OptionalBoolean;
        getUnderwaterOverlay(): $OptionalBoolean;
        getVignette(): $OptionalBoolean;
        getWeatherParticles(): $OptionalBoolean;
        getMoon(): $OptionalBoolean;
        getStars(): $OptionalBoolean;
        getSky(): $OptionalBoolean;
        getRainDepth(): $OptionalBoolean;
        getSeparateAo(): $OptionalBoolean;
        getVoxelizeLightBlocks(): $OptionalBoolean;
        getSeparateEntityDraws(): $OptionalBoolean;
        getFrustumCulling(): $OptionalBoolean;
        getOldLighting(): $OptionalBoolean;
        getOcclusionCulling(): $OptionalBoolean;
        getOldHandLight(): $OptionalBoolean;
        getTextureScaleOverrides(): $Object2ObjectMap<string, $TextureScaleOverride>;
        getPrepareBeforeShadow(): $OptionalBoolean;
        getCustomTexturePatching(): $Object2ObjectMap<$Tri<string, $TextureType, $TextureStage>, string>;
        getShadowLightBlockEntities(): $OptionalBoolean;
        getViewportScaleOverrides(): $Object2ObjectMap<string, $ViewportData>;
        getAlphaTestOverrides(): $Object2ObjectMap<string, $AlphaTest>;
        getBlendModeOverrides(): $Object2ObjectMap<string, $BlendModeOverride>;
        getShadowTerrain(): $OptionalBoolean;
        getShadowTranslucent(): $OptionalBoolean;
        getShadowEntities(): $OptionalBoolean;
        getShadowPlayer(): $OptionalBoolean;
        getShadowBlockEntities(): $OptionalBoolean;
        getShadowCulling(): $ShadowCullState;
        getShadowEnabled(): $OptionalBoolean;
        getDhShadowEnabled(): $OptionalBoolean;
        getDynamicHandLight(): $OptionalBoolean;
        getBackFaceSolid(): $OptionalBoolean;
        getBackFaceCutout(): $OptionalBoolean;
        getBackFaceCutoutMipped(): $OptionalBoolean;
        getBackFaceTranslucent(): $OptionalBoolean;
        getBeaconBeamDepth(): $OptionalBoolean;
        static empty(): $ShaderProperties;
        getCloudSetting(): $CloudSetting;
        getParticleRenderingSettings(): $ParticleRenderingSettings;
        skipAllRendering(): $OptionalBoolean;
        constructor(arg0: string, arg1: $ShaderPackOptions, arg2: $Iterable_<$StringPair>);
    }
    export class $PackRenderTargetDirectives implements $PackRenderTargetDirectivesAccessor {
        getRenderTargetSettings(): $Map<number, $PackRenderTargetDirectives$RenderTargetSettings>;
        acceptDirectives(arg0: $DirectiveHolder): void;
        static fuckingIris$super_resolution_$md$e5fdf9$0(arg0: $Set_<any>): void;
        getBuffersToBeCleared(): $IntList;
        static LEGACY_RENDER_TARGETS: $ImmutableList<string>;
        static BASELINE_SUPPORTED_RENDER_TARGETS: $Set<number>;
    }
    export class $PackShadowDirectives$DepthSamplingSettings extends $PackShadowDirectives$SamplingSettings {
        getHardwareFiltering(): boolean;
        constructor();
    }
    export class $PackShadowDirectives$SamplingSettings {
        getMipmap(): boolean;
        getClear(): boolean;
        getClearColor(): $Vector4f;
        getFormat(): $InternalTextureFormat;
        getNearest(): boolean;
        constructor();
    }
    export class $ParticleRenderingSettings extends $Enum<$ParticleRenderingSettings> {
        static values(): $ParticleRenderingSettings[];
        static valueOf(arg0: string): $ParticleRenderingSettings;
        static fromString(arg0: string): $ParticleRenderingSettings;
        static BEFORE: $ParticleRenderingSettings;
        static MIXED: $ParticleRenderingSettings;
        static AFTER: $ParticleRenderingSettings;
        static UNSET: $ParticleRenderingSettings;
    }
    /**
     * Values that may be interpreted as {@link $ParticleRenderingSettings}.
     */
    export type $ParticleRenderingSettings_ = "unset" | "before" | "mixed" | "after";
    export class $PackDirectives {
        shouldUseSeparateAo(): boolean;
        shouldVoxelizeLightBlocks(): boolean;
        underwaterOverlay(): boolean;
        vignette(): boolean;
        rainDepth(): boolean;
        isOldLighting(): boolean;
        getShadowDirectives(): $PackShadowDirectives;
        getDHCloudSetting(): $CloudSetting;
        getConcurrentCompute(): boolean;
        shouldUseFrustumCulling(): boolean;
        shouldUseOcclusionCulling(): boolean;
        shouldUseSeparateEntityDraws(): boolean;
        getRenderTargetDirectives(): $PackRenderTargetDirectives;
        getCenterDepthHalfLife(): number;
        getExplicitFlips(arg0: string): $ImmutableMap<number, boolean>;
        supportsColorCorrection(): boolean;
        getFallbackTex(): number;
        getNoiseTextureResolution(): number;
        acceptDirectivesFrom(arg0: $DirectiveHolder): void;
        getWetnessHalfLife(): number;
        getDrynessHalfLife(): number;
        getEyeBrightnessHalfLife(): number;
        isOldHandLight(): boolean;
        isPrepareBeforeShadow(): boolean;
        getTextureScaleOverride(arg0: number, arg1: number, arg2: number): $Vector2i;
        getAmbientOcclusionLevel(): number;
        getTextureMap(): $Object2ObjectMap<$Tri<string, $TextureType, $TextureStage>, string>;
        getCloudSetting(): $CloudSetting;
        shouldRenderSun(): boolean;
        shouldRenderWeather(): boolean;
        shouldRenderWeatherParticles(): boolean;
        shouldRenderMoon(): boolean;
        shouldRenderStars(): boolean;
        shouldRenderSkyDisc(): boolean;
        getParticleRenderingSettings(): $ParticleRenderingSettings;
        getSunPathRotation(): number;
        skipAllRendering(): boolean;
        constructor(arg0: $Set_<number>, arg1: $ShaderProperties);
    }
    export class $PackShadowDirectives {
        shouldRenderBlockEntities(): boolean;
        getNearPlane(): number;
        getFarPlane(): number;
        isDistanceRenderMulExplicit(): boolean;
        getDistanceRenderMul(): number;
        getResolution(): number;
        isShadowEnabled(): $OptionalBoolean;
        isDhShadowEnabled(): $OptionalBoolean;
        shouldRenderTerrain(): boolean;
        shouldRenderTranslucent(): boolean;
        shouldRenderEntities(): boolean;
        shouldRenderPlayer(): boolean;
        shouldRenderLightBlockEntities(): boolean;
        getVoxelDistance(): number;
        getEntityShadowDistanceMul(): number;
        getIntervalSize(): number;
        getCullingState(): $ShadowCullState;
        getDepthSamplingSettings(): $ImmutableList<$PackShadowDirectives$DepthSamplingSettings>;
        getColorSamplingSettings(): $Int2ObjectMap<$PackShadowDirectives$SamplingSettings>;
        acceptDirectives(arg0: $DirectiveHolder): void;
        getFov(): number;
        getDistance(): number;
        static MAX_SHADOW_COLOR_BUFFERS_OF: number;
        static MAX_SHADOW_COLOR_BUFFERS_IRIS: number;
        constructor(arg0: $ShaderProperties);
        constructor(arg0: $PackShadowDirectives);
    }
    export class $CloudSetting extends $Enum<$CloudSetting> {
        static values(): $CloudSetting[];
        static valueOf(arg0: string): $CloudSetting;
        static FANCY: $CloudSetting;
        static FAST: $CloudSetting;
        static DEFAULT: $CloudSetting;
        static OFF: $CloudSetting;
    }
    /**
     * Values that may be interpreted as {@link $CloudSetting}.
     */
    export type $CloudSetting_ = "default" | "fast" | "fancy" | "off";
}
