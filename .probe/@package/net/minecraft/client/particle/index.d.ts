import { $LightTexture } from "@package/net/minecraft/client/renderer";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ParticleType_, $ParticleGroup, $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $Camera } from "@package/net/minecraft/client";
import { $ResourceManager, $PreparableReloadListener$PreparationBarrier_, $PreparableReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $Queue, $List, $Set_, $Map } from "@package/java/util";
import { $Frustum } from "@package/net/minecraft/client/renderer/culling";
import { $WeakReference } from "@package/java/lang/ref";
import { $RandomSource } from "@package/net/minecraft/util";
import { $GpuParticleAddon, $LightCachedParticleAddon, $ParticleAddon, $ParticleEngineAddon } from "@package/neoforge/fun/qu_an/minecraft/asyncparticles/client/addon";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ParticleManagerAccessor } from "@package/net/fabricmc/fabric/mixin/client/particle";
import { $TextureAtlasSprite, $TextureManager, $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $ParticleExtension } from "@package/dev/ryanhcode/sable/mixinterface/particle";
import { $Throwable, $Class, $Object } from "@package/java/lang";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $SubLevel, $ClientSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $ParticleEngineAccessor } from "@package/net/createmod/ponder/mixin/client/accessor";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $BufferBuilder, $VertexConsumer, $Tesselator } from "@package/com/mojang/blaze3d/vertex";
import { $AABB_, $Vec3, $AABB, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $Quaternionf } from "@package/org/joml";

declare module "@package/net/minecraft/client/particle" {
    export class $ParticleEngine$SpriteParticleRegistration<T extends $ParticleOptions> {
    }
    export interface $ParticleEngine$SpriteParticleRegistration<T extends $ParticleOptions> {
        create(sprites: $SpriteSet): $ParticleProvider<T>;
    }
    /**
     * Values that may be interpreted as {@link $ParticleEngine$SpriteParticleRegistration}.
     */
    export type $ParticleEngine$SpriteParticleRegistration_<T> = ((arg0: $SpriteSet) => $ParticleProvider<T>);
    export class $ParticleProvider<T extends $ParticleOptions> {
    }
    export interface $ParticleProvider<T extends $ParticleOptions> {
        createParticle(type: T, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
    }
    /**
     * Values that may be interpreted as {@link $ParticleProvider}.
     */
    export type $ParticleProvider_<T> = ((arg0: T, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number) => $Particle);
    export class $SingleQuadParticle$FacingCameraMode {
        static LOOKAT_Y: $SingleQuadParticle$FacingCameraMode;
        static LOOKAT_XYZ: $SingleQuadParticle$FacingCameraMode;
    }
    export interface $SingleQuadParticle$FacingCameraMode {
        setRotation(quaternion: $Quaternionf, camera: $Camera, partialTick: number): void;
    }
    /**
     * Values that may be interpreted as {@link $SingleQuadParticle$FacingCameraMode}.
     */
    export type $SingleQuadParticle$FacingCameraMode_ = ((arg0: $Quaternionf, arg1: $Camera, arg2: number) => void);
    export class $TrackingEmitter extends $NoRenderParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        static MAXIMUM_COLLISION_VELOCITY_SQUARED: number;
        oRoll: number;
        random: $RandomSource;
        asyncparticle$lossSublevelPos: $BlockPos;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        asyncparticle$tracingSubLevel: $WeakReference<any>;
        level: $ClientLevel;
        zd: number;
        static INITIAL_AABB: $AABB;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, entity: $Entity, particleType: $ParticleOptions_);
        constructor(level: $ClientLevel, entity: $Entity, particleType: $ParticleOptions_, lifetime: number);
    }
    export class $SimpleAnimatedParticle extends $TextureSheetParticle {
        setFadeColor(color: number): void;
        setColor(color: number): void;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        static MAXIMUM_COLLISION_VELOCITY_SQUARED: number;
        sprites: $SpriteSet;
        oRoll: number;
        random: $RandomSource;
        asyncparticle$lossSublevelPos: $BlockPos;
        bCol: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        asyncparticle$tracingSubLevel: $WeakReference<any>;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        static INITIAL_AABB: $AABB;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: $SpriteSet, z: number);
        set fadeColor(value: number);
        set color(value: number);
    }
    export class $Particle implements $GpuParticleAddon, $LightCachedParticleAddon, $ParticleAddon, $ParticleExtension {
        setPos(x: number, arg1: number, y: number): void;
        /**
         * Sets the particle alpha (float)
         */
        setAlpha(alpha: number): void;
        setPower(scale: number): $Particle;
        asyncparticles$enableLightCache(b: boolean): void;
        setParticleSpeed(x: number, arg1: number, y: number): void;
        setLifetime(particleLifeTime: number): void;
        getLifetime(): number;
        /**
         * Called to indicate that this particle effect has expired and should be discontinued.
         */
        setLocationFromBoundingbox(): void;
        getParticleGroup(): ($ParticleGroup) | undefined;
        /**
         * Called to indicate that this particle effect has expired and should be discontinued.
         */
        asyncparticles$setTicked(): void;
        /**
         * Called to indicate that this particle effect has expired and should be discontinued.
         */
        asyncparticles$resetTicked(): void;
        /**
         * Returns `true` if this effect has not yet expired. "I feel happy! I feel happy!"
         */
        asyncparticles$isTicked(): boolean;
        /**
         * Called to indicate that this particle effect has expired and should be discontinued.
         */
        asyncparticles$setRenderSync(): void;
        /**
         * Returns `true` if this effect has not yet expired. "I feel happy! I feel happy!"
         */
        asyncparticles$isRenderSync(): boolean;
        /**
         * Returns `true` if this effect has not yet expired. "I feel happy! I feel happy!"
         */
        asyncparticles$isEnabledLightCache(): boolean;
        /**
         * Returns `true` if this effect has not yet expired. "I feel happy! I feel happy!"
         */
        asyncparticles$shouldCull(): boolean;
        /**
         * Called to indicate that this particle effect has expired and should be discontinued.
         */
        asyncparticles$setNoCulling(): void;
        /**
         * Returns `true` if this effect has not yet expired. "I feel happy! I feel happy!"
         */
        asyncparticles$isVisibleOnScreen(): boolean;
        asyncparticles$setLight(particleLifeTime: number): void;
        asyncparticles$getCachedLight(): number;
        /**
         * Returns `true` if this effect has not yet expired. "I feel happy! I feel happy!"
         */
        asyncparticles$isStaticLight(): boolean;
        /**
         * Called to indicate that this particle effect has expired and should be discontinued.
         */
        sable$initialKickOut(): void;
        /**
         * Called to indicate that this particle effect has expired and should be discontinued.
         */
        sable$moveWithInheritedVelocity(): void;
        asyncparticles$calcLight(light: number, blockPos: $BlockPos_): number;
        /**
         * Called to indicate that this particle effect has expired and should be discontinued.
         */
        asyncparticles$refresh(): void;
        asyncparticles$clampLight(subLevel: $SubLevel, light: number): number;
        getLightColor(partialTick: number): number;
        getRenderBoundingBox(arg0: number): $AABB;
        move(x: number, arg1: number, y: number): void;
        /**
         * Called to indicate that this particle effect has expired and should be discontinued.
         */
        tick(): void;
        setColor(particleRed: number, particleGreen: number, particleBlue: number): void;
        setSize(width: number, height: number): void;
        /**
         * Called to indicate that this particle effect has expired and should be discontinued.
         */
        remove(): void;
        scale(scale: number): $Particle;
        /**
         * Returns `true` if this effect has not yet expired. "I feel happy! I feel happy!"
         */
        isAlive(): boolean;
        render(buffer: $VertexConsumer, camera: $Camera, partialTicks: number): void;
        sable$setTrackingSubLevel(arg0: $ClientSubLevel, arg1: $Vec3_): void;
        setBoundingBox(bb: $AABB_): void;
        sable$getTrackingSubLevel(): $SubLevel;
        getPos(): $Vec3;
        getBoundingBox(): $AABB;
        getRenderType(): $ParticleRenderType;
        /**
         * Called to indicate that this particle effect has expired and should be discontinued.
         */
        asyncparticles$tickLightCache(): void;
        asyncparticles$getRealClass<T extends $Particle>(): $Class<T>;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        static MAXIMUM_COLLISION_VELOCITY_SQUARED: number;
        oRoll: number;
        random: $RandomSource;
        asyncparticle$lossSublevelPos: $BlockPos;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        asyncparticle$tracingSubLevel: $WeakReference<any>;
        level: $ClientLevel;
        zd: number;
        static INITIAL_AABB: $AABB;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number);
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number);
        set power(value: number);
        get particleGroup(): ($ParticleGroup) | undefined;
        get alive(): boolean;
        get renderType(): $ParticleRenderType;
    }
    export class $SingleQuadParticle extends $Particle {
        getQuadSize(scaleFactor: number): number;
        getFacingCameraMode(): $SingleQuadParticle$FacingCameraMode;
        handler$cil000$sodium$render(arg0: $VertexConsumer, arg1: $Camera, arg2: number, arg3: $CallbackInfo): void;
        renderRotatedQuad(buffer: $VertexConsumer, quaternion: $Quaternionf, x: number, y: number, z: number, partialTicks: number): void;
        renderRotatedQuad(buffer: $VertexConsumer, camera: $Camera, quaternion: $Quaternionf, partialTicks: number): void;
        handler$cil000$sodium$renderRotatedQuad(arg0: $VertexConsumer, arg1: $Camera, arg2: $Quaternionf, arg3: number, arg4: $CallbackInfo): void;
        getU0(): number;
        getU1(): number;
        getV0(): number;
        getV1(): number;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        static MAXIMUM_COLLISION_VELOCITY_SQUARED: number;
        oRoll: number;
        random: $RandomSource;
        asyncparticle$lossSublevelPos: $BlockPos;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        asyncparticle$tracingSubLevel: $WeakReference<any>;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        static INITIAL_AABB: $AABB;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number);
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number);
        get facingCameraMode(): $SingleQuadParticle$FacingCameraMode;
        get u0(): number;
        get u1(): number;
        get v0(): number;
        get v1(): number;
    }
    export class $ParticleRenderType {
        static NO_RENDER: $ParticleRenderType;
        static TERRAIN_SHEET: $ParticleRenderType;
        static PARTICLE_SHEET_LIT: $ParticleRenderType;
        static PARTICLE_SHEET_OPAQUE: $ParticleRenderType;
        static PARTICLE_SHEET_TRANSLUCENT: $ParticleRenderType;
        static CUSTOM: $ParticleRenderType;
    }
    export interface $ParticleRenderType {
        begin(tesselator: $Tesselator, textureManager: $TextureManager): $BufferBuilder;
        isTranslucent(): boolean;
        get translucent(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ParticleRenderType}.
     */
    export type $ParticleRenderType_ = ((arg0: $Tesselator, arg1: $TextureManager) => $BufferBuilder);
    export class $SpriteSet {
    }
    export interface $SpriteSet {
        get(age: number, lifetime: number): $TextureAtlasSprite;
        get(random: $RandomSource): $TextureAtlasSprite;
    }
    export class $ParticleEngine implements $PreparableReloadListener, $ParticleEngineAddon, $ParticleManagerAccessor, $ParticleEngineAccessor {
        createParticle(particleData: $ParticleOptions_, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number): $Particle;
        asyncparticle$setFrustum(asyncparticle$frustum: $Frustum): void;
        iterateParticles(arg0: $Consumer_<$Particle>): void;
        countParticles(): string;
        handler$fgl000$asyncparticles$initTail(ci: $CallbackInfo): void;
        handler$fgl000$asyncparticles$onAdd(particle: $Particle, ci: $CallbackInfo): void;
        updateCount(group: $ParticleGroup, count: number): void;
        tickParticle(effect: $Particle): void;
        handler$fhd000$asyncparticles$onTickParticle(particle: $Particle, ci: $CallbackInfo, t: $Throwable): void;
        handler$bhp000$veil$setLevel(arg0: $ClientLevel, arg1: $CallbackInfo): void;
        clearParticles(): void;
        handler$glo000$pantographsandwires$onDestroy(pos: $BlockPos_, state: $BlockState_, ci: $CallbackInfo): void;
        handler$bhp000$veil$countParticles(arg0: $CallbackInfoReturnable<any>): void;
        handler$fgl000$asyncparticles$onClearParticles(ci: $CallbackInfo): void;
        handler$bhp000$veil$clear(arg0: $CallbackInfo): void;
        asyncparticle$getFrustum(): $Frustum;
        handler$bhp001$veil$tick(arg0: $CallbackInfo): void;
        wrapOperation$fgo000$asyncparticles$wrapAdd(instance: $Set_<any>, e: $Object, original: $Operation_<any>): boolean;
        wrapOperation$fgo000$asyncparticles$wrapAdd(instance: $Queue<any>, e: $Object, original: $Operation_<any>): boolean;
        asyncparticle$addRenderType(particleRenderType: $ParticleRenderType_): void;
        createTrackingEmitter(entity: $Entity, particleData: $ParticleOptions_): void;
        createTrackingEmitter(entity: $Entity, data: $ParticleOptions_, lifetime: number): void;
        /**
         * Adds block hit particles for the specified block
         */
        crack(pos: $BlockPos_, side: $Direction_): void;
        setLevel(level: $ClientLevel | null): void;
        tick(): void;
        reload(stage: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        add(effect: $Particle): void;
        /**
         * @deprecated
         */
        register<T extends $ParticleOptions>(particleType: $ParticleType_<T>, particleFactory: $ParticleProvider_<T>): void;
        /**
         * @deprecated
         */
        register<T extends $ParticleOptions>(particleType: $ParticleType_<T>, particleMetaFactory: $ParticleEngine$SpriteParticleRegistration_<T>): void;
        /**
         * @deprecated
         */
        register<T extends $ParticleOptions>(particleType: $ParticleType_<T>, sprite: $ParticleProvider$Sprite_<T>): void;
        destroy(pos: $BlockPos_, state: $BlockState_): void;
        close(): void;
        /**
         * @deprecated
         */
        render(lightTexture: $LightTexture, camera: $Camera, partialTick: number): void;
        render(lightTexture: $LightTexture, camera: $Camera, f: number, ignored: $Frustum | null, renderTypePredicate: $Predicate_<any>): void;
        addBlockHitEffects(arg0: $BlockPos_, arg1: $BlockHitResult): void;
        getName(): string;
        getParticleAtlasTexture(): $TextureAtlas;
        ponder$getProviders(): $Map<$ResourceLocation, $ParticleProvider<never>>;
        static RENDER_ORDER: $List<$ParticleRenderType>;
        level: $ClientLevel;
        trackingEmitters: $Queue<$TrackingEmitter>;
        textureManager: $TextureManager;
        particles: $Map<$ParticleRenderType, $Queue<$Particle>>;
        particlesToAdd: $Queue<$Particle>;
        textureAtlas: $TextureAtlas;
        constructor(level: $ClientLevel, textureManager: $TextureManager);
        get name(): string;
        get particleAtlasTexture(): $TextureAtlas;
    }
    export class $TextureSheetParticle extends $SingleQuadParticle implements $GpuParticleAddon, $ParticleAddon {
        setSprite(sprite: $TextureAtlasSprite): void;
        setSpriteFromAge(sprite: $SpriteSet): void;
        pickSprite(sprite: $SpriteSet): void;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        static MAXIMUM_COLLISION_VELOCITY_SQUARED: number;
        oRoll: number;
        random: $RandomSource;
        asyncparticle$lossSublevelPos: $BlockPos;
        bCol: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        asyncparticle$tracingSubLevel: $WeakReference<any>;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        static INITIAL_AABB: $AABB;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number);
        constructor(level: $ClientLevel, x: number, arg2: number, y: number);
        set spriteFromAge(value: $SpriteSet);
    }
    export class $ParticleProvider$Sprite<T extends $ParticleOptions> {
    }
    export interface $ParticleProvider$Sprite<T extends $ParticleOptions> {
        createParticle(type: T, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
    }
    /**
     * Values that may be interpreted as {@link $ParticleProvider$Sprite}.
     */
    export type $ParticleProvider$Sprite_<T> = ((arg0: T, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number) => $TextureSheetParticle);
    export class $NoRenderParticle extends $Particle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        static MAXIMUM_COLLISION_VELOCITY_SQUARED: number;
        oRoll: number;
        random: $RandomSource;
        asyncparticle$lossSublevelPos: $BlockPos;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        asyncparticle$tracingSubLevel: $WeakReference<any>;
        level: $ClientLevel;
        zd: number;
        static INITIAL_AABB: $AABB;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number);
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number);
    }
}
