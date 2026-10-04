import { $Colorc } from "@package/foundry/veil/api/client/color";
import { $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $Codec } from "@package/com/mojang/serialization";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $MolangEnvironment } from "@package/gg/moonflower/molangcompiler/api";
import { $Camera } from "@package/net/minecraft/client";
import { $Iterator, $List, $List_ } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $BlockPos } from "@package/net/minecraft/core";
import { $TickTaskScheduler } from "@package/foundry/veil/api";
import { $MatrixStack } from "@package/foundry/veil/api/client/render";
import { $Trail } from "@package/foundry/veil/api/quasar/fx";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $CodeModule_ } from "@package/foundry/veil/api/quasar/data/module";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Record } from "@package/java/lang";
import { $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $QuasarParticleData_, $QuasarParticleData, $ParticleSettings, $ParticleSettings_, $EmitterShapeSettings, $ParticleEmitterData, $EmitterShapeSettings_ } from "@package/foundry/veil/api/quasar/data";
import { $Vector4fc, $Vector3dc, $Vector3d, $Vector3f, $Vector4f, $Vector3fc } from "@package/org/joml";
import { $ForceParticleModule, $ParticleModule, $CollisionParticleModule, $UpdateParticleModule, $InitParticleModule, $RenderParticleModule } from "@package/foundry/veil/api/quasar/emitters/module";

declare module "@package/foundry/veil/api/quasar/particle" {
    export class $ParticleModuleSet$Builder {
        addModule(arg0: $ParticleModule): void;
        build(): $ParticleModuleSet;
        constructor();
    }
    export class $RenderStyle {
        static CODEC: $Codec<$RenderStyle>;
    }
    export interface $RenderStyle {
        clear(): void;
        setup(arg0: number): boolean;
        render(arg0: $MatrixStack, arg1: $QuasarParticle, arg2: $RenderData, arg3: $Vector3fc, arg4: $VertexConsumer, arg5: number, arg6: number): void;
        getRenderType(arg0: $QuasarParticle, arg1: $RenderData): $RenderType;
        set up(value: number);
    }
    /**
     * Values that may be interpreted as {@link $RenderStyle}.
     */
    export type $RenderStyle_ = RegistryTypes.VeilQuasarRenderStyle | ((arg0: $MatrixStack, arg1: $QuasarParticle, arg2: $RenderData, arg3: $Vector3fc, arg4: $VertexConsumer, arg5: number, arg6: number) => void);
    export class $RenderData {
        setAlpha(arg0: number): void;
        renderTrails(arg0: $MatrixStack, arg1: $MultiBufferSource_, arg2: $Vec3_, arg3: number): void;
        getFixedPackedLight(): number;
        getTrails(): $List<$Trail>;
        setSpriteData(arg0: $SpriteData_): void;
        setRed(arg0: number): void;
        setGreen(arg0: number): void;
        setBlue(arg0: number): void;
        setFixedPackedLight(arg0: number): void;
        setAtlasSprite(arg0: $TextureAtlasSprite): void;
        getRenderRadius(): number;
        getRenderAge(): number;
        getAtlasSprite(): $TextureAtlasSprite;
        getSpriteData(): $SpriteData;
        getAgePercent(): number;
        getPackedLight(): number;
        getRed(): number;
        getGreen(): number;
        getBlue(): number;
        getAlpha(): number;
        markDirty(): void;
        getRenderPosition(): $Vector3dc;
        getRenderRotation(): $Vector3fc;
        tick(arg0: $QuasarParticle, arg1: number): void;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setColor(arg0: $Vector4fc): void;
        setColor(arg0: $Colorc): void;
        isAdditive(): boolean;
        setAdditive(arg0: boolean): void;
        render(arg0: $QuasarParticle, arg1: number): void;
        getRenderType(): $RenderType;
        /**
         * @deprecated
         */
        static BLANK: $ResourceLocation;
        agePercent: number;
        renderAge: number;
        constructor(arg0: $QuasarParticle, arg1: $QuasarParticleData_);
        get trails(): $List<$Trail>;
        get renderRadius(): number;
        get packedLight(): number;
        get renderPosition(): $Vector3dc;
        get renderRotation(): $Vector3fc;
        get renderType(): $RenderType;
    }
    export interface $RenderStyle extends RegistryMarked<RegistryTypes.VeilQuasarRenderStyleTag, RegistryTypes.VeilQuasarRenderStyle> {}
    export class $QuasarParticle {
        getVelocity(): $Vector3d;
        getBlockPosition(): $BlockPos;
        getEmitter(): $ParticleEmitter;
        vectorToRotation(arg0: number, arg1: number, arg2: number): void;
        getLifetime(): number;
        getBlockStateInOrUnder(): $BlockState;
        getEnvironment(): $MolangEnvironment;
        getSettings(): $ParticleSettings;
        getRadius(): number;
        setAge(arg0: number): void;
        setRadius(arg0: number): void;
        getRandomSource(): $RandomSource;
        getPosition(): $Vector3d;
        getLevel(): $ClientLevel;
        tick(): void;
        getData(): $QuasarParticleData;
        remove(): void;
        init(): void;
        getModules(): $ParticleModuleSet;
        getScheduler(): $TickTaskScheduler;
        getAge(): number;
        render(arg0: number): void;
        onRemove(): void;
        isRemoved(): boolean;
        getBoundingBox(): $AABB;
        getRenderData(): $RenderData;
        getRotation(): $Vector3f;
        constructor(arg0: $ClientLevel, arg1: $RandomSource, arg2: $TickTaskScheduler, arg3: $QuasarParticleData_, arg4: $ParticleModuleSet, arg5: $ParticleSettings_, arg6: $ParticleEmitter);
        get velocity(): $Vector3d;
        get blockPosition(): $BlockPos;
        get emitter(): $ParticleEmitter;
        get lifetime(): number;
        get blockStateInOrUnder(): $BlockState;
        get environment(): $MolangEnvironment;
        get settings(): $ParticleSettings;
        get randomSource(): $RandomSource;
        get position(): $Vector3d;
        get level(): $ClientLevel;
        get data(): $QuasarParticleData;
        get modules(): $ParticleModuleSet;
        get scheduler(): $TickTaskScheduler;
        get removed(): boolean;
        get boundingBox(): $AABB;
        get renderData(): $RenderData;
        get rotation(): $Vector3f;
    }
    export class $ParticleEmitter {
        setPosition(arg0: $Vec3_): void;
        setPosition(arg0: $Vector3dc): void;
        setPosition(arg0: number, arg1: number, arg2: number): void;
        static clearErrors(): void;
        addCodeModule(arg0: $CodeModule_): void;
        getMaxLifetime(): number;
        getRate(): number;
        getMaxParticles(): number;
        getEmitterShapeSettings(): $List<$EmitterShapeSettings>;
        getParticleSettings(): $ParticleSettings;
        isForceSpawn(): boolean;
        getParticleData(): $QuasarParticleData;
        getAttachedEntity(): $Entity;
        setMaxLifetime(arg0: number): void;
        setLoop(arg0: boolean): void;
        setRate(arg0: number): void;
        setMaxParticles(arg0: number): void;
        setEmitterShapeSettings(arg0: $List_<$EmitterShapeSettings_>): void;
        setParticleSettings(arg0: $ParticleSettings_): void;
        setForceSpawn(arg0: boolean): void;
        setParticleData(arg0: $QuasarParticleData_): void;
        setAttachedEntity(arg0: $Entity): void;
        getParticleCount(): number;
        getRegistryName(): $ResourceLocation;
        getPosition(): $Vector3d;
        getData(): $ParticleEmitterData;
        remove(): void;
        reset(): void;
        trim(arg0: number): number;
        getCount(): number;
        isLoop(): boolean;
        render(arg0: $MatrixStack, arg1: $MultiBufferSource_, arg2: $Camera, arg3: number): void;
        setCount(arg0: number): void;
        isRemoved(): boolean;
        get particleCount(): number;
        get registryName(): $ResourceLocation;
        get data(): $ParticleEmitterData;
        get removed(): boolean;
    }
    export class $SpriteData extends $Record {
        frameTime(): number;
        frameWidth(): number;
        frameHeight(): number;
        stretchToLifetime(): boolean;
        uv(arg0: number, arg1: number, arg2: $Vector4f): $Vector4f;
        frameCount(): number;
        v(arg0: number, arg1: number, arg2: number): number;
        u(arg0: number, arg1: number, arg2: number): number;
        sprite(): $ResourceLocation;
        static CODEC: $Codec<$SpriteData>;
        constructor(sprite: $ResourceLocation_, frameCount: number, frameTime: number, frameWidth: number, frameHeight: number, stretchToLifetime: boolean);
    }
    /**
     * Values that may be interpreted as {@link $SpriteData}.
     */
    export type $SpriteData_ = { frameTime?: number, sprite?: $ResourceLocation_, frameWidth?: number, stretchToLifetime?: boolean, frameCount?: number, frameHeight?: number,  } | [frameTime?: number, sprite?: $ResourceLocation_, frameWidth?: number, stretchToLifetime?: boolean, frameCount?: number, frameHeight?: number, ];
    export class $ParticleModuleSet {
        getRenderModules(): $RenderParticleModule[];
        getEnabledRenderModules(): $Iterator<$RenderParticleModule>;
        getInitModules(): $InitParticleModule[];
        updateEnabled(): void;
        getUpdateModules(): $UpdateParticleModule[];
        getForceModules(): $ForceParticleModule[];
        getEnabledRenderModuleCount(): number;
        getCollisionModules(): $CollisionParticleModule[];
        getEnabledRenderModulesArray(): $RenderParticleModule[];
        getAllModules(): $ParticleModule[];
        static builder(): $ParticleModuleSet$Builder;
        copy(): $ParticleModuleSet;
        get renderModules(): $RenderParticleModule[];
        get enabledRenderModules(): $Iterator<$RenderParticleModule>;
        get initModules(): $InitParticleModule[];
        get updateModules(): $UpdateParticleModule[];
        get forceModules(): $ForceParticleModule[];
        get enabledRenderModuleCount(): number;
        get collisionModules(): $CollisionParticleModule[];
        get enabledRenderModulesArray(): $RenderParticleModule[];
        get allModules(): $ParticleModule[];
    }
}
