import { $IntFunction_ } from "@package/java/util/function";
import { $GlUniform, $GlUniformBlock } from "@package/net/caffeinemc/mods/sodium/client/gl/shader/uniform";
import { $Matrix4fc } from "@package/org/joml";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk/shader" {
    export class $ShaderBindingContext {
    }
    export interface $ShaderBindingContext {
        bindUniformOptional<U extends $GlUniform<never>>(arg0: string, arg1: $IntFunction_<U>): U;
        bindUniformBlock(arg0: string, arg1: number): $GlUniformBlock;
        bindUniformBlockOptional(arg0: string, arg1: number): $GlUniformBlock;
        bindUniform<U extends $GlUniform<never>>(arg0: string, arg1: $IntFunction_<U>): U;
    }
    export class $ChunkShaderInterface {
    }
    export interface $ChunkShaderInterface {
        /**
         * @deprecated
         */
        setupState(): void;
        setModelViewMatrix(arg0: $Matrix4fc): void;
        setRegionOffset(arg0: number, arg1: number, arg2: number): void;
        /**
         * @deprecated
         */
        resetState(): void;
        setProjectionMatrix(arg0: $Matrix4fc): void;
    }
}
