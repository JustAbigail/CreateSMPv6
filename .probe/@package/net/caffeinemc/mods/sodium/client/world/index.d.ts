import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $PalettedContainerRO } from "@package/net/minecraft/world/level/chunk";
import { $SodiumWorldRenderer } from "@package/net/caffeinemc/mods/sodium/client/render";
export * as cloned from "@package/net/caffeinemc/mods/sodium/client/world/cloned";

declare module "@package/net/caffeinemc/mods/sodium/client/world" {
    export class $BiomeSeedProvider {
        static getBiomeZoomSeed(arg0: $ClientLevel): number;
    }
    export interface $BiomeSeedProvider {
        sodium$getBiomeZoomSeed(): number;
    }
    /**
     * Values that may be interpreted as {@link $BiomeSeedProvider}.
     */
    export type $BiomeSeedProvider_ = (() => number);
    export class $LevelRendererExtension {
    }
    export interface $LevelRendererExtension {
        sodium$getWorldRenderer(): $SodiumWorldRenderer;
    }
    /**
     * Values that may be interpreted as {@link $LevelRendererExtension}.
     */
    export type $LevelRendererExtension_ = (() => $SodiumWorldRenderer);
    export class $PalettedContainerROExtension<T> {
        static clone<T>(arg0: $PalettedContainerRO<T>): $PalettedContainerRO<T>;
        static of<T>(arg0: $PalettedContainerRO<T>): $PalettedContainerROExtension<T>;
    }
    export interface $PalettedContainerROExtension<T> {
        sodium$unpack(arg0: T[]): void;
        sodium$unpack(arg0: T[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        sodium$copy(): $PalettedContainerRO<T>;
    }
    export class $SodiumAuxiliaryLightManager {
    }
    export interface $SodiumAuxiliaryLightManager {
    }
}
