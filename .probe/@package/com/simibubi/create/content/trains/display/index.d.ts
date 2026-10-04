import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $DyeColor_, $DyeColor } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $MutableComponent, $Component_, $Component, $MutableComponent_ } from "@package/net/minecraft/network/chat";
import { $List, $List_ } from "@package/java/util";
import { $Train } from "@package/com/simibubi/create/content/trains/entity";
import { $RandomSource } from "@package/net/minecraft/util";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $KineticBlockEntity } from "@package/com/simibubi/create/content/kinetics/base";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Comparable } from "@package/java/lang";
import { $BlockEntityType, $BlockEntityType_ } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/content/trains/display" {
    export class $FlapDisplaySection {
        renderCharsIndividually(): boolean;
        wideFlaps(): $FlapDisplaySection;
        rightAligned(): $FlapDisplaySection;
        static getFlapCycle(arg0: string): string[];
        refresh(arg0: boolean): void;
        tick(arg0: boolean, arg1: $RandomSource): number;
        update(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        static load(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $FlapDisplaySection;
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        getSize(): number;
        setText(arg0: $Component_): void;
        getText(): $Component;
        static WIDE_MONOSPACE: number;
        static MONOSPACE: number;
        constructor(arg0: number, arg1: string, arg2: boolean, arg3: boolean);
        get size(): number;
    }
    export class $FlapDisplayLayout {
        isLayout(arg0: string): boolean;
        configure(arg0: string, arg1: $List_<$FlapDisplaySection>): void;
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getSections(): $List<$FlapDisplaySection>;
        loadDefault(arg0: number): void;
        constructor(arg0: number);
        get sections(): $List<$FlapDisplaySection>;
    }
    export class $GlobalTrainDisplayData$TrainDeparturePrediction implements $Comparable<$GlobalTrainDisplayData$TrainDeparturePrediction> {
        compareTo(arg0: $GlobalTrainDisplayData$TrainDeparturePrediction): number;
        scheduleTitle: $MutableComponent;
        ticks: number;
        destination: string;
        train: $Train;
        constructor(arg0: $Train, arg1: number, arg2: $MutableComponent_, arg3: string);
    }
    export class $FlapDisplayBlockEntity extends $KineticBlockEntity {
        getMaxCharCount(): number;
        getMaxCharCount(arg0: number): number;
        getLineIndexAt(arg0: number): number;
        applyTextManually(arg0: number, arg1: $Component_): void;
        setColour(arg0: number, arg1: $DyeColor_): void;
        updateControllerStatus(): void;
        initDefaultSections(): void;
        wrapOperation$hai000$dndecor$updateControllerStatusGetState(arg0: $Level_, arg1: $BlockPos_, arg2: $Operation_<any>): $BlockState;
        wrapOperation$hai000$dndecor$getController(arg0: $Level_, arg1: $BlockPos_, arg2: $Operation_<any>): $BlockState;
        getLineColor(arg0: number): number;
        isLineGlowing(arg0: number): boolean;
        getLines(): $List<$FlapDisplayLayout>;
        getDirection(): $Direction;
        getController(): $FlapDisplayBlockEntity;
        setGlowing(arg0: number): void;
        glowingLines: boolean[];
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        ySize: number;
        source: $BlockPos;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isController: boolean;
        network: number;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        worldPosition: $BlockPos;
        colour: $DyeColor[];
        manualLines: boolean[];
        isRunning: boolean;
        updateSpeed: boolean;
        xSize: number;
        lines: $List<$FlapDisplayLayout>;
        preventSpeedUpdate: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get direction(): $Direction;
        get controller(): $FlapDisplayBlockEntity;
        set glowing(value: number);
    }
}
