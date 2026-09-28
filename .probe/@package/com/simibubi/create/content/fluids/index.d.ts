import { $IdMapper } from "@package/net/minecraft/core";
import { $BooleanProperty, $IntegerProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $FluidState, $Fluid } from "@package/net/minecraft/world/level/material";
import { $StateDefinition } from "@package/net/minecraft/world/level/block/state";
import { $BaseFlowingFluid$Properties, $BaseFlowingFluid } from "@package/net/neoforged/neoforge/fluids";

declare module "@package/com/simibubi/create/content/fluids" {
    export class $VirtualFluid extends $BaseFlowingFluid {
        static createSource(arg0: $BaseFlowingFluid$Properties): $VirtualFluid;
        static createFlowing(arg0: $BaseFlowingFluid$Properties): $VirtualFluid;
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        stateDefinition: $StateDefinition<$Fluid, $FluidState>;
        constructor(arg0: $BaseFlowingFluid$Properties, arg1: boolean);
    }
}
