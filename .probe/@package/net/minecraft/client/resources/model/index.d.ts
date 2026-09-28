import { $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $BakedModelManagerAccessor } from "@package/dev/emi/emi/mixin/accessor";
import { $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $BakedModelMixin } from "@package/net/fabricmc/fabric/mixin/renderer/client";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $IdentifiableResourceReloadListener } from "@package/net/fabricmc/fabric/api/resource";
import { $ResourceManager, $PreparableReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $ResourceModelManagerAccessor, $ResourceAtlasSetAccessor } from "@package/foundry/veil/mixin/resource/accessor";
import { $List, $Map_, $List_, $Collection, $Comparator, $Map } from "@package/java/util";
import { $BlockModelShaper } from "@package/net/minecraft/client/renderer/block";
import { $RandomSource } from "@package/net/minecraft/util";
import { $BiConsumer_, $Supplier_, $Function_ } from "@package/java/util/function";
import { $Object2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $IBakedModelExtension, $ModelStateExtension, $IModelBakerExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $StateDefinition, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockColors } from "@package/net/minecraft/client/color/block";
import { $ModelLoadingEventDispatcher, $ModelLoaderHooks, $BlockStatesLoaderHooks, $BlockStatesLoaderHooks$LoadingOverride_ } from "@package/net/fabricmc/fabric/impl/client/model/loading";
import { $TextureAtlasSprite, $SpriteLoader$Preparations_, $TextureManager, $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $Record, $AutoCloseable, $Comparable } from "@package/java/lang";
import { $BlockAndTintGetter } from "@package/net/minecraft/world/level";
import { $FabricBakedModelManager } from "@package/net/fabricmc/fabric/api/client/model/loading/v1";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $BlockModel, $ItemModelGenerator, $ItemOverrides, $BakedQuad, $ItemTransforms, $BlockModelDefinition, $BlockModelDefinition$Context } from "@package/net/minecraft/client/renderer/block/model";
import { $ModelBakeryAccessor } from "@package/de/mrjulsen/mcdragonlib/mixin";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $ResourceLocation_, $ResourceLocation, $FileToIdConverter } from "@package/net/minecraft/resources";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $RenderContext } from "@package/net/fabricmc/fabric/api/renderer/v1/render";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Transformation } from "@package/com/mojang/math";
import { $FabricBakedModel } from "@package/net/fabricmc/fabric/api/renderer/v1/model";

declare module "@package/net/minecraft/client/resources/model" {
    export class $BakedModel {
    }
    export interface $BakedModel extends $IBakedModelExtension, $FabricBakedModel, $BakedModelMixin {
        /**
         * @deprecated
         */
        getTransforms(): $ItemTransforms;
        /**
         * @deprecated
         */
        getQuads(state: $BlockState_ | null, direction: $Direction_ | null, random: $RandomSource): $List<$BakedQuad>;
        isCustomRenderer(): boolean;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        getOverrides(): $ItemOverrides;
        isGui3d(): boolean;
        usesBlockLight(): boolean;
        /**
         * @deprecated
         */
        getParticleIcon(): $TextureAtlasSprite;
        useAmbientOcclusion(): boolean;
    }
    export class $AtlasSet$StitchResult {
        readyForUpload(): $CompletableFuture<void>;
        missing(): $TextureAtlasSprite;
        upload(): void;
        getSprite(location: $ResourceLocation_): $TextureAtlasSprite;
        constructor(atlas: $TextureAtlas, preperations: $SpriteLoader$Preparations_);
    }
    export class $BlockStateModelLoader$LoadedJson extends $Record {
        data(): $JsonElement;
        source(): string;
        parse(blockStateId: $ResourceLocation_, context: $BlockModelDefinition$Context): $BlockModelDefinition;
        constructor(arg0: string, arg1: $JsonElement_);
    }
    /**
     * Values that may be interpreted as {@link $BlockStateModelLoader$LoadedJson}.
     */
    export type $BlockStateModelLoader$LoadedJson_ = { source?: string, data?: $JsonElement_,  } | [source?: string, data?: $JsonElement_, ];
    export class $ModelBakery implements $ModelBakeryAccessor, $ModelLoaderHooks {
        localvar$dbh000$puzzleslib$init(blockStateModelLoader: $BlockStateModelLoader): $BlockStateModelLoader;
        fabric_getDispatcher(): $ModelLoadingEventDispatcher;
        fabric_getMissingModel(): $UnbakedModel;
        fabric_getOrLoadModel(modelLocation: $ResourceLocation_): $UnbakedModel;
        fabric_add(modelLocation: $ModelResourceLocation_, model: $UnbakedModel): void;
        bakeModels(textureGetter: $ModelBakery$TextureGetter_): void;
        getBakedTopLevelModels(): $Map<$ModelResourceLocation, $BakedModel>;
        getModelGroups(): $Object2IntMap<$BlockState>;
        getModel(modelLocation: $ResourceLocation_): $UnbakedModel;
        dragonlib$getModel(modelLocation: $ResourceLocation_): $UnbakedModel;
        static BLOCK_ENTITY_MARKER: $BlockModel;
        static ITEM_MODEL_GENERATOR: $ItemModelGenerator;
        topLevelModels: $Map<$ModelResourceLocation, $UnbakedModel>;
        static NO_PATTERN_SHIELD: $Material;
        static DESTROY_STAGE_COUNT: number;
        static DESTROY_STAGES: $List<$ResourceLocation>;
        static BANNER_BASE: $Material;
        static GENERATION_MARKER: $BlockModel;
        static BREAKING_LOCATIONS: $List<$ResourceLocation>;
        static MISSING_MODEL_LOCATION: $ResourceLocation;
        static DESTROY_TYPES: $List<$RenderType>;
        static MISSING_MODEL_MESH: string;
        static FIRE_1: $Material;
        static LAVA_FLOW: $Material;
        bakedCache: $Map<$ModelBakery$BakedCacheKey, $BakedModel>;
        static SHIELD_BASE: $Material;
        static FIRE_0: $Material;
        static WATER_FLOW: $Material;
        static MODEL_LISTER: $FileToIdConverter;
        static WATER_OVERLAY: $Material;
        static MISSING_MODEL_VARIANT: $ModelResourceLocation;
        constructor(blockColors: $BlockColors, profilerFiller: $ProfilerFiller, modelResources: $Map_<$ResourceLocation_, $BlockModel>, blockStateResources: $Map_<$ResourceLocation_, $List_<$BlockStateModelLoader$LoadedJson_>>);
    }
    export class $ModelBakery$TextureGetter {
    }
    export interface $ModelBakery$TextureGetter {
        get(modelLocation: $ModelResourceLocation_, material: $Material): $TextureAtlasSprite;
    }
    /**
     * Values that may be interpreted as {@link $ModelBakery$TextureGetter}.
     */
    export type $ModelBakery$TextureGetter_ = ((arg0: $ModelResourceLocation, arg1: $Material) => $TextureAtlasSprite);
    export class $UnbakedModel {
    }
    export interface $UnbakedModel {
        bake(baker: $ModelBaker, spriteGetter: $Function_<$Material, $TextureAtlasSprite>, state: $ModelState): $BakedModel;
        resolveParents(resolver: $Function_<$ResourceLocation, $UnbakedModel>): void;
        getDependencies(): $Collection<$ResourceLocation>;
    }
    export class $AtlasSet$AtlasEntry extends $Record implements $AutoCloseable {
        atlasInfoLocation(): $ResourceLocation;
        atlas(): $TextureAtlas;
        close(): void;
        constructor(arg0: $TextureAtlas, arg1: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $AtlasSet$AtlasEntry}.
     */
    export type $AtlasSet$AtlasEntry_ = { atlas?: $TextureAtlas, atlasInfoLocation?: $ResourceLocation_,  } | [atlas?: $TextureAtlas, atlasInfoLocation?: $ResourceLocation_, ];
    export class $ModelState {
    }
    export interface $ModelState extends $ModelStateExtension {
        isUvLocked(): boolean;
        getRotation(): $Transformation;
    }
    export class $ModelManager implements $PreparableReloadListener, $AutoCloseable, $ResourceModelManagerAccessor, $FabricBakedModelManager, $BakedModelManagerAccessor, $IdentifiableResourceReloadListener {
        getModelBakery(): $ModelBakery;
        reload(preparationBarrier: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        close(): void;
        getModel(modelLocation: $ModelResourceLocation_): $BakedModel;
        getMissingModel(): $BakedModel;
        getAtlas(location: $ResourceLocation_): $TextureAtlas;
        updateMaxMipLevel(level: number): void;
        getBlockModelShaper(): $BlockModelShaper;
        getFabricId(): $ResourceLocation;
        getFabricDependencies(): $Collection<any>;
        requiresRender(oldState: $BlockState_, newState: $BlockState_): boolean;
        getName(): string;
        getModel(arg0: $ResourceLocation_): $BakedModel;
        getModels(): $Map<$ModelResourceLocation, $BakedModel>;
        getMaxMipmapLevels(): number;
        getAtlases(): $AtlasSet;
        bakedRegistry: $Map<$ModelResourceLocation, $BakedModel>;
        static VANILLA_ATLASES: $Map<$ResourceLocation, $ResourceLocation>;
        constructor(textureManager: $TextureManager, blockColors: $BlockColors, maxMipmapLevels: number);
    }
    export class $ModelBaker {
    }
    export interface $ModelBaker extends $IModelBakerExtension {
        /**
         * @deprecated
         */
        bake(location: $ResourceLocation_, transform: $ModelState): $BakedModel;
        getModel(location: $ResourceLocation_): $UnbakedModel;
    }
    export class $BlockStateModelLoader implements $BlockStatesLoaderHooks {
        loadAllBlockStates(): void;
        fabric_setLoadingOverride(arg0: $BlockStatesLoaderHooks$LoadingOverride_): void;
        modify$ddi000$betterend$be_switchModelOnLoad(arg0: $ResourceLocation_): $ResourceLocation;
        loadBlockStateDefinitions(blockStateId: $ResourceLocation_, stateDefenition: $StateDefinition<$Block_, $BlockState_>): void;
        static getValueHelper<T extends $Comparable<T>>(property: $Property<T>, propertyName: string): T;
        getModelGroups(): $Object2IntMap<$BlockState>;
        static SINGLETON_MODEL_GROUP: number;
        static BLOCKSTATE_LISTER: $FileToIdConverter;
        constructor(blockStateResources: $Map_<$ResourceLocation_, $List_<$BlockStateModelLoader$LoadedJson_>>, profiler: $ProfilerFiller, missingModel: $UnbakedModel, blockColors: $BlockColors, discoveredModelOutput: $BiConsumer_<$ModelResourceLocation, $UnbakedModel>);
    }
    export class $Material {
        texture(): $ResourceLocation;
        renderType(renderTypeGetter: $Function_<$ResourceLocation, $RenderType>): $RenderType;
        buffer(buffer: $MultiBufferSource_, renderTypeGetter: $Function_<$ResourceLocation, $RenderType>): $VertexConsumer;
        buffer(buffer: $MultiBufferSource_, renderTypeGetter: $Function_<$ResourceLocation, $RenderType>, withGlint: boolean): $VertexConsumer;
        atlasLocation(): $ResourceLocation;
        sprite(): $TextureAtlasSprite;
        static COMPARATOR: $Comparator<$Material>;
        constructor(atlasLocation: $ResourceLocation_, texture: $ResourceLocation_);
    }
    export class $ModelBakery$BakedCacheKey extends $Record {
        isUvLocked(): boolean;
        transformation(): $Transformation;
        id(): $ResourceLocation;
        constructor(id: $ResourceLocation_, transformation: $Transformation, isUvLocked: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ModelBakery$BakedCacheKey}.
     */
    export type $ModelBakery$BakedCacheKey_ = { transformation?: $Transformation, isUvLocked?: boolean, id?: $ResourceLocation_,  } | [transformation?: $Transformation, isUvLocked?: boolean, id?: $ResourceLocation_, ];
    export class $ModelResourceLocation extends $Record {
        static standalone(id: $ResourceLocation_): $ModelResourceLocation;
        getVariant(): string;
        variant(): string;
        id(): $ResourceLocation;
        static vanilla(path: string, variant: string): $ModelResourceLocation;
        static inventory(id: $ResourceLocation_): $ModelResourceLocation;
        static INVENTORY_VARIANT: string;
        static STANDALONE_VARIANT: string;
        constructor(id: $ResourceLocation_, variant: string);
    }
    /**
     * Values that may be interpreted as {@link $ModelResourceLocation}.
     */
    export type $ModelResourceLocation_ = { id?: $ResourceLocation_, variant?: string,  } | [id?: $ResourceLocation_, variant?: string, ];
    export class $AtlasSet implements $AutoCloseable, $ResourceAtlasSetAccessor {
        scheduleLoad(resourceManager: $ResourceManager, mipLevel: number, executor: $Executor_): $Map<$ResourceLocation, $CompletableFuture<$AtlasSet$StitchResult>>;
        close(): void;
        getAtlas(location: $ResourceLocation_): $TextureAtlas;
        getAtlases(): $Map<$ResourceLocation, $AtlasSet$AtlasEntry>;
        constructor(atlasMap: $Map_<$ResourceLocation_, $ResourceLocation_>, textureManager: $TextureManager);
    }
}
