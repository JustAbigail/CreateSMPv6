import { $SpriteShiftEntry } from "@package/net/createmod/catnip/render";
import { $Supplier_ } from "@package/java/util/function";
import { $CTSpriteShiftEntry } from "@package/com/simibubi/create/foundation/block/connected";
import { $Item } from "@package/net/minecraft/world/item";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";

declare module "@package/fr/iglee42/createcasing/kubejs/builders" {
    export class $TransmissionSetBuilder {
        shaft(): $TransmissionSetBuilder;
        cogwheel(): $TransmissionSetBuilder;
        notEncasable(): $TransmissionSetBuilder;
        everything(arg0: $Supplier_<$Item>): $TransmissionSetBuilder;
        largeCogwheel(): $TransmissionSetBuilder;
        item(arg0: $Supplier_<$Item>): $TransmissionSetBuilder;
        sourceLine: $SourceLine;
        constructor(arg0: string);
    }
    export class $CasingSetBuilder {
        belt(arg0: $Supplier_<$SpriteShiftEntry>, arg1: $ResourceLocation_, arg2: $ResourceLocation_): $CasingSetBuilder;
        clutch(): $CasingSetBuilder;
        drill(arg0: $ResourceLocation_): $CasingSetBuilder;
        gearbox(): $CasingSetBuilder;
        gearshift(): $CasingSetBuilder;
        saw(): $CasingSetBuilder;
        fluids(): $CasingSetBuilder;
        casing(): $CasingSetBuilder;
        shaft(): $CasingSetBuilder;
        cogwheel(arg0: $Supplier_<$CTSpriteShiftEntry> | null, arg1: $Supplier_<$CTSpriteShiftEntry> | null): $CasingSetBuilder;
        chainDrive(): $CasingSetBuilder;
        depot(): $CasingSetBuilder;
        harvester(): $CasingSetBuilder;
        roller(arg0: $ResourceLocation_): $CasingSetBuilder;
        encasedFan(): $CasingSetBuilder;
        plough(): $CasingSetBuilder;
        existingCasing(arg0: $ResourceLocation_): $CasingSetBuilder;
        ctSprite(arg0: $Supplier_<$CTSpriteShiftEntry>): $CasingSetBuilder;
        encasedCustomTransmissionBlocks(): $CasingSetBuilder;
        autoClutch(): $CasingSetBuilder;
        complexTransmissionBlocks(arg0: $Supplier_<$PartialModel>, arg1: $Supplier_<$PartialModel>, arg2: $Supplier_<$PartialModel>): $CasingSetBuilder;
        processingBlocks(arg0: $ResourceLocation_): $CasingSetBuilder;
        contraptionBlocks(arg0: $ResourceLocation_, arg1: $ResourceLocation_): $CasingSetBuilder;
        everythingExceptCasing(arg0: $Supplier_<$CTSpriteShiftEntry>, arg1: $Supplier_<$SpriteShiftEntry>, arg2: $ResourceLocation_, arg3: $ResourceLocation_, arg4: $Supplier_<$CTSpriteShiftEntry> | null, arg5: $Supplier_<$CTSpriteShiftEntry> | null, arg6: $Supplier_<$PartialModel>, arg7: $Supplier_<$PartialModel>, arg8: $Supplier_<$PartialModel>, arg9: $ResourceLocation_, arg10: $ResourceLocation_, arg11: $ResourceLocation_): $CasingSetBuilder;
        everything(arg0: $Supplier_<$CTSpriteShiftEntry>, arg1: $Supplier_<$SpriteShiftEntry>, arg2: $ResourceLocation_, arg3: $ResourceLocation_, arg4: $Supplier_<$CTSpriteShiftEntry> | null, arg5: $Supplier_<$CTSpriteShiftEntry> | null, arg6: $Supplier_<$PartialModel>, arg7: $Supplier_<$PartialModel>, arg8: $Supplier_<$PartialModel>, arg9: $ResourceLocation_, arg10: $ResourceLocation_, arg11: $ResourceLocation_): $CasingSetBuilder;
        simpleTransmissions(arg0: $Supplier_<$CTSpriteShiftEntry> | null, arg1: $Supplier_<$CTSpriteShiftEntry> | null): $CasingSetBuilder;
        fluidPipe(): $CasingSetBuilder;
        chainGearshift(): $CasingSetBuilder;
        slicer(): $CasingSetBuilder;
        encasedCustomShaft(): $CasingSetBuilder;
        encasedCustomCogwheel(): $CasingSetBuilder;
        encasedCustomLargeCogwheel(): $CasingSetBuilder;
        portableStorageInterface(): $CasingSetBuilder;
        largeCogwheel(): $CasingSetBuilder;
        configurableGearbox(): $CasingSetBuilder;
        chainConveyor(arg0: $Supplier_<$PartialModel>, arg1: $Supplier_<$PartialModel>, arg2: $Supplier_<$PartialModel>): $CasingSetBuilder;
        encasedCustomPipe(): $CasingSetBuilder;
        press(): $CasingSetBuilder;
        mixer(arg0: $ResourceLocation_): $CasingSetBuilder;
        deployer(): $CasingSetBuilder;
        sourceLine: $SourceLine;
        constructor(arg0: string);
    }
}
