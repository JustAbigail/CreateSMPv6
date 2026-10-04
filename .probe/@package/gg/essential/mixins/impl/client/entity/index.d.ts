import { $PlayerPose } from "@package/gg/essential/model/backend";
import { $State, $State_ } from "@package/gg/essential/gui/elementa/state/v2";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $WearablesManager, $CosmeticsState, $EquippedCosmetic } from "@package/gg/essential/cosmetics";
import { $PlayerPoseManager } from "@package/gg/essential/model/util";
import { $CosmeticSlot } from "@package/gg/essential/mod/cosmetics";
import { $UUID, $List_, $Map } from "@package/java/util";
import { $Pair } from "@package/kotlin";
import { $UIdentifier } from "@package/gg/essential/util";

declare module "@package/gg/essential/mixins/impl/client/entity" {
    export class $AbstractClientPlayerExt {
    }
    export interface $AbstractClientPlayerExt {
        getCosmeticsSourceUuid(): $UUID;
        getCosmeticsSource(): $State<$Map<$CosmeticSlot, $EquippedCosmetic>>;
        setCosmeticsSource(arg0: $State_<$Map<$CosmeticSlot, $EquippedCosmetic>>): void;
        getWearablesManager(): $WearablesManager;
        getCosmeticsState(): $CosmeticsState;
        setEssentialCosmeticsCape(arg0: string, arg1: $Pair<$List_<$UIdentifier>, $List_<$UIdentifier>>): void;
        applyEssentialCosmeticsMask(arg0: $ResourceLocation_): $ResourceLocation;
        getEmissiveCapeTexture(): $UIdentifier;
        wasArmorRenderingSuppressed(): boolean[];
        getPoseManager(): $PlayerPoseManager;
        isPoseModified(): boolean;
        setPoseModified(arg0: boolean): void;
        getRenderedPose(): $PlayerPose;
        setRenderedPose(arg0: $PlayerPose): void;
        essential$getCosmeticFrozenYaw(): number;
        essential$setCosmeticFrozenYaw(arg0: number): void;
        get cosmeticsSourceUuid(): $UUID;
        get wearablesManager(): $WearablesManager;
        get cosmeticsState(): $CosmeticsState;
        get emissiveCapeTexture(): $UIdentifier;
        get poseManager(): $PlayerPoseManager;
    }
}
