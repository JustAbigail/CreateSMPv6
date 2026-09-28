import { $Function1, $Function0, $Function0_, $Function1_ } from "@package/kotlin/jvm/functions";
import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $UVertexConsumer, $UMatrixStack, $Quaternion, $TreeMap } from "@package/gg/essential/model/util";
import { $UUID_, $Set_, $Comparator, $Map, $Set, $ListIterator, $Spliterator, $Iterator, $UUID, $List, $SequencedCollection, $Map_, $Collection_, $List_ } from "@package/java/util";
import { $KSerializer } from "@package/kotlinx/serialization";
import { $IntFunction_, $Consumer_, $Predicate_, $UnaryOperator_ } from "@package/java/util/function";
import { $KMappedMarker } from "@package/kotlin/jvm/internal/markers";
import { $EssentialAnimationSystem, $WearableLocator, $TextureAnimationSync } from "@package/gg/essential/cosmetics/state";
import { $MutableVec3 } from "@package/gg/essential/lib/kotgl/matrix/vectors/mutables";
import { $CompositeEncoder } from "@package/kotlinx/serialization/encoding";
import { $Vec3 } from "@package/gg/essential/lib/kotgl/matrix/vectors";
import { $BakedAnimations } from "@package/gg/essential/model/bones";
import { $Enum, $Number, $Object } from "@package/java/lang";
import { $Unit, $Lazy, $Pair } from "@package/kotlin";
import { $EssentialAsset } from "@package/gg/essential/mod";
import { $AnimationTarget, $AnimationEvent, $AnimationTarget_ } from "@package/gg/essential/cosmetics/events";
import { $Light, $LightProvider, $LightProvider_ } from "@package/gg/essential/model/light";
import { $SerialDescriptor } from "@package/kotlinx/serialization/descriptors";
import { $Mat4 } from "@package/gg/essential/lib/kotgl/matrix/matrices";
import { $CollisionProvider_, $CollisionProvider } from "@package/gg/essential/model/collision";
import { $CosmeticsState } from "@package/gg/essential/cosmetics";
import { $SkinMask } from "@package/gg/essential/cosmetics/skinmask";
import { $SerializationConstructorMarker } from "@package/kotlinx/serialization/internal";
import { $MolangQueryEntity, $MolangQueryTime_, $Molang, $MolangQueryTime, $MolangContext, $VariablesMap, $MolangQueryAnimation } from "@package/gg/essential/model/molang";
import { $Stream } from "@package/java/util/stream";
import { $Random } from "@package/kotlin/random";
import { $PlayerPose, $RenderBackend$CommandQueue, $RenderBackend$Texture } from "@package/gg/essential/model/backend";
import { $EnumEntries } from "@package/kotlin/enums";
import { $Cosmetic, $Cosmetic$Diagnostic } from "@package/gg/essential/network/cosmetics";
import { $ModelFile, $ParticlesFile$Event, $AnimationFile, $SoundDefinitionsFile, $ParticlesFile$Material_, $AnimationFile$Loop, $AnimationFile$Animation, $AnimationFile$Loop_, $ParticleEffectComponents, $ParticlesFile$Material, $ParticlesFile, $ParticlesFile$Curve } from "@package/gg/essential/model/file";
export * as backend from "@package/gg/essential/model/backend";
export * as file from "@package/gg/essential/model/file";
export * as util from "@package/gg/essential/model/util";
export * as bones from "@package/gg/essential/model/bones";
export * as molang from "@package/gg/essential/model/molang";
export * as collision from "@package/gg/essential/model/collision";
export * as light from "@package/gg/essential/model/light";

declare module "@package/gg/essential/model" {
    export class $Bones implements $List<$Bone>, $KMappedMarker {
        getByPart(): $Map<$EnumPart, $Bone>;
        getById(): $List<$Bone>;
        remove(arg0: number): $Bone;
        remove(arg0: $Object): boolean;
        size(): number;
        get(arg0: string): $Bone;
        indexOf(arg0: $Bone): number;
        indexOf(arg0: $Object): number;
        clear(): void;
        lastIndexOf(arg0: $Bone): number;
        lastIndexOf(arg0: $Object): number;
        isEmpty(): boolean;
        replaceAll(arg0: $UnaryOperator_<$Bone>): void;
        add(arg0: number, arg1: $Bone): void;
        add(arg0: $Bone): boolean;
        subList(arg0: number, arg1: number): $List<$Bone>;
        toArray<T>(arg0: T[]): T[];
        toArray(): $Object[];
        iterator(): $Iterator<$Bone>;
        contains(arg0: $Object): boolean;
        contains(arg0: string): boolean;
        contains(arg0: $Bone): boolean;
        addAll(arg0: $Collection_<$Bone>): boolean;
        addAll(arg0: number, arg1: $Collection_<$Bone>): boolean;
        set(arg0: number, arg1: $Bone): $Bone;
        sort(arg0: $Comparator<$Bone>): void;
        getRoot(): $Bone;
        getSize(): number;
        getByName(): $Map<string, $Bone>;
        removeAll(arg0: $Collection_<never>): boolean;
        retainAll(arg0: $Collection_<never>): boolean;
        listIterator(): $ListIterator<$Bone>;
        listIterator(arg0: number): $ListIterator<$Bone>;
        containsAll(arg0: $Collection_<never>): boolean;
        spliterator(): $Spliterator<$Bone>;
        getFirst(): $Bone;
        getLast(): $Bone;
        addFirst(arg0: $Bone): void;
        addLast(arg0: $Bone): void;
        removeFirst(): $Bone;
        removeLast(): $Bone;
        toArray<T>(arg0: $IntFunction_<T[]>): T[];
        stream(): $Stream<$Bone>;
        parallelStream(): $Stream<$Bone>;
        removeIf(arg0: $Predicate_<$Bone>): boolean;
        forEach(arg0: $Consumer_<$Bone>): void;
        reversed(): $SequencedCollection<$Bone>;
        constructor();
        constructor(arg0: $List_<$Bone>);
        [Symbol.iterator](): Iterator<$Bone>
    }
    export class $ParticleEffect {
        component3(): $ParticlesFile$Material;
        component4(): $ParticleEffectComponents;
        component5(): $Map<string, $ParticlesFile$Curve>;
        component6(): $Map<string, $ParticlesFile$Event>;
        renderPass(arg0: $Function0_<$RenderBackend$Texture>): $ParticleEffect$RenderPass;
        getCurves(): $Map<string, $ParticlesFile$Curve>;
        getEvents(): $Map<string, $ParticlesFile$Event>;
        getIdentifier(): string;
        copy(arg0: string, arg1: string, arg2: $ParticlesFile$Material_, arg3: $ParticleEffectComponents, arg4: $Map_<string, $ParticlesFile$Curve>, arg5: $Map_<string, $ParticlesFile$Event>): $ParticleEffect;
        getFile(): string;
        getComponents(): $ParticleEffectComponents;
        component1(): string;
        component2(): string;
        static copy$default(arg0: $ParticleEffect, arg1: string, arg2: string, arg3: $ParticlesFile$Material_, arg4: $ParticleEffectComponents, arg5: $Map_<any, any>, arg6: $Map_<any, any>, arg7: number, arg8: $Object): $ParticleEffect;
        getMaterial(): $ParticlesFile$Material;
        constructor(arg0: string, arg1: string, arg2: $ParticlesFile$Material_, arg3: $ParticleEffectComponents, arg4: $Map_<string, $ParticlesFile$Curve>, arg5: $Map_<string, $ParticlesFile$Event>);
    }
    export class $EnumPart extends $Enum<$EnumPart> {
        static values(): $EnumPart[];
        static valueOf(arg0: string): $EnumPart;
        static getEntries(): $EnumEntries<$EnumPart>;
        static fromBoneName(arg0: string): $EnumPart;
        getArmorSlotIds(): $Set<number>;
        static HEAD: $EnumPart;
        static LEFT_ARM: $EnumPart;
        static ROOT: $EnumPart;
        static LEFT_SHOULDER_ENTITY: $EnumPart;
        static RIGHT_SHOULDER_ENTITY: $EnumPart;
        static CAPE: $EnumPart;
        static RIGHT_LEG: $EnumPart;
        static Companion: $EnumPart$Companion;
        static LEFT_LEG: $EnumPart;
        static LEFT_WING: $EnumPart;
        static RIGHT_WING: $EnumPart;
        static BODY: $EnumPart;
        static RIGHT_ARM: $EnumPart;
    }
    /**
     * Values that may be interpreted as {@link $EnumPart}.
     */
    export type $EnumPart_ = "root" | "head" | "body" | "right_arm" | "left_arm" | "left_leg" | "right_leg" | "right_shoulder_entity" | "left_shoulder_entity" | "right_wing" | "left_wing" | "cape";
    export class $ModelAnimationState$ParticleEvent implements $ModelAnimationState$Event {
        component3(): $MolangQueryEntity;
        component4(): $ParticleEffectWithReferencedEffects;
        component5(): $ParticleSystem$Locator;
        getEffect(): $ParticleEffectWithReferencedEffects;
        component6(): $Molang;
        component7(): $Function0<$RenderBackend$Texture>;
        getTextureSource(): $Function0<$RenderBackend$Texture>;
        getSourceEntity(): $MolangQueryEntity;
        getTimeSource(): $MolangQueryTime;
        getPreEffectScript(): $Molang;
        getLocator(): $ParticleSystem$Locator;
        copy(arg0: $MolangQueryTime_, arg1: number, arg2: $MolangQueryEntity, arg3: $ParticleEffectWithReferencedEffects, arg4: $ParticleSystem$Locator, arg5: $Molang, arg6: $Function0_<$RenderBackend$Texture>): $ModelAnimationState$ParticleEvent;
        getTime(): number;
        component1(): $MolangQueryTime;
        component2(): number;
        static copy$default(arg0: $ModelAnimationState$ParticleEvent, arg1: $MolangQueryTime_, arg2: number, arg3: $MolangQueryEntity, arg4: $ParticleEffectWithReferencedEffects, arg5: $ParticleSystem$Locator, arg6: $Molang, arg7: $Function0_<any>, arg8: number, arg9: $Object): $ModelAnimationState$ParticleEvent;
        constructor(arg0: $MolangQueryTime_, arg1: number, arg2: $MolangQueryEntity, arg3: $ParticleEffectWithReferencedEffects, arg4: $ParticleSystem$Locator, arg5: $Molang, arg6: $Function0_<$RenderBackend$Texture>);
    }
    export class $Animation$Event {
    }
    export interface $Animation$Event {
    }
    export class $Side extends $Enum<$Side> {
        static access$get$cachedSerializer$delegate$cp(): $Lazy<any>;
        static getDefaultSideOrNull(arg0: $Set_<$Side_>): $Side;
        getDisplayName(): string;
        static values(): $Side[];
        static valueOf(arg0: string): $Side;
        static getEntries(): $EnumEntries<$Side>;
        static Companion: $Side$Companion;
        static LEFT: $Side;
        static FRONT: $Side;
        static RIGHT: $Side;
        static BACK: $Side;
    }
    /**
     * Values that may be interpreted as {@link $Side}.
     */
    export type $Side_ = "front" | "left" | "right" | "back";
    export class $Vector3 {
        component3(): number;
        setScalar(arg0: $Number): $Vector3;
        addScalar(arg0: number): $Vector3;
        addVectors(arg0: $Vector3, arg1: $Vector3): $Vector3;
        subVectors(arg0: $Vector3, arg1: $Vector3): $Vector3;
        multiplyScalar(arg0: number): $Vector3;
        divideScalar(arg0: number): $Vector3;
        crossVectors(arg0: $Vector3, arg1: $Vector3): $Vector3;
        distanceToSquared(arg0: $Vector3): number;
        plus(arg0: $Vector3): $Vector3;
        minus(arg0: $Vector3): $Vector3;
        negate(): $Vector3;
        get(arg0: number): number;
        length(): number;
        clone(): $Vector3;
        min(arg0: $Vector3): $Vector3;
        max(arg0: $Vector3): $Vector3;
        floor(): $Vector3;
        ceil(): $Vector3;
        round(): $Vector3;
        clamp(arg0: $Vector3, arg1: $Vector3): $Vector3;
        add(arg0: $Vector3): $Vector3;
        dot(arg0: $Vector3): number;
        set(arg0: number, arg1: number): $Vector3;
        set(arg0: $Number, arg1: $Number, arg2: $Number): $Vector3;
        setLength(arg0: number): $Vector3;
        copy(arg0: number, arg1: number, arg2: number): $Vector3;
        copy(arg0: $Vector3): $Vector3;
        multiply(arg0: $Vector3): $Vector3;
        sub(arg0: $Vector3): $Vector3;
        normalize(): $Vector3;
        reflect(arg0: $Vector3): $Vector3;
        component1(): number;
        component2(): number;
        static copy$default(arg0: $Vector3, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Object): $Vector3;
        lerp(arg0: $Vector3, arg1: number): $Vector3;
        distanceTo(arg0: $Vector3): number;
        cross(arg0: $Vector3): $Vector3;
        negateY(): $Vector3;
        static Companion: $Vector3$Companion;
        static ZERO: $Vector3;
        x: number;
        static X: $Vector3;
        y: number;
        static Y: $Vector3;
        z: number;
        static Z: $Vector3;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor();
        constructor(arg0: $Number, arg1: $Number, arg2: $Number);
    }
    export class $ModelAnimationState$AnimationState implements $MolangQueryAnimation, $MolangQueryEntity {
        getUuid(): $UUID;
        getHasEnded(): boolean;
        getLastEffectTime$cosmetics(): number;
        getEffectLoops$cosmetics(): number;
        setEffectLoops$cosmetics(arg0: number): void;
        setLastEffectTime$cosmetics(arg0: number): void;
        getAnimStartTime(): number;
        getEffectLoopsDuration$cosmetics(): number;
        getModifiedMoveSpeed(): number;
        getAnimTime(): number;
        getAnimLoopTime(): number;
        getModifiedDistanceMoved(): number;
        getLoop(): number;
        getLocator(): $ParticleSystem$Locator;
        getLifeTime(): number;
        getEntity(): $MolangQueryEntity;
        getContext(): $MolangContext;
        copy(arg0: $Animation, arg1: $MolangQueryEntity, arg2: number, arg3: $VariablesMap, arg4: number, arg5: number): $ModelAnimationState$AnimationState;
        getTime(): number;
        static copy$default(arg0: $ModelAnimationState$AnimationState, arg1: $Animation, arg2: $MolangQueryEntity, arg3: number, arg4: $VariablesMap, arg5: number, arg6: number, arg7: number, arg8: $Object): $ModelAnimationState$AnimationState;
        getAnimation(): $Animation;
        constructor(arg0: $Animation, arg1: $MolangQueryEntity, arg2: number, arg3: $VariablesMap, arg4: number, arg5: number, arg6: number, arg7: $DefaultConstructorMarker);
        constructor(arg0: $Animation, arg1: $MolangQueryEntity, arg2: number, arg3: $VariablesMap, arg4: number, arg5: number);
    }
    export class $BedrockModel$Offset {
        getPivotX(): number;
        getPivotY(): number;
        getPivotZ(): number;
        getOffsetX(): number;
        getOffsetY(): number;
        getOffsetZ(): number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
    }
    export class $ModelAnimationState$SoundEvent implements $ModelAnimationState$Event {
        component3(): $MolangQueryEntity;
        component4(): $SoundEffect;
        component5(): $ParticleSystem$Locator;
        getEffect(): $SoundEffect;
        getSourceEntity(): $MolangQueryEntity;
        getTimeSource(): $MolangQueryTime;
        getLocator(): $ParticleSystem$Locator;
        copy(arg0: $MolangQueryTime_, arg1: number, arg2: $MolangQueryEntity, arg3: $SoundEffect, arg4: $ParticleSystem$Locator): $ModelAnimationState$SoundEvent;
        getTime(): number;
        component1(): $MolangQueryTime;
        component2(): number;
        static copy$default(arg0: $ModelAnimationState$SoundEvent, arg1: $MolangQueryTime_, arg2: number, arg3: $MolangQueryEntity, arg4: $SoundEffect, arg5: $ParticleSystem$Locator, arg6: number, arg7: $Object): $ModelAnimationState$SoundEvent;
        constructor(arg0: $MolangQueryTime_, arg1: number, arg2: $MolangQueryEntity, arg3: $SoundEffect, arg4: $ParticleSystem$Locator);
    }
    export class $PlayerMolangQuery$RealYawAccess {
    }
    export interface $PlayerMolangQuery$RealYawAccess {
        essential$getRealRenderYaw(): number;
        essential$getRealPrevRenderYaw(): number;
    }
    export class $Face {
        flipFace(): void;
        "draw-Vzb6JUo"(arg0: $UMatrixStack, arg1: $UVertexConsumer, arg2: number, arg3: number): void;
        vertexPositions: $PositionTexVertex[];
        constructor(arg0: $PositionTexVertex[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number);
        constructor(arg0: $PositionTexVertex[]);
    }
    export class $ParticleEffect$RenderPass {
        copy(arg0: $ParticlesFile$Material_, arg1: $RenderBackend$Texture): $ParticleEffect$RenderPass;
        getTexture(): $RenderBackend$Texture;
        component1(): $ParticlesFile$Material;
        component2(): $RenderBackend$Texture;
        static copy$default(arg0: $ParticleEffect$RenderPass, arg1: $ParticlesFile$Material_, arg2: $RenderBackend$Texture, arg3: number, arg4: $Object): $ParticleEffect$RenderPass;
        getMaterial(): $ParticlesFile$Material;
        constructor(arg0: $ParticlesFile$Material_, arg1: $RenderBackend$Texture);
    }
    export class $BedrockModel {
        getCosmetic(): $Cosmetic;
        getAnimationData(): $AnimationFile;
        getSoundData(): $SoundDefinitionsFile;
        static access$getOFFSETS$cp(): $Map<any, any>;
        getDiagnostics(): $List<$Cosmetic$Diagnostic>;
        getAnimations(): $List<$Animation>;
        getEmissiveTexture(): $RenderBackend$Texture;
        setEmissiveTexture(arg0: $RenderBackend$Texture): void;
        getSkinMasks(): $Map<$Side, $SkinMask>;
        getBones(): $Bones;
        getDefaultRenderGeometry(): $List<$List<$Cube>>;
        getTextureFrameCount(): number;
        setTextureFrameCount(arg0: number): void;
        getTranslucent(): boolean;
        setTranslucent(arg0: boolean): void;
        setAnimations(arg0: $List_<$Animation>): void;
        getAnimationEvents(): $List<$AnimationEvent>;
        setAnimationEvents(arg0: $List_<$AnimationEvent>): void;
        getSideOptions(): $Set<$Side>;
        isContainsSideOption(): boolean;
        getAnimationByName(arg0: string): $Animation;
        getParticleData(): $Map<string, $ParticlesFile>;
        getVariant(): string;
        render(arg0: $UMatrixStack, arg1: $RenderBackend$CommandQueue, arg2: $List_<$List_<$Cube>>, arg3: $BakedAnimations, arg4: $RenderMetadata, arg5: number): void;
        getTexture(): $RenderBackend$Texture;
        computePose(arg0: $PlayerPose, arg1: $ModelAnimationState): $PlayerPose;
        setTexture(arg0: $RenderBackend$Texture): void;
        static Companion: $BedrockModel$Companion;
        boundingBoxes: $List<$Pair<$Box3, $Side>>;
        static TEXTURE_ANIMATION_FPS: number;
        constructor(arg0: $Cosmetic, arg1: string, arg2: $ModelFile, arg3: $AnimationFile, arg4: $Map_<string, $ParticlesFile>, arg5: $SoundDefinitionsFile, arg6: $RenderBackend$Texture, arg7: $RenderBackend$Texture, arg8: $Map_<$Side_, $SkinMask>);
    }
    export class $Animation$Companion {
        static access$calcAnimationLength(arg0: $Animation$Companion, arg1: $Map_<any, any>): number;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $ModelInstance {
        getCosmetic(): $Cosmetic;
        getEssentialAnimationSystem(): $EssentialAnimationSystem;
        switchModel(arg0: $BedrockModel, arg1: $CosmeticsState): void;
        getAnimationTargets(): $Set<$AnimationTarget>;
        setEssentialAnimationSystem(arg0: $EssentialAnimationSystem): void;
        getOnAnimation(): $Function1<string, $Unit>;
        setAnimationState(arg0: $ModelAnimationState): void;
        getTextureAnimationSync(): $TextureAnimationSync;
        setTextureAnimationSync(arg0: $TextureAnimationSync): void;
        getAnimationState(): $ModelAnimationState;
        setModel(arg0: $BedrockModel): void;
        setLocator(arg0: $WearableLocator): void;
        getLocator(): $WearableLocator;
        getEntity(): $MolangQueryEntity;
        render(arg0: $UMatrixStack, arg1: $RenderBackend$CommandQueue, arg2: $List_<$List_<$Cube>>, arg3: $RenderMetadata): void;
        getModel(): $BedrockModel;
        computePose(arg0: $PlayerPose): $PlayerPose;
        updateLocators(arg0: $PlayerPose, arg1: $CosmeticsState): void;
        constructor(arg0: $BedrockModel, arg1: $MolangQueryEntity, arg2: $Set_<$AnimationTarget_>, arg3: $CosmeticsState, arg4: $Function1_<string, $Unit>);
    }
    export class $Channels {
        component3(): $Keyframes;
        component4(): $RelativeTo;
        static write$Self$cosmetics(arg0: $Channels, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        static getRelativeTo$annotations(): void;
        getRelativeTo(): $RelativeTo;
        getPosition(): $Keyframes;
        copy(arg0: $Keyframes, arg1: $Keyframes, arg2: $Keyframes, arg3: $RelativeTo): $Channels;
        component1(): $Keyframes;
        component2(): $Keyframes;
        static copy$default(arg0: $Channels, arg1: $Keyframes, arg2: $Keyframes, arg3: $Keyframes, arg4: $RelativeTo, arg5: number, arg6: $Object): $Channels;
        getScale(): $Keyframes;
        getRotation(): $Keyframes;
        static Companion: $Channels$Companion;
        constructor(arg0: $Keyframes, arg1: $Keyframes, arg2: $Keyframes, arg3: $RelativeTo);
        constructor(arg0: number, arg1: $Keyframes, arg2: $Keyframes, arg3: $Keyframes, arg4: $RelativeTo, arg5: $SerializationConstructorMarker);
        constructor(arg0: $Keyframes, arg1: $Keyframes, arg2: $Keyframes, arg3: $RelativeTo, arg4: number, arg5: $DefaultConstructorMarker);
        constructor();
    }
    export class $BedrockModel$Companion {
        getOFFSETS(): $Map<$EnumPart, $BedrockModel$Offset>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $ModelAnimationState$Event {
    }
    export interface $ModelAnimationState$Event {
        getSourceEntity(): $MolangQueryEntity;
        getTimeSource(): $MolangQueryTime;
        getTime(): number;
    }
    export class $RenderMetadata {
        component4(): $Side;
        component5(): $Set<string>;
        getPose(): $PlayerPose;
        getParts(): $Set<$EnumPart>;
        getPositionAdjustment(): $Vector3;
        getHiddenBones(): $Set<string>;
        "getLight-cWgJFAk"(): number;
        component6(): $Vector3;
        component7(): $Set<$EnumPart>;
        "component3-cWgJFAk"(): number;
        "copy-6Qb1oLs"(arg0: $PlayerPose, arg1: $RenderBackend$Texture, arg2: number, arg3: $Side_, arg4: $Set_<string>, arg5: $Vector3, arg6: $Set_<$EnumPart_>): $RenderMetadata;
        static "copy-6Qb1oLs$default"(arg0: $RenderMetadata, arg1: $PlayerPose, arg2: $RenderBackend$Texture, arg3: number, arg4: $Side_, arg5: $Set_<any>, arg6: $Vector3, arg7: $Set_<any>, arg8: number, arg9: $Object): $RenderMetadata;
        getSkin(): $RenderBackend$Texture;
        getSide(): $Side;
        component1(): $PlayerPose;
        component2(): $RenderBackend$Texture;
        constructor(arg0: $PlayerPose, arg1: $RenderBackend$Texture, arg2: number, arg3: $Side_, arg4: $Set_<any>, arg5: $Vector3, arg6: $Set_<any>, arg7: $DefaultConstructorMarker);
    }
    export class $CubeUvData {
        getDown(): number[];
        getUp(): number[];
        getNorth(): number[];
        getSouth(): number[];
        getWest(): number[];
        getEast(): number[];
        constructor(arg0: number[], arg1: number[], arg2: number[], arg3: number[], arg4: number[], arg5: number[]);
    }
    export class $PositionTexVertex {
        component3(): number;
        getTexturePositionX(): number;
        setTexturePositionX(arg0: number): void;
        setTexturePosition(arg0: number, arg1: number): $PositionTexVertex;
        copy(arg0: $Vector3, arg1: number, arg2: number): $PositionTexVertex;
        copy(): $PositionTexVertex;
        component1(): $Vector3;
        component2(): number;
        static copy$default(arg0: $PositionTexVertex, arg1: $Vector3, arg2: number, arg3: number, arg4: number, arg5: $Object): $PositionTexVertex;
        vector3: $Vector3;
        texturePositionY: number;
        constructor(arg0: $PositionTexVertex, arg1: number, arg2: number);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number);
        constructor(arg0: $Vector3, arg1: number, arg2: number);
    }
    export class $ModelAnimationState {
        bake(arg0: $Bones): $BakedAnimations;
        getActive(): $List<$ModelAnimationState$AnimationState>;
        static updateEffects$default(arg0: $ModelAnimationState, arg1: number, arg2: number, arg3: $Object): void;
        getPendingEvents(): $List<$ModelAnimationState$Event>;
        locatorsNeedUpdating(): boolean;
        getParentLocator(): $ParticleSystem$Locator;
        startAnimation(arg0: $Animation): void;
        updateEffects(arg0: number): void;
        getEntity(): $MolangQueryEntity;
        updateLocators(arg0: $Bones, arg1: number): void;
        constructor(arg0: $MolangQueryEntity, arg1: $ParticleSystem$Locator, arg2: $Function0_<$RenderBackend$Texture>);
    }
    export class $Cube {
        "render-Vzb6JUo"(arg0: $UMatrixStack, arg1: $UVertexConsumer, arg2: number, arg3: number): void;
        getBoxName(): string;
        getPosX1(): number;
        setPosX1(arg0: number): void;
        getPosY1(): number;
        setPosY1(arg0: number): void;
        getPosZ1(): number;
        setPosZ1(arg0: number): void;
        getPosX2(): number;
        setPosX2(arg0: number): void;
        getPosY2(): number;
        setPosY2(arg0: number): void;
        getPosZ2(): number;
        setPosZ2(arg0: number): void;
        setBoxName(arg0: string): $Cube;
        getQuadList(): $List<$Face>;
        getMirror(): boolean;
        deepCopy(): $Cube;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: boolean, arg10: number, arg11: number);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: number, arg9: number, arg10: $CubeUvData);
        constructor(arg0: $List_<$Face>, arg1: boolean);
    }
    export class $Vector3$Companion {
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $Box3$Companion {
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $EnumPart$Companion {
        fromBoneName(arg0: string): $EnumPart;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $SoundEffect {
        component3(): number;
        component4(): number;
        component5(): boolean;
        getSounds(): $List<$SoundEffect$Entry>;
        getMinDistance(): number;
        getFixedPosition(): boolean;
        component6(): $List<$SoundEffect$Entry>;
        getMaxDistance(): number;
        randomEntry(): $SoundEffect$Entry;
        getName(): string;
        copy(arg0: string, arg1: $SoundCategory_, arg2: number, arg3: number, arg4: boolean, arg5: $List_<$SoundEffect$Entry>): $SoundEffect;
        getCategory(): $SoundCategory;
        component1(): string;
        component2(): $SoundCategory;
        static copy$default(arg0: $SoundEffect, arg1: string, arg2: $SoundCategory_, arg3: number, arg4: number, arg5: boolean, arg6: $List_<any>, arg7: number, arg8: $Object): $SoundEffect;
        constructor(arg0: string, arg1: $SoundCategory_, arg2: number, arg3: number, arg4: boolean, arg5: $List_<any>, arg6: number, arg7: $DefaultConstructorMarker);
        constructor(arg0: string, arg1: $SoundCategory_, arg2: number, arg3: number, arg4: boolean, arg5: $List_<$SoundEffect$Entry>);
    }
    export class $Box3 {
        getCenter(arg0: $Vector3): $Vector3;
        getCenter(): $Vector3;
        expandByPoint(arg0: $Vector3): $Box3;
        expandByScalar(arg0: number): $Box3;
        static getCenter$default(arg0: $Box3, arg1: $Vector3, arg2: number, arg3: $Object): $Vector3;
        static getSize$default(arg0: $Box3, arg1: $Vector3, arg2: number, arg3: $Object): $Vector3;
        static getParameter$default(arg0: $Box3, arg1: $Vector3, arg2: $Vector3, arg3: number, arg4: $Object): $Vector3;
        static access$getPoints$delegate$cp(): $Lazy<any>;
        setFromPoints(arg0: $List_<$Vector3>): $Box3;
        makeEmpty(): $Box3;
        intersect(arg0: $Box3): $Box3;
        clone(): $Box3;
        isEmpty(): boolean;
        set(arg0: $Vector3, arg1: $Vector3): $Box3;
        copy(arg0: $Box3): $Box3;
        copy(arg0: $Vector3, arg1: $Vector3): $Box3;
        getSize(arg0: $Vector3): $Vector3;
        getSize(): $Vector3;
        getParameter(arg0: $Vector3): $Vector3;
        getParameter(arg0: $Vector3, arg1: $Vector3): $Vector3;
        getMax(): $Vector3;
        getMin(): $Vector3;
        translate(arg0: $Vector3): $Box3;
        setMin(arg0: $Vector3): void;
        setMax(arg0: $Vector3): void;
        component1(): $Vector3;
        component2(): $Vector3;
        static copy$default(arg0: $Box3, arg1: $Vector3, arg2: $Vector3, arg3: number, arg4: $Object): $Box3;
        static Companion: $Box3$Companion;
        constructor(arg0: $Vector3, arg1: $Vector3);
        constructor();
        constructor(arg0: $Vector3);
        constructor(arg0: $Vector3, arg1: $Vector3, arg2: number, arg3: $DefaultConstructorMarker);
    }
    export class $Bone {
        isVisible(): boolean;
        getAffectsPose(): boolean;
        resetAnimationOffsets(arg0: boolean): void;
        "render-h-6-dEE"(arg0: $UMatrixStack, arg1: $UVertexConsumer, arg2: $List_<$List_<$Cube>>, arg3: number, arg4: number): void;
        getPivotX(): number;
        getPivotY(): number;
        getPivotZ(): number;
        getPart(): $EnumPart;
        setParentRotation(arg0: $Quaternion): void;
        getParentRotation(): $Quaternion;
        getChildModels(): $List<$Bone>;
        getPoseRotX(): number;
        setPoseRotX(arg0: number): void;
        getPoseRotY(): number;
        setPoseRotY(arg0: number): void;
        getPoseRotZ(): number;
        setPoseRotZ(arg0: number): void;
        getPoseOffsetX(): number;
        setPoseOffsetX(arg0: number): void;
        getPoseOffsetY(): number;
        setPoseOffsetY(arg0: number): void;
        getPoseOffsetZ(): number;
        setPoseOffsetZ(arg0: number): void;
        getPoseExtra(): $Mat4;
        setPoseExtra(arg0: $Mat4): void;
        getAnimOffsetX(): number;
        setAnimOffsetX(arg0: number): void;
        getAnimOffsetY(): number;
        setAnimOffsetY(arg0: number): void;
        getAnimOffsetZ(): number;
        setAnimOffsetZ(arg0: number): void;
        getAnimRotX(): number;
        setAnimRotX(arg0: number): void;
        getAnimRotY(): number;
        setAnimRotY(arg0: number): void;
        getAnimRotZ(): number;
        setAnimRotZ(arg0: number): void;
        getAnimScaleX(): number;
        setAnimScaleX(arg0: number): void;
        getAnimScaleY(): number;
        setAnimScaleY(arg0: number): void;
        getAnimScaleZ(): number;
        setAnimScaleZ(arg0: number): void;
        getUserOffsetX(): number;
        setUserOffsetX(arg0: number): void;
        getUserOffsetY(): number;
        setUserOffsetY(arg0: number): void;
        getUserOffsetZ(): number;
        setUserOffsetZ(arg0: number): void;
        getAffectsPoseParts(): $Set<$EnumPart>;
        getGimbal(): boolean;
        setGimbal(arg0: boolean): void;
        getWorldGimbal(): boolean;
        setWorldGimbal(arg0: boolean): void;
        propagateVisibility(arg0: boolean, arg1: $Side_): void;
        containsVisibleBoxes(arg0: $List_<$List_<$Cube>>): boolean;
        propagateGimbal(arg0: $Quaternion, arg1: $Quaternion): void;
        getBoxName(): string;
        getChild(): boolean;
        setChild(arg0: boolean): void;
        getId(): number;
        getSide(): $Side;
        getVisible(): boolean;
        setVisible(arg0: boolean): void;
        applyTransform(arg0: $UMatrixStack): void;
        constructor(arg0: number, arg1: string, arg2: $List_<$Bone>, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: $Side_);
        constructor(arg0: number, arg1: string, arg2: $List_<any>, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: $Side_, arg10: number, arg11: $DefaultConstructorMarker);
    }
    export class $Animation {
        component3(): $AnimationFile$Loop;
        component4(): $Map<string, $Channels>;
        component5(): $TreeMap<number, $List<$Animation$Event>>;
        getAnimationLength(): number;
        getAffectsPose(): boolean;
        component6(): $Set<$EnumPart>;
        getBones(): $Map<string, $Channels>;
        getAffectsPoseParts(): $Set<$EnumPart>;
        getLoop(): $AnimationFile$Loop;
        getEffects(): $TreeMap<number, $List<$Animation$Event>>;
        getName(): string;
        copy(arg0: string, arg1: number, arg2: $AnimationFile$Loop_, arg3: $Map_<string, $Channels>, arg4: $TreeMap<number, $List_<$Animation$Event>>, arg5: $Set_<$EnumPart_>): $Animation;
        component1(): string;
        component2(): number;
        static copy$default(arg0: $Animation, arg1: string, arg2: number, arg3: $AnimationFile$Loop_, arg4: $Map_<any, any>, arg5: $TreeMap<any, any>, arg6: $Set_<any>, arg7: number, arg8: $Object): $Animation;
        static Companion: $Animation$Companion;
        constructor(arg0: string, arg1: $AnimationFile$Animation, arg2: $Bones, arg3: $Map_<string, $ParticleEffectWithReferencedEffects>, arg4: $Map_<string, $SoundEffect>);
        constructor(arg0: string, arg1: number, arg2: $AnimationFile$Loop_, arg3: $Map_<string, $Channels>, arg4: $TreeMap<number, $List_<$Animation$Event>>, arg5: $Set_<$EnumPart_>);
    }
    export class $ParticleSystem {
        static render$default(arg0: $ParticleSystem, arg1: $UMatrixStack, arg2: $Vec3, arg3: $Quaternion, arg4: $RenderBackend$CommandQueue, arg5: $UUID_, arg6: boolean, arg7: boolean, arg8: $UUID_, arg9: number, arg10: $Object): void;
        "render-wYRpD5U"(arg0: $UMatrixStack, arg1: $Vec3, arg2: $Quaternion, arg3: $RenderBackend$CommandQueue, arg4: $UUID_, arg5: boolean, arg6: boolean, arg7: $UUID_, arg8: $Light): void;
        static "render-wYRpD5U$default"(arg0: $ParticleSystem, arg1: $UMatrixStack, arg2: $Vec3, arg3: $Quaternion, arg4: $RenderBackend$CommandQueue, arg5: $UUID_, arg6: boolean, arg7: boolean, arg8: $UUID_, arg9: $Light, arg10: number, arg11: $Object): void;
        static access$getBillboardRenderPasses$p(arg0: $ParticleSystem): $Map<any, any>;
        static access$translucencySortBillboardParticles$projectToScreenSpaceSelf(arg0: $MutableVec3, arg1: $Vec3, arg2: $MutableVec3, arg3: $MutableVec3, arg4: $Vec3): $MutableVec3;
        static access$getRandom$p(arg0: $ParticleSystem): $Random;
        static access$getPlaySound$p(arg0: $ParticleSystem): $Function1<any, any>;
        static access$getCollisionProvider$p(arg0: $ParticleSystem): $CollisionProvider;
        static access$getLightProvider$p(arg0: $ParticleSystem): $LightProvider;
        hasAnythingToRender(): boolean;
        update(): void;
        isEmpty(): boolean;
        render(arg0: $UMatrixStack, arg1: $Vec3, arg2: $Quaternion, arg3: $RenderBackend$CommandQueue, arg4: $UUID_, arg5: boolean, arg6: boolean, arg7: $UUID_): void;
        spawn(arg0: $ModelAnimationState$ParticleEvent): void;
        constructor(arg0: $Random, arg1: $CollisionProvider_, arg2: $LightProvider_, arg3: $Function1_<$ModelAnimationState$SoundEvent, $Unit>);
    }
    export class $SoundCategory extends $Enum<$SoundCategory> {
        static access$get$cachedSerializer$delegate$cp(): $Lazy<any>;
        static values(): $SoundCategory[];
        static valueOf(arg0: string): $SoundCategory;
        static getEntries(): $EnumEntries<$SoundCategory>;
        static Companion: $SoundCategory$Companion;
        static PLAYER: $SoundCategory;
        static MUSIC: $SoundCategory;
        static HOSTILE: $SoundCategory;
        static WEATHER: $SoundCategory;
        static AMBIENT: $SoundCategory;
        static RECORD: $SoundCategory;
        static BLOCK: $SoundCategory;
        static NEUTRAL: $SoundCategory;
    }
    /**
     * Values that may be interpreted as {@link $SoundCategory}.
     */
    export type $SoundCategory_ = "music" | "record" | "weather" | "block" | "hostile" | "neutral" | "player" | "ambient";
    export class $Side$Companion {
        getDefaultSideOrNull(arg0: $Set_<$Side_>): $Side;
        serializer(): $KSerializer<$Side>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $ParticleSystem$Locator {
    }
    export interface $ParticleSystem$Locator {
        isVisible(): boolean;
        getVelocity(): $Vec3;
        isValid(): boolean;
        getPosition(): $Vec3;
        getParent(): $ParticleSystem$Locator;
        getRotation(): $Quaternion;
        getPositionAndRotation(): $Pair<$Vec3, $Quaternion>;
    }
    export class $SoundEffect$Entry {
        component3(): boolean;
        component4(): number;
        component5(): number;
        getVolume(): number;
        getPitch(): number;
        getInterruptible(): boolean;
        getLooping(): boolean;
        getDirectional(): boolean;
        component6(): boolean;
        component7(): boolean;
        getAsset(): $EssentialAsset;
        component8(): number;
        getStream(): boolean;
        copy(arg0: $EssentialAsset, arg1: boolean, arg2: boolean, arg3: number, arg4: number, arg5: boolean, arg6: boolean, arg7: number): $SoundEffect$Entry;
        getWeight(): number;
        component1(): $EssentialAsset;
        component2(): boolean;
        static copy$default(arg0: $SoundEffect$Entry, arg1: $EssentialAsset, arg2: boolean, arg3: boolean, arg4: number, arg5: number, arg6: boolean, arg7: boolean, arg8: number, arg9: number, arg10: $Object): $SoundEffect$Entry;
        constructor(arg0: $EssentialAsset, arg1: boolean, arg2: boolean, arg3: number, arg4: number, arg5: boolean, arg6: boolean, arg7: number, arg8: number, arg9: $DefaultConstructorMarker);
        constructor(arg0: $EssentialAsset, arg1: boolean, arg2: boolean, arg3: number, arg4: number, arg5: boolean, arg6: boolean, arg7: number);
    }
    export class $ParticleEffectWithReferencedEffects {
        component3(): $Map<string, $SoundEffect>;
        getParticleEffect(): $ParticleEffect;
        getReferencedEffects(): $Map<string, $ParticleEffect>;
        getReferencedSounds(): $Map<string, $SoundEffect>;
        getOtherParticleByReference(arg0: string): $ParticleEffectWithReferencedEffects;
        copy(arg0: string, arg1: $Map_<string, $ParticleEffect>, arg2: $Map_<string, $SoundEffect>): $ParticleEffectWithReferencedEffects;
        component2(): $Map<string, $ParticleEffect>;
        static copy$default(arg0: $ParticleEffectWithReferencedEffects, arg1: string, arg2: $Map_<any, any>, arg3: $Map_<any, any>, arg4: number, arg5: $Object): $ParticleEffectWithReferencedEffects;
        constructor(arg0: string, arg1: $Map_<string, $ParticleEffect>, arg2: $Map_<string, $SoundEffect>);
    }
}
