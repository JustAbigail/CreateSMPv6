import { $Function1_, $Function2_, $Function3_ } from "@package/kotlin/jvm/functions";
import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $State } from "@package/gg/essential/gui/elementa/state/v2";
import { $RenderLayer } from "@package/net/minecraft/client/renderer/entity/layers";
import { $PlayerPoseManager, $UMatrixStack } from "@package/gg/essential/model/util";
import { $CosmeticSlot } from "@package/gg/essential/mod/cosmetics";
import { $UUID, $List, $Map_, $UUID_, $Set_, $List_, $Map, $Set } from "@package/java/util";
import { $PlayerRenderer } from "@package/net/minecraft/client/renderer/entity/player";
import { $PlayerModel } from "@package/net/minecraft/client/model";
import { $UMatrixStack as $UMatrixStack$1 } from "@package/gg/essential/universal";
import { $Object } from "@package/java/lang";
import { $Unit, $Pair } from "@package/kotlin";
import { $EquippedOutfitsManager, $CosmeticsData, $EquippedOutfitsManager$Outfit } from "@package/gg/essential/network/connectionmanager/cosmetics";
import { $Skin, $Model_, $Model } from "@package/gg/essential/mod";
import { $AnimationTarget_ } from "@package/gg/essential/cosmetics/events";
import { $AbstractClientPlayer } from "@package/net/minecraft/client/player";
import { $SkinMask } from "@package/gg/essential/cosmetics/skinmask";
import { $EnumPart, $ModelInstance, $BedrockModel, $Cube, $Side, $Vector3, $EnumPart_, $ModelAnimationState$Event } from "@package/gg/essential/model";
import { $MolangQueryEntity } from "@package/gg/essential/model/molang";
import { $CosmeticSetting } from "@package/gg/essential/mod/cosmetics/settings";
import { $TrackedList } from "@package/gg/essential/gui/elementa/state/v2/collections";
import { $PlayerPose, $RenderBackend$CommandQueue, $RenderBackend$Texture, $RenderBackend, $RenderBackend$VertexConsumerProvider_ } from "@package/gg/essential/model/backend";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Cosmetic } from "@package/gg/essential/network/cosmetics";
export * as events from "@package/gg/essential/cosmetics/events";
export * as state from "@package/gg/essential/cosmetics/state";
export * as skinmask from "@package/gg/essential/cosmetics/skinmask";

declare module "@package/gg/essential/cosmetics" {
    export class $EquippedCosmeticId {
        getSettings(): $List<$CosmeticSetting>;
        getId(): string;
        copy(arg0: string, arg1: $List_<$CosmeticSetting>): $EquippedCosmeticId;
        component1(): string;
        component2(): $List<$CosmeticSetting>;
        static copy$default(arg0: $EquippedCosmeticId, arg1: string, arg2: $List_<any>, arg3: number, arg4: $Object): $EquippedCosmeticId;
        constructor(arg0: string, arg1: $List_<$CosmeticSetting>);
        get settings(): $List<$CosmeticSetting>;
        get id(): string;
    }
    export class $CosmeticsRenderState {
    }
    export interface $CosmeticsRenderState {
        blockedArmorSlots(): $Set<number>;
        skinTexture(): $ResourceLocation;
        emissiveCapeTexture(): $ResourceLocation;
        nametagIcon(): $ModelInstance;
        isSneaking(): boolean;
        setSuppressedArmor(arg0: boolean[]): void;
        setCosmeticFrozenYaw(arg0: number): void;
        setPoseModified(arg0: boolean): void;
        setRenderedPose(arg0: $PlayerPose): void;
        wearablesManager(): $WearablesManager;
        poseManager(): $PlayerPoseManager;
        cosmeticFrozenYaw(): number;
        get sneaking(): boolean;
        set suppressedArmor(value: boolean[]);
        set poseModified(value: boolean);
        set renderedPose(value: $PlayerPose);
    }
    export class $IngameEquippedOutfitsManager$Update {
    }
    export interface $IngameEquippedOutfitsManager$Update {
    }
    export class $EquippedCosmetic {
        getCosmetic(): $Cosmetic;
        settings<T extends $CosmeticSetting>(): $List<T>;
        getSettings(): $List<$CosmeticSetting>;
        setting<T extends $CosmeticSetting>(): T;
        getId(): string;
        copy(arg0: $Cosmetic, arg1: $List_<$CosmeticSetting>): $EquippedCosmetic;
        getVariant(): string;
        component1(): $Cosmetic;
        component2(): $List<$CosmeticSetting>;
        static copy$default(arg0: $EquippedCosmetic, arg1: $Cosmetic, arg2: $List_<any>, arg3: number, arg4: $Object): $EquippedCosmetic;
        constructor(arg0: $Cosmetic, arg1: $List_<$CosmeticSetting>);
        get cosmetic(): $Cosmetic;
        get id(): string;
        get variant(): string;
    }
    export class $EssentialModelRenderer$Companion {
        shouldRender(player: $AbstractClientPlayer): boolean;
        constructor($constructor_marker: $DefaultConstructorMarker);
    }
    export class $CosmeticsState {
        getCosmetics(): $Map<$CosmeticSlot, $EquippedCosmetic>;
        getPositionAdjustment(arg0: $Cosmetic): $Vector3;
        getHiddenBones(): $Map<string, $Set<string>>;
        getHidesHeldItems(): boolean;
        getSkinType(): $Model;
        getUsesCapePose(): boolean;
        getUsesElytraPose(): boolean;
        getBedrockModels(): $Map<$Cosmetic, $BedrockModel>;
        copyWithout(arg0: $CosmeticSlot): $CosmeticsState;
        getHiddenParts(): $Map<string, $Set<$EnumPart>>;
        getRenderGeometries(): $Map<string, $List<$List<$Cube>>>;
        propertyHidesEntireCosmetic(arg0: string): boolean;
        getPositionAdjustments(): $Map<string, $Vector3>;
        getPartsEquipped(): $Set<number>;
        getLocksPlayerRotation(): boolean;
        getArmor(): $ArmorSlots;
        getSkinMask(): $SkinMask;
        getSides(): $Map<string, $Side>;
        static Companion: $CosmeticsState$Companion;
        static EMPTY: $CosmeticsState;
        constructor(arg0: $Model_, arg1: $Map_<$CosmeticSlot, $EquippedCosmetic>, arg2: $Map_<$Cosmetic, $BedrockModel>, arg3: $ArmorSlots);
        get cosmetics(): $Map<$CosmeticSlot, $EquippedCosmetic>;
        get hiddenBones(): $Map<string, $Set<string>>;
        get hidesHeldItems(): boolean;
        get skinType(): $Model;
        get usesCapePose(): boolean;
        get usesElytraPose(): boolean;
        get bedrockModels(): $Map<$Cosmetic, $BedrockModel>;
        get hiddenParts(): $Map<string, $Set<$EnumPart>>;
        get renderGeometries(): $Map<string, $List<$List<$Cube>>>;
        get positionAdjustments(): $Map<string, $Vector3>;
        get partsEquipped(): $Set<number>;
        get locksPlayerRotation(): boolean;
        get armor(): $ArmorSlots;
        get skinMask(): $SkinMask;
        get sides(): $Map<string, $Side>;
    }
    export class $WearablesManager$Companion {
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $WearablesManager {
        updateLocators(arg0: $PlayerPose): void;
        resetModel(arg0: $CosmeticSlot): void;
        getModels(): $Map<$Cosmetic, $ModelInstance>;
        "render-zkmfrqk"(arg0: $UMatrixStack, arg1: $WearablesManager$CommandQueueProvider_, arg2: number, arg3: $PlayerPose, arg4: $RenderBackend$Texture, arg5: $Set_<$EnumPart_>): void;
        "render-6Qb1oLs"(arg0: $UMatrixStack, arg1: $RenderBackend$CommandQueue, arg2: number, arg3: $ModelInstance, arg4: $PlayerPose, arg5: $RenderBackend$Texture, arg6: $Set_<$EnumPart_>): void;
        static "render-zkmfrqk$default"(arg0: $WearablesManager, arg1: $UMatrixStack, arg2: $WearablesManager$CommandQueueProvider_, arg3: number, arg4: $PlayerPose, arg5: $RenderBackend$Texture, arg6: $Set_<any>, arg7: number, arg8: $Object): void;
        collectEvents(arg0: $Function1_<$ModelAnimationState$Event, $Unit>): void;
        static "render-6Qb1oLs$default"(arg0: $WearablesManager, arg1: $UMatrixStack, arg2: $RenderBackend$CommandQueue, arg3: number, arg4: $ModelInstance, arg5: $PlayerPose, arg6: $RenderBackend$Texture, arg7: $Set_<any>, arg8: number, arg9: $Object): void;
        updateState(arg0: $CosmeticsState): void;
        update(): void;
        getState(): $CosmeticsState;
        static Companion: $WearablesManager$Companion;
        constructor(arg0: $RenderBackend, arg1: $MolangQueryEntity, arg2: $Set_<$AnimationTarget_>, arg3: $Function2_<$Cosmetic, string, $Unit>);
        get models(): $Map<$Cosmetic, $ModelInstance>;
        get state(): $CosmeticsState;
    }
    export class $IngameEquippedOutfitsManager implements $EquippedOutfitsManager {
        getEquippedCosmeticsState(arg0: $UUID_): $State<$EquippedOutfitsManager$Outfit>;
        getCapeHash(arg0: $UUID_): string;
        applyUpdates(arg0: $UUID_, arg1: $List_<$IngameEquippedOutfitsManager$Update>): void;
        applyUpdates(arg0: $List_<$Pair<$UUID_, $List_<$IngameEquippedOutfitsManager$Update>>>): void;
        getSkin(arg0: $UUID_): $Skin;
        getVisibleCosmeticsState(arg0: $UUID_): $State<$Map<$CosmeticSlot, $EquippedCosmetic>>;
        constructor(arg0: $CosmeticsData, arg1: $Function3_<$UUID, $CosmeticSlot, string, $Unit>);
    }
    export class $EssentialModelRenderer extends $RenderLayer<$AbstractClientPlayer, $PlayerModel<$AbstractClientPlayer>> {
        static render$default(arg0: $EssentialModelRenderer, arg1: $UMatrixStack$1, arg2: $RenderBackend$VertexConsumerProvider_, arg3: $Object, arg4: $CosmeticsRenderState, arg5: number, arg6: $Set_<any>, arg7: boolean, arg8: number, arg9: $Object): void;
        render(vMatrixStack: $PoseStack, buffer: $MultiBufferSource_, light: number, player: $AbstractClientPlayer, limbSwing: number, limbSwingAmount: number, partialTicks: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        render(matrixStack: $UMatrixStack$1, vertexConsumerProvider: $RenderBackend$VertexConsumerProvider_, playerState: $Object, cState: $CosmeticsRenderState, lightInt: number, parts: $Set_<$EnumPart_>, setsPose: boolean): void;
        static shouldRender(player: $AbstractClientPlayer): boolean;
        static Companion: $EssentialModelRenderer$Companion;
        constructor(playerRenderer: $PlayerRenderer);
    }
    export class $CosmeticsState$Companion {
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $ArmorSlots {
        get(arg0: number): boolean;
        copy(arg0: number): $ArmorSlots;
        getSlots(): number;
        component1(): number;
        static copy$default(arg0: $ArmorSlots, arg1: number, arg2: number, arg3: $Object): $ArmorSlots;
        constructor(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: number, arg6: $DefaultConstructorMarker);
        constructor(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean);
        constructor(arg0: number);
        get slots(): number;
    }
    export class $IngameEquippedOutfitsUpdateEncoder {
        update(arg0: $TrackedList<$Pair<$UUID_, $EquippedOutfitsManager$Outfit>>): $List<$Pair<$UUID, $List<$IngameEquippedOutfitsManager$Update>>>;
        constructor();
    }
    export class $WearablesManager$CommandQueueProvider {
    }
    export interface $WearablesManager$CommandQueueProvider {
        forCosmetic(arg0: string): $RenderBackend$CommandQueue;
    }
    /**
     * Values that may be interpreted as {@link $WearablesManager$CommandQueueProvider}.
     */
    export type $WearablesManager$CommandQueueProvider_ = ((arg0: string) => $RenderBackend$CommandQueue);
}
