import { $SRShaderCompatData } from "@package/io/homo/superresolution/common/minecraft/handler/shadercompat";
export * as mixin from "@package/io/homo/superresolution/shadercompat/mixin";

declare module "@package/io/homo/superresolution/shadercompat" {
    export class $IrisSRCompatShaderPack {
    }
    export interface $IrisSRCompatShaderPack {
        superresolution$getSuperResolutionComaptConfig(): $SRShaderCompatData;
        superresolution$isSupportsSuperResolution(): boolean;
    }
}
