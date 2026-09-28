import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $AgeableListModelAccessor as $AgeableListModelAccessor$1 } from "@package/net/mehvahdjukaar/moonlight/core/mixins/accessor";
import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $HumanoidArm, $LivingEntity, $HumanoidArm_, $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $AgeableListModelAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $PlayerModelAccessor } from "@package/dev/kosmx/playerAnim/mixin";
import { $SetableSupplier } from "@package/dev/kosmx/playerAnim/core/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Function_ } from "@package/java/util/function";
import { $IPlayerModel, $IMutableModel } from "@package/dev/kosmx/playerAnim/impl";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $CubeDeformation, $MeshDefinition } from "@package/net/minecraft/client/model/geom/builders";
import { $PlayerPose } from "@package/gg/essential/model/backend";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $ModelPlayerAccessor } from "@package/gg/essential/mixins/transformers/client/model";
import { $ModelBipedExt } from "@package/gg/essential/mixins/impl/client/model";
import { $Enum, $Iterable } from "@package/java/lang";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
export * as geom from "@package/net/minecraft/client/model/geom";

declare module "@package/net/minecraft/client/model" {
    export class $ArmedModel {
    }
    export interface $ArmedModel {
        translateToHand(side: $HumanoidArm_, poseStack: $PoseStack): void;
    }
    /**
     * Values that may be interpreted as {@link $ArmedModel}.
     */
    export type $ArmedModel_ = ((arg0: $HumanoidArm, arg1: $PoseStack) => void);
    export class $HumanoidModel<T extends $LivingEntity> extends $AgeableListModel<T> implements $ArmedModel, $HeadedModel, $IMutableModel, $ModelBipedExt {
        getArm(side: $HumanoidArm_): $ModelPart;
        translateToHand(side: $HumanoidArm_, poseStack: $PoseStack): void;
        wrapMethod$cap000$createbigcannons$setupAnimHead(arg0: $LivingEntity, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $Operation_<any>): void;
        handler$gdi000$moonlight$poseRightArm(arg0: $LivingEntity, arg1: $CallbackInfo): void;
        handler$gdi000$moonlight$poseLeftArm(arg0: $LivingEntity, arg1: $CallbackInfo): void;
        setupAttackAnimation(livingEntity: T, ageInTicks: number): void;
        rotlerpRad(angle: number, maxAngle: number, mul: number): number;
        setEmoteSupplier(emoteSupplier: $SetableSupplier<any>): void;
        getEmoteSupplier(): $SetableSupplier<any>;
        handler$gdi000$moonlight$setupAnim(arg0: $LivingEntity, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $CallbackInfo): void;
        getResetPose(): $PlayerPose;
        setResetPose(pose: $PlayerPose): void;
        setAllVisible(visible: boolean): void;
        copyPropertiesTo(model: $HumanoidModel<T>): void;
        prepareMobModel(entity: T, limbSwing: number, limbSwingAmount: number, partialTick: number): void;
        static createMesh(cubeDeformation: $CubeDeformation, yOffset: number): $MeshDefinition;
        getHead(): $ModelPart;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        scaleHead: boolean;
        young: boolean;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(root: $ModelPart, renderType: $Function_<$ResourceLocation, $RenderType>);
        constructor(root: $ModelPart);
    }
    export class $HeadedModel {
    }
    export interface $HeadedModel {
        getHead(): $ModelPart;
    }
    /**
     * Values that may be interpreted as {@link $HeadedModel}.
     */
    export type $HeadedModel_ = (() => $ModelPart);
    export class $PlayerModel<T extends $LivingEntity> extends $HumanoidModel<T> implements $PlayerModelAccessor, $ModelPlayerAccessor, $IPlayerModel {
        renderEars(poseStack: $PoseStack, buffer: $VertexConsumer, packedLight: number, packedOverlay: number): void;
        renderCloak(poseStack: $PoseStack, buffer: $VertexConsumer, packedLight: number, packedOverlay: number): void;
        getRandomModelPart(random: $RandomSource): $ModelPart;
        playerAnimator_prepForFirstPersonRender(): void;
        static createMesh(cubeDeformation: $CubeDeformation, slim: boolean): $MeshDefinition;
        getCape(): $ModelPart;
        getCloak(): $ModelPart;
        getEars(): $ModelPart;
        scaleHead: boolean;
        young: boolean;
        leftSleeve: $ModelPart;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        slim: boolean;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        rightPants: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        jacket: $ModelPart;
        leftPants: $ModelPart;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightSleeve: $ModelPart;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(root: $ModelPart, slim: boolean);
    }
    export class $AgeableListModel<E extends $Entity> extends $EntityModel<E> implements $AgeableListModelAccessor$1, $AgeableListModelAccessor {
        headParts(): $Iterable<$ModelPart>;
        bodyParts(): $Iterable<$ModelPart>;
        moonlight$invokeBodyParts(): $Iterable<$ModelPart>;
        create$callHeadParts(): $Iterable<$ModelPart>;
        create$callBodyParts(): $Iterable<$ModelPart>;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        babyYHeadOffset: number;
        babyBodyScale: number;
        riding: boolean;
        bodyYOffset: number;
        constructor(scaleHead: boolean, babyYHeadOffset: number, babyZHeadOffset: number);
        constructor(scaleHead: boolean, babyYHeadOffset: number, babyZHeadOffset: number, babyHeadScale: number, babyBodyScale: number, bodyYOffset: number);
        constructor(renderType: $Function_<$ResourceLocation, $RenderType>, scaleHead: boolean, babyYHeadOffset: number, babyZHeadOffset: number, babyHeadScale: number, babyBodyScale: number, bodyYOffset: number);
        constructor();
    }
    export class $ListModel<E extends $Entity> extends $EntityModel<E> {
        parts(): $Iterable<$ModelPart>;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $Function_<$ResourceLocation, $RenderType>);
        constructor();
    }
    export class $EntityModel<T extends $Entity> extends $Model {
        copyPropertiesTo(otherModel: $EntityModel<T>): void;
        prepareMobModel(entity: T, limbSwing: number, limbSwingAmount: number, partialTick: number): void;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(renderType: $Function_<$ResourceLocation, $RenderType>);
        constructor();
    }
    export class $SkullModelBase extends $Model {
        setupAnim(mouthAnimation: number, yRot: number, xRot: number): void;
        constructor();
    }
    export class $HumanoidModel$ArmPose extends $Enum<$HumanoidModel$ArmPose> implements $IExtensibleEnum {
        isTwoHanded(): boolean;
        static values(): $HumanoidModel$ArmPose[];
        static valueOf(arg0: string): $HumanoidModel$ArmPose;
        static getExtensionInfo(): $ExtensionInfo;
        applyTransform<T extends $LivingEntity>(arg0: $HumanoidModel<T>, arg1: T, arg2: $HumanoidArm_): void;
        static ITEM: $HumanoidModel$ArmPose;
        static BOW_AND_ARROW: $HumanoidModel$ArmPose;
        static BRUSH: $HumanoidModel$ArmPose;
        static TOOT_HORN: $HumanoidModel$ArmPose;
        static CROSSBOW_HOLD: $HumanoidModel$ArmPose;
        static BLOCK: $HumanoidModel$ArmPose;
        static CROSSBOW_CHARGE: $HumanoidModel$ArmPose;
        static THROW_SPEAR: $HumanoidModel$ArmPose;
        static EMPTY: $HumanoidModel$ArmPose;
        static SPYGLASS: $HumanoidModel$ArmPose;
    }
    /**
     * Values that may be interpreted as {@link $HumanoidModel$ArmPose}.
     */
    export type $HumanoidModel$ArmPose_ = "empty" | "item" | "block" | "bow_and_arrow" | "throw_spear" | "crossbow_charge" | "crossbow_hold" | "spyglass" | "toot_horn" | "brush";
    export class $Model {
        renderToBuffer(poseStack: $PoseStack, vertexConsumer: $VertexConsumer, packedLight: number, packedOverlay: number): void;
        renderToBuffer(poseStack: $PoseStack, buffer: $VertexConsumer, packedLight: number, packedOverlay: number, color: number): void;
        renderType(location: $ResourceLocation_): $RenderType;
        constructor(renderType: $Function_<$ResourceLocation, $RenderType>);
    }
}
