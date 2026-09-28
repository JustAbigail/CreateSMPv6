import { $Level_ } from "@package/net/minecraft/world/level";
import { $VatBlockEntity } from "@package/com/drmangotea/tfmg/content/machinery/vat/base";
import { $ItemEntry } from "@package/com/tterrag/registrate/util/entry";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";

declare module "@package/com/drmangotea/tfmg/content/machinery/vat/electrode_holder/electrode" {
    export interface $Electrode extends RegistryMarked<RegistryTypes.TfmgElectrodesTag, RegistryTypes.TfmgElectrodes> {}
    export class $Electrode$Properties {
        operationId(arg0: string): $Electrode$Properties;
        resistance(arg0: number): $Electrode$Properties;
        item(arg0: $ItemEntry<never>): $Electrode$Properties;
        constructor(arg0: $ResourceLocation_);
    }
    export class $Electrode {
        getResistance(): number;
        getOperationId(): string;
        getOrCreateDescriptionId(): string;
        getDisplayName(): $Component;
        getItem(): $ItemEntry<never>;
        getKey(): $ResourceLocation;
        getStack(): $ItemStack;
        tick(arg0: $VatBlockEntity, arg1: $Level_, arg2: $BlockPos_, arg3: boolean, arg4: boolean): void;
        getDescriptionId(): string;
        constructor(arg0: $Electrode$Properties);
    }
    /**
     * Values that may be interpreted as {@link $Electrode}.
     */
    export type $Electrode_ = RegistryTypes.TfmgElectrodes;
}
