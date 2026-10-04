import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Entity, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $LevelBlock, $KubeLevelEvent } from "@package/dev/latvian/mods/kubejs/level";
import { $List, $List_, $Map } from "@package/java/util";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $KubePlayerEvent } from "@package/dev/latvian/mods/kubejs/player";
import { $ItemPredicate_, $ItemBuilder } from "@package/dev/latvian/mods/kubejs/item";
import { $PlayerInteractEvent$LeftClickBlock } from "@package/net/neoforged/neoforge/event/entity/player";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Consumer, $Function_, $Consumer_, $Predicate_, $Function } from "@package/java/util/function";
import { $TypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction_, $RegistryAccess, $Registry, $Direction } from "@package/net/minecraft/core";
import { $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Enum, $Record, $Object } from "@package/java/lang";
import { $BlockStateModifyPlacementCallback, $RandomTickCallback, $BlockStateModifyCallback, $BlockStateMirrorCallback, $CanBeReplacedCallback, $BlockStateRotateCallback, $AfterEntityFallenOnBlockCallback, $EntityFallenOnBlockCallback, $BlockExplodedCallback, $EntityBlockCallback } from "@package/dev/latvian/mods/kubejs/block/callback";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockDropsEvent, $BlockEvent$FarmlandTrampleEvent, $BlockEvent$BreakEvent, $BlockEvent$EntityPlaceEvent } from "@package/net/neoforged/neoforge/event/level";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";
import { $BlockEntityInfo } from "@package/dev/latvian/mods/kubejs/block/entity";
import { $BlockAndTintGetter, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $BlockStatePredicate_ } from "@package/dev/latvian/mods/kubejs/block/state";
import { $KubeDataGenerator } from "@package/dev/latvian/mods/kubejs/generator";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MapColor } from "@package/net/minecraft/world/level/material";
import { $KubeColor, $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ItemEntity, $FallingBlockEntity } from "@package/net/minecraft/world/entity/item";
import { $KubeRayTraceResult, $KubeEntityEvent } from "@package/dev/latvian/mods/kubejs/entity";
import { $NoteBlockInstrument_, $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $ModelledBuilderBase } from "@package/dev/latvian/mods/kubejs/registry";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_, $SoundType_, $Block } from "@package/net/minecraft/world/level/block";
import { $HitResult, $AABB_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockDropSupplier_ } from "@package/dev/latvian/mods/kubejs/block/drop";
import { $Vector3f } from "@package/org/joml";
export * as entity from "@package/dev/latvian/mods/kubejs/block/entity";
export * as custom from "@package/dev/latvian/mods/kubejs/block/custom";
export * as state from "@package/dev/latvian/mods/kubejs/block/state";
export * as predicate from "@package/dev/latvian/mods/kubejs/block/predicate";
export * as drop from "@package/dev/latvian/mods/kubejs/block/drop";
export * as callback from "@package/dev/latvian/mods/kubejs/block/callback";

declare module "@package/dev/latvian/mods/kubejs/block" {
    export class $DetectorBlock$Builder extends $BlockBuilder {
        detectorId(id: string): this;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(i: $ResourceLocation_);
    }
    export class $RandomTickKubeEvent implements $KubeLevelEvent {
        getBlock(): $LevelBlock;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        getLevel(): $Level;
        random: $RandomSource;
        constructor(level: $ServerLevel, pos: $BlockPos_, state: $BlockState_, random: $RandomSource);
        get block(): $LevelBlock;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
        get level(): $Level;
    }
    export class $BlockPlacedKubeEvent implements $KubeEntityEvent {
        /**
         * The entity that placed the block. Can be `null`, e.g. when a block is placed by a dispenser.
         */
        getEntity(): $Entity;
        /**
         * The block that is placed.
         */
        getBlock(): $LevelBlock;
        /**
         * The level of the block that was placed.
         */
        getLevel(): $Level;
        getPlayer(): $Player;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        constructor(event: $BlockEvent$EntityPlaceEvent);
        get entity(): $Entity;
        get block(): $LevelBlock;
        get level(): $Level;
        get player(): $Player;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $BlockItemBuilder extends $ItemBuilder {
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        blockBuilder: $BlockBuilder;
        registryKey: $ResourceKey<$Registry<$Item>>;
        constructor(i: $ResourceLocation_);
    }
    export class $MapColorHelper extends $Record implements $Function<$BlockState, $MapColor> {
        static findClosest(rgbi: number): $MapColorHelper;
        rgb(): $Vector3f;
        name(): string;
        static reverse(c: $MapColor): $MapColorHelper;
        static wrap(o: $Object): $MapColor;
        apply(blockState: $BlockState_): $MapColor;
        id(): number;
        color(): $MapColor;
        compose<V>(arg0: $Function_<V, $BlockState>): $Function<V, $MapColor>;
        andThen<V>(arg0: $Function_<$MapColor, V>): $Function<$BlockState, V>;
        static ID_MAP: $Map<number, $MapColorHelper>;
        static NAME_MAP: $Map<string, $MapColorHelper>;
        static NONE: $MapColorHelper;
        constructor(id: number, name: string, color: $MapColor, rgb: $Vector3f);
    }
    /**
     * Values that may be interpreted as {@link $MapColorHelper}.
     */
    export type $MapColorHelper_ = string | number | { rgb?: $Vector3f, id?: number, name?: string, color?: $MapColor,  } | [rgb?: $Vector3f, id?: number, name?: string, color?: $MapColor, ];
    export class $BlockStoppedFallingKubeEvent implements $KubeEntityEvent {
        getEntity(): $Entity;
        getLevel(): $Level;
        getPlayer(): $Player;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        fallSpeed: number;
        replacedBlock: $LevelBlock;
        block: $LevelBlock;
        constructor(level: $Level_, pos: $BlockPos_, state: $BlockState_, entity: $FallingBlockEntity, fallSpeed: number, replacedState: $BlockState_);
        get entity(): $Entity;
        get level(): $Level;
        get player(): $Player;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $BlockLeftClickedKubeEvent implements $KubePlayerEvent {
        /**
         * The face of the block that was left clicked.
         */
        getFacing(): $Direction;
        /**
         * The block that was left clicked.
         */
        getBlock(): $LevelBlock;
        /**
         * The item that was used to left click the block.
         */
        getItem(): $ItemStack;
        getPlayer(): $Player;
        getLevel(): $Level;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        getEntity(): $LivingEntity;
        constructor(event: $PlayerInteractEvent$LeftClickBlock);
        get facing(): $Direction;
        get block(): $LevelBlock;
        get item(): $ItemStack;
        get player(): $Player;
        get level(): $Level;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
        get entity(): $LivingEntity;
    }
    export class $BlockPickedKubeEvent implements $KubePlayerEvent {
        getLevel(): $Level;
        getTarget(): $KubeRayTraceResult;
        getPlayer(): $Player;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        getEntity(): $LivingEntity;
        level: $Level;
        block: $LevelBlock;
        player: $Player;
        constructor(level: $Level_, pos: $BlockPos_, state: $BlockState_, player: $Player, hitResult: $HitResult);
        get target(): $KubeRayTraceResult;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
        get entity(): $LivingEntity;
    }
    export class $BlockModificationKubeEvent implements $KubeEvent {
        /**
         * Modifies blocks that match the given predicate.
         * 
         * **NOTE**: tag predicates are not supported at this time.
         */
        modify(predicate: $BlockStatePredicate_, c: $Consumer_<$BlockModificationKubeEvent$BlockModifications>): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        constructor();
    }
    export class $BlockBrokenKubeEvent implements $KubePlayerEvent {
        /**
         * The block that was broken.
         */
        getBlock(): $LevelBlock;
        getPlayer(): $Player;
        getLevel(): $Level;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        getEntity(): $LivingEntity;
        constructor(event: $BlockEvent$BreakEvent);
        get block(): $LevelBlock;
        get player(): $Player;
        get level(): $Level;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
        get entity(): $LivingEntity;
    }
    export class $BlockRightClickedKubeEvent implements $KubePlayerEvent {
        /**
         * The face of the block being right clicked.
         */
        getFacing(): $Direction;
        /**
         * The hand that was used to right click the block.
         */
        getHand(): $InteractionHand;
        getHitResult(): $BlockHitResult;
        /**
         * The block that was right clicked.
         */
        getBlock(): $LevelBlock;
        /**
         * The position of the block that was right clicked.
         */
        getItem(): $ItemStack;
        getPlayer(): $Player;
        getLevel(): $Level;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        getEntity(): $LivingEntity;
        constructor(item: $ItemStack_, player: $Player, hand: $InteractionHand_, pos: $BlockPos_, direction: $Direction_, hitResult: $BlockHitResult);
        get facing(): $Direction;
        get hand(): $InteractionHand;
        get hitResult(): $BlockHitResult;
        get block(): $LevelBlock;
        get item(): $ItemStack;
        get player(): $Player;
        get level(): $Level;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
        get entity(): $LivingEntity;
    }
    export class $BlockTintFunction$Fixed extends $Record implements $BlockTintFunction {
        color(): $KubeColor;
        getColor(state: $BlockState_, level: $BlockAndTintGetter, pos: $BlockPos_, index: number): $KubeColor;
        constructor(color: $KubeColor_);
    }
    /**
     * Values that may be interpreted as {@link $BlockTintFunction$Fixed}.
     */
    export type $BlockTintFunction$Fixed_ = { color?: $KubeColor_,  } | [color?: $KubeColor_, ];
    export class $BlockRenderType extends $Enum<$BlockRenderType> {
        static values(): $BlockRenderType[];
        static valueOf(name: string): $BlockRenderType;
        static CUTOUT: $BlockRenderType;
        static TRANSLUCENT: $BlockRenderType;
        static CUTOUT_MIPPED: $BlockRenderType;
        static SOLID: $BlockRenderType;
    }
    /**
     * Values that may be interpreted as {@link $BlockRenderType}.
     */
    export type $BlockRenderType_ = "solid" | "cutout" | "cutout_mipped" | "translucent";
    export class $BlockStartedFallingKubeEvent implements $KubeEntityEvent {
        getEntity(): $Entity;
        getBlock(): $LevelBlock;
        getLevel(): $Level;
        getPlayer(): $Player;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        constructor(level: $Level_, pos: $BlockPos_, state: $BlockState_, entity: $FallingBlockEntity);
        get entity(): $Entity;
        get block(): $LevelBlock;
        get level(): $Level;
        get player(): $Player;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $BlockModificationKubeEvent$BlockModifications extends $Record {
        setNameKey(key: string): void;
        setExplosionResistance(v: number): void;
        setRandomTickCallback(callback: $Consumer_<$RandomTickCallback>): void;
        setFriction(v: number): void;
        setSpeedFactor(v: number): void;
        setJumpFactor(v: number): void;
        setDestroySpeed(v: number): void;
        setLightEmission(v: number): void;
        setRequiresTool(v: boolean): void;
        setSoundType(v: $SoundType_): void;
        setHasCollision(v: boolean): void;
        setIsRandomlyTicking(v: boolean): void;
        block(): $Block;
        constructor(block: $Block_);
        set nameKey(value: string);
        set explosionResistance(value: number);
        set randomTickCallback(value: $Consumer_<$RandomTickCallback>);
        set friction(value: number);
        set speedFactor(value: number);
        set jumpFactor(value: number);
        set destroySpeed(value: number);
        set lightEmission(value: number);
        set requiresTool(value: boolean);
        set soundType(value: $SoundType_);
        set hasCollision(value: boolean);
        set isRandomlyTicking(value: boolean);
    }
    /**
     * Values that may be interpreted as {@link $BlockModificationKubeEvent$BlockModifications}.
     */
    export type $BlockModificationKubeEvent$BlockModifications_ = { block?: $Block_,  } | [block?: $Block_, ];
    export class $FarmlandTrampledKubeEvent implements $KubeEntityEvent {
        /**
         * The entity that is attempting to trample the farmland.
         */
        getEntity(): $Entity;
        /**
         * The farmland block.
         */
        getBlock(): $LevelBlock;
        /**
         * The level that the farmland and the entity are in.
         */
        getLevel(): $Level;
        /**
         * The distance of the entity from the block.
         */
        getDistance(): number;
        getPlayer(): $Player;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        constructor(event: $BlockEvent$FarmlandTrampleEvent);
        get entity(): $Entity;
        get block(): $LevelBlock;
        get level(): $Level;
        get distance(): number;
        get player(): $Player;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $BlockTintFunction {
        static wrap(o: $Object): $BlockTintFunction;
        static REDSTONE: $BlockTintFunction;
        static BIRCH_FOLIAGE: $BlockTintFunction$Fixed;
        static TYPE_INFO: $TypeInfo;
        static GRASS: $BlockTintFunction;
        static MANGROVE_FOLIAGE: $BlockTintFunction$Fixed;
        static FOLIAGE: $BlockTintFunction;
        static EVERGREEN_FOLIAGE: $BlockTintFunction$Fixed;
        static REDSTONE_COLORS: $KubeColor[];
        static DEFAULT_FOLIAGE_COLOR: $KubeColor;
        static WATER: $BlockTintFunction;
    }
    export interface $BlockTintFunction {
        getColor(state: $BlockState_, level: $BlockAndTintGetter, pos: $BlockPos_, index: number): $KubeColor;
    }
    /**
     * Values that may be interpreted as {@link $BlockTintFunction}.
     */
    export type $BlockTintFunction_ = $BlockTintFunction_[] | string | ((state: $BlockState, level: $BlockAndTintGetter, pos: $BlockPos_, index: number) => $KubeColor_) | ((state: $BlockState, level: $BlockAndTintGetter, pos: $BlockPos, index: number) => $KubeColor_);
    export class $BlockBuilder extends $ModelledBuilderBase<$Block> {
        /**
         * Set how this block reacts after an explosion. Note the block has already been destroyed at this point
         */
        exploded(callbackJS: $Consumer_<$BlockExplodedCallback>): this;
        /**
         * Change drops of this block
         */
        drops(drops: $BlockDropSupplier_): this;
        /**
         * Set the default state of the block.
         */
        defaultState(callbackJS: $Consumer_<$BlockStateModifyCallback>): this;
        /**
         * Set what happens when an entity is inside the block
         * This is called every tick for every entity inside the block, so be careful what you do here.
         * This will only be called if the entity's bounding box overlaps with the block's collision.
         */
        entityInside(callbackJS: $Consumer_<$EntityBlockCallback>): this;
        generateLootTable(generator: $KubeDataGenerator): $LootTable;
        /**
         * @deprecated
         */
        generateLootTable(): $LootTable;
        /**
         * Set how slippery the block is.
         */
        slipperiness(f: number): this;
        /**
         * Makes the block require a tool to have drops when broken.
         */
        requiresTool(): this;
        /**
         * Makes the block require a tool to have drops when broken.
         */
        requiresTool(f: boolean): this;
        /**
         * Makes the block not be solid.
         */
        notSolid(): this;
        /**
         * Makes mobs not spawn on the block.
         */
        noValidSpawns(b: boolean): this;
        /**
         * Makes the block view blocking.
         */
        viewBlocking(b: boolean): this;
        /**
         * Makes the block a redstone conductor.
         */
        redstoneConductor(b: boolean): this;
        copyPropertiesFrom(block: $Block_): this;
        /**
         * Checks if the block can be waterlogged.
         */
        canBeWaterlogged(): boolean;
        /**
         * Helper method for setting the render type of the block to `cutout` correctly.
         */
        defaultCutout(): this;
        /**
         * Tags both the block and the item with the given tag.
         */
        tagBoth(tag: $ResourceLocation_[]): this;
        /**
         * Tags the block with the given tag.
         */
        tagBlock(tag: $ResourceLocation_[]): this;
        /**
         * Tags the item with the given tag.
         */
        tagItem(tag: $ResourceLocation_[]): this;
        /**
         * Set how this block bounces/moves entities that land on top of this. Do not use this to modify the block, use fallOn instead!
         * Use ctx.bounce(height) or ctx.setVelocity(x, y, z) to change the entities velocity.
         */
        afterFallenOn(callbackJS: $Consumer_<$AfterEntityFallenOnBlockCallback>): this;
        noSoundType(): this;
        woodSoundType(): this;
        stoneSoundType(): this;
        gravelSoundType(): this;
        grassSoundType(): this;
        sandSoundType(): this;
        cropSoundType(): this;
        glassSoundType(): this;
        /**
         * Sets the block's map color dynamically per block state. If unset, defaults to NONE.
         */
        dynamicMapColor(m: $Function_<$BlockState, $Object>): this;
        /**
         * Set the block to have no corresponding item.
         */
        noItem(): this;
        static createShape(boxes: $List_<$AABB_>): $VoxelShape;
        /**
         * @deprecated
         */
        setWaterlogged(waterlogged: boolean): this;
        /**
         * @deprecated
         */
        getWaterlogged(): boolean;
        /**
         * Clears all drops for the block.
         */
        noDrops(): this;
        /**
         * Helper method for setting the render type of the block to `translucent` correctly.
         */
        defaultTranslucent(): this;
        /**
         * Set what happens when an entity steps on the block
         * This is called every tick for every entity standing on the block, so be careful what you do here.
         */
        steppedOn(callbackJS: $Consumer_<$EntityBlockCallback>): this;
        /**
         * Set what happens when an entity falls on the block. Do not use this for moving them, use bounce instead!
         */
        fallenOn(callbackJS: $Consumer_<$EntityFallenOnBlockCallback>): this;
        /**
         * Bounces entities that land on this block by bounciness * their fall velocity.
         * Do not make bounciness negative, as that is a recipe for a long and laggy trip to the void
         */
        bounciness(bounciness: number): this;
        /**
         * Set the callback used for determining how the block rotates
         */
        rotateState(callbackJS: $Consumer_<$BlockStateRotateCallback>): this;
        /**
         * Set the callback used for determining how the block is mirrored
         */
        mirrorState(callbackJS: $Consumer_<$BlockStateMirrorCallback>): this;
        transformObject(obj: $Block_): $Block;
        /**
         * Sets the block should be a full block or not, like cactus or doors.
         */
        fullBlock(f: boolean): this;
        /**
         * Set the callback used for right-clicking on the block
         */
        rightClick(callbackJS: $Consumer_<$BlockRightClickedKubeEvent>): this;
        /**
         * Sets the hardness of the block. Defaults to 1.5.
         * 
         * Setting this to -1 will make the block unbreakable like bedrock.
         */
        hardness(h: number): this;
        /**
         * Makes the block transparent.
         */
        transparent(b: boolean): this;
        /**
         * Sets the block's sound type. Defaults to wood.
         */
        soundType(m: $SoundType_): this;
        /**
         * Sets random tick callback for this black.
         */
        randomTick(randomTickCallback: $Consumer_<$RandomTickCallback>): this;
        /**
         * Sets the block's map color. Defaults to NONE.
         */
        mapColor(m: $MapColor): this;
        /**
         * Sets the light level of the block. Defaults to 0 (no light).
         */
        lightLevel(light: number): this;
        /**
         * Sets the render type of the block. Can be `cutout`, `cutout_mipped`, `translucent`, or `basic`.
         */
        renderType(l: $BlockRenderType_): this;
        /**
         * Sets the blast resistance of the block. Defaults to 3.
         */
        resistance(r: number): this;
        /**
         * Set the callback for determining the blocks state when placed.
         */
        placementState(callbackJS: $Consumer_<$BlockStateModifyPlacementCallback>): this;
        /**
         * Set how fast you can walk on the block.
         * 
         * Any value above 1 will make you walk insanely fast as your speed is multiplied by this value each tick.
         * 
         * Recommended values are between 0.1 and 1, useful for mimicking soul sand or ice.
         */
        speedFactor(f: number): this;
        /**
         * Set how high you can jump on the block.
         */
        jumpFactor(f: number): this;
        /**
         * Set if the block can be replaced by something else.
         */
        canBeReplaced(callbackJS: $Predicate_<$CanBeReplacedCallback>): this;
        /**
         * Makes the block unbreakable.
         */
        unbreakable(): this;
        /**
         * Makes the block suffocating.
         */
        suffocating(b: boolean): this;
        /**
         * Modifies the block's item representation.
         */
        item(i: $Consumer_<$ItemBuilder>): this;
        createProperties(): $BlockBehaviour$Properties;
        /**
         * Add a blockstate property to the block.
         * 
         * For example, facing, lit, etc.
         */
        property(property: $Property<never>): this;
        /**
         * Set the color of a specific layer of the block.
         */
        color(color: $BlockTintFunction_): this;
        /**
         * Set the color of a specific layer of the block.
         */
        color(index: number, color: $BlockTintFunction_): this;
        /**
         * Set the shape of the block.
         */
        box(x0: number, y0: number, z0: number, x1: number, y1: number, z1: number): this;
        /**
         * Set the shape of the block.
         */
        box(x0: number, y0: number, z0: number, x1: number, y1: number, z1: number, scale16: boolean): this;
        /**
         * Sets the opacity of the block. Opaque blocks do not let light through.
         */
        opaque(o: boolean): this;
        /**
         * Creates a Block Entity for this block
         */
        blockEntity(callback: $Consumer_<$BlockEntityInfo>): this;
        /**
         * Makes the block not collide with entities.
         */
        noCollision(): this;
        /**
         * Makes the block can be waterlogged.
         */
        waterlogged(): this;
        /**
         * Note block instrument.
         */
        instrument(i: $NoteBlockInstrument_): this;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(id: $ResourceLocation_);
    }
    export class $DetectorBlockKubeEvent implements $KubeLevelEvent {
        /**
         * The id of the detector block when it was registered.
         */
        getDetectorId(): string;
        /**
         * If the detector block is powered.
         */
        isPowered(): boolean;
        /**
         * The detector block.
         */
        getBlock(): $LevelBlock;
        /**
         * The level where the detector block is located.
         */
        getLevel(): $Level;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        constructor(i: string, l: $Level_, p: $BlockPos_, pow: boolean);
        get detectorId(): string;
        get powered(): boolean;
        get block(): $LevelBlock;
        get level(): $Level;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $SeedItemBuilder extends $BlockItemBuilder {
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        blockBuilder: $BlockBuilder;
        registryKey: $ResourceKey<$Registry<$Item>>;
        constructor(i: $ResourceLocation_);
    }
    export class $BlockDropsKubeEvent implements $KubeEntityEvent {
        /**
         * Dropped item entities.
         */
        getItemEntities(): $List<$ItemEntity>;
        containsItem(item: $ItemPredicate_): boolean;
        getEntity(): $Entity;
        removeItem(item: $ItemPredicate_): void;
        addItem(item: $ItemStack_): $ItemEntity;
        /**
         * Sets the experience dropped by the block.
         */
        setXp(xp: number): void;
        /**
         * The tool used when breaking this block. May be null.
         */
        getTool(): $ItemStack;
        /**
         * The experience dropped by the block.
         */
        getXp(): number;
        /**
         * Dropped items. Immutable.
         */
        getItems(): $List<$ItemStack>;
        /**
         * The block that was broken.
         */
        getBlock(): $LevelBlock;
        getPlayer(): $Player;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        getLevel(): $Level;
        constructor(event: $BlockDropsEvent);
        get itemEntities(): $List<$ItemEntity>;
        get entity(): $Entity;
        get tool(): $ItemStack;
        get items(): $List<$ItemStack>;
        get block(): $LevelBlock;
        get player(): $Player;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
        get level(): $Level;
    }
}
