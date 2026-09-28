import { $Level, $Level_, $LevelReader } from "@package/net/minecraft/world/level";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $KineticBlockEntityAccessor, $KineticEffectHandlerAccessor } from "@package/dev/lopyluna/gnkinetics/mixins";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $KineticBlockEntityAccessor as $KineticBlockEntityAccessor$1 } from "@package/net/liukrast/deployer/lib/mixin/accessors";
import { $LangBuilder } from "@package/net/createmod/catnip/lang";
import { $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $UUID, $List, $UUID_, $List_ } from "@package/java/util";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $ChatFormatting } from "@package/net/minecraft";
import { $KineticBlockEntityExtension } from "@package/dev/simulated_team/simulated/mixin_interface/extra_kinetics";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Direction$Axis, $Direction$Axis_ } from "@package/net/minecraft/core";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $IPlacerTracked } from "@package/com/mapter/aeroclaims/protect";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $IHaveGoggleInformation, $IHaveHoveringInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $KineticNetwork } from "@package/com/simibubi/create/content/kinetics";
import { $Enum } from "@package/java/lang";
import { $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/content/kinetics/base" {
    export class $IRotate {
    }
    export interface $IRotate extends $IWrenchable {
        getMinimumRequiredSpeedLevel(): $IRotate$SpeedLevel;
        hideStressImpact(): boolean;
        showCapacityWithAnnotation(): boolean;
        getRotationAxis(arg0: $BlockState_): $Direction$Axis;
        hasShaftTowards(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_): boolean;
    }
    export class $KineticEffectHandler implements $KineticEffectHandlerAccessor {
        triggerOverStressedEffect(): void;
        spawnEffect(arg0: $ParticleOptions_, arg1: number, arg2: number): void;
        spawnRotationIndicators(): void;
        queueRotationIndicators(): void;
        tick(): void;
        overStressedEffect(): number;
        constructor(arg0: $KineticBlockEntity);
    }
    export class $IRotate$SpeedLevel extends $Enum<$IRotate$SpeedLevel> {
        getSpeedValue(): number;
        static getFormattedSpeedText(arg0: number, arg1: boolean): $LangBuilder;
        getParticleSpeed(): number;
        getTextColor(): $ChatFormatting;
        static values(): $IRotate$SpeedLevel[];
        static valueOf(arg0: string): $IRotate$SpeedLevel;
        static of(arg0: number): $IRotate$SpeedLevel;
        getColor(): number;
        static MEDIUM: $IRotate$SpeedLevel;
        static SLOW: $IRotate$SpeedLevel;
        static NONE: $IRotate$SpeedLevel;
        static FAST: $IRotate$SpeedLevel;
    }
    /**
     * Values that may be interpreted as {@link $IRotate$SpeedLevel}.
     */
    export type $IRotate$SpeedLevel_ = "none" | "slow" | "medium" | "fast";
    export class $KineticBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation, $IHaveHoveringInformation, $KineticBlockEntityExtension, $IPlacerTracked, $KineticBlockEntityAccessor$1, $KineticBlockEntityAccessor {
        setSpeed(arg0: number): void;
        getSpeed(): number;
        getFlickerScore(): number;
        hasSource(): boolean;
        getGeneratedSpeed(): number;
        updateFromNetwork(arg0: number, arg1: number, arg2: number): void;
        calculateStressApplied(): number;
        calculateAddedStressCapacity(): number;
        handler$dpp000$simulated$injectRemove(arg0: $CallbackInfo): void;
        handler$dpp000$simulated$saveConnected(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean, arg3: $CallbackInfo): void;
        handler$dpp000$simulated$readConnected(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean, arg3: $CallbackInfo): void;
        getTheoreticalSpeed(): number;
        setNetwork(arg0: number): void;
        handler$dpp000$simulated$removeConnected(arg0: $CallbackInfo): void;
        isSpeedRequirementFulfilled(): boolean;
        handler$eaf000$simulated$addExtraKineticsInfo(arg0: $List_<any>, arg1: boolean, arg2: $CallbackInfoReturnable<any>): void;
        static convertToLinear(arg0: number): number;
        static convertToAngular(arg0: number): number;
        isOverStressed(): boolean;
        propagateRotationTo(arg0: $KineticBlockEntity, arg1: $BlockState_, arg2: $BlockState_, arg3: $BlockPos_, arg4: boolean, arg5: boolean): number;
        handler$ijc000$gnkinetics$propagateRotationTo(arg0: $KineticBlockEntity, arg1: $BlockState_, arg2: $BlockState_, arg3: $BlockPos_, arg4: boolean, arg5: boolean, arg6: $CallbackInfoReturnable<any>): void;
        addPropagationLocations(arg0: $IRotate, arg1: $BlockState_, arg2: $List_<$BlockPos_>): $List<$BlockPos>;
        isCustomConnection(arg0: $KineticBlockEntity, arg1: $BlockState_, arg2: $BlockState_): boolean;
        tickAudio(): void;
        needsSpeedUpdate(): boolean;
        attachKinetics(): void;
        getRotationAngleOffset(arg0: $Direction$Axis_): number;
        simulated$setConnectedToExtraKinetics(arg0: boolean): void;
        simulated$getConnectedToExtraKinetics(): boolean;
        redirect$dpp000$simulated$useProperSource(arg0: $Level_, arg1: $BlockPos_): $BlockEntity;
        redirect$dpp000$simulated$useProperSource2(arg0: $Level_, arg1: $BlockPos_): $BlockEntity;
        simulated$setValidationCountdown(arg0: number): void;
        aeroclaims$getPlacerUUID(): $UUID;
        aeroclaims$setPlacerUUID(arg0: $UUID_): void;
        addToGoggleTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        onSpeedChanged(arg0: number): void;
        warnOfMovement(): void;
        clearKineticInformation(): void;
        static convertToDirection(arg0: number, arg1: $Direction_): number;
        addToTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        hasNetwork(): boolean;
        getOrCreateNetwork(): $KineticNetwork;
        detachKinetics(): void;
        removeSource(): void;
        isSource(): boolean;
        static switchToBlockState(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): void;
        setSource(arg0: $BlockPos_): void;
        containedFluidTooltip(arg0: $List_<$Component_>, arg1: boolean, arg2: $IFluidHandler): boolean;
        getIcon(arg0: boolean): $ItemStack;
        getEffects(): $KineticEffectHandler;
        effects(): $KineticEffectHandler;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        worldPosition: $BlockPos;
        level: $Level;
        updateSpeed: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        preventSpeedUpdate: number;
        network: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
}
