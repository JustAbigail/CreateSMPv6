import { $Predicate, $Function_ } from "@package/java/util/function";
import { $MultiVariant } from "@package/net/minecraft/client/renderer/block/model";
import { $BlockState_, $StateDefinition, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Material, $UnbakedModel, $ModelState, $BakedModel, $ModelBaker } from "@package/net/minecraft/client/resources/model";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $List, $List_, $Collection, $Set } from "@package/java/util";

declare module "@package/net/minecraft/client/renderer/block/model/multipart" {
    export class $MultiPart implements $UnbakedModel {
        bake(baker: $ModelBaker, spriteGetter: $Function_<$Material, $TextureAtlasSprite>, state: $ModelState): $BakedModel;
        resolveParents(resolver: $Function_<$ResourceLocation, $UnbakedModel>): void;
        getMultiVariants(): $Set<$MultiVariant>;
        getSelectors(): $List<$Selector>;
        getDependencies(): $Collection<$ResourceLocation>;
        definition: $StateDefinition<$Block, $BlockState>;
        constructor(definition: $StateDefinition<$Block_, $BlockState_>, selectors: $List_<$Selector>);
    }
    export class $Selector {
        getVariant(): $MultiVariant;
        getPredicate(definition: $StateDefinition<$Block_, $BlockState_>): $Predicate<$BlockState>;
        constructor(condition: $Condition, variant: $MultiVariant);
    }
}
