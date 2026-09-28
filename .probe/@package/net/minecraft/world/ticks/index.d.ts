import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Tag_, $CompoundTag, $ListTag_, $CompoundTag_, $Tag } from "@package/net/minecraft/nbt";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Hash$Strategy } from "@package/it/unimi/dsi/fastutil";
import { $Comparator, $List, $List_ } from "@package/java/util";
import { $Container } from "@package/net/minecraft/world";
import { $LevelChunkTicksExtension } from "@package/dev/ryanhcode/sable/mixinterface/plot/serialization";
import { $Consumer_, $BiConsumer_, $Predicate_, $Function_, $Function } from "@package/java/util/function";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $Enum, $Record } from "@package/java/lang";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/minecraft/world/ticks" {
    export class $ContainerSingleItem {
    }
    export interface $ContainerSingleItem extends $Container {
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(slot: number, amount: number): $ItemStack;
        getTheItem(): $ItemStack;
        setTheItem(item: $ItemStack_): void;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(slot: number, stack: $ItemStack_): void;
        removeTheItem(): $ItemStack;
        /**
         * Returns the stack in the given slot.
         */
        splitTheItem(slot: number): $ItemStack;
        clearContent(): void;
        /**
         * Returns the stack in the given slot.
         */
        getItem(slot: number): $ItemStack;
        isEmpty(): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        getContainerSize(): number;
        /**
         * Returns the stack in the given slot.
         */
        removeItemNoUpdate(slot: number): $ItemStack;
    }
    export class $ScheduledTick<T> extends $Record {
        triggerTick(): number;
        subTickOrder(): number;
        priority(): $TickPriority;
        type(): T;
        static probe<T>(type: T, pos: $BlockPos_): $ScheduledTick<T>;
        pos(): $BlockPos;
        static INTRA_TICK_DRAIN_ORDER: $Comparator<$ScheduledTick<never>>;
        static UNIQUE_TICK_HASH: $Hash$Strategy<$ScheduledTick<never>>;
        static DRAIN_ORDER: $Comparator<$ScheduledTick<never>>;
        constructor(type: T, pos: $BlockPos_, triggerTick: number, arg3: number);
        constructor(type: T, pos: $BlockPos_, triggerTick: number, arg3: $TickPriority_, priority: number);
    }
    /**
     * Values that may be interpreted as {@link $ScheduledTick}.
     */
    export type $ScheduledTick_<T> = { priority?: $TickPriority_, pos?: $BlockPos_, type?: any, subTickOrder?: number, triggerTick?: number,  } | [priority?: $TickPriority_, pos?: $BlockPos_, type?: any, subTickOrder?: number, triggerTick?: number, ];
    export class $LevelTickAccess<T> {
    }
    export interface $LevelTickAccess<T> extends $TickAccess<T> {
        willTickThisTick(pos: $BlockPos_, type: T): boolean;
    }
    export class $TickPriority extends $Enum<$TickPriority> {
        static byValue(priority: number): $TickPriority;
        static values(): $TickPriority[];
        static valueOf(arg0: string): $TickPriority;
        getValue(): number;
        static EXTREMELY_LOW: $TickPriority;
        static VERY_HIGH: $TickPriority;
        static HIGH: $TickPriority;
        static LOW: $TickPriority;
        static VERY_LOW: $TickPriority;
        static EXTREMELY_HIGH: $TickPriority;
        static NORMAL: $TickPriority;
    }
    /**
     * Values that may be interpreted as {@link $TickPriority}.
     */
    export type $TickPriority_ = "extremely_high" | "very_high" | "high" | "normal" | "low" | "very_low" | "extremely_low";
    export class $LevelChunkTicks<T> implements $SerializableTickContainer<T>, $TickContainerAccess<T>, $LevelChunkTicksExtension<any> {
        setOnTickAdded(onTickAdded: $BiConsumer_<$LevelChunkTicks<T>, $ScheduledTick<T>> | null): void;
        sable$copy(arg0: $LevelChunkTicks<any>): void;
        getAll(): $Stream<$ScheduledTick<T>>;
        hasScheduledTick(pos: $BlockPos_, type: T): boolean;
        static load<T>(tag: $ListTag_, isParser: $Function_<string, (T) | undefined>, pos: $ChunkPos): $LevelChunkTicks<T>;
        count(): number;
        schedule(tick: $ScheduledTick_<T>): void;
        peek(): $ScheduledTick<T>;
        removeIf(predicate: $Predicate_<$ScheduledTick<T>>): void;
        poll(): $ScheduledTick<T>;
        unpack(gameTime: number): void;
        save(arg0: number, arg1: $Function_<T, string>): $Tag;
        constructor();
        constructor(pendingTicks: $List_<$SavedTick_<T>>);
    }
    export class $TickContainerAccess<T> {
    }
    export interface $TickContainerAccess<T> extends $TickAccess<T> {
    }
    export class $SerializableTickContainer<T> {
    }
    export interface $SerializableTickContainer<T> {
        save(gameTime: number, arg1: $Function_<T, string>): $Tag;
    }
    /**
     * Values that may be interpreted as {@link $SerializableTickContainer}.
     */
    export type $SerializableTickContainer_<T> = ((arg0: number, arg1: $Function<T, string>) => $Tag_);
    export class $ProtoChunkTicks<T> implements $SerializableTickContainer<T>, $TickContainerAccess<T> {
        scheduledTicks(): $List<$SavedTick<T>>;
        hasScheduledTick(pos: $BlockPos_, type: T): boolean;
        static load<T>(tag: $ListTag_, idParser: $Function_<string, (T) | undefined>, chunkPos: $ChunkPos): $ProtoChunkTicks<T>;
        count(): number;
        schedule(tick: $ScheduledTick_<T>): void;
        save(gameTime: number, arg1: $Function_<T, string>): $Tag;
        constructor();
    }
    export class $ContainerSingleItem$BlockContainerSingleItem {
    }
    export interface $ContainerSingleItem$BlockContainerSingleItem extends $ContainerSingleItem {
        getContainerBlockEntity(): $BlockEntity;
        stillValid(arg0: $Player): boolean;
    }
    export class $TickAccess<T> {
    }
    export interface $TickAccess<T> {
        hasScheduledTick(pos: $BlockPos_, type: T): boolean;
        count(): number;
        schedule(tick: $ScheduledTick_<T>): void;
    }
    export class $SavedTick<T> extends $Record {
        static saveTick<T>(tick: $ScheduledTick_<T>, idGetter: $Function_<T, string>, gameTime: number): $CompoundTag;
        static loadTickList<T>(tag: $ListTag_, idParser: $Function_<string, (T) | undefined>, chunkPos: $ChunkPos, output: $Consumer_<$SavedTick<T>>): void;
        static loadTick<T>(tag: $CompoundTag_, idParser: $Function_<string, (T) | undefined>): ($SavedTick<T>) | undefined;
        priority(): $TickPriority;
        type(): T;
        delay(): number;
        save(idGetter: $Function_<T, string>): $CompoundTag;
        static probe<T>(type: T, pos: $BlockPos_): $SavedTick<T>;
        pos(): $BlockPos;
        unpack(gameTime: number, arg1: number): $ScheduledTick<T>;
        static UNIQUE_TICK_HASH: $Hash$Strategy<$SavedTick<never>>;
        constructor(arg0: T, arg1: $BlockPos_, arg2: number, arg3: $TickPriority_);
    }
    /**
     * Values that may be interpreted as {@link $SavedTick}.
     */
    export type $SavedTick_<T> = { priority?: $TickPriority_, type?: any, delay?: number, pos?: $BlockPos_,  } | [priority?: $TickPriority_, type?: any, delay?: number, pos?: $BlockPos_, ];
}
