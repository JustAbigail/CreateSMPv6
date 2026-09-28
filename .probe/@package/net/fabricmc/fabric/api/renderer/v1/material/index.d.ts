import { $TriState } from "@package/net/fabricmc/fabric/api/util";
import { $ResourceLocation } from "@package/net/minecraft/resources";

declare module "@package/net/fabricmc/fabric/api/renderer/v1/material" {
    export class $MaterialView {
    }
    export interface $MaterialView {
        blendMode(): $BlendMode;
        disableColorIndex(): boolean;
        disableDiffuse(): boolean;
        shadeMode(): $ShadeMode;
        glint(): $TriState;
        ambientOcclusion(): $TriState;
        emissive(): boolean;
    }
    export class $RenderMaterial {
        static MATERIAL_STANDARD: $ResourceLocation;
    }
    export interface $RenderMaterial extends $MaterialView {
        /**
         * @deprecated
         */
        spriteDepth(): number;
    }
}
