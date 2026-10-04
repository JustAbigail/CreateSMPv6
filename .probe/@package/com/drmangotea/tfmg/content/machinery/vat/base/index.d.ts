import { $Level } from "@package/net/minecraft/world/level";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartFluidTankBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/fluid";
import { $IMultiBlockEntityContainer$Fluid, $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $MutableComponent, $Component_ } from "@package/net/minecraft/network/chat";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $FluidStack, $IFluidTank } from "@package/net/neoforged/neoforge/fluids";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $Map, $List_ } from "@package/java/util";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $ChatFormatting_ } from "@package/net/minecraft";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction$Axis, $Direction$Axis_ } from "@package/net/minecraft/core";
import { $SmartInventory } from "@package/com/simibubi/create/foundation/item";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $IHaveGoggleInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $Enum, $Object } from "@package/java/lang";
import { $VatMachineRecipe } from "@package/com/drmangotea/tfmg/recipes";
import { $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
import { $Couple } from "@package/net/createmod/catnip/data";

declare module "@package/com/drmangotea/tfmg/content/machinery/vat/base" {
    export class $VatBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation, $IMultiBlockEntityContainer$Fluid {
        setController(arg0: $BlockPos_): void;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        getExtraData(): $Object;
        getTotalTankSize(): number;
        getControllerBE(): $VatBlockEntity;
        getHeatComponent(arg0: boolean, arg1: boolean, ...arg2: $ChatFormatting_[]): $MutableComponent;
        getTotalFluidUnits(arg0: number): number;
        static getCapacityMultiplier(): number;
        sendDataImmediately(): void;
        toggleWindows(): void;
        setWindows(arg0: boolean): void;
        hasTank(): boolean;
        getTankSize(arg0: number): number;
        setTankSize(arg0: number, arg1: number): void;
        getTank(arg0: number): $IFluidTank;
        getMatchingRecipe(): $VatMachineRecipe;
        handleRecipe(): void;
        isAtValidLocation(arg0: $IVatMachine$PositionRequirement_, arg1: $BlockPos_): boolean;
        isAtCenter(arg0: $BlockPos_): boolean;
        applyVatSize(arg0: number): void;
        getPressureComponent(arg0: boolean, arg1: boolean, ...arg2: $ChatFormatting_[]): $MutableComponent;
        addMachineTooltip(arg0: string, arg1: boolean, arg2: $List_<$Component_>): void;
        removeController(arg0: boolean): void;
        notifyMultiUpdated(): void;
        getMainConnectionAxis(): $Direction$Axis;
        getLastKnownPos(): $BlockPos;
        preventConnectivityUpdate(): void;
        setExtraData(arg0: $Object | null): void;
        modifyExtraData(arg0: $Object): $Object;
        updateTemperature(): void;
        addToGoggleTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        getFillState(): number;
        getFluid(arg0: number): $FluidStack;
        isController(): boolean;
        getMaxWidth(): number;
        static getMaxHeight(): number;
        getTanks(): $Couple<$SmartFluidTankBehaviour>;
        updateState(): void;
        getTotalCapacity(): number;
        getWidth(): number;
        getHeight(): number;
        evaluate(): void;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        getMaxLength(arg0: $Direction$Axis_, arg1: number): number;
        getController(): $BlockPos;
        setWidth(arg0: number): void;
        setHeight(arg0: number): void;
        containedFluidTooltip(arg0: $List_<$Component_>, arg1: boolean, arg2: $IFluidHandler): boolean;
        getIcon(arg0: boolean): $ItemStack;
        getMainAxisOf(arg0: $BlockEntity): $Direction$Axis;
        level: $Level;
        fluidLevel: $LerpedFloat[];
        recipe: $VatMachineRecipe;
        static ATTACHMENTS_NBT_KEY: string;
        inputTank: $SmartFluidTankBehaviour;
        machineMap: $Map<$BlockPos, string>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        operationalMachinesMap: $Map<$BlockPos, boolean>;
        worldPosition: $BlockPos;
        areMachinesValid: boolean;
        outputTank: $SmartFluidTankBehaviour;
        outputInventory: $VatInventory;
        inputInventory: $VatInventory;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get totalTankSize(): number;
        get controllerBE(): $VatBlockEntity;
        static get capacityMultiplier(): number;
        set windows(value: boolean);
        get matchingRecipe(): $VatMachineRecipe;
        get mainConnectionAxis(): $Direction$Axis;
        get lastKnownPos(): $BlockPos;
        get fillState(): number;
        get maxWidth(): number;
        static get maxHeight(): number;
        get tanks(): $Couple<$SmartFluidTankBehaviour>;
        get totalCapacity(): number;
    }
    export class $IVatMachine$PositionRequirement extends $Enum<$IVatMachine$PositionRequirement> {
        static values(): $IVatMachine$PositionRequirement[];
        static valueOf(arg0: string): $IVatMachine$PositionRequirement;
        static BOTTOM_CENTER: $IVatMachine$PositionRequirement;
        static TOP: $IVatMachine$PositionRequirement;
        static TOP_CENTER: $IVatMachine$PositionRequirement;
        static ANY_CENTER: $IVatMachine$PositionRequirement;
        static BOTTOM: $IVatMachine$PositionRequirement;
        static ANY: $IVatMachine$PositionRequirement;
    }
    /**
     * Values that may be interpreted as {@link $IVatMachine$PositionRequirement}.
     */
    export type $IVatMachine$PositionRequirement_ = "any" | "bottom" | "top" | "any_center" | "bottom_center" | "top_center";
    export class $VatInventory extends $SmartInventory {
        kjs$self(): $IItemHandler;
        constructor(arg0: number, arg1: $VatBlockEntity);
    }
}
