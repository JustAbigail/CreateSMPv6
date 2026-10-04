import { $Destroyable } from "@package/io/homo/superresolution/core/impl";
import { $ITexture } from "@package/io/homo/superresolution/core/graphics/impl/texture";
import { $DispatchResource_ } from "@package/io/homo/superresolution/common/upscale";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Record } from "@package/java/lang";
import { $IFrameBuffer } from "@package/io/homo/superresolution/core/graphics/impl/framebuffer";
export * as utils from "@package/io/homo/superresolution/api/utils";
export * as event from "@package/io/homo/superresolution/api/event";
export * as registry from "@package/io/homo/superresolution/api/registry";

declare module "@package/io/homo/superresolution/api" {
    export class $AbstractAlgorithm implements $Destroyable {
        invalidateHistory(): void;
        getOutputFrameBuffer(): $IFrameBuffer;
        getOutputTextureId(): number;
        dispatch(arg0: $DispatchResource_): boolean;
        initialize(arg0: $InitializationDescription): void;
        initialize(): void;
        destroy(): void;
        resize(arg0: number, arg1: number): void;
        constructor();
        get outputFrameBuffer(): $IFrameBuffer;
        get outputTextureId(): number;
    }
    export class $InitializationDescription {
        isMotionJittered(): boolean;
        isHdrInput(): boolean;
        isAutoExposure(): boolean;
        setMotionJittered(arg0: boolean): $InitializationDescription;
        setHdrInput(arg0: boolean): $InitializationDescription;
        setAutoExposure(arg0: boolean): $InitializationDescription;
        static defaults(): $InitializationDescription;
        constructor();
    }
    export class $InputResourceSet extends $Record {
        colorTexture(): $ITexture;
        depthTexture(): $ITexture;
        motionVectorsTexture(): $ITexture;
        exposureTexture(): $ITexture;
        constructor(colorTexture: $ITexture, depthTexture: $ITexture, motionVectorsTexture: $ITexture, exposureTexture: $ITexture);
    }
    /**
     * Values that may be interpreted as {@link $InputResourceSet}.
     */
    export type $InputResourceSet_ = { exposureTexture?: $ITexture, motionVectorsTexture?: $ITexture, depthTexture?: $ITexture, colorTexture?: $ITexture,  } | [exposureTexture?: $ITexture, motionVectorsTexture?: $ITexture, depthTexture?: $ITexture, colorTexture?: $ITexture, ];
    export class $QualityPreset {
        getUpscaleRatio(): number;
        setUpscaleRatio(arg0: number): $QualityPreset;
        setCodeName(arg0: string): $QualityPreset;
        getCodeName(): string;
        getName(): $Component;
        setName(arg0: $Component_): $QualityPreset;
        constructor();
    }
}
