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
        getInternalFormat(): $InternalTextureFormat;
        shouldClear(): boolean;
        getClearColor(): ($Vector4f) | undefined;
        constructor();
        get internalFormat(): $InternalTextureFormat;
        get clearColor(): ($Vector4f) | undefined;
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
        getAlphaTestOverride(): ($AlphaTest) | undefined;
        getViewportScale(): $ViewportData;
        getMipmappedBuffers(): $ImmutableSet<number>;
        withOverriddenDrawBuffers(arg0: number[]): $ProgramDirectives;
        getDrawBuffers(): number[];
        constructor(arg0: $ProgramSource, arg1: $ShaderProperties, arg2: $Set_<number>, arg3: $BlendModeOverride);
        get explicitFlips(): $ImmutableMap<number, boolean>;
        get bufferBlendOverrides(): $List<$BufferBlendInformation>;
        get blendModeOverride(): ($BlendModeOverride) | undefined;
        get alphaTestOverride(): ($AlphaTest) | undefined;
        get viewportScale(): $ViewportData;
        get mipmappedBuffers(): $ImmutableSet<number>;
        get drawBuffers(): number[];
    }
    export class $ShaderProperties {
        getWeather(): $OptionalBoolean;
        skipAllRendering(): $OptionalBoolean;
        getDHCloudSetting(): $CloudSetting;
        getConcurrentCompute(): $OptionalBoolean;
        getBufferObjects(): $Int2ObjectArrayMap<$ShaderStorageInfo>;
        getIrisCustomImages(): $List<$ImageInformation>;
        getIrisCustomTextures(): $Object2ObjectMap<string, $TextureDefinition>;
        getExplicitFlips(): $Object2ObjectMap<string, $Object2BooleanMap<string>>;
        supportsColorCorrection(): $OptionalBoolean;
        getFallbackTex(): number;
        getCustomUniforms(): $CustomUniforms$Builder;
        getBufferBlendOverrides(): $Object2ObjectMap<string, $ArrayList<$BufferBlendInformation>>;
        getBlendModeOverrides(): $Object2ObjectMap<string, $BlendModeOverride>;
        getViewportScaleOverrides(): $Object2ObjectMap<string, $ViewportData>;
        getAlphaTestOverrides(): $Object2ObjectMap<string, $AlphaTest>;
        getRequiredFeatureFlags(): $List<string>;
        getOptionalFeatureFlags(): $List<string>;
        getProfiles(): $Map<string, $List<string>>;
        getConditionallyEnabledPrograms(): $Object2ObjectMap<string, string>;
        getNoiseTexturePath(): (string) | undefined;
        getCustomTextures(): $EnumMap<$TextureStage, $Object2ObjectMap<string, $TextureDefinition>>;
        getMainScreenColumnCount(): (number) | undefined;
        getSubScreenColumnCount(): $Map<string, number>;
        getSubScreenOptions(): $Map<string, $List<string>>;
        getSliderOptions(): $List<string>;
        getMainScreenOptions(): ($List<string>) | undefined;
        euphoriaPatcher$getProfiles2(): $Map<any, any>;
        getIndirectPointers(): $Object2ObjectMap<string, $IndirectPointer>;
        getRainDepth(): $OptionalBoolean;
        getSeparateAo(): $OptionalBoolean;
        getVoxelizeLightBlocks(): $OptionalBoolean;
        getSeparateEntityDraws(): $OptionalBoolean;
        getFrustumCulling(): $OptionalBoolean;
        getOcclusionCulling(): $OptionalBoolean;
        getOldLighting(): $OptionalBoolean;
        getOldHandLight(): $OptionalBoolean;
        getTextureScaleOverrides(): $Object2ObjectMap<string, $TextureScaleOverride>;
        getPrepareBeforeShadow(): $OptionalBoolean;
        getCustomTexturePatching(): $Object2ObjectMap<$Tri<string, $TextureType, $TextureStage>, string>;
        getUnderwaterOverlay(): $OptionalBoolean;
        getVignette(): $OptionalBoolean;
        getSun(): $OptionalBoolean;
        getWeatherParticles(): $OptionalBoolean;
        getMoon(): $OptionalBoolean;
        getStars(): $OptionalBoolean;
        getSky(): $OptionalBoolean;
        getShadowLightBlockEntities(): $OptionalBoolean;
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
        constructor(arg0: string, arg1: $ShaderPackOptions, arg2: $Iterable_<$StringPair>);
        get weather(): $OptionalBoolean;
        get DHCloudSetting(): $CloudSetting;
        get concurrentCompute(): $OptionalBoolean;
        get bufferObjects(): $Int2ObjectArrayMap<$ShaderStorageInfo>;
        get irisCustomImages(): $List<$ImageInformation>;
        get irisCustomTextures(): $Object2ObjectMap<string, $TextureDefinition>;
        get explicitFlips(): $Object2ObjectMap<string, $Object2BooleanMap<string>>;
        get fallbackTex(): number;
        get customUniforms(): $CustomUniforms$Builder;
        get bufferBlendOverrides(): $Object2ObjectMap<string, $ArrayList<$BufferBlendInformation>>;
        get blendModeOverrides(): $Object2ObjectMap<string, $BlendModeOverride>;
        get viewportScaleOverrides(): $Object2ObjectMap<string, $ViewportData>;
        get alphaTestOverrides(): $Object2ObjectMap<string, $AlphaTest>;
        get requiredFeatureFlags(): $List<string>;
        get optionalFeatureFlags(): $List<string>;
        get profiles(): $Map<string, $List<string>>;
        get conditionallyEnabledPrograms(): $Object2ObjectMap<string, string>;
        get noiseTexturePath(): (string) | undefined;
        get customTextures(): $EnumMap<$TextureStage, $Object2ObjectMap<string, $TextureDefinition>>;
        get mainScreenColumnCount(): (number) | undefined;
        get subScreenColumnCount(): $Map<string, number>;
        get subScreenOptions(): $Map<string, $List<string>>;
        get sliderOptions(): $List<string>;
        get mainScreenOptions(): ($List<string>) | undefined;
        get indirectPointers(): $Object2ObjectMap<string, $IndirectPointer>;
        get rainDepth(): $OptionalBoolean;
        get separateAo(): $OptionalBoolean;
        get voxelizeLightBlocks(): $OptionalBoolean;
        get separateEntityDraws(): $OptionalBoolean;
        get frustumCulling(): $OptionalBoolean;
        get occlusionCulling(): $OptionalBoolean;
        get oldLighting(): $OptionalBoolean;
        get oldHandLight(): $OptionalBoolean;
        get textureScaleOverrides(): $Object2ObjectMap<string, $TextureScaleOverride>;
        get prepareBeforeShadow(): $OptionalBoolean;
        get customTexturePatching(): $Object2ObjectMap<$Tri<string, $TextureType, $TextureStage>, string>;
        get underwaterOverlay(): $OptionalBoolean;
        get vignette(): $OptionalBoolean;
        get sun(): $OptionalBoolean;
        get weatherParticles(): $OptionalBoolean;
        get moon(): $OptionalBoolean;
        get stars(): $OptionalBoolean;
        get sky(): $OptionalBoolean;
        get shadowLightBlockEntities(): $OptionalBoolean;
        get shadowTerrain(): $OptionalBoolean;
        get shadowTranslucent(): $OptionalBoolean;
        get shadowEntities(): $OptionalBoolean;
        get shadowPlayer(): $OptionalBoolean;
        get shadowBlockEntities(): $OptionalBoolean;
        get shadowCulling(): $ShadowCullState;
        get shadowEnabled(): $OptionalBoolean;
        get dhShadowEnabled(): $OptionalBoolean;
        get dynamicHandLight(): $OptionalBoolean;
        get backFaceSolid(): $OptionalBoolean;
        get backFaceCutout(): $OptionalBoolean;
        get backFaceCutoutMipped(): $OptionalBoolean;
        get backFaceTranslucent(): $OptionalBoolean;
        get beaconBeamDepth(): $OptionalBoolean;
        get cloudSetting(): $CloudSetting;
        get particleRenderingSettings(): $ParticleRenderingSettings;
    }
    export class $PackRenderTargetDirectives implements $PackRenderTargetDirectivesAccessor {
        getRenderTargetSettings(): $Map<number, $PackRenderTargetDirectives$RenderTargetSettings>;
        getBuffersToBeCleared(): $IntList;
        acceptDirectives(arg0: $DirectiveHolder): void;
        static fuckingIris$super_resolution_$md$3675d4$0(arg0: $Set_<any>): void;
        static LEGACY_RENDER_TARGETS: $ImmutableList<string>;
        static BASELINE_SUPPORTED_RENDER_TARGETS: $Set<number>;
        get renderTargetSettings(): $Map<number, $PackRenderTargetDirectives$RenderTargetSettings>;
        get buffersToBeCleared(): $IntList;
    }
    export class $PackShadowDirectives$DepthSamplingSettings extends $PackShadowDirectives$SamplingSettings {
        getHardwareFiltering(): boolean;
        constructor();
        get hardwareFiltering(): boolean;
    }
    export class $PackShadowDirectives$SamplingSettings {
        getClear(): boolean;
        getClearColor(): $Vector4f;
        getMipmap(): boolean;
        getFormat(): $InternalTextureFormat;
        getNearest(): boolean;
        constructor();
        get clear(): boolean;
        get clearColor(): $Vector4f;
        get mipmap(): boolean;
        get format(): $InternalTextureFormat;
        get nearest(): boolean;
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
        skipAllRendering(): boolean;
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
        constructor(arg0: $Set_<number>, arg1: $ShaderProperties);
        get oldLighting(): boolean;
        get shadowDirectives(): $PackShadowDirectives;
        get DHCloudSetting(): $CloudSetting;
        get concurrentCompute(): boolean;
        get renderTargetDirectives(): $PackRenderTargetDirectives;
        get centerDepthHalfLife(): number;
        get fallbackTex(): number;
        get noiseTextureResolution(): number;
        get wetnessHalfLife(): number;
        get drynessHalfLife(): number;
        get eyeBrightnessHalfLife(): number;
        get oldHandLight(): boolean;
        get prepareBeforeShadow(): boolean;
        get ambientOcclusionLevel(): number;
        get textureMap(): $Object2ObjectMap<$Tri<string, $TextureType, $TextureStage>, string>;
        get cloudSetting(): $CloudSetting;
        get particleRenderingSettings(): $ParticleRenderingSettings;
        get sunPathRotation(): number;
    }
    export class $PackShadowDirectives {
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
        shouldRenderBlockEntities(): boolean;
        getFov(): number;
        getDistance(): number;
        static MAX_SHADOW_COLOR_BUFFERS_OF: number;
        static MAX_SHADOW_COLOR_BUFFERS_IRIS: number;
        constructor(arg0: $PackShadowDirectives);
        constructor(arg0: $ShaderProperties);
        get nearPlane(): number;
        get farPlane(): number;
        get distanceRenderMulExplicit(): boolean;
        get distanceRenderMul(): number;
        get resolution(): number;
        get shadowEnabled(): $OptionalBoolean;
        get dhShadowEnabled(): $OptionalBoolean;
        get voxelDistance(): number;
        get entityShadowDistanceMul(): number;
        get intervalSize(): number;
        get cullingState(): $ShadowCullState;
        get depthSamplingSettings(): $ImmutableList<$PackShadowDirectives$DepthSamplingSettings>;
        get colorSamplingSettings(): $Int2ObjectMap<$PackShadowDirectives$SamplingSettings>;
        get fov(): number;
        get distance(): number;
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
