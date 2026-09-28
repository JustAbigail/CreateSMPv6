import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $List } from "@package/java/util";
import { $RenderedBehaviourExtension, $KineticBehaviourExtension, $ItemRequirementBehaviourExtension } from "@package/com/cake/azimuth/behaviour/extensions";
import { $BehaviourType, $BlockEntityBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $PlayerInteractEvent$RightClickBlock } from "@package/net/neoforged/neoforge/event/entity/player";
import { $Predicate_ } from "@package/java/util/function";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Runnable_ } from "@package/java/lang";
import { $BlockEvent$BreakEvent, $BlockEvent$EntityPlaceEvent } from "@package/net/neoforged/neoforge/event/level";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as render from "@package/com/cake/azimuth/behaviour/render";
export * as extensions from "@package/com/cake/azimuth/behaviour/extensions";

declare module "@package/com/cake/azimuth/behaviour" {
    export class $AzimuthSmartBlockEntityExtension {
    }
    export interface $AzimuthSmartBlockEntityExtension {
        azimuth$getSuperBehaviours(): $SuperBlockEntityBehaviour[];
        azimuth$updateBehaviourExtensionCache(): void;
        azimuth$searchExtensionBehaviours<T>(arg0: $Predicate_<$SuperBlockEntityBehaviour>): $List<T>;
        azimuth$searchSuperBehaviours(): $SuperBlockEntityBehaviour[];
        azimuth$addCacheClearListener(arg0: $Runnable_): void;
        azimuth$getItemRequirementExtensionCache(): $ItemRequirementBehaviourExtension[];
        azimuth$getRenderedExtensionCache(): $RenderedBehaviourExtension[];
        azimuth$getKineticExtensionCache(): $KineticBehaviourExtension[];
        azimuth$invalidateRenderBoundingBox(): void;
    }
    export class $SuperBlockEntityBehaviour extends $BlockEntityBehaviour {
        getSameBehaviour<T extends $SuperBlockEntityBehaviour>(arg0: $BlockEntity): T;
        getSameBehaviour<T extends $SuperBlockEntityBehaviour>(arg0: $BlockPos_): T;
        getSameBehaviourOptional<T extends $SuperBlockEntityBehaviour>(arg0: $BlockEntity): (T) | undefined;
        getSameBehaviourOptional<T extends $SuperBlockEntityBehaviour>(arg0: $BlockPos_): (T) | undefined;
        isServerLevel(): boolean;
        getSameBehaviourOrThrow<T extends $SuperBlockEntityBehaviour>(arg0: $BlockEntity): T;
        getSameBehaviourOrThrow<T extends $SuperBlockEntityBehaviour>(arg0: $BlockPos_): T;
        onBlockBroken(arg0: $BlockEvent$BreakEvent): void;
        onBlockPlaced(arg0: $BlockEvent$EntityPlaceEvent): void;
        onItemUse(arg0: $PlayerInteractEvent$RightClickBlock): void;
        removeFromLevel(arg0: boolean): void;
        sendData(): void;
        getLevel(): $Level;
        remove(): void;
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        static getOptional<T extends $BlockEntityBehaviour>(arg0: $Level_, arg1: $BlockPos_, arg2: $BehaviourType<T>): (T) | undefined;
        static getOptional<T extends $BlockEntityBehaviour>(arg0: $BlockEntity, arg1: $BehaviourType<T>): (T) | undefined;
        static getOrThrow<T extends $BlockEntityBehaviour>(arg0: $BlockEntity, arg1: $BehaviourType<T>): T;
        static getOrThrow<T extends $BlockEntityBehaviour>(arg0: $Level_, arg1: $BlockPos_, arg2: $BehaviourType<T>): T;
        getBlockState(): $BlockState;
        getBlockEntity(): $BlockEntity;
        isClientSide(): boolean;
        hasLevel(): boolean;
        blockEntity: $SmartBlockEntity;
        constructor(arg0: $SmartBlockEntity);
    }
    export class $BehaviourExtension {
    }
    export interface $BehaviourExtension {
        getBlockEntity(): $BlockEntity;
    }
    /**
     * Values that may be interpreted as {@link $BehaviourExtension}.
     */
    export type $BehaviourExtension_ = (() => $BlockEntity);
}
