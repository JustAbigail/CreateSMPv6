import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";

declare module "@package/net/createmod/catnip/render" {
    export class $SpriteShiftEntry {
        getOriginal(): $TextureAtlasSprite;
        static getUnInterpolatedU(arg0: $TextureAtlasSprite, arg1: number): number;
        static getUnInterpolatedV(arg0: $TextureAtlasSprite, arg1: number): number;
        getTargetU(arg0: number): number;
        getTargetV(arg0: number): number;
        getTargetResourceLocation(): $ResourceLocation;
        getOriginalResourceLocation(): $ResourceLocation;
        set(arg0: $ResourceLocation_, arg1: $ResourceLocation_): void;
        getTarget(): $TextureAtlasSprite;
        constructor();
    }
}
