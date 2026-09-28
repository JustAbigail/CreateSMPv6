import { $FinalPassRenderer, $CompositeRenderer } from "@package/net/irisshaders/iris/pipeline";
export * as before1_21_1 from "@package/io/homo/irisapi/mixin/composite/before1_21_1";

declare module "@package/io/homo/irisapi/mixin/composite" {
    export class $IrisRenderingPipelineAccessor {
    }
    export interface $IrisRenderingPipelineAccessor {
        getDeferredRenderer(): $CompositeRenderer;
        getBeginRenderer(): $CompositeRenderer;
        getPrepareRenderer(): $CompositeRenderer;
        getFinalPassRenderer(): $FinalPassRenderer;
        getCompositeRenderer(): $CompositeRenderer;
    }
}
