import { $VoxelShape, $DiscreteVoxelShape } from "@package/net/minecraft/world/phys/shapes";

declare module "@package/malte0811/ferritecore/mixin/accessors" {
    export class $DiscreteVSAccess {
    }
    export interface $DiscreteVSAccess {
        getXSize(): number;
        getYSize(): number;
        getZSize(): number;
    }
    export class $BakedQuadAccess {
    }
    export interface $BakedQuadAccess {
        setVertices(arg0: number[]): void;
    }
    /**
     * Values that may be interpreted as {@link $BakedQuadAccess}.
     */
    export type $BakedQuadAccess_ = ((arg0: number[]) => void);
    export class $VoxelShapeAccess {
    }
    export interface $VoxelShapeAccess {
        getShape(): $DiscreteVoxelShape;
        setShape(arg0: $DiscreteVoxelShape): void;
        getFaces(): $VoxelShape[];
        setFaces(arg0: $VoxelShape[]): void;
    }
}
