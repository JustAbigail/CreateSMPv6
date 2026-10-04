import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos } from "@package/net/minecraft/core";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Enum } from "@package/java/lang";
import { $Map_, $Map } from "@package/java/util";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $MemoryModuleType_, $MemoryModuleType, $MemoryStatus, $MemoryStatus_ } from "@package/net/minecraft/world/entity/ai/memory";

declare module "@package/net/minecraft/world/entity/ai/behavior" {
    export class $BehaviorControl<E extends $LivingEntity> {
    }
    export interface $BehaviorControl<E extends $LivingEntity> {
        doStop(level: $ServerLevel, entity: E, gameTime: number): void;
        tryStart(level: $ServerLevel, entity: E, gameTime: number): boolean;
        tickOrStop(level: $ServerLevel, entity: E, gameTime: number): void;
        debugString(): string;
        getStatus(): $Behavior$Status;
        get status(): $Behavior$Status;
    }
    export class $PositionTracker {
    }
    export interface $PositionTracker {
        currentBlockPosition(): $BlockPos;
        isVisibleBy(entity: $LivingEntity): boolean;
        currentPosition(): $Vec3;
    }
    export class $Behavior$Status extends $Enum<$Behavior$Status> {
        static values(): $Behavior$Status[];
        static valueOf(arg0: string): $Behavior$Status;
        static RUNNING: $Behavior$Status;
        static STOPPED: $Behavior$Status;
    }
    /**
     * Values that may be interpreted as {@link $Behavior$Status}.
     */
    export type $Behavior$Status_ = "stopped" | "running";
    export class $Behavior<E extends $LivingEntity> implements $BehaviorControl<E> {
        doStop(level: $ServerLevel, entity: E, gameTime: number): void;
        tryStart(level: $ServerLevel, entity: E, gameTime: number): boolean;
        tickOrStop(level: $ServerLevel, entity: E, gameTime: number): void;
        canStillUse(level: $ServerLevel, entity: E, gameTime: number): boolean;
        hasRequiredMemories(owner: E): boolean;
        checkExtraStartConditions(level: $ServerLevel, owner: E): boolean;
        timedOut(gameTime: number): boolean;
        tick(level: $ServerLevel, entity: E, gameTime: number): void;
        start(level: $ServerLevel, entity: E, gameTime: number): void;
        stop(level: $ServerLevel, entity: E, gameTime: number): void;
        debugString(): string;
        getStatus(): $Behavior$Status;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        constructor(entryCondition: $Map_<$MemoryModuleType_<never>, $MemoryStatus_>, duration: number);
        constructor(entryCondition: $Map_<$MemoryModuleType_<never>, $MemoryStatus_>);
        constructor(entryCondition: $Map_<$MemoryModuleType_<never>, $MemoryStatus_>, minDuration: number, maxDuration: number);
        get status(): $Behavior$Status;
    }
}
