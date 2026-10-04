import { $ShaderInstance } from "@package/net/minecraft/client/renderer";
import { $RenderTargets } from "@package/net/irisshaders/iris/targets";
import { $Set } from "@package/java/util";

declare module "@package/foundry/veil/forge/mixin/compat/iris" {
    export class $IrisRenderingPipelineAccessor {
    }
    export interface $IrisRenderingPipelineAccessor {
        getLoadedShaders(): $Set<$ShaderInstance>;
        getRenderTargets(): $RenderTargets;
        get loadedShaders(): $Set<$ShaderInstance>;
        get renderTargets(): $RenderTargets;
    }
}
