import { $AbstractRegistrate } from "@package/com/tterrag/registrate";
import { $SimpleBuilder } from "@package/com/simibubi/create/api/registry/registrate";
import { $MobCategory_, $Entity, $EntityType$EntityFactory_ } from "@package/net/minecraft/world/entity";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $BaseFlowingFluid$Flowing, $BaseFlowingFluid, $BaseFlowingFluid$Properties, $FluidType, $FluidType$Properties } from "@package/net/neoforged/neoforge/fluids";
import { $Collection } from "@package/java/util";
import { $FluidBuilder, $BlockBuilder, $EntityBuilder, $BlockEntityBuilder$BlockEntityFactory_, $FluidBuilder$FluidTypeFactory_, $BlockEntityBuilder, $BuilderCallback_ } from "@package/com/tterrag/registrate/builders";
import { $RegistryEntry } from "@package/com/tterrag/registrate/util/entry";
import { $SimpleBlockEntityVisualizer$Factory, $SimpleEntityVisualizer$Factory } from "@package/dev/engine_room/flywheel/lib/visualization";
import { $Predicate, $BiConsumer_, $Supplier_, $Function_, $Predicate_, $Function } from "@package/java/util/function";
import { $MountedFluidStorageType } from "@package/com/simibubi/create/api/contraption/storage/fluid";
import { $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $Object } from "@package/java/lang";
import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $ConnectedTextureBehaviour } from "@package/com/simibubi/create/foundation/block/connected";
import { $IEventBus } from "@package/net/neoforged/bus/api";
import { $CreativeModeTab_, $CreativeModeTab, $Item } from "@package/net/minecraft/world/item";
import { $NonNullFunction_, $NonNullSupplier_, $NonNullFunction, $NonNullConsumer, $NonNullSupplier } from "@package/com/tterrag/registrate/util/nullness";
import { $CasingConnectivity } from "@package/com/simibubi/create/content/decoration/encasing";
import { $TooltipModifier } from "@package/com/simibubi/create/foundation/item";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $DisplayTarget, $DisplayTarget_, $DisplaySource_, $DisplaySource } from "@package/com/simibubi/create/api/behaviour/display";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $VirtualFluid } from "@package/com/simibubi/create/content/fluids";
import { $CreateBlockEntityBuilderAccessor } from "@package/dev/simulated_team/simulated/mixin/accessor";
import { $MountedItemStorageType } from "@package/com/simibubi/create/api/contraption/storage/item";

declare module "@package/com/simibubi/create/foundation/data" {
    export class $CreateEntityBuilder<T extends $Entity, P> extends $EntityBuilder<T, P> {
        visual(arg0: $NonNullSupplier_<$SimpleEntityVisualizer$Factory<T>>, arg1: $Predicate_<T>): $CreateEntityBuilder<T, P>;
        visual(arg0: $NonNullSupplier_<$SimpleEntityVisualizer$Factory<T>>): $CreateEntityBuilder<T, P>;
        visual(arg0: $NonNullSupplier_<$SimpleEntityVisualizer$Factory<T>>, arg1: boolean): $CreateEntityBuilder<T, P>;
        get(): T;
        constructor(arg0: $AbstractRegistrate<never>, arg1: P, arg2: string, arg3: $BuilderCallback_, arg4: $EntityType$EntityFactory_<T>, arg5: $MobCategory_);
    }
    export class $CreateBlockEntityBuilder<T extends $BlockEntity, P> extends $BlockEntityBuilder<T, P> implements $CreateBlockEntityBuilderAccessor<any, any> {
        validBlocksDeferred(arg0: $NonNullSupplier_<$Collection<$NonNullSupplier<$Block>>>): $CreateBlockEntityBuilder<$Object, $Object>;
        displaySource(arg0: $RegistryEntry<$DisplaySource_, $DisplaySource_>): $CreateBlockEntityBuilder<$Object, $Object>;
        displayTarget(arg0: $RegistryEntry<$DisplayTarget_, $DisplayTarget_>): $CreateBlockEntityBuilder<$Object, $Object>;
        visual(arg0: $NonNullSupplier_<$SimpleBlockEntityVisualizer$Factory<$Object>>): $CreateBlockEntityBuilder<$Object, $Object>;
        visual(arg0: $NonNullSupplier_<$SimpleBlockEntityVisualizer$Factory<$Object>>, arg1: $Predicate_<$Object>): $CreateBlockEntityBuilder<$Object, $Object>;
        visual(arg0: $NonNullSupplier_<$SimpleBlockEntityVisualizer$Factory<$Object>>, arg1: boolean): $CreateBlockEntityBuilder<$Object, $Object>;
        getVisualFactory(): $NonNullSupplier<$SimpleBlockEntityVisualizer$Factory<$Object>>;
        getRenderNormally(): $Predicate<$Object>;
        get(): $Object;
        get visualFactory(): $NonNullSupplier<$SimpleBlockEntityVisualizer$Factory<$Object>>;
        get renderNormally(): $Predicate<$Object>;
    }
    export class $CreateRegistrate extends $AbstractRegistrate<$CreateRegistrate> {
        getCreativeTab(): $DeferredHolder<$CreativeModeTab, $CreativeModeTab>;
        paletteStoneBlock(arg0: string, arg1: $NonNullSupplier_<$Block>, arg2: boolean, arg3: boolean): $BlockBuilder<$Block, $CreateRegistrate>;
        paletteStoneBlock<T extends $Block>(arg0: string, arg1: $NonNullFunction_<$BlockBehaviour$Properties, T>, arg2: $NonNullSupplier_<$Block>, arg3: boolean, arg4: boolean): $BlockBuilder<T, $CreateRegistrate>;
        static isInCreativeTab(arg0: $RegistryEntry<never, never>, arg1: $DeferredHolder<$CreativeModeTab_, $CreativeModeTab_>): boolean;
        getTooltipModifierFactory(): $Function<$Item, $TooltipModifier>;
        mountedItemStorage<T extends $MountedItemStorageType<never>>(arg0: string, arg1: $Supplier_<T>): $SimpleBuilder<$MountedItemStorageType<never>, T, $CreateRegistrate>;
        mountedFluidStorage<T extends $MountedFluidStorageType<never>>(arg0: string, arg1: $Supplier_<T>): $SimpleBuilder<$MountedFluidStorageType<never>, T, $CreateRegistrate>;
        displaySource<T extends $DisplaySource>(arg0: string, arg1: $Supplier_<T>): $SimpleBuilder<$DisplaySource, T, $CreateRegistrate>;
        displayTarget<T extends $DisplayTarget>(arg0: string, arg1: $Supplier_<T>): $SimpleBuilder<$DisplayTarget, T, $CreateRegistrate>;
        virtualFluid(arg0: string): $FluidBuilder<$VirtualFluid, $CreateRegistrate>;
        virtualFluid<T extends $BaseFlowingFluid>(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $FluidBuilder$FluidTypeFactory_, arg4: $NonNullFunction_<$BaseFlowingFluid$Properties, T>, arg5: $NonNullFunction_<$BaseFlowingFluid$Properties, T>): $FluidBuilder<T, $CreateRegistrate>;
        virtualFluid<T extends $BaseFlowingFluid>(arg0: string, arg1: $FluidBuilder$FluidTypeFactory_, arg2: $NonNullFunction_<$BaseFlowingFluid$Properties, T>, arg3: $NonNullFunction_<$BaseFlowingFluid$Properties, T>): $FluidBuilder<T, $CreateRegistrate>;
        virtualFluid(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_): $FluidBuilder<$VirtualFluid, $CreateRegistrate>;
        standardFluid(arg0: string): $FluidBuilder<$BaseFlowingFluid$Flowing, $CreateRegistrate>;
        standardFluid(arg0: string, arg1: $FluidBuilder$FluidTypeFactory_): $FluidBuilder<$BaseFlowingFluid$Flowing, $CreateRegistrate>;
        static defaultFluidType(arg0: $FluidType$Properties, arg1: $ResourceLocation_, arg2: $ResourceLocation_): $FluidType;
        static casingConnectivity<T extends $Block>(arg0: $BiConsumer_<T, $CasingConnectivity>): $NonNullConsumer<T>;
        static blockModel<T extends $Block>(arg0: $Supplier_<$NonNullFunction<$BakedModel, $BakedModel>>): $NonNullConsumer<T>;
        static itemModel<T extends $Item>(arg0: $Supplier_<$NonNullFunction<$BakedModel, $BakedModel>>): $NonNullConsumer<T>;
        static connectedTextures(arg0: $Supplier_<$ConnectedTextureBehaviour>): $NonNullConsumer<$Block>;
        entity<T extends $Entity>(arg0: string, arg1: $EntityType$EntityFactory_<T>, arg2: $MobCategory_): $CreateEntityBuilder<T, $CreateRegistrate>;
        static create(arg0: string): $CreateRegistrate;
        registerEventListeners(arg0: $IEventBus): $CreateRegistrate;
        setCreativeTab(arg0: $DeferredHolder<$CreativeModeTab_, $CreativeModeTab_>): $CreateRegistrate;
        setTooltipModifierFactory(arg0: $Function_<$Item, $TooltipModifier>): $CreateRegistrate;
        blockEntity<T extends $BlockEntity>(arg0: string, arg1: $BlockEntityBuilder$BlockEntityFactory_<T>): $CreateBlockEntityBuilder<T, $CreateRegistrate>;
    }
}
