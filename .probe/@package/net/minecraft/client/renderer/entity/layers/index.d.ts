import { $EntityModel } from "@package/net/minecraft/client/model";
import { $IUpperPartHelper } from "@package/dev/kosmx/playerAnim/impl";
import { $RenderLayerParent } from "@package/net/minecraft/client/renderer/entity";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";

declare module "@package/net/minecraft/client/renderer/entity/layers" {
    export class $RenderLayer<T extends $Entity, M extends $EntityModel<T>> implements $IUpperPartHelper {
        getTextureLocation(entity: T): $ResourceLocation;
        isUpperPart(): boolean;
        static coloredCutoutModelCopyLayerRender<T extends $LivingEntity>(modelParent: $EntityModel<T>, model: $EntityModel<T>, textureLocation: $ResourceLocation_, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number, partialTick: number, color: number): void;
        static renderColoredCutoutModel<T extends $LivingEntity>(model: $EntityModel<T>, textureLocation: $ResourceLocation_, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, entity: T, color: number): void;
        getParentModel(): M;
        setUpperPart(bl: boolean): void;
        render(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, livingEntity: T, limbSwing: number, limbSwingAmount: number, partialTick: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        constructor(renderer: $RenderLayerParent<T, M>);
        get parentModel(): M;
    }
}
