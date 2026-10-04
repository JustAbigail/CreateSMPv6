import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $Item } from "@package/net/minecraft/world/item";
import { $AbstractRegistrate } from "@package/com/tterrag/registrate";
import { $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $EntityType_, $EntityType, $Entity } from "@package/net/minecraft/world/entity";
import { $FluidType, $BaseFlowingFluid } from "@package/net/neoforged/neoforge/fluids";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $NonNullSupplier } from "@package/com/tterrag/registrate/util/nullness";
import { $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $BlockPos_, $Registry } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $MenuConstructor_, $MenuType_, $MenuType, $MenuConstructor, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/tterrag/registrate/util/entry" {
    export class $RegistryEntry<R, S extends R> extends $DeferredHolder<R, S> implements $NonNullSupplier<S> {
        getSibling<X, Y extends X>(arg0: $Registry<X>): $RegistryEntry<X, Y>;
        getSibling<X, Y extends X>(arg0: $ResourceKey_<$Registry<X>>): $RegistryEntry<X, Y>;
        filter(arg0: $Predicate_<R>): ($RegistryEntry<R, S>) | undefined;
        is<X>(arg0: X): boolean;
        lazy(): $NonNullSupplier<S>;
        constructor(arg0: $AbstractRegistrate<never>, arg1: $DeferredHolder<R, S>);
    }
    export class $MenuEntry<T extends $AbstractContainerMenu> extends $RegistryEntry<$MenuType<never>, $MenuType<T>> {
        open(arg0: $ServerPlayer, arg1: $Component_, arg2: $MenuConstructor_, arg3: $Consumer_<$RegistryFriendlyByteBuf>): void;
        open(arg0: $ServerPlayer, arg1: $Component_, arg2: $Consumer_<$RegistryFriendlyByteBuf>): void;
        open(arg0: $ServerPlayer, arg1: $Component_, arg2: $MenuConstructor_): void;
        open(arg0: $ServerPlayer, arg1: $Component_): void;
        create(arg0: number, arg1: $Inventory): $MenuType<T>;
        asProvider(): $MenuConstructor;
        constructor(arg0: $AbstractRegistrate<never>, arg1: $DeferredHolder<$MenuType_<never>, $MenuType_<$MenuType_<T>>>);
    }
    export class $FluidEntry<T extends $BaseFlowingFluid> extends $RegistryEntry<$Fluid, T> {
        getBlock<B extends $Block>(): (B) | undefined;
        getSource<S extends $BaseFlowingFluid>(): S;
        getType(): $FluidType;
        getBucket<I extends $Item>(): (I) | undefined;
        constructor(arg0: $AbstractRegistrate<never>, arg1: $DeferredHolder<$Fluid_, T>);
        get block(): (B) | undefined;
        get source(): S;
        get type(): $FluidType;
        get bucket(): (I) | undefined;
    }
    export class $BlockEntityEntry<T extends $BlockEntity> extends $RegistryEntry<$BlockEntityType<never>, $BlockEntityType<T>> {
        getNullable(arg0: $BlockGetter, arg1: $BlockPos_): $BlockEntityType<T>;
        get(arg0: $BlockGetter, arg1: $BlockPos_): ($BlockEntityType<T>) | undefined;
        static cast<T extends $BlockEntity>(arg0: $RegistryEntry<$BlockEntityType_<never>, $BlockEntityType_<T>>): $BlockEntityEntry<T>;
        create(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntityType<T>;
        is(arg0: $BlockEntity | null): boolean;
        constructor(arg0: $AbstractRegistrate<never>, arg1: $DeferredHolder<$BlockEntityType_<never>, $BlockEntityType_<$BlockEntityType_<T>>>);
    }
    export class $EntityEntry<T extends $Entity> extends $RegistryEntry<$EntityType<never>, $EntityType<T>> {
        static cast<T extends $Entity>(arg0: $RegistryEntry<$EntityType_<never>, $EntityType_<T>>): $EntityEntry<T>;
        create(arg0: $Level_): $EntityType<T>;
        is(arg0: $Entity): boolean;
        constructor(arg0: $AbstractRegistrate<never>, arg1: $DeferredHolder<$EntityType_<never>, $EntityType_<$EntityType_<T>>>);
    }
}
