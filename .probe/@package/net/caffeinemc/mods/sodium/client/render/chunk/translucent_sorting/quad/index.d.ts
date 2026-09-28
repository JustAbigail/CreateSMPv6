import { $ModelQuadFacing } from "@package/net/caffeinemc/mods/sodium/client/model/quad/properties";
import { $Vector3fc } from "@package/org/joml";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/quad" {
    export class $TQuad {
        getCenter(): $Vector3fc;
        getQuadHash(): number;
        getFacing(): $ModelQuadFacing;
        getQuantizedNormal(): $Vector3fc;
        extentsEqual(arg0: number[]): boolean;
        static extentsEqual(arg0: number[], arg1: number[]): boolean;
        static extentsIntersect(arg0: $TQuad, arg1: $TQuad): boolean;
        static extentsIntersect(arg0: number[], arg1: number[]): boolean;
        getVertexPositions(): number[];
        useQuantizedFacing(): $ModelQuadFacing;
        getQuantizedDotProduct(): number;
        getPackedNormal(): number;
        getAccurateDotProduct(): number;
        getExtents(): number[];
        getAccurateNormal(): $Vector3fc;
        static VERTEX_EPSILON: number;
        static QUANTIZE_EPSILON: number;
    }
}
