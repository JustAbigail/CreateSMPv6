import { $ShaderInstance, $PostPass, $PostChain } from "@package/net/minecraft/client/renderer";
import { $List_, $Map, $List } from "@package/java/util";

declare module "@package/foundry/veil/mixin/debug/accessor" {
    export class $DebugPostChainAccessor {
    }
    export interface $DebugPostChainAccessor {
        getPasses(): $List<$PostPass>;
    }
    /**
     * Values that may be interpreted as {@link $DebugPostChainAccessor}.
     */
    export type $DebugPostChainAccessor_ = (() => $List_<$PostPass>);
    export class $DebugGameRendererAccessor {
    }
    export interface $DebugGameRendererAccessor {
        getPostEffect(): $PostChain;
        getShaders(): $Map<string, $ShaderInstance>;
        getBlitShader(): $ShaderInstance;
    }
    export class $DebugLevelRendererAccessor {
    }
    export interface $DebugLevelRendererAccessor {
        getEntityEffect(): $PostChain;
        getTransparencyChain(): $PostChain;
    }
}
