import { $EntityModel } from "@package/net/minecraft/client/model";
import { $Object2ObjectMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $DimensionSpecialEffects } from "@package/net/minecraft/client/renderer";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $RenderLayer } from "@package/net/minecraft/client/renderer/entity/layers";

declare module "@package/net/fabricmc/fabric/mixin/client/rendering" {
    export class $DimensionEffectsAccessor {
        static getIdentifierMap(): $Object2ObjectMap<$ResourceLocation, $DimensionSpecialEffects>;
        static get identifierMap(): $Object2ObjectMap<$ResourceLocation, $DimensionSpecialEffects>;
    }
    export interface $DimensionEffectsAccessor {
    }
    export class $LivingEntityRendererAccessor<T extends $LivingEntity, M extends $EntityModel<T>> {
    }
    export interface $LivingEntityRendererAccessor<T extends $LivingEntity, M extends $EntityModel<T>> {
        callAddFeature(arg0: $RenderLayer<T, M>): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LivingEntityRendererAccessor}.
     */
    export type $LivingEntityRendererAccessor_<T, M> = ((arg0: $RenderLayer<T, M>) => boolean);
}
