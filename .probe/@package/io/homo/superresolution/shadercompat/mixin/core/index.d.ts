import { $NamespacedId } from "@package/net/irisshaders/iris/shaderpack/materialmap";
import { $Map_, $Map, $Set_ } from "@package/java/util";
import { $CompositeRenderer } from "@package/net/irisshaders/iris/pipeline";

declare module "@package/io/homo/superresolution/shadercompat/mixin/core" {
    export class $ShaderPackAccessor {
    }
    export interface $ShaderPackAccessor {
        getDimensionMap(): $Map<$NamespacedId, string>;
    }
    /**
     * Values that may be interpreted as {@link $ShaderPackAccessor}.
     */
    export type $ShaderPackAccessor_ = (() => $Map_<$NamespacedId, string>);
    export class $PackRenderTargetDirectivesAccessor {
        static fuckingIris(arg0: $Set_<number>): void;
    }
    export interface $PackRenderTargetDirectivesAccessor {
    }
    export class $RenderTargetsAccessor {
    }
    export interface $RenderTargetsAccessor {
        isDestroyed(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RenderTargetsAccessor}.
     */
    export type $RenderTargetsAccessor_ = (() => boolean);
    export class $IrisRenderingPipelineAccessor {
    }
    export interface $IrisRenderingPipelineAccessor {
        getCompositeRenderer(): $CompositeRenderer;
    }
    /**
     * Values that may be interpreted as {@link $IrisRenderingPipelineAccessor}.
     */
    export type $IrisRenderingPipelineAccessor_ = (() => $CompositeRenderer);
}
