import { $ParticleRenderType_, $Particle } from "@package/net/minecraft/client/particle";
import { $Class } from "@package/java/lang";
import { $Frustum } from "@package/net/minecraft/client/renderer/culling";
import { $AABB } from "@package/net/minecraft/world/phys";

declare module "@package/neoforge/fun/qu_an/minecraft/asyncparticles/client/addon" {
    export class $ParticleEngineAddon {
    }
    export interface $ParticleEngineAddon {
        asyncparticle$setFrustum(arg0: $Frustum): void;
        asyncparticle$getFrustum(): $Frustum;
        asyncparticle$addRenderType(arg0: $ParticleRenderType_): void;
    }
    export class $GpuParticleAddon {
        static COLOR_ALPHA_OFFSET: number;
        static oCOLOR_RED_OFFSET: number;
        static COLOR_BLUE_OFFSET: number;
        static COLOR_SIZE: number;
        static oCOLOR_BLUE_OFFSET: number;
        static COLOR_SIZE_FULL: number;
        static COLOR_OFFSET: number;
        static oCOLOR_OFFSET: number;
        static oCOLOR_GREEN_OFFSET: number;
        static COLOR_GREEN_OFFSET: number;
        static COLOR_RED_OFFSET: number;
        static oCOLOR_ALPHA_OFFSET: number;
    }
    export interface $GpuParticleAddon extends $LightCachedParticleAddon {
        asyncparticles$postTick(arg0: number): void;
        asyncparticles$shouldRender(): boolean;
        asyncparticles$getQuadSize(arg0: number): number;
        asyncparticles$getU0(): number;
        asyncparticles$getV0(): number;
        asyncparticles$getU1(): number;
        asyncparticles$getV1(): number;
        asyncparticles$getGpuLightCoords(arg0: number): number;
        asyncparticles$getXo(): number;
        asyncparticles$getYo(): number;
        asyncparticles$getZo(): number;
        asyncparticles$getX(): number;
        asyncparticles$getY(): number;
        asyncparticles$getZ(): number;
        asyncparticles$getORoll(): number;
        asyncparticles$getRoll(): number;
        asyncparticles$getOColor(): number;
        asyncparticles$getColor(arg0: number): number;
    }
    export class $LightCachedParticleAddon {
        static decompress(lightCache: number): number;
        static compress(light: number): number;
        static INITIAL_LIGHT_CACHE: number;
    }
    export interface $LightCachedParticleAddon {
        asyncparticles$enableLightCache(arg0: boolean): void;
        asyncparticles$isEnabledLightCache(): boolean;
        asyncparticles$setLight(arg0: number): void;
        asyncparticles$getCachedLight(): number;
        asyncparticles$isStaticLight(): boolean;
        asyncparticles$refresh(): void;
        asyncparticles$tickLightCache(): void;
        asyncparticles$invoke_getLightColor(arg0: number): number;
    }
    export class $ParticleAddon {
    }
    export interface $ParticleAddon {
        asyncparticles$setTicked(): void;
        asyncparticles$resetTicked(): void;
        asyncparticles$isTicked(): boolean;
        asyncparticles$setRenderSync(): void;
        asyncparticles$isRenderSync(): boolean;
        asyncparticles$shouldCull(): boolean;
        asyncparticles$setNoCulling(): void;
        asyncparticles$isVisibleOnScreen(): boolean;
        asyncparticles$getRealClass<T extends $Particle>(): $Class<T>;
        getRenderBoundingBox(arg0: number): $AABB;
    }
}
