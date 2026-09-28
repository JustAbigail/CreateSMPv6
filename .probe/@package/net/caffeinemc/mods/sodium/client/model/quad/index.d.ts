import { $Direction } from "@package/net/minecraft/core";
import { $ModelQuadFacing } from "@package/net/caffeinemc/mods/sodium/client/model/quad/properties";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
export * as properties from "@package/net/caffeinemc/mods/sodium/client/model/quad/properties";

declare module "@package/net/caffeinemc/mods/sodium/client/model/quad" {
    export class $BakedQuadView {
    }
    export interface $BakedQuadView extends $ModelQuadView {
        hasShade(): boolean;
        getNormalFace(): $ModelQuadFacing;
        hasAO(): boolean;
        getFaceNormal(): number;
    }
    export class $ModelQuadView {
    }
    export interface $ModelQuadView {
        getY(arg0: number): number;
        getLight(arg0: number): number;
        getFlags(): number;
        getX(arg0: number): number;
        getZ(arg0: number): number;
        getColor(arg0: number): number;
        hasColor(): boolean;
        getSprite(): $TextureAtlasSprite;
        getColorIndex(): number;
        getVertexNormal(arg0: number): number;
        getFaceNormal(): number;
        getTexU(arg0: number): number;
        getTexV(arg0: number): number;
        getLightFace(): $Direction;
        calculateNormal(): number;
        getAccurateNormal(arg0: number): number;
    }
}
