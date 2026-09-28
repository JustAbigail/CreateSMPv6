import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $UnbakedModel, $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Collection_ } from "@package/java/util";
import { $Event } from "@package/net/fabricmc/fabric/api/event";

declare module "@package/net/fabricmc/fabric/api/client/model/loading/v1" {
    export class $BlockStateResolver {
    }
    export interface $BlockStateResolver {
        resolveBlockStates(arg0: $BlockStateResolver$Context): void;
    }
    /**
     * Values that may be interpreted as {@link $BlockStateResolver}.
     */
    export type $BlockStateResolver_ = ((arg0: $BlockStateResolver$Context) => void);
    export class $ModelLoadingPlugin {
        static register(arg0: $ModelLoadingPlugin_): void;
    }
    export interface $ModelLoadingPlugin {
        onInitializeModelLoader(arg0: $ModelLoadingPlugin$Context): void;
    }
    /**
     * Values that may be interpreted as {@link $ModelLoadingPlugin}.
     */
    export type $ModelLoadingPlugin_ = ((arg0: $ModelLoadingPlugin$Context) => void);
    export class $ModelModifier$AfterBake {
    }
    export interface $ModelModifier$AfterBake {
        modifyModelAfterBake(arg0: $BakedModel, arg1: $ModelModifier$AfterBake$Context): $BakedModel;
    }
    /**
     * Values that may be interpreted as {@link $ModelModifier$AfterBake}.
     */
    export type $ModelModifier$AfterBake_ = ((arg0: $BakedModel, arg1: $ModelModifier$AfterBake$Context) => $BakedModel);
    export class $ModelResolver {
    }
    export interface $ModelResolver {
        resolveModel(arg0: $ModelResolver$Context): $UnbakedModel;
    }
    /**
     * Values that may be interpreted as {@link $ModelResolver}.
     */
    export type $ModelResolver_ = ((arg0: $ModelResolver$Context) => $UnbakedModel);
    export class $ModelLoadingPlugin$Context {
    }
    export interface $ModelLoadingPlugin$Context {
        resolveModel(): $Event<$ModelResolver>;
        modifyModelOnLoad(): $Event<$ModelModifier$OnLoad>;
        modifyModelBeforeBake(): $Event<$ModelModifier$BeforeBake>;
        modifyModelAfterBake(): $Event<$ModelModifier$AfterBake>;
        registerBlockStateResolver(arg0: $Block_, arg1: $BlockStateResolver_): void;
        addModels(arg0: $Collection_<$ResourceLocation_>): void;
        addModels(...arg0: $ResourceLocation_[]): void;
    }
    export class $ModelModifier$OnLoad {
    }
    export interface $ModelModifier$OnLoad {
        modifyModelOnLoad(arg0: $UnbakedModel, arg1: $ModelModifier$OnLoad$Context): $UnbakedModel;
    }
    /**
     * Values that may be interpreted as {@link $ModelModifier$OnLoad}.
     */
    export type $ModelModifier$OnLoad_ = ((arg0: $UnbakedModel, arg1: $ModelModifier$OnLoad$Context) => $UnbakedModel);
    export class $FabricBakedModelManager {
    }
    export interface $FabricBakedModelManager {
        getModel(arg0: $ResourceLocation_): $BakedModel;
    }
    export class $ModelModifier$BeforeBake {
    }
    export interface $ModelModifier$BeforeBake {
        modifyModelBeforeBake(arg0: $UnbakedModel, arg1: $ModelModifier$BeforeBake$Context): $UnbakedModel;
    }
    /**
     * Values that may be interpreted as {@link $ModelModifier$BeforeBake}.
     */
    export type $ModelModifier$BeforeBake_ = ((arg0: $UnbakedModel, arg1: $ModelModifier$BeforeBake$Context) => $UnbakedModel);
}
