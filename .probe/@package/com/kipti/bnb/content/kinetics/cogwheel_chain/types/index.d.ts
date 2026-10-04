import { $Predicate, $Predicate_, $Supplier_ } from "@package/java/util/function";
import { $Item } from "@package/net/minecraft/world/item";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Enum } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/kipti/bnb/content/kinetics/cogwheel_chain/types" {
    export class $CogwheelChainType$VertexShape extends $Enum<$CogwheelChainType$VertexShape> {
        static values(): $CogwheelChainType$VertexShape[];
        static valueOf(arg0: string): $CogwheelChainType$VertexShape;
        static SQUARE: $CogwheelChainType$VertexShape;
        static CROSS: $CogwheelChainType$VertexShape;
    }
    /**
     * Values that may be interpreted as {@link $CogwheelChainType$VertexShape}.
     */
    export type $CogwheelChainType$VertexShape_ = "cross" | "square";
    export class $CogwheelChainType {
        getTranslationKey(): string;
        getRenderTexture(): $ResourceLocation;
        getBreakEffectsBlock(): $Block;
        alwaysCostsOneItem(): boolean;
        getCostFactor(): number;
        getCogwheelPredicate(): $Predicate<$Block>;
        permitsAxisChanges(): boolean;
        getKey(): $ResourceLocation;
        getRenderType(): $CogwheelChainType$ChainRenderInfo;
        static COGWHEEL_TYPE_BY_ITEM: $SimpleRegistry<$Item, $CogwheelChainType>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $CogwheelChainType>;
        static DEFAULT_CHAIN_TEXTURE_LOCATION: $ResourceLocation;
        constructor(arg0: number, arg1: $CogwheelChainType$ChainRenderInfo_, arg2: $ResourceLocation_, arg3: $Predicate_<$Item>, arg4: $Predicate_<$Block>, arg5: boolean, arg6: $Supplier_<$Block>);
        get translationKey(): string;
        get renderTexture(): $ResourceLocation;
        get breakEffectsBlock(): $Block;
        get costFactor(): number;
        get cogwheelPredicate(): $Predicate<$Block>;
        get key(): $ResourceLocation;
        get renderType(): $CogwheelChainType$ChainRenderInfo;
    }
    /**
     * Values that may be interpreted as {@link $CogwheelChainType}.
     */
    export type $CogwheelChainType_ = RegistryTypes.BitsNBobsCogwheelChainType;
    export class $CogwheelChainType$ChainRenderInfo extends $Enum<$CogwheelChainType$ChainRenderInfo> {
        usesConsistentInsideOutside(): boolean;
        getVertexShape(): $CogwheelChainType$VertexShape;
        isDefaultDimensions(): boolean;
        getWidth(): number;
        getHeight(): number;
        static values(): $CogwheelChainType$ChainRenderInfo[];
        static valueOf(arg0: string): $CogwheelChainType$ChainRenderInfo;
        static CHAIN: $CogwheelChainType$ChainRenderInfo;
        static ROPE: $CogwheelChainType$ChainRenderInfo;
        static BELT: $CogwheelChainType$ChainRenderInfo;
        get vertexShape(): $CogwheelChainType$VertexShape;
        get defaultDimensions(): boolean;
        get width(): number;
        get height(): number;
    }
    /**
     * Values that may be interpreted as {@link $CogwheelChainType$ChainRenderInfo}.
     */
    export type $CogwheelChainType$ChainRenderInfo_ = "chain" | "rope" | "belt";
    export interface $CogwheelChainType extends RegistryMarked<RegistryTypes.BitsNBobsCogwheelChainTypeTag, RegistryTypes.BitsNBobsCogwheelChainType> {}
}
