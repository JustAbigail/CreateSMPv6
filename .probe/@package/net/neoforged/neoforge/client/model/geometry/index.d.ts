import { $JsonDeserializationContext_, $JsonObject_, $JsonObject, $JsonDeserializationContext } from "@package/com/google/gson";
import { $Function_, $Function } from "@package/java/util/function";
import { $RenderTypeGroup } from "@package/net/neoforged/neoforge/client";
import { $BlockModel, $ItemTransforms, $ItemOverrides } from "@package/net/minecraft/client/renderer/block/model";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Material, $UnbakedModel, $ModelState, $BakedModel, $ModelBaker } from "@package/net/minecraft/client/resources/model";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Set } from "@package/java/util";
import { $Transformation } from "@package/com/mojang/math";

declare module "@package/net/neoforged/neoforge/client/model/geometry" {
    /**
     * A geometry baking context that is bound to a `BlockModel`.
     * 
     * Users should not be instantiating this themselves.
     */
    export class $BlockGeometryBakingContext implements $IGeometryBakingContext {
        bake(baker: $ModelBaker, bakedTextureGetter: $Function_<$Material, $TextureAtlasSprite>, modelTransform: $ModelState, overrides: $ItemOverrides): $BakedModel;
        setCustomGeometry(geometry: $IUnbakedGeometry_<never>): void;
        setRootTransform(rootTransform: $Transformation): void;
        setRenderTypeHint(renderTypeHint: $ResourceLocation_): void;
        setGui3d(gui3d: boolean): void;
        hasCustomGeometry(): boolean;
        getCustomGeometry(): $IUnbakedGeometry<never>;
        getModelName(): string;
        useBlockLight(): boolean;
        getRootTransform(): $Transformation;
        getRenderTypeHint(): $ResourceLocation;
        isComponentVisible(part: string, fallback: boolean): boolean;
        hasMaterial(name: string): boolean;
        getTransforms(): $ItemTransforms;
        copyFrom(other: $BlockGeometryBakingContext): void;
        isGui3d(): boolean;
        useAmbientOcclusion(): boolean;
        getMaterial(name: string): $Material;
        /**
         * @return a `RenderTypeGroup` with the given name, or the empty group if not found.
         */
        getRenderType(name: $ResourceLocation_): $RenderTypeGroup;
        owner: $BlockModel;
        visibilityData: $BlockGeometryBakingContext$VisibilityData;
        constructor(owner: $BlockModel);
    }
    /**
     * The context in which a geometry is being baked, providing information such as lighting and
     * transforms, and allowing the user to create materials and query
     * render types.
     */
    export class $IGeometryBakingContext {
    }
    export interface $IGeometryBakingContext {
        /**
         * @return the name of the model being baked for logging and caching purposes.
         */
        getModelName(): string;
        /**
         * @return true if this model should render in 3D in a GUI, false otherwise
         */
        useBlockLight(): boolean;
        /**
         * @return the root transformation to be applied to all variants of this model, regardless of item transforms.
         */
        getRootTransform(): $Transformation;
        /**
         * @return a hint of the render type this model should use. Custom loaders may ignore this.
         */
        getRenderTypeHint(): $ResourceLocation;
        /**
         * Queries the visibility of a component of this model.
         */
        isComponentVisible(component: string, fallback: boolean): boolean;
        /**
         * Checks if a material is present in the model.
         */
        hasMaterial(name: string): boolean;
        /**
         * @return the transforms for display in item form.
         */
        getTransforms(): $ItemTransforms;
        /**
         * @return true if this model should render in 3D in a GUI, false otherwise
         */
        isGui3d(): boolean;
        /**
         * @return true if this model should render in 3D in a GUI, false otherwise
         */
        useAmbientOcclusion(): boolean;
        /**
         * Resolves the final texture name, taking into account texture aliases and replacements.
         */
        getMaterial(name: string): $Material;
        /**
         * @return a `RenderTypeGroup` with the given name, or the empty group if not found.
         */
        getRenderType(name: $ResourceLocation_): $RenderTypeGroup;
    }
    export class $BlockGeometryBakingContext$VisibilityData {
        isVisible(part: string, fallback: boolean): boolean;
        setVisibilityState(partName: string, type: boolean): void;
        hasCustomVisibility(part: string): boolean;
        copyFrom(arg0: $BlockGeometryBakingContext$VisibilityData): void;
        constructor();
    }
    /**
     * General interface for any model that can be baked, superset of vanilla `UnbakedModel`.
     * 
     * Instances of this class ar usually created via `IGeometryLoader`.
     */
    export class $IUnbakedGeometry<T extends $IUnbakedGeometry<T>> {
    }
    export interface $IUnbakedGeometry<T extends $IUnbakedGeometry<T>> {
        bake(context: $IGeometryBakingContext, baker: $ModelBaker, spriteGetter: $Function_<$Material, $TextureAtlasSprite>, modelState: $ModelState, overrides: $ItemOverrides): $BakedModel;
        /**
         * @return a set of all the components whose visibility may be configured via `IGeometryBakingContext`
         */
        getConfigurableComponentNames(): $Set<string>;
        /**
         * Resolve parents of nested `BlockModel`s which are later used in
         * `IUnbakedGeometry#bake(IGeometryBakingContext, ModelBaker, Function, ModelState, ItemOverrides)`
         * via `BlockModel#resolveParents(Function)`
         */
        resolveParents(modelGetter: $Function_<$ResourceLocation, $UnbakedModel>, context: $IGeometryBakingContext): void;
    }
    /**
     * Values that may be interpreted as {@link $IUnbakedGeometry}.
     */
    export type $IUnbakedGeometry_<T> = ((arg0: $IGeometryBakingContext, arg1: $ModelBaker, arg2: $Function<$Material, $TextureAtlasSprite>, arg3: $ModelState, arg4: $ItemOverrides) => $BakedModel);
    /**
     * A loader for custom model geometries.
     * 
     * If you do any caching, you should implement `ResourceManagerReloadListener` and register it with
     * `RegisterClientReloadListenersEvent`.
     */
    export class $IGeometryLoader<T extends $IUnbakedGeometry<T>> {
    }
    export interface $IGeometryLoader<T extends $IUnbakedGeometry<T>> {
        read(arg0: $JsonObject_, arg1: $JsonDeserializationContext_): T;
    }
    /**
     * Values that may be interpreted as {@link $IGeometryLoader}.
     */
    export type $IGeometryLoader_<T> = ((arg0: $JsonObject, arg1: $JsonDeserializationContext) => T);
}
