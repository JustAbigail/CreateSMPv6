import { $HeightMap, $HeightMap$State } from "@package/neoforge/fun/qu_an/minecraft/asyncparticles/client/util";
import { $Long2ByteMap } from "@package/it/unimi/dsi/fastutil/longs";

declare module "@package/neoforge/fun/qu_an/minecraft/asyncparticles/client/compat/create/neoforge" {
    export class $ContraptionHeightMap extends $HeightMap {
        getPendingMoving(xz: number): number;
        getPendingMoving(x: number, z: number): number;
        getDefaultMoving(): number;
        setMoving(xz: number, moving: boolean): void;
        setMoving(x: number, z: number, moving: boolean): void;
        getState(): $ContraptionHeightMap$State;
        static DEFAULT_HEIGHT: number;
        static DEFAULT_MOVING: number;
        constructor(defaultHeight: number, defaultMoving: number);
        constructor(defaultMoving: number);
        constructor();
    }
    export class $ContraptionHeightMap$State extends $HeightMap$State {
        isMoving(x: number, z: number): number;
        constructor(parent: $HeightMap$State, movingMap: $Long2ByteMap);
    }
    export class $ContraptionHeightMapProvider {
    }
    export interface $ContraptionHeightMapProvider {
        asyncparticles$getHeightMap(): $ContraptionHeightMap;
    }
    /**
     * Values that may be interpreted as {@link $ContraptionHeightMapProvider}.
     */
    export type $ContraptionHeightMapProvider_ = (() => $ContraptionHeightMap);
}
