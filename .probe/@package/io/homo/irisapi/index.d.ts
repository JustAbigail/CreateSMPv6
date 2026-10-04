import { $ShaderPack } from "@package/net/irisshaders/iris/shaderpack";
import { $GlImage } from "@package/net/irisshaders/iris/gl/image";
import { $Event } from "@package/net/neoforged/bus/api";
import { $StringPair, $StringPair_ } from "@package/net/irisshaders/iris/helpers";
import { $ImmutableList, $ImmutableSet } from "@package/com/google/common/collect";
import { $List, $Set, $Set_, $List_ } from "@package/java/util";
import { $TextureAccess } from "@package/net/irisshaders/iris/gl/texture";
import { $UniformHolder } from "@package/net/irisshaders/iris/gl/uniform";
import { $Object2ObjectMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $CustomUniforms } from "@package/net/irisshaders/iris/uniforms/custom";
import { $CenterDepthSampler } from "@package/net/irisshaders/iris/pathways";
import { $RenderTargets } from "@package/net/irisshaders/iris/targets";
import { $Enum } from "@package/java/lang";
import { $WorldRenderingPipeline } from "@package/net/irisshaders/iris/pipeline";
import { $TextureStage, $TextureStage_ } from "@package/net/irisshaders/iris/shaderpack/texture";
export * as mixin from "@package/io/homo/irisapi/mixin";

declare module "@package/io/homo/irisapi" {
    export class $IrisCompositePassType extends $Enum<$IrisCompositePassType> {
        static values(): $IrisCompositePassType[];
        static valueOf(arg0: string): $IrisCompositePassType;
        static Mixed: $IrisCompositePassType;
        static ComputeOnly: $IrisCompositePassType;
        static Common: $IrisCompositePassType;
    }
    /**
     * Values that may be interpreted as {@link $IrisCompositePassType}.
     */
    export type $IrisCompositePassType_ = "common" | "computeonly" | "mixed";
    export class $UniformRegistrationEvent extends $Event {
        getUniforms(): $UniformHolder;
        constructor(arg0: $UniformHolder);
        get uniforms(): $UniformHolder;
    }
    export class $IrisCompositePassRenderingEvent$PassEnd extends $IrisCompositePassRenderingEvent {
        constructor(arg0: $ICompositeRendererAccessor, arg1: $IrisCompositeRenderingPhase_, arg2: string, arg3: $IrisCompositePassType_, arg4: $NamedCompositePass);
    }
    export class $IrisCompositePassRenderingEvent extends $Event {
        getCompositeRenderer(): $ICompositeRendererAccessor;
        getCompositePass(): $NamedCompositePass;
        getPassName(): string;
        getPassType(): $IrisCompositePassType;
        getPhase(): $IrisCompositeRenderingPhase;
        constructor();
        get compositeRenderer(): $ICompositeRendererAccessor;
        get compositePass(): $NamedCompositePass;
        get passName(): string;
        get passType(): $IrisCompositePassType;
        get phase(): $IrisCompositeRenderingPhase;
    }
    export class $ShaderPackLifecycleEvents$Created$Post extends $ShaderPackLifecycleEvents {
        constructor(arg0: $ShaderPack);
    }
    export class $ShaderPackLifecycleEvents$Created$Pre extends $ShaderPackLifecycleEvents {
        constructor(arg0: $ShaderPack);
    }
    export class $NamedCompositePass {
    }
    export interface $NamedCompositePass {
        superresolution$getName(): string;
        superresolution$setName(arg0: string): void;
    }
    export class $IrisCompositeRenderingPhase extends $Enum<$IrisCompositeRenderingPhase> {
        static values(): $IrisCompositeRenderingPhase[];
        static valueOf(arg0: string): $IrisCompositeRenderingPhase;
        static from(arg0: $WorldRenderingPipeline, arg1: $ICompositeRendererAccessor): $IrisCompositeRenderingPhase;
        static Composite: $IrisCompositeRenderingPhase;
        static Unknown: $IrisCompositeRenderingPhase;
        static Deferred: $IrisCompositeRenderingPhase;
        static Begin: $IrisCompositeRenderingPhase;
        static Prepare: $IrisCompositeRenderingPhase;
    }
    /**
     * Values that may be interpreted as {@link $IrisCompositeRenderingPhase}.
     */
    export type $IrisCompositeRenderingPhase_ = "begin" | "prepare" | "deferred" | "composite" | "unknown";
    export class $IrisCompositePassRenderingEvent$BeforePassRender extends $IrisCompositePassRenderingEvent {
        constructor(arg0: $ICompositeRendererAccessor, arg1: $IrisCompositeRenderingPhase_, arg2: string, arg3: $IrisCompositePassType_, arg4: $NamedCompositePass);
    }
    export class $ShaderPackLifecycleEvents$Reload$Post extends $ShaderPackLifecycleEvents {
        constructor(arg0: $ShaderPack);
    }
    export class $ShaderPackLifecycleEvents$Reload$Pre extends $ShaderPackLifecycleEvents {
        constructor(arg0: $ShaderPack);
    }
    export class $ShaderPackLifecycleEvents$Reload extends $ShaderPackLifecycleEvents {
        constructor();
    }
    export class $ICompositeRendererAccessor {
    }
    export interface $ICompositeRendererAccessor {
        getNoiseTexture(): $TextureAccess;
        getIrisCustomTextures(): $Object2ObjectMap<string, $TextureAccess>;
        getFlippedAtLeastOnceFinal(): $ImmutableSet<number>;
        getCustomUniforms(): $CustomUniforms;
        getPasses(): $ImmutableList<$NamedCompositePass>;
        isSameInstance(arg0: $ICompositeRendererAccessor): boolean;
        setPipeline(arg0: $WorldRenderingPipeline): void;
        setRenderTargets(arg0: $RenderTargets): void;
        setPasses(arg0: $ImmutableList<$NamedCompositePass>): void;
        setNoiseTexture(arg0: $TextureAccess): void;
        getCenterDepthSampler(): $CenterDepthSampler;
        setCenterDepthSampler(arg0: $CenterDepthSampler): void;
        getCustomTextureIds(): $Object2ObjectMap<string, $TextureAccess>;
        setCustomTextureIds(arg0: $Object2ObjectMap<string, $TextureAccess>): void;
        setFlippedAtLeastOnceFinal(arg0: $ImmutableSet<number>): void;
        setCustomUniforms(arg0: $CustomUniforms): void;
        setIrisCustomTextures(arg0: $Object2ObjectMap<string, $TextureAccess>): void;
        getCustomImages(): $Set<$GlImage>;
        setCustomImages(arg0: $Set_<$GlImage>): void;
        getTextureStage(): $TextureStage;
        setTextureStage(arg0: $TextureStage_): void;
        getPhase(): $IrisCompositeRenderingPhase;
        getPipeline(): $WorldRenderingPipeline;
        getRenderTargets(): $RenderTargets;
        get phase(): $IrisCompositeRenderingPhase;
    }
    export class $ShaderPackLifecycleEvents extends $Event {
        getShaderPack(): $ShaderPack;
        constructor();
        get shaderPack(): $ShaderPack;
    }
    export class $IrisCompositePassRenderingEvent$PassBegin extends $IrisCompositePassRenderingEvent {
        constructor(arg0: $ICompositeRendererAccessor, arg1: $IrisCompositeRenderingPhase_, arg2: string, arg3: $IrisCompositePassType_, arg4: $NamedCompositePass);
    }
    export class $IrisCompositePassRenderingEvent$AfterPassRender extends $IrisCompositePassRenderingEvent {
        constructor(arg0: $ICompositeRendererAccessor, arg1: $IrisCompositeRenderingPhase_, arg2: string, arg3: $IrisCompositePassType_, arg4: $NamedCompositePass);
    }
    export class $MacroRegistrationEvent extends $Event {
        getMacros(): $List<$StringPair>;
        registerMacro(arg0: string, arg1: string): void;
        registerMacros(arg0: $List_<$StringPair_>): void;
        constructor();
        get macros(): $List<$StringPair>;
    }
}
