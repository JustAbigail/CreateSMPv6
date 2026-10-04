import { $IFluidHandler, $IFluidHandler$FluidAction_ } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Predicate_ } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $IFluidTank, $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";

declare module "@package/net/neoforged/neoforge/fluids/capability/templates" {
    /**
     * Flexible implementation of a Fluid Storage object. NOT REQUIRED.
     */
    export class $FluidTank implements $IFluidHandler, $IFluidTank {
        writeToNBT(lookupProvider: $HolderLookup$Provider, nbt: $CompoundTag_): $CompoundTag;
        getTankCapacity(tank: number): number;
        isFluidValid(tank: number, stack: $FluidStack_): boolean;
        isFluidValid(stack: $FluidStack_): boolean;
        setValidator(validator: $Predicate_<$FluidStack>): $FluidTank;
        setFluid(stack: $FluidStack_): void;
        getFluidAmount(): number;
        readFromNBT(lookupProvider: $HolderLookup$Provider, nbt: $CompoundTag_): $FluidTank;
        setCapacity(capacity: number): $FluidTank;
        getFluid(): $FluidStack;
        getTanks(): number;
        getFluidInTank(tank: number): $FluidStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        getSpace(): number;
        getCapacity(): number;
        isEmpty(): boolean;
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        constructor(capacity: number);
        constructor(capacity: number, validator: $Predicate_<$FluidStack>);
        set validator(value: $Predicate_<$FluidStack>);
        get fluidAmount(): number;
        get tanks(): number;
        get space(): number;
        get empty(): boolean;
    }
}
