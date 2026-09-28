import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $PostPass, $PostChain } from "@package/net/minecraft/client/renderer";
import { $RenderTarget } from "@package/com/mojang/blaze3d/pipeline";
import { $List } from "@package/java/util";
import { $Object } from "@package/java/lang";

declare module "@package/io/homo/superresolution/common/mixin/core/accessor" {
    export class $PostChainAccessor {
    }
    export interface $PostChainAccessor {
        getFullSizedTargets(): $List<$RenderTarget>;
        setScreenTarget(arg0: $RenderTarget): void;
        getPasses(): $List<$PostPass>;
        getScreenWidth(): number;
        getScreenHeight(): number;
    }
    export class $OptionInstanceAccessor {
    }
    export interface $OptionInstanceAccessor {
        getValue(): $Object;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstanceAccessor}.
     */
    export type $OptionInstanceAccessor_ = (() => $Object);
    export class $WindowAccessor {
    }
    export interface $WindowAccessor {
        super_resolution$getFramebufferWidth(): number;
        super_resolution$getFramebufferHeight(): number;
    }
    export class $MinecraftAccessor {
    }
    export interface $MinecraftAccessor {
        getLevel(): $ClientLevel;
        setRenderTarget(arg0: $RenderTarget): void;
    }
    export class $LevelRendererAccessor {
    }
    export interface $LevelRendererAccessor {
        getEntityEffect(): $PostChain;
        getEntityRenderTarget(): $RenderTarget;
    }
}
