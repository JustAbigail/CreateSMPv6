import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $SpriteData, $RenderStyle, $RenderStyle_, $SpriteData_ } from "@package/foundry/veil/api/quasar/particle";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ParticleModuleData } from "@package/foundry/veil/api/quasar/data/module";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $EmitterShape_, $EmitterShape } from "@package/foundry/veil/api/quasar/emitters/shape";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Vector3dc, $Vector3fc, $Vector3d, $Vector3f } from "@package/org/joml";
export * as module from "@package/foundry/veil/api/quasar/data/module";

declare module "@package/foundry/veil/api/quasar/data" {
    export class $QuasarParticleData extends $Record {
        getRegistryId(): $ResourceLocation;
        shouldCollide(): boolean;
        faceVelocity(): boolean;
        initModules(): $List<$Holder<$ParticleModuleData>>;
        getAllModules(): $List<$Holder<$ParticleModuleData>>;
        updateModules(): $List<$Holder<$ParticleModuleData>>;
        collisionModules(): $List<$Holder<$ParticleModuleData>>;
        renderStyle(): $RenderStyle;
        spriteData(): $SpriteData;
        velocityStretchFactor(): number;
        forceModules(): $List<$Holder<$ParticleModuleData>>;
        renderModules(): $List<$Holder<$ParticleModuleData>>;
        additive(): boolean;
        static CODEC: $Codec<$Holder<$QuasarParticleData>>;
        static DIRECT_CODEC: $Codec<$QuasarParticleData>;
        constructor(shouldCollide: boolean, faceVelocity: boolean, velocityStretchFactor: number, initModules: $List_<$Holder_<$ParticleModuleData>>, updateModules: $List_<$Holder_<$ParticleModuleData>>, collisionModules: $List_<$Holder_<$ParticleModuleData>>, forceModules: $List_<$Holder_<$ParticleModuleData>>, renderModules: $List_<$Holder_<$ParticleModuleData>>, spriteData: $SpriteData_, additive: boolean, renderStyle: $RenderStyle_);
        get registryId(): $ResourceLocation;
        get allModules(): $List<$Holder<$ParticleModuleData>>;
    }
    /**
     * Values that may be interpreted as {@link $QuasarParticleData}.
     */
    export type $QuasarParticleData_ = { renderStyle?: $RenderStyle_, additive?: boolean, renderModules?: $List_<$Holder_<$ParticleModuleData>>, faceVelocity?: boolean, spriteData?: $SpriteData_, updateModules?: $List_<$Holder_<$ParticleModuleData>>, velocityStretchFactor?: number, forceModules?: $List_<$Holder_<$ParticleModuleData>>, initModules?: $List_<$Holder_<$ParticleModuleData>>, shouldCollide?: boolean, collisionModules?: $List_<$Holder_<$ParticleModuleData>>,  } | [renderStyle?: $RenderStyle_, additive?: boolean, renderModules?: $List_<$Holder_<$ParticleModuleData>>, faceVelocity?: boolean, spriteData?: $SpriteData_, updateModules?: $List_<$Holder_<$ParticleModuleData>>, velocityStretchFactor?: number, forceModules?: $List_<$Holder_<$ParticleModuleData>>, initModules?: $List_<$Holder_<$ParticleModuleData>>, shouldCollide?: boolean, collisionModules?: $List_<$Holder_<$ParticleModuleData>>, ];
    export class $EmitterShapeSettings extends $Record {
        getRegistryId(): $ResourceLocation;
        fromSurface(): boolean;
        shape(): $EmitterShape;
        dimensions(): $Vector3fc;
        getPos(arg0: $RandomSource, arg1: $Vector3dc): $Vector3d;
        rotation(): $Vector3fc;
        static CODEC: $Codec<$Holder<$EmitterShapeSettings>>;
        static DIRECT_CODEC: $Codec<$EmitterShapeSettings>;
        constructor(shape: $EmitterShape_, dimensions: $Vector3fc, rotation: $Vector3fc, fromSurface: boolean);
        get registryId(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $EmitterShapeSettings}.
     */
    export type $EmitterShapeSettings_ = { rotation?: $Vector3fc, dimensions?: $Vector3fc, fromSurface?: boolean, shape?: $EmitterShape_,  } | [rotation?: $Vector3fc, dimensions?: $Vector3fc, fromSurface?: boolean, shape?: $EmitterShape_, ];
    export class $ParticleEmitterData extends $Record {
        maxParticles(): number;
        emitterSettings(): $EmitterSettings;
        particleDataHolder(): $Holder<$QuasarParticleData>;
        getRegistryId(): $ResourceLocation;
        maxLifetime(): number;
        particleData(): $QuasarParticleData;
        count(): number;
        loop(): boolean;
        rate(): number;
        static CODEC: $Codec<$Holder<$ParticleEmitterData>>;
        static DIRECT_CODEC: $Codec<$ParticleEmitterData>;
        constructor(maxLifetime: number, loop: boolean, rate: number, count: number, maxParticles: number, emitterSettings: $EmitterSettings_, particleDataHolder: $Holder_<$QuasarParticleData>);
        get registryId(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $ParticleEmitterData}.
     */
    export type $ParticleEmitterData_ = { count?: number, maxParticles?: number, particleDataHolder?: $Holder_<$QuasarParticleData>, loop?: boolean, rate?: number, maxLifetime?: number, emitterSettings?: $EmitterSettings_,  } | [count?: number, maxParticles?: number, particleDataHolder?: $Holder_<$QuasarParticleData>, loop?: boolean, rate?: number, maxLifetime?: number, emitterSettings?: $EmitterSettings_, ];
    export class $ParticleSettings extends $Record {
        getRegistryId(): $ResourceLocation;
        particleSpeed(): number;
        particleSpeed(arg0: $RandomSource): number;
        randomSize(): boolean;
        particleSizeVariation(): number;
        particleLifetime(arg0: $RandomSource): number;
        particleLifetime(): number;
        particleLifetimeVariation(): number;
        initialDirection(arg0: $RandomSource): $Vector3fc;
        initialDirection(): $Vector3fc;
        randomInitialDirection(): boolean;
        randomInitialRotation(): boolean;
        randomSpeed(): boolean;
        randomLifetime(): boolean;
        particleDirection(arg0: $RandomSource): $Vector3f;
        particleSize(arg0: $RandomSource): number;
        particleSize(): number;
        static CODEC: $Codec<$Holder<$ParticleSettings>>;
        static DIRECT_CODEC: $Codec<$ParticleSettings>;
        constructor(particleSpeed: number, particleSize: number, particleSizeVariation: number, particleLifetime: number, particleLifetimeVariation: number, initialDirection: $Vector3fc, randomInitialDirection: boolean, randomInitialRotation: boolean, randomSpeed: boolean, randomSize: boolean, randomLifetime: boolean);
        get registryId(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $ParticleSettings}.
     */
    export type $ParticleSettings_ = { initialDirection?: $Vector3fc, randomSize?: boolean, particleSize?: number, randomInitialDirection?: boolean, particleLifetimeVariation?: number, particleLifetime?: number, randomLifetime?: boolean, randomInitialRotation?: boolean, particleSizeVariation?: number, particleSpeed?: number, randomSpeed?: boolean,  } | [initialDirection?: $Vector3fc, randomSize?: boolean, particleSize?: number, randomInitialDirection?: boolean, particleLifetimeVariation?: number, particleLifetime?: number, randomLifetime?: boolean, randomInitialRotation?: boolean, particleSizeVariation?: number, particleSpeed?: number, randomSpeed?: boolean, ];
    export class $EmitterSettings extends $Record {
        particleSettingsHolder(): $Holder<$ParticleSettings>;
        forceSpawn(): boolean;
        emitterShapeSettings(): $List<$EmitterShapeSettings>;
        particleSettings(): $ParticleSettings;
        emitterShapeSettingsHolders(): $List<$Holder<$EmitterShapeSettings>>;
        static CODEC: $Codec<$EmitterSettings>;
        constructor(emitterShapeSettingsHolders: $List_<$Holder_<$EmitterShapeSettings>>, particleSettingsHolder: $Holder_<$ParticleSettings>, forceSpawn: boolean);
    }
    /**
     * Values that may be interpreted as {@link $EmitterSettings}.
     */
    export type $EmitterSettings_ = { emitterShapeSettingsHolders?: $List_<$Holder_<$EmitterShapeSettings>>, particleSettingsHolder?: $Holder_<$ParticleSettings>, forceSpawn?: boolean,  } | [emitterShapeSettingsHolders?: $List_<$Holder_<$EmitterShapeSettings>>, particleSettingsHolder?: $Holder_<$ParticleSettings>, forceSpawn?: boolean, ];
}
