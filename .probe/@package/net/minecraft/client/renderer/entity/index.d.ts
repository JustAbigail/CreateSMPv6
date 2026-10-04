import { $ItemRendererAccessor as $ItemRendererAccessor$2 } from "@package/dev/emi/emi/mixin/accessor";
import { $ItemInHandRenderer, $MultiBufferSource_, $BlockEntityWithoutLevelRenderer, $RenderType, $ItemModelShaper } from "@package/net/minecraft/client/renderer";
import { $LivingEntityRendererAccessor } from "@package/net/fabricmc/fabric/mixin/client/rendering";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $EntityType, $Entity, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $IdentifiableResourceReloadListener } from "@package/net/fabricmc/fabric/api/resource";
import { $ItemColors } from "@package/net/minecraft/client/color/item";
import { $BakedModel, $ModelResourceLocation, $ModelManager } from "@package/net/minecraft/client/resources/model";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $EntityRenderDispatcherAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $RenderLayer } from "@package/net/minecraft/client/renderer/entity/layers";
import { $Minecraft, $Camera, $Options } from "@package/net/minecraft/client";
import { $ResourceManager, $ResourceManagerReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $ItemFrame } from "@package/net/minecraft/world/entity/decoration";
import { $List, $List_, $Collection, $Map } from "@package/java/util";
import { $Frustum } from "@package/net/minecraft/client/renderer/culling";
import { $BlockRenderDispatcher } from "@package/net/minecraft/client/renderer/block";
import { $EntityModel } from "@package/net/minecraft/client/model";
import { $ItemRendererAccessor as $ItemRendererAccessor$1 } from "@package/net/caffeinemc/mods/sodium/mixin/features/render/frapi";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $TextureManager } from "@package/net/minecraft/client/renderer/texture";
import { $LivingEntityRendererAccessor as $LivingEntityRendererAccessor$1 } from "@package/dev/kikugie/elytratrims/mixin/client";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemDisplayContext_ } from "@package/net/minecraft/world/item";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ModelLayerLocation, $EntityModelSet, $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ItemRendererAccessor } from "@package/net/createmod/ponder/mixin/client/accessor";
import { $PlayerSkin$Model } from "@package/net/minecraft/client/resources";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $VertexConsumer, $PoseStack, $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $Font } from "@package/net/minecraft/client/gui";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $Quaternionf } from "@package/org/joml";
export * as player from "@package/net/minecraft/client/renderer/entity/player";
export * as layers from "@package/net/minecraft/client/renderer/entity/layers";

declare module "@package/net/minecraft/client/renderer/entity" {
    export class $RenderLayerParent<T extends $Entity, M extends $EntityModel<T>> {
    }
    export interface $RenderLayerParent<T extends $Entity, M extends $EntityModel<T>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: T): $ResourceLocation;
        getModel(): M;
        get model(): M;
    }
    export class $EntityRendererProvider$Context {
        bakeLayer(layer: $ModelLayerLocation): $ModelPart;
        getBlockRenderDispatcher(): $BlockRenderDispatcher;
        getModelSet(): $EntityModelSet;
        getEntityRenderDispatcher(): $EntityRenderDispatcher;
        getFont(): $Font;
        getItemRenderer(): $ItemRenderer;
        getResourceManager(): $ResourceManager;
        getItemInHandRenderer(): $ItemInHandRenderer;
        getModelManager(): $ModelManager;
        constructor(entityRenderDispatcher: $EntityRenderDispatcher, itemRenderer: $ItemRenderer, blockRenderDispatcher: $BlockRenderDispatcher, itemInHandRenderer: $ItemInHandRenderer, resourceManager: $ResourceManager, modelSet: $EntityModelSet, font: $Font);
        get blockRenderDispatcher(): $BlockRenderDispatcher;
        get modelSet(): $EntityModelSet;
        get entityRenderDispatcher(): $EntityRenderDispatcher;
        get font(): $Font;
        get itemRenderer(): $ItemRenderer;
        get resourceManager(): $ResourceManager;
        get itemInHandRenderer(): $ItemInHandRenderer;
        get modelManager(): $ModelManager;
    }
    export class $EntityRenderer<T extends $Entity> {
        shouldShowName(entity: T): boolean;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: T): $ResourceLocation;
        getBlockLightLevel(entity: T, pos: $BlockPos_): number;
        getSkyLightLevel(entity: T, pos: $BlockPos_): number;
        modifyReturnValue$hkc000$sable$getPackedLightCoords(arg0: number, arg1: $Entity, arg2: number): number;
        renderNameTag(entity: T, displayName: $Component_, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, partialTick: number): void;
        getShadowRadius(entity: T): number;
        getRenderOffset(entity: T, partialTicks: number): $Vec3;
        render(entity: T, entityYaw: number, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number): void;
        getPackedLightCoords(entity: T, partialTicks: number): number;
        /**
         * Returns the font renderer from the set render manager
         */
        getFont(): $Font;
        shouldRender(livingEntity: T, camera: $Frustum, camX: number, arg3: number, camY: number): boolean;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
        get font(): $Font;
    }
    export class $LivingEntityRenderer<T extends $LivingEntity, M extends $EntityModel<T>> extends $EntityRenderer<T> implements $RenderLayerParent<T, M>, $LivingEntityRendererAccessor<any, any>, $LivingEntityRendererAccessor$1 {
        shouldShowName(livingEntity: T): boolean;
        /**
         * Returns where in the swing animation the living entity is (from 0 to 1).  Args : entity, partialTickTime
         */
        getAttackAnim(livingBase: T, partialTickTime: number): number;
        static getOverlayCoords(livingEntity: $LivingEntity, u: number): number;
        static isEntityUpsideDown(livingEntity: $LivingEntity): boolean;
        /**
         * Returns where in the swing animation the living entity is (from 0 to 1).  Args : entity, partialTickTime
         */
        getBob(livingBase: T, partialTickTime: number): number;
        setupRotations(entity: T, poseStack: $PoseStack, bob: number, yBodyRot: number, partialTick: number, scale: number): void;
        isBodyVisible(livingEntity: T): boolean;
        /**
         * Returns where in the swing animation the living entity is (from 0 to 1).  Args : entity, partialTickTime
         */
        getWhiteOverlayProgress(livingBase: T, partialTickTime: number): number;
        getFlipDegrees(livingEntity: T): number;
        isShaking(livingEntity: T): boolean;
        getShadowRadius(livingEntity: T): number;
        scale(livingEntity: T, poseStack: $PoseStack, partialTickTime: number): void;
        render(entity: T, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        getModel(): M;
        addLayer(layer: $RenderLayer<T, M>): boolean;
        getRenderType(livingEntity: T, bodyVisible: boolean, translucent: boolean, glowing: boolean): $RenderType;
        callAddFeature(layer: $RenderLayer<T, M>): boolean;
        invokeSetupRotations(entity: $LivingEntity, poseStack: $PoseStack, bob: number, yBodyRot: number, partialTick: number, scale: number): void;
        getLayers<T extends $LivingEntity, M extends $EntityModel<T>>(): $List<$RenderLayer<T, M>>;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<T, M>>;
        shadowStrength: number;
        model: M;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context, model: M, shadowRadius: number);
    }
    export class $ItemFrameRenderer<T extends $ItemFrame> extends $EntityRenderer<T> {
        shouldShowName(entity: T): boolean;
        localvar$djn000$fastitemframes$render(isInvisible: boolean, entity: $ItemFrame, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): boolean;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: T): $ResourceLocation;
        getBlockLightLevel(entity: T, pos: $BlockPos_): number;
        renderNameTag(entity: T, displayName: $Component_, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, partialTick: number): void;
        getRenderOffset(entity: T, partialTicks: number): $Vec3;
        render(entity: T, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static BRIGHT_MAP_LIGHT_ADJUSTMENT: number;
        static GLOW_FRAME_BRIGHTNESS: number;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $EntityRendererProvider<T extends $Entity> {
    }
    export interface $EntityRendererProvider<T extends $Entity> {
        create(context: $EntityRendererProvider$Context): $EntityRenderer<T>;
    }
    /**
     * Values that may be interpreted as {@link $EntityRendererProvider}.
     */
    export type $EntityRendererProvider_<T> = ((arg0: $EntityRendererProvider$Context) => $EntityRenderer<T>);
    export class $EntityRenderDispatcher implements $ResourceManagerReloadListener, $EntityRenderDispatcherAccessor {
        overrideCameraOrientation(cameraOrientation: $Quaternionf): void;
        setRenderShadow(debugBoundingBox: boolean): void;
        shouldRenderHitBoxes(): boolean;
        setRenderHitBoxes(debugBoundingBox: boolean): void;
        cameraOrientation(): $Quaternionf;
        getSkinMap(): $Map<$PlayerSkin$Model, $EntityRenderer<$Player>>;
        onResourceManagerReload(resourceManager: $ResourceManager): void;
        /**
         * World sets this RenderManager's worldObj to the world provided
         */
        setLevel(level: $Level_ | null): void;
        prepare(level: $Level_, activeRenderInfo: $Camera, entity: $Entity): void;
        render<E extends $Entity>(entity: E, x: number, arg2: number, y: number, arg4: number, z: number, arg6: $PoseStack, rotationYaw: $MultiBufferSource_, partialTicks: number): void;
        getPackedLightCoords<E extends $Entity>(entity: E, partialTicks: number): number;
        shouldRender<E extends $Entity>(entity: E, frustum: $Frustum, camX: number, arg3: number, camY: number): boolean;
        getItemInHandRenderer(): $ItemInHandRenderer;
        getRenderer(entity: $Entity): $EntityRenderer<any>;
        distanceToSqr(x: number, arg1: number, y: number): number;
        distanceToSqr(entity: $Entity): number;
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        getName(): string;
        create$getRenderers(): $Map<$EntityType<never>, $EntityRenderer<never>>;
        crosshairPickEntity: $Entity;
        renderers: $Map<$EntityType<never>, $EntityRenderer<never>>;
        options: $Options;
        textureManager: $TextureManager;
        camera: $Camera;
        constructor(minecraft: $Minecraft, textureManager: $TextureManager, itemRenderer: $ItemRenderer, blockRenderDispatcher: $BlockRenderDispatcher, font: $Font, options: $Options, entityModels: $EntityModelSet);
        set renderShadow(value: boolean);
        set renderHitBoxes(value: boolean);
        get skinMap(): $Map<$PlayerSkin$Model, $EntityRenderer<$Player>>;
        set level(value: $Level_ | null);
        get itemInHandRenderer(): $ItemInHandRenderer;
        get name(): string;
    }
    export class $ItemRenderer implements $ResourceManagerReloadListener, $ItemRendererAccessor$1, $ItemRendererAccessor$2, $ItemRendererAccessor, $IdentifiableResourceReloadListener {
        onResourceManagerReload(resourceManager: $ResourceManager): void;
        render(itemStack: $ItemStack_, displayContext: $ItemDisplayContext_, leftHand: boolean, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, combinedLight: number, combinedOverlay: number, model: $BakedModel): void;
        getFabricId(): $ResourceLocation;
        getFabricDependencies(): $Collection<any>;
        static hasAnimatedTexture$sodium_$md$3675d4$0(stack: $ItemStack_): boolean;
        renderStatic(entity: $LivingEntity | null, itemStack: $ItemStack_, diplayContext: $ItemDisplayContext_, leftHand: boolean, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, level: $Level_ | null, combinedLight: number, combinedOverlay: number, seed: number): void;
        renderStatic(stack: $ItemStack_, displayContext: $ItemDisplayContext_, combinedLight: number, combinedOverlay: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, level: $Level_ | null, seed: number): void;
        getModel(stack: $ItemStack_, level: $Level_ | null, entity: $LivingEntity | null, seed: number): $BakedModel;
        getItemModelShaper(): $ItemModelShaper;
        renderModelLists(model: $BakedModel, stack: $ItemStack_, combinedLight: number, combinedOverlay: number, poseStack: $PoseStack, buffer: $VertexConsumer): void;
        static getCompassFoilBuffer(bufferSource: $MultiBufferSource_, renderType: $RenderType, pose: $PoseStack$Pose): $VertexConsumer;
        static getFoilBufferDirect(bufferSource: $MultiBufferSource_, renderType: $RenderType, isItem: boolean, glint: boolean): $VertexConsumer;
        static getFoilBuffer(bufferSource: $MultiBufferSource_, renderType: $RenderType, isItem: boolean, glint: boolean): $VertexConsumer;
        handler$ile000$dragonlib$render(itemStack: $ItemStack_, displayContext: $ItemDisplayContext_, leftHand: boolean, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, combinedLight: number, combinedOverlay: number, model: $BakedModel, ci: $CallbackInfo): void;
        static getArmorFoilBuffer(bufferSource: $MultiBufferSource_, renderType: $RenderType, hasFoil: boolean): $VertexConsumer;
        renderQuadList(poseStack: $PoseStack, buffer: $VertexConsumer, quads: $List_<$BakedQuad>, itemStack: $ItemStack_, combinedLight: number, combinedOverlay: number): void;
        getBlockEntityRenderer(): $BlockEntityWithoutLevelRenderer;
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        getName(): string;
        invokeRenderBakedItemModel(model: $BakedModel, stack: $ItemStack_, combinedLight: number, combinedOverlay: number, poseStack: $PoseStack, buffer: $VertexConsumer): void;
        catnip$getTextureManager(): $TextureManager;
        static GUI_SLOT_CENTER_X: number;
        static COMPASS_FOIL_UI_SCALE: number;
        static COMPASS_FOIL_FIRST_PERSON_SCALE: number;
        static COMPASS_FOIL_TEXTURE_SCALE: number;
        static ENCHANTED_GLINT_ENTITY: $ResourceLocation;
        blockEntityRenderer: $BlockEntityWithoutLevelRenderer;
        static GUI_SLOT_CENTER_Y: number;
        static ITEM_COUNT_BLIT_OFFSET: number;
        static ENCHANTED_GLINT_ITEM: $ResourceLocation;
        static SPYGLASS_IN_HAND_MODEL: $ModelResourceLocation;
        textureManager: $TextureManager;
        static TRIDENT_IN_HAND_MODEL: $ModelResourceLocation;
        constructor(minecraft: $Minecraft, textureManager: $TextureManager, modelManager: $ModelManager, itemColors: $ItemColors, blockEntityRenderer: $BlockEntityWithoutLevelRenderer);
        get fabricId(): $ResourceLocation;
        get fabricDependencies(): $Collection<any>;
        get itemModelShaper(): $ItemModelShaper;
        get name(): string;
    }
}
