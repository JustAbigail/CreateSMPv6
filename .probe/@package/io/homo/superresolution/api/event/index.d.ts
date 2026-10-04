import { $Event } from "@package/net/neoforged/bus/api";
import { $DispatchResource, $DispatchResource_ } from "@package/io/homo/superresolution/common/upscale";
import { $AbstractAlgorithm } from "@package/io/homo/superresolution/api";
import { $IFrameBuffer } from "@package/io/homo/superresolution/core/graphics/impl/framebuffer";

declare module "@package/io/homo/superresolution/api/event" {
    export class $AlgorithmRegisterEvent extends $Event {
        constructor();
    }
    export class $AlgorithmResizeEvent extends $Event {
        getRenderWidth(): number;
        getRenderHeight(): number;
        getAlgorithm(): $AbstractAlgorithm;
        getScreenWidth(): number;
        getScreenHeight(): number;
        constructor(arg0: $AbstractAlgorithm, arg1: number, arg2: number, arg3: number, arg4: number);
        get renderWidth(): number;
        get renderHeight(): number;
        get algorithm(): $AbstractAlgorithm;
        get screenWidth(): number;
        get screenHeight(): number;
    }
    export class $AlgorithmDispatchFinishEvent extends $Event {
        getOutput(): $IFrameBuffer;
        getAlgorithm(): $AbstractAlgorithm;
        constructor(arg0: $AbstractAlgorithm, arg1: $IFrameBuffer);
        get output(): $IFrameBuffer;
        get algorithm(): $AbstractAlgorithm;
    }
    export class $LevelRenderEndEvent extends $Event {
        constructor();
    }
    export class $LevelRenderStartEvent extends $Event {
        constructor();
    }
    export class $AlgorithmDispatchEvent extends $Event {
        getDispatchResource(): $DispatchResource;
        getAlgorithm(): $AbstractAlgorithm;
        constructor(arg0: $AbstractAlgorithm, arg1: $DispatchResource_);
        get dispatchResource(): $DispatchResource;
        get algorithm(): $AbstractAlgorithm;
    }
    export class $ConfigChangedEvent extends $Event {
        constructor();
    }
}
