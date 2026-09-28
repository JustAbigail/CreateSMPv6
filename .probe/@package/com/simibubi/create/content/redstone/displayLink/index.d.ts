import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FactoryPanelSupportBehaviour } from "@package/com/simibubi/create/content/logistics/factoryBoard";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $BlockPos, $BlockPos_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $DisplayTarget, $DisplaySource } from "@package/com/simibubi/create/api/behaviour/display";
import { $Object } from "@package/java/lang";
import { $TransformableBlockEntity } from "@package/com/simibubi/create/api/contraption/transformable";
import { $DisplayLinkDimensionExtension } from "@package/com/createstats/display";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $AntennaTier_, $AntennaTier } from "@package/com/createstats/antenna";
import { $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
export * as target from "@package/com/simibubi/create/content/redstone/displayLink/target";

declare module "@package/com/simibubi/create/content/redstone/displayLink" {
    export class $DisplayLinkBlockEntity extends $LinkWithBulbBlockEntity implements $TransformableBlockEntity, $DisplayLinkDimensionExtension {
        onNoLongerPowered(): void;
        getTargetPosition(): $BlockPos;
        tickSource(): void;
        getSourcePosition(): $BlockPos;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        setSourceConfig(arg0: $CompoundTag_): void;
        handler$hnl001$sable$accountForSubLevels(arg0: $CallbackInfoReturnable<any>): void;
        createStats$getTargetAntennaTier(): $AntennaTier;
        createStats$getStoredTargetPos(): $BlockPos;
        getSourceConfig(): $CompoundTag;
        updateGatheredData(): void;
        createStats$setTargetDimension(arg0: $ResourceLocation_): void;
        createStats$setTargetTypeId(arg0: $ResourceLocation_): void;
        createStats$setTargetAntennaTier(arg0: $AntennaTier_): void;
        createStats$setStoredTargetPos(arg0: $BlockPos_): void;
        createStats$getTargetDimension(): $ResourceLocation;
        createStats$getTargetTypeId(): $ResourceLocation;
        getDirection(): $Direction;
        target(arg0: $BlockPos_): void;
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        worldPosition: $BlockPos;
        refreshTicks: number;
        level: $Level;
        targetLine: number;
        static ATTACHMENTS_NBT_KEY: string;
        activeTarget: $DisplayTarget;
        computerBehaviour: $AbstractComputerBehaviour;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        factoryPanelSupport: $FactoryPanelSupportBehaviour;
        activeSource: $DisplaySource;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $LinkWithBulbBlockEntity extends $SmartBlockEntity {
        sendPulseNextSync(): void;
        getBulbOffset(arg0: $BlockState_): $Vec3;
        getBulbFacing(arg0: $BlockState_): $Direction;
        pulse(): void;
        getGlow(arg0: number): number;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $DisplayLinkContext {
        getSourcePos(): $BlockPos;
        getTargetBlockEntity(): $BlockEntity;
        sourceConfig(): $CompoundTag;
        getSourceBlockEntity(): $BlockEntity;
        getTargetPos(): $BlockPos;
        level(): $Level;
        blockEntity(): $DisplayLinkBlockEntity;
        flapDisplayContext: $Object;
        constructor(arg0: $Level_, arg1: $DisplayLinkBlockEntity);
    }
}
