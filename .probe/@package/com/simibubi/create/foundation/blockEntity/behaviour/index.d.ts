import { $Level, $BlockGetter, $LevelAccessor } from "@package/net/minecraft/world/level";
import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List, $List_ } from "@package/java/util";
import { $ClipboardCloneable } from "@package/com/simibubi/create/content/equipment/clipboard";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $Function_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Record } from "@package/java/lang";
import { $Vec3_, $Vec3, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as inventory from "@package/com/simibubi/create/foundation/blockEntity/behaviour/inventory";
export * as fluid from "@package/com/simibubi/create/foundation/blockEntity/behaviour/fluid";
export * as filtering from "@package/com/simibubi/create/foundation/blockEntity/behaviour/filtering";
export * as scrollValue from "@package/com/simibubi/create/foundation/blockEntity/behaviour/scrollValue";

declare module "@package/com/simibubi/create/foundation/blockEntity/behaviour" {
    export class $BlockEntityBehaviour {
        getWorld(): $Level;
        onBlockChanged(arg0: $BlockState_): void;
        onNeighborChanged(arg0: $BlockPos_): void;
        lazyTick(): void;
        getRequiredItems(): $ItemRequirement;
        writeSafe(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        setLazyTickRate(arg0: number): void;
        isSafeNBT(): boolean;
        static get<T extends $BlockEntityBehaviour>(arg0: $BlockEntity, arg1: $BehaviourType<T>): T;
        static get<T extends $BlockEntityBehaviour>(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BehaviourType<T>): T;
        initialize(): void;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        destroy(): void;
        getType(): $BehaviourType<never>;
        unload(): void;
        tick(): void;
        getPos(): $BlockPos;
        blockEntity: $SmartBlockEntity;
        constructor(arg0: $SmartBlockEntity);
    }
    export class $ValueSettingsFormatter {
        format(arg0: $ValueSettingsBehaviour$ValueSettings_): $MutableComponent;
        constructor(arg0: $Function_<$ValueSettingsBehaviour$ValueSettings, $MutableComponent>);
    }
    export class $ValueBoxTransform {
        shouldRender(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        getLocalOffset(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_): $Vec3;
        testHit(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Vec3_): boolean;
        getOverrideColor(): number;
        getFontScale(): number;
        transform(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $PoseStack): void;
        rotate(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $PoseStack): void;
        getScale(): number;
        constructor();
    }
    export class $ValueSettingsBehaviour$ValueSettings extends $Record {
        row(): number;
        value(): number;
        format(): $MutableComponent;
        constructor(row: number, value: number);
    }
    /**
     * Values that may be interpreted as {@link $ValueSettingsBehaviour$ValueSettings}.
     */
    export type $ValueSettingsBehaviour$ValueSettings_ = { value?: number, row?: number,  } | [value?: number, row?: number, ];
    export class $ValueSettingsBehaviour {
    }
    export interface $ValueSettingsBehaviour extends $ClipboardCloneable {
        getSlotPositioning(): $ValueBoxTransform;
        createBoard(arg0: $Player, arg1: $BlockHitResult): $ValueSettingsBoard;
        setValueSettings(arg0: $Player, arg1: $ValueSettingsBehaviour$ValueSettings_, arg2: boolean): void;
        onlyVisibleWithWrench(): boolean;
        onShortInteract(arg0: $Player, arg1: $InteractionHand_, arg2: $Direction_, arg3: $BlockHitResult): void;
        newSettingHovered(arg0: $ValueSettingsBehaviour$ValueSettings_): void;
        bypassesInput(arg0: $ItemStack_): boolean;
        acceptsValueSettings(): boolean;
        getValueSettings(): $ValueSettingsBehaviour$ValueSettings;
        playFeedbackSound(arg0: $BlockEntityBehaviour): void;
        testHit(arg0: $Vec3_): boolean;
        getClipboardKey(): string;
        writeToClipboard(arg0: $HolderLookup$Provider, arg1: $CompoundTag_, arg2: $Direction_): boolean;
        readFromClipboard(arg0: $HolderLookup$Provider, arg1: $CompoundTag_, arg2: $Player, arg3: $Direction_, arg4: boolean): boolean;
        netId(): number;
        isActive(): boolean;
        mayInteract(arg0: $Player): boolean;
    }
    export class $BehaviourType<T extends $BlockEntityBehaviour> {
        getName(): string;
        constructor(arg0: string);
        constructor();
    }
    export class $ValueSettingsBoard extends $Record {
        milestoneInterval(): number;
        rows(): $List<$Component>;
        formatter(): $ValueSettingsFormatter;
        maxValue(): number;
        title(): $Component;
        constructor(title: $Component_, maxValue: number, milestoneInterval: number, rows: $List_<$Component_>, formatter: $ValueSettingsFormatter);
    }
    /**
     * Values that may be interpreted as {@link $ValueSettingsBoard}.
     */
    export type $ValueSettingsBoard_ = { title?: $Component_, rows?: $List_<$Component_>, formatter?: $ValueSettingsFormatter, maxValue?: number, milestoneInterval?: number,  } | [title?: $Component_, rows?: $List_<$Component_>, formatter?: $ValueSettingsFormatter, maxValue?: number, milestoneInterval?: number, ];
}
