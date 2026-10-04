import { $Long2ReferenceMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $ChunkBuilder, $ChunkJob } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/executor";
import { $TextProvider } from "@package/net/caffeinemc/mods/sodium/client/gui/options";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Camera } from "@package/net/minecraft/client";
import { $BlockEntityRenderPredicate_, $BlockEntityRenderPredicate } from "@package/net/caffeinemc/mods/sodium/api/blockentity";
import { $RenderRegion } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/region";
import { $Map_, $Collection, $Map, $ArrayDeque } from "@package/java/util";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $BlockPos_, $SectionPos } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $BuiltSectionInfo } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/data";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $CameraMovement_ } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/trigger";
import { $Viewport, $CameraTransform } from "@package/net/caffeinemc/mods/sodium/client/render/viewport";
import { $Enum, $Record } from "@package/java/lang";
import { $CommandList } from "@package/net/caffeinemc/mods/sodium/client/gl/device";
import { $BlockGetter } from "@package/net/minecraft/world/level";
import { $Component } from "@package/net/minecraft/network/chat";
import { $RenderSectionManagerAccessor } from "@package/foundry/veil/forge/mixin/client/perspective/sodium";
import { $SortBehavior_ } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting";
import { $RenderSectionManagerAccessor as $RenderSectionManagerAccessor$1 } from "@package/foundry/veil/forge/mixin/compat/sodium";
import { $LevelChunkSection } from "@package/net/minecraft/world/level/chunk";
import { $TerrainRenderPass } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/terrain";
import { $ChunkBuilderMeshingTask, $ChunkBuilderSortingTask } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/tasks";
import { $TranslucentData } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data";
import { $RenderSectionExtension } from "@package/foundry/veil/forge/ext";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $SortedRenderLists, $ChunkRenderListIterable_ } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/lists";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Vector3dc, $Matrix4fc } from "@package/org/joml";
export * as data from "@package/net/caffeinemc/mods/sodium/client/render/chunk/data";
export * as compile from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile";
export * as translucent_sorting from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting";
export * as lists from "@package/net/caffeinemc/mods/sodium/client/render/chunk/lists";
export * as region from "@package/net/caffeinemc/mods/sodium/client/render/chunk/region";
export * as map from "@package/net/caffeinemc/mods/sodium/client/render/chunk/map";
export * as shader from "@package/net/caffeinemc/mods/sodium/client/render/chunk/shader";
export * as vertex from "@package/net/caffeinemc/mods/sodium/client/render/chunk/vertex";
export * as terrain from "@package/net/caffeinemc/mods/sodium/client/render/chunk/terrain";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk" {
    export class $RenderSectionManager implements $RenderSectionManagerAccessor, $RenderSectionManagerAccessor$1 {
        getTotalSections(): number;
        getVisibleChunkCount(): number;
        renderLayer(arg0: $ChunkRenderMatrices_, arg1: $TerrainRenderPass, arg2: number, arg3: number, arg4: number): void;
        markGraphDirty(): void;
        processGFNIMovement(arg0: $CameraMovement_): void;
        cleanupAndFlip(): void;
        uploadChunks(): void;
        finalizeRenderLists(arg0: $Viewport): void;
        tickVisibleRenders(): void;
        beforeSectionUpdates(): void;
        onChunkAdded(arg0: number, arg1: number): void;
        onChunkRemoved(arg0: number, arg1: number): void;
        getRenderLists(): $SortedRenderLists;
        getSectionsWithGlobalEntities(): $Collection<$RenderSection>;
        isSectionVisible(arg0: number, arg1: number, arg2: number): boolean;
        isSectionBuilt(arg0: number, arg1: number, arg2: number): boolean;
        onSectionAdded(arg0: number, arg1: number, arg2: number): void;
        handler$glg000$pantographsandwires$dragonlib$getSection(x: number, y: number, z: number, ci: $CallbackInfo): void;
        wrapOperation$glg000$pantographsandwires$dragonlib$emptyCheck(instance: $LevelChunkSection, original: $Operation_<any>): boolean;
        onSectionRemoved(arg0: number, arg1: number, arg2: number): void;
        handler$bio000$veil$isSectionVisible(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfoReturnable<any>): void;
        scheduleSort(arg0: number, arg1: boolean): void;
        createRebuildTask(arg0: $RenderSection, arg1: number): $ChunkBuilderMeshingTask;
        createSortTask(arg0: $RenderSection, arg1: number): $ChunkBuilderSortingTask;
        prepareFrame(arg0: $Vector3dc): void;
        updateChunks(arg0: boolean): void;
        getDebugStrings(): $Collection<string>;
        update(arg0: $Camera, arg1: $Viewport, arg2: boolean): void;
        destroy(): void;
        getBuilder(): $ChunkBuilder;
        scheduleRebuild(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
        needsUpdate(): boolean;
        setRenderLists(arg0: $SortedRenderLists): void;
        setTaskLists(arg0: $Map_<$TaskQueueType_, $ArrayDeque<$RenderSection>>): void;
        getTaskLists(): $Map<$TaskQueueType, $ArrayDeque<$RenderSection>>;
        getChunkRenderer(): $ChunkRenderer;
        getSectionByPosition(): $Long2ReferenceMap<$RenderSection>;
        constructor(arg0: $ClientLevel, arg1: number, arg2: $SortBehavior_, arg3: $CommandList);
        get totalSections(): number;
        get visibleChunkCount(): number;
        get sectionsWithGlobalEntities(): $Collection<$RenderSection>;
        get debugStrings(): $Collection<string>;
        get builder(): $ChunkBuilder;
        get chunkRenderer(): $ChunkRenderer;
        get sectionByPosition(): $Long2ReferenceMap<$RenderSection>;
    }
    export class $RenderSection implements $RenderSectionExtension {
        getChunkX(): number;
        getChunkZ(): number;
        isDisposed(): boolean;
        getCulledBlockEntities(): $BlockEntity[];
        getGlobalBlockEntities(): $BlockEntity[];
        getOriginY(): number;
        getOriginZ(): number;
        getOriginX(): number;
        getLastMeshResultSize(): number;
        veil$hasNotRendered(): boolean;
        getAdjacentMask(): number;
        setLastVisibleFrame(arg0: number): void;
        getIncomingDirections(): number;
        handler$bip000$veil$getIncomingDirections(arg0: $CallbackInfoReturnable<any>): void;
        addIncomingDirections(arg0: number): void;
        setIncomingDirections(arg0: number): void;
        getVisibilityData(): number;
        getPendingUpdateSince(): number;
        veil$markRendered(): void;
        veil$addIncomingDirections(arg0: number): void;
        setPendingUpdate(arg0: number, arg1: number): void;
        getTranslucentData(): $TranslucentData;
        getAnimatedSprites(): $TextureAtlasSprite[];
        getLastVisibleFrame(): number;
        getSquaredDistance(arg0: number, arg1: number, arg2: number): number;
        getSquaredDistance(arg0: $BlockPos_): number;
        getRunningJob(): $ChunkJob;
        setLastMeshResultSize(arg0: number): void;
        setTranslucentData(arg0: $TranslucentData): void;
        getLastSubmittedFrame(): number;
        setRunningJob(arg0: $ChunkJob): void;
        setLastUploadFrame(arg0: number): void;
        getLastUploadFrame(): number;
        getPendingUpdate(): number;
        clearPendingUpdate(): void;
        setLastSubmittedFrame(arg0: number): void;
        prepareTrigger(arg0: boolean): void;
        isBuilt(): boolean;
        getChunkY(): number;
        setAdjacentNode(arg0: number, arg1: $RenderSection): void;
        getCenterY(): number;
        getAdjacent(arg0: number): $RenderSection;
        getPosition(): $SectionPos;
        getFlags(): number;
        "delete"(): void;
        getRegion(): $RenderRegion;
        setInfo(arg0: $BuiltSectionInfo): boolean;
        getCenterX(): number;
        getCenterZ(): number;
        getSectionIndex(): number;
        adjacentEast: $RenderSection;
        adjacentUp: $RenderSection;
        adjacentWest: $RenderSection;
        adjacentSouth: $RenderSection;
        adjacentDown: $RenderSection;
        adjacentNorth: $RenderSection;
        constructor(arg0: $RenderRegion, arg1: number, arg2: number, arg3: number);
        get chunkX(): number;
        get chunkZ(): number;
        get disposed(): boolean;
        get culledBlockEntities(): $BlockEntity[];
        get globalBlockEntities(): $BlockEntity[];
        get originY(): number;
        get originZ(): number;
        get originX(): number;
        get adjacentMask(): number;
        get visibilityData(): number;
        get pendingUpdateSince(): number;
        get animatedSprites(): $TextureAtlasSprite[];
        get built(): boolean;
        get chunkY(): number;
        get centerY(): number;
        get position(): $SectionPos;
        get flags(): number;
        get region(): $RenderRegion;
        set info(value: $BuiltSectionInfo);
        get centerX(): number;
        get centerZ(): number;
        get sectionIndex(): number;
    }
    export class $ChunkRenderer {
    }
    export interface $ChunkRenderer {
        "delete"(arg0: $CommandList): void;
        render(arg0: $ChunkRenderMatrices_, arg1: $CommandList, arg2: $ChunkRenderListIterable_, arg3: $TerrainRenderPass, arg4: $CameraTransform, arg5: boolean): void;
    }
    export class $DeferMode extends $Enum<$DeferMode> implements $TextProvider {
        getImportantRebuildQueueType(): $TaskQueueType;
        getLocalizedName(): $Component;
        static values(): $DeferMode[];
        static valueOf(arg0: string): $DeferMode;
        static ONE_FRAME: $DeferMode;
        static ALWAYS: $DeferMode;
        static ZERO_FRAMES: $DeferMode;
        get importantRebuildQueueType(): $TaskQueueType;
        get localizedName(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $DeferMode}.
     */
    export type $DeferMode_ = "always" | "one_frame" | "zero_frames";
    export class $ChunkRenderMatrices extends $Record {
        modelView(): $Matrix4fc;
        projection(): $Matrix4fc;
        static from(arg0: $PoseStack): $ChunkRenderMatrices;
        constructor(projection: $Matrix4fc, modelView: $Matrix4fc);
    }
    /**
     * Values that may be interpreted as {@link $ChunkRenderMatrices}.
     */
    export type $ChunkRenderMatrices_ = { projection?: $Matrix4fc, modelView?: $Matrix4fc,  } | [projection?: $Matrix4fc, modelView?: $Matrix4fc, ];
    export class $TaskQueueType extends $Enum<$TaskQueueType> {
        queueSizeLimit(): number;
        allowsUnlimitedUploadDuration(): boolean;
        static values(): $TaskQueueType[];
        static valueOf(arg0: string): $TaskQueueType;
        static ALWAYS_DEFER: $TaskQueueType;
        static ZERO_FRAME_DEFER: $TaskQueueType;
        static ONE_FRAME_DEFER: $TaskQueueType;
        static INITIAL_BUILD: $TaskQueueType;
    }
    /**
     * Values that may be interpreted as {@link $TaskQueueType}.
     */
    export type $TaskQueueType_ = "zero_frame_defer" | "one_frame_defer" | "always_defer" | "initial_build";
    export class $ExtendedBlockEntityType<T extends $BlockEntity> {
        static addRenderPredicate<T extends $BlockEntity>(arg0: $BlockEntityType_<T>, arg1: $BlockEntityRenderPredicate_<T>): void;
        static removeRenderPredicate<T extends $BlockEntity>(arg0: $BlockEntityType_<T>, arg1: $BlockEntityRenderPredicate_<T>): boolean;
        static shouldRender<T extends $BlockEntity>(arg0: $BlockEntityType_<T>, arg1: $BlockGetter, arg2: $BlockPos_, arg3: T): boolean;
    }
    export interface $ExtendedBlockEntityType<T extends $BlockEntity> {
        sodium$removeRenderPredicate(arg0: $BlockEntityRenderPredicate_<T>): boolean;
        sodium$getRenderPredicates(): $BlockEntityRenderPredicate<T>[];
        sodium$addRenderPredicate(arg0: $BlockEntityRenderPredicate_<T>): void;
    }
}
