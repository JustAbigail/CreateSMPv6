import { $AlgorithmDescription } from "@package/io/homo/superresolution/api/registry";
import { $Supplier_ } from "@package/java/util/function";
import { $TextureFormat, $TextureFormat_, $ITexture } from "@package/io/homo/superresolution/core/graphics/impl/texture";
import { $ICommandBuffer } from "@package/io/homo/superresolution/core/graphics/impl/command";
import { $Enum, $Object } from "@package/java/lang";
import { $List, $Map_, $Map, $List_ } from "@package/java/util";
import { $AbstractAlgorithm } from "@package/io/homo/superresolution/api";
import { $Vector2i, $Vector2f } from "@package/org/joml";

declare module "@package/io/homo/superresolution/common/minecraft/handler/shadercompat" {
    export class $SRShaderCompatData$JitterSourceConfig {
        getJitterOffset(arg0: $ShaderPipelineContext): $Vector2f;
        getJitterSequenceLength(arg0: $ShaderPipelineContext): number;
        jitterOffset: $SRShaderCompatData$SourceConfig;
        jitterSequenceLength: $SRShaderCompatData$SourceConfig;
        constructor(arg0: $SRShaderCompatData$SourceConfig, arg1: $SRShaderCompatData$SourceConfig);
    }
    export class $SRShaderCompatData$JitterConfig {
        sourceConfig: $SRShaderCompatData$JitterSourceConfig;
        source: $SRShaderCompatData$JitterConfig$JitterSource;
        enabled: boolean;
        constructor(arg0: boolean);
        constructor(arg0: boolean, arg1: $SRShaderCompatData$JitterConfig$JitterSource_, arg2: $SRShaderCompatData$JitterSourceConfig);
    }
    export class $SRShaderCompatData$OutputTexture {
        targetNames: $List<string>;
        region: $TextureRegion;
        enabled: boolean;
        constructor(arg0: boolean, arg1: $List_<string>, arg2: $TextureRegion);
    }
    export class $SRShaderCompatData$InputTexture {
        sourceName: string;
        region: $TextureRegion;
        enabled: boolean;
        constructor(arg0: boolean, arg1: string, arg2: $TextureRegion);
    }
    export class $SRShaderCompatData$JitterConfig$JitterSource extends $Enum<$SRShaderCompatData$JitterConfig$JitterSource> {
        static values(): $SRShaderCompatData$JitterConfig$JitterSource[];
        static valueOf(arg0: string): $SRShaderCompatData$JitterConfig$JitterSource;
        static MOD: $SRShaderCompatData$JitterConfig$JitterSource;
        static SHADERPACK: $SRShaderCompatData$JitterConfig$JitterSource;
    }
    /**
     * Values that may be interpreted as {@link $SRShaderCompatData$JitterConfig$JitterSource}.
     */
    export type $SRShaderCompatData$JitterConfig$JitterSource_ = "mod" | "shaderpack";
    export class $SRCompatProcessor {
    }
    export interface $SRCompatProcessor {
        needsPreProcessMotionVectors(arg0: $SRShaderCompatData, arg1: $AbstractAlgorithm, arg2: $AlgorithmDescription<never>): boolean;
        needsPreProcessColor(arg0: $SRShaderCompatData, arg1: $AbstractAlgorithm, arg2: $AlgorithmDescription<never>): boolean;
        needsPreProcessDepth(arg0: $SRShaderCompatData, arg1: $AbstractAlgorithm, arg2: $AlgorithmDescription<never>): boolean;
        needsPreProcessExposure(arg0: $SRShaderCompatData, arg1: $AbstractAlgorithm, arg2: $AlgorithmDescription<never>): boolean;
        preProcessColor(arg0: $ITexture, arg1: $ITexture, arg2: $ICommandBuffer, arg3: $SRShaderCompatData, arg4: $AbstractAlgorithm, arg5: $AlgorithmDescription<never>): void;
        preProcessDepth(arg0: $ITexture, arg1: $ITexture, arg2: $ICommandBuffer, arg3: $SRShaderCompatData, arg4: $AbstractAlgorithm, arg5: $AlgorithmDescription<never>): void;
        preProcessMotionVectors(arg0: $ITexture, arg1: $ITexture, arg2: $ICommandBuffer, arg3: $SRShaderCompatData, arg4: $AbstractAlgorithm, arg5: $AlgorithmDescription<never>): void;
        preProcessExposure(arg0: $ITexture, arg1: $ITexture, arg2: $ICommandBuffer, arg3: $SRShaderCompatData, arg4: $AbstractAlgorithm, arg5: $AlgorithmDescription<never>): void;
        needsAdaptPreExposure(arg0: $SRShaderCompatData, arg1: $AbstractAlgorithm, arg2: $AlgorithmDescription<never>): boolean;
        adaptPreExposureForAlgorithm(arg0: number, arg1: $AbstractAlgorithm, arg2: $SRShaderCompatData, arg3: $AlgorithmDescription<never>): number;
        needsAdaptJitter(arg0: $SRShaderCompatData, arg1: $AbstractAlgorithm, arg2: $AlgorithmDescription<never>): boolean;
        adaptJitterForAlgorithm(arg0: $Vector2f, arg1: $AbstractAlgorithm, arg2: $SRShaderCompatData, arg3: $AlgorithmDescription<never>): $Vector2f;
        adaptJitterForShaderpack(arg0: $Vector2f, arg1: $AbstractAlgorithm, arg2: $SRShaderCompatData, arg3: $AlgorithmDescription<never>): $Vector2f;
        registerMacros(arg0: $MacroRegistrar_, arg1: $AbstractAlgorithm, arg2: $AlgorithmDescription<never>): void;
        registerUniforms(arg0: $UniformRegistrar, arg1: $SRShaderCompatData, arg2: $AbstractAlgorithm, arg3: $AlgorithmDescription<never>): void;
        version(): number;
    }
    export class $SRShaderCompatData$UpscaleConfig {
        isMotionJittered: boolean;
        internalFormat: $TextureFormat;
        isAutoExposure: boolean;
        customs: $SRShaderCompatData$CustomsConfig;
        inputTextures: $Map<string, $SRShaderCompatData$InputTexture>;
        outputTextures: $Map<string, $SRShaderCompatData$OutputTexture>;
        preExposure: $SRShaderCompatData$SourceConfig;
        trigger: $SRShaderCompatData$PipelineTrigger;
        enabled: boolean;
        isHdrInput: boolean;
        constructor(arg0: boolean, arg1: $SRShaderCompatData$PipelineTrigger, arg2: $TextureFormat_, arg3: $Map_<string, $SRShaderCompatData$InputTexture>, arg4: $Map_<string, $SRShaderCompatData$OutputTexture>, arg5: $SRShaderCompatData$SourceConfig, arg6: boolean, arg7: boolean, arg8: boolean);
        constructor(arg0: boolean, arg1: $SRShaderCompatData$PipelineTrigger, arg2: $TextureFormat_, arg3: $Map_<string, $SRShaderCompatData$InputTexture>, arg4: $Map_<string, $SRShaderCompatData$OutputTexture>, arg5: $SRShaderCompatData$SourceConfig, arg6: boolean, arg7: boolean, arg8: boolean, arg9: $SRShaderCompatData$CustomsConfig);
    }
    export class $SRShaderCompatData$WorldProfile {
        jitter: $SRShaderCompatData$JitterConfig;
        upscale: $SRShaderCompatData$UpscaleConfig;
        enabled: boolean;
        constructor(arg0: boolean, arg1: $SRShaderCompatData$UpscaleConfig, arg2: $SRShaderCompatData$JitterConfig);
    }
    export class $SRShaderCompatData$SourceConfig {
        source: $SRShaderCompatData$SourceConfig$SourceType;
        type: $SRShaderCompatData$SourceConfig$ValueType;
        value: $Object;
        constructor(arg0: string, arg1: string, arg2: $Object);
    }
    export class $SRShaderCompatData$CustomsConfig {
        motionVectorPreprocessingFunction: string;
        constructor(arg0: string);
    }
    export class $SRShaderCompatData$PipelineTrigger {
        passName: string;
        order: $SRShaderCompatData$PipelineTrigger$Order;
        constructor(arg0: $SRShaderCompatData$PipelineTrigger$Order, arg1: string);
    }
    export class $MacroRegistrar {
    }
    export interface $MacroRegistrar {
        registerMacro(arg0: string, arg1: string): void;
    }
    /**
     * Values that may be interpreted as {@link $MacroRegistrar}.
     */
    export type $MacroRegistrar_ = ((arg0: string, arg1: string) => void);
    export class $UniformRegistrar {
    }
    export interface $UniformRegistrar {
        uniform2f(arg0: string, arg1: $Supplier_<$Vector2f>): void;
        uniform2i(arg0: string, arg1: $Supplier_<$Vector2i>): void;
        uniform1i(arg0: string, arg1: $Supplier_<number>): void;
        uniform1f(arg0: string, arg1: $Supplier_<number>): void;
    }
    export class $SRShaderCompatData {
        getProfileForWorld(arg0: string): $SRShaderCompatData$WorldProfile;
        getProcessor(): $SRCompatProcessor;
        version: number;
        constructor(arg0: number, arg1: $Map_<string, $SRShaderCompatData$WorldProfile>, arg2: $SRShaderCompatData$WorldProfile, arg3: $SRCompatProcessor);
        get processor(): $SRCompatProcessor;
    }
}
