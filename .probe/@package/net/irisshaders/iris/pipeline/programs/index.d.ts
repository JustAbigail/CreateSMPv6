import { $Supplier_, $Function_ } from "@package/java/util/function";
import { $ShaderInstance } from "@package/net/minecraft/client/renderer";
import { $ShadowRenderTargets } from "@package/net/irisshaders/iris/shadows";
import { $ChunkShaderInterface } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/shader";
import { $CustomUniforms } from "@package/net/irisshaders/iris/uniforms/custom";
import { $GlFramebuffer } from "@package/net/irisshaders/iris/gl/framebuffer";
import { $ProgramFallbackResolver, $ProgramSet } from "@package/net/irisshaders/iris/shaderpack/programs";
import { $TerrainRenderPass } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/terrain";
import { $RenderTargets } from "@package/net/irisshaders/iris/targets";
import { $GlProgram } from "@package/net/caffeinemc/mods/sodium/client/gl/shader";
import { $IrisRenderingPipeline } from "@package/net/irisshaders/iris/pipeline";

declare module "@package/net/irisshaders/iris/pipeline/programs" {
    export class $SodiumPrograms {
        getProgram(arg0: $TerrainRenderPass): $GlProgram<$ChunkShaderInterface>;
        getFramebuffer(arg0: $TerrainRenderPass): $GlFramebuffer;
        constructor(arg0: $IrisRenderingPipeline, arg1: $ProgramSet, arg2: $ProgramFallbackResolver, arg3: $RenderTargets, arg4: $Supplier_<$ShadowRenderTargets>, arg5: $CustomUniforms);
    }
    export class $ShaderMap {
        getShader(arg0: $ShaderKey): $ShaderInstance;
        constructor(arg0: $Function_<$ShaderKey, $ShaderInstance>);
    }
}
