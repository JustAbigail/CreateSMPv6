import { $BiConsumer_ } from "@package/java/util/function";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $DataTicket } from "@package/software/bernie/geckolib/constant/dataticket";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $GeoBone, $BakedGeoModel } from "@package/software/bernie/geckolib/cache/object";
import { $GeoRenderer } from "@package/software/bernie/geckolib/renderer";
import { $GeoAnimatable } from "@package/software/bernie/geckolib/animatable";
import { $Animation, $AnimationProcessor, $AnimationState } from "@package/software/bernie/geckolib/animation";

declare module "@package/software/bernie/geckolib/model" {
    export class $GeoModel<T extends $GeoAnimatable> {
        getBakedModel(arg0: $ResourceLocation_): $BakedGeoModel;
        getAnimationResourceFallbacks(arg0: T): $ResourceLocation[];
        getAnimationProcessor(): $AnimationProcessor<T>;
        getBone(arg0: string): ($GeoBone) | undefined;
        getModelResource(arg0: T, arg1: $GeoRenderer<T>): $ResourceLocation;
        /**
         * @deprecated
         */
        getModelResource(arg0: T): $ResourceLocation;
        /**
         * @deprecated
         */
        getTextureResource(arg0: T): $ResourceLocation;
        getTextureResource(arg0: T, arg1: $GeoRenderer<T>): $ResourceLocation;
        getAnimationResource(arg0: T): $ResourceLocation;
        setCustomAnimations(arg0: T, arg1: number, arg2: $AnimationState<T>): void;
        crashIfBoneMissing(): boolean;
        addAdditionalStateData(arg0: T, arg1: number, arg2: $BiConsumer_<$DataTicket<T>, T>): void;
        handleAnimations(arg0: T, arg1: number, arg2: $AnimationState<T>, arg3: number): void;
        applyMolangQueries(arg0: $AnimationState<T>, arg1: number): void;
        getAnimation(arg0: T, arg1: string): $Animation;
        getRenderType(arg0: T, arg1: $ResourceLocation_): $RenderType;
        constructor();
        get animationProcessor(): $AnimationProcessor<T>;
    }
}
