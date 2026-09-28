import { $Event } from "@package/net/neoforged/bus/api";
import { $DispatchResource, $DispatchResource_ } from "@package/io/homo/superresolution/common/upscale";
import { $AbstractAlgorithm } from "@package/io/homo/superresolution/api";
import { $IFrameBuffer } from "@package/io/homo/superresolution/core/graphics/impl/framebuffer";

declare module "@package/io/homo/superresolution/api/event" {
    export class $AlgorithmRegisterEvent extends $Event {
        constructor();
    }
    export class $AlgorithmResizeEvent extends $Event {
        getAlgorithm(): $AbstractAlgorithm;
        getScreenWidth(): number;
        getScreenHeight(): number;
        getRenderWidth(): number;
        getRenderHeight(): number;
        constructor(arg0: $AbstractAlgorithm, arg1: number, arg2: number, arg3: number, arg4: number);
    }
    export class $AlgorithmDispatchFinishEvent extends $Event {
        getOutput(): $IFrameBuffer;
        getAlgorithm(): $AbstractAlgorithm;
        constructor(arg0: $AbstractAlgorithm, arg1: $IFrameBuffer);
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
    }
    export class $ConfigChangedEvent extends $Event {
        constructor();
    }
}
