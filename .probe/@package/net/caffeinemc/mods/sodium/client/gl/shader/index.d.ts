import { $Function_, $IntFunction_ } from "@package/java/util/function";
import { $GlObject } from "@package/net/caffeinemc/mods/sodium/client/gl";
import { $GlUniform, $GlUniformBlock } from "@package/net/caffeinemc/mods/sodium/client/gl/shader/uniform";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ShaderBindingContext } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/shader";
export * as uniform from "@package/net/caffeinemc/mods/sodium/client/gl/shader/uniform";

declare module "@package/net/caffeinemc/mods/sodium/client/gl/shader" {
    export class $GlProgram<T> extends $GlObject implements $ShaderBindingContext {
        bindUniformOptional<U extends $GlUniform<never>>(arg0: string, arg1: $IntFunction_<U>): U;
        bindUniformBlock(arg0: string, arg1: number): $GlUniformBlock;
        bindUniformBlockOptional(arg0: string, arg1: number): $GlUniformBlock;
        bindUniform<U extends $GlUniform<never>>(arg0: string, arg1: $IntFunction_<U>): U;
        unbind(): void;
        static builder(arg0: $ResourceLocation_): $GlProgram$Builder;
        "delete"(): void;
        bind(): void;
        getInterface(): T;
        get interface(): T;
    }
    export class $GlProgram$Builder {
        attachShader(arg0: $GlShader): $GlProgram$Builder;
        bindAttribute(arg0: string, arg1: number): $GlProgram$Builder;
        bindFragmentData(arg0: string, arg1: number): $GlProgram$Builder;
        link<U>(arg0: $Function_<$ShaderBindingContext, U>): $GlProgram<U>;
        constructor(arg0: $ResourceLocation_);
    }
}
