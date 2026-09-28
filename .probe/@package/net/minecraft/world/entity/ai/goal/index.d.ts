import { $Predicate_, $Supplier_ } from "@package/java/util/function";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Mob, $LivingEntity, $Entity, $PathfinderMob } from "@package/net/minecraft/world/entity";
import { $TargetingConditions } from "@package/net/minecraft/world/entity/ai/targeting";
import { $Enum, $Class } from "@package/java/lang";
import { $EnumSet, $Set } from "@package/java/util";
import { $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/entity/ai/goal" {
    /**
     * This is an internal object used by the GoalSelector to choose between Goals.
     * In most cases, it should not be constructed directly.
     * 
     * For information on how individual methods work, see the javadocs for Goal:
     * `Goal`
     */
    export class $WrappedGoal extends $Goal {
        canBeReplacedBy(other: $WrappedGoal): boolean;
        /**
         * Gets the private goal enclosed by this WrappedGoal.
         */
        getGoal(): $Goal;
        getPriority(): number;
        /**
         * @return whether the goal should continue executing
         */
        isRunning(): boolean;
        constructor(priority: number, goal: $Goal);
    }
    export class $GoalSelector {
        tickRunningGoals(tickAllRunning: boolean): void;
        /**
         * Add a goal to the GoalSelector with a certain priority. Lower numbers are higher priority.
         */
        addGoal(priority: number, goal: $Goal): void;
        /**
         * Remove the goal from the GoalSelector. This must be the same object as the goal you are trying to remove, which may not always be accessible.
         */
        removeGoal(goal: $Goal): void;
        getAvailableGoals(): $Set<$WrappedGoal>;
        enableControlFlag(flag: $Goal$Flag_): void;
        disableControlFlag(flag: $Goal$Flag_): void;
        removeAllGoals(filter: $Predicate_<$Goal>): void;
        /**
         * Ticks every goal in the selector.
         * Attempts to start each goal based on if it can be used, or stop it if it can't.
         */
        tick(): void;
        setControlFlag(flag: $Goal$Flag_, enabled: boolean): void;
        constructor(profiler: $Supplier_<$ProfilerFiller>);
    }
    export class $Goal {
        /**
         * @return whether the goal should continue executing
         */
        canContinueToUse(): boolean;
        /**
         * @return whether the goal should continue executing
         */
        isInterruptable(): boolean;
        /**
         * @return whether the goal should continue executing
         */
        requiresUpdateEveryTick(): boolean;
        adjustedTickDelay(adjustment: number): number;
        static reducedTickDelay(adjustment: number): number;
        /**
         * Called when the goal is about to start executing
         */
        start(): void;
        /**
         * Called when the goal is about to start executing
         */
        stop(): void;
        /**
         * @return whether the goal should continue executing
         */
        canUse(): boolean;
        getFlags(): $EnumSet<$Goal$Flag>;
        /**
         * Called when the goal is about to start executing
         */
        tick(): void;
        setFlags(flagSet: $EnumSet<$Goal$Flag_>): void;
        constructor();
    }
    export class $RandomStrollGoal extends $Goal {
        /**
         * Changes task random possibility for execution
         */
        setInterval(newchance: number): void;
        getPosition(): $Vec3;
        /**
         * Execute a one shot task or start executing a continuous task
         */
        trigger(): void;
        speedModifier: number;
        mob: $PathfinderMob;
        static DEFAULT_INTERVAL: number;
        forceTrigger: boolean;
        wantedZ: number;
        wantedY: number;
        wantedX: number;
        interval: number;
        constructor(mob: $PathfinderMob, speedModifier: number, arg2: number);
        constructor(mob: $PathfinderMob, speedModifier: number);
        constructor(mob: $PathfinderMob, speedModifier: number, arg2: number, interval: boolean);
    }
    export class $LookAtPlayerGoal extends $Goal {
        mob: $Mob;
        static DEFAULT_PROBABILITY: number;
        probability: number;
        lookAtType: $Class<$LivingEntity>;
        lookAt: $Entity;
        lookAtContext: $TargetingConditions;
        lookDistance: number;
        constructor(mob: $Mob, lookAtType: $Class<$LivingEntity>, lookDistance: number);
        constructor(mob: $Mob, lookAtType: $Class<$LivingEntity>, lookDistance: number, probability: number, onlyHorizontal: boolean);
        constructor(mob: $Mob, lookAtType: $Class<$LivingEntity>, lookDistance: number, probability: number);
    }
    export class $Goal$Flag extends $Enum<$Goal$Flag> {
        static values(): $Goal$Flag[];
        static valueOf(arg0: string): $Goal$Flag;
        static TARGET: $Goal$Flag;
        static MOVE: $Goal$Flag;
        static LOOK: $Goal$Flag;
        static JUMP: $Goal$Flag;
    }
    /**
     * Values that may be interpreted as {@link $Goal$Flag}.
     */
    export type $Goal$Flag_ = "move" | "look" | "jump" | "target";
}
