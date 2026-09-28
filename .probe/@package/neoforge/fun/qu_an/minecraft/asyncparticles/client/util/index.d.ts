
declare module "@package/neoforge/fun/qu_an/minecraft/asyncparticles/client/util" {
    export class $HeightMap$State {
        getHeight(x: number, z: number): number;
        range(): number;
        centerX(): number;
        centerZ(): number;
        constructor(state: $HeightMap$State);
    }
    export class $HeightMap {
        static isOutOfRange(x: number, z: number, state: $HeightMap$State): boolean;
        defaultHeight(): number;
        beginUpdate(centerX: number, centerZ: number, range: number): void;
        commitUpdate(): void;
        getPendingHeight(xz: number): number;
        getPendingHeight(x: number, z: number): number;
        setCenter(x: number, z: number): void;
        getState(): $HeightMap$State;
        static getX(xz: number): number;
        static getZ(xz: number): number;
        setHeight(xz: number, height: number): boolean;
        setHeight(x: number, z: number, height: number): boolean;
        static asLong(x: number, z: number): number;
        static DEFAULT_HEIGHT: number;
        constructor();
        constructor(defaultHeight: number);
    }
}
