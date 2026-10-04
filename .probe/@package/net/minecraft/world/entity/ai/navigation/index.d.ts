import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $Path, $PathType_, $NodeEvaluator, $PathFinder } from "@package/net/minecraft/world/level/pathfinder";
import { $BlockPos, $BlockPos_, $Vec3i } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $Set_ } from "@package/java/util";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/entity/ai/navigation" {
    export class $GroundPathNavigation extends $PathNavigation {
        hasValidPathType(pathType: $PathType_): boolean;
        /**
         * If on ground or swimming and can swim
         */
        canPassDoors(): boolean;
        /**
         * If on ground or swimming and can swim
         */
        canOpenDoors(): boolean;
        setAvoidSun(avoidSun: boolean): void;
        setCanWalkOverFences(avoidSun: boolean): void;
        setCanOpenDoors(avoidSun: boolean): void;
        setCanPassDoors(avoidSun: boolean): void;
        mob: $Mob;
        lastStuckCheck: number;
        level: $Level;
        lastTimeoutCheck: number;
        timeoutLimit: number;
        lastStuckCheckPos: $Vec3;
        maxDistanceToWaypoint: number;
        nodeEvaluator: $NodeEvaluator;
        timeoutTimer: number;
        hasDelayedRecomputation: boolean;
        speedModifier: number;
        path: $Path;
        timeoutCachedNode: $Vec3i;
        timeLastRecompute: number;
        constructor(mob: $Mob, level: $Level_);
        set avoidSun(value: boolean);
        set canWalkOverFences(value: boolean);
    }
    export class $WaterBoundPathNavigation extends $PathNavigation {
        mob: $Mob;
        lastStuckCheck: number;
        level: $Level;
        lastTimeoutCheck: number;
        timeoutLimit: number;
        lastStuckCheckPos: $Vec3;
        maxDistanceToWaypoint: number;
        nodeEvaluator: $NodeEvaluator;
        timeoutTimer: number;
        hasDelayedRecomputation: boolean;
        speedModifier: number;
        path: $Path;
        timeoutCachedNode: $Vec3i;
        timeLastRecompute: number;
        constructor(mob: $Mob, level: $Level_);
    }
    export class $PathNavigation {
        /**
         * If on ground or swimming and can swim
         */
        canFloat(): boolean;
        /**
         * If on ground or swimming and can swim
         */
        isStuck(): boolean;
        createPathFinder(maxVisitedNodes: number): $PathFinder;
        setMaxVisitedNodesMultiplier(multiplier: number): void;
        getTargetPos(): $BlockPos;
        /**
         * Sets the speed
         */
        setSpeedModifier(speed: number): void;
        /**
         * If on ground or swimming and can swim
         */
        canUpdatePath(): boolean;
        /**
         * Sets the active `Path` to `null`.
         */
        resetMaxVisitedNodesMultiplier(): void;
        /**
         * Sets the active `Path` to `null`.
         */
        trimPath(): void;
        getTempMobPos(): $Vec3;
        /**
         * Sets the active `Path` to `null`.
         */
        followThePath(): void;
        getGroundY(vec: $Vec3_): number;
        canCutCorner(pathType: $PathType_): boolean;
        /**
         * Checks if entity haven't been moved when last checked and if so, stops the current navigation.
         */
        doStuckDetection(positionVec3: $Vec3_): void;
        /**
         * Checks if the specified entity can safely walk to the specified location.
         */
        canMoveDirectly(posVec31: $Vec3_, posVec32: $Vec3_): boolean;
        /**
         * If on ground or swimming and can swim
         */
        isInProgress(): boolean;
        static isClearForMovementBetween(mob: $Mob, pos1: $Vec3_, pos2: $Vec3_, allowSwimming: boolean): boolean;
        isStableDestination(pos: $BlockPos_): boolean;
        getNodeEvaluator(): $NodeEvaluator;
        getMaxDistanceToWaypoint(): number;
        createPath(positions: $Set_<$BlockPos_>, distance: number): $Path;
        /**
         * Returns a path to one of the given targets or null
         */
        createPath(targets: $Set_<$BlockPos_>, regionOffset: number, offsetUpward: boolean, accuracy: number): $Path;
        /**
         * Returns path to given BlockPos
         */
        createPath(pos: $BlockPos_, accuracy: number): $Path;
        /**
         * Returns path to given BlockPos
         */
        createPath(x: number, arg1: number, y: number, arg3: number): $Path;
        /**
         * Returns a path to one of the elements of the stream or null
         */
        createPath(targets: $Stream<$BlockPos_>, accuracy: number): $Path;
        createPath(targets: $Set_<$BlockPos_>, regionOffset: number, offsetUpward: boolean, accuracy: number, followRange: number): $Path;
        createPath(pos: $BlockPos_, regionOffset: number, accuracy: number): $Path;
        /**
         * Returns a path to the given entity or null
         */
        createPath(entity: $Entity, accuracy: number): $Path;
        setCanFloat(canSwim: boolean): void;
        shouldRecomputePath(pos: $BlockPos_): boolean;
        /**
         * Sets the active `Path` to `null`.
         */
        recomputePath(): void;
        /**
         * Sets the active `Path` to `null`.
         */
        tick(): void;
        /**
         * Sets the active `Path` to `null`.
         */
        stop(): void;
        /**
         * If on ground or swimming and can swim
         */
        isDone(): boolean;
        /**
         * Gets the actively used `Path`.
         */
        getPath(): $Path;
        /**
         * Try to find and set a path to EntityLiving. Returns `true` if successful.
         */
        moveTo(entity: $Entity, speed: number): boolean;
        /**
         * Sets a new path. If it's different from the old path. Checks to adjust path for sun avoiding, and stores start coords.
         */
        moveTo(pathentity: $Path | null, speed: number): boolean;
        /**
         * Try to find and set a path to XYZ. Returns `true` if successful.
         */
        moveTo(x: number, arg1: number, y: number, arg3: number): boolean;
        moveTo(x: number, arg1: number, y: number, arg3: number, z: number): boolean;
        mob: $Mob;
        lastStuckCheck: number;
        level: $Level;
        lastTimeoutCheck: number;
        timeoutLimit: number;
        lastStuckCheckPos: $Vec3;
        maxDistanceToWaypoint: number;
        nodeEvaluator: $NodeEvaluator;
        timeoutTimer: number;
        hasDelayedRecomputation: boolean;
        speedModifier: number;
        path: $Path;
        timeoutCachedNode: $Vec3i;
        timeLastRecompute: number;
        constructor(mob: $Mob, level: $Level_);
        get stuck(): boolean;
        set maxVisitedNodesMultiplier(value: number);
        get targetPos(): $BlockPos;
        get tempMobPos(): $Vec3;
        get inProgress(): boolean;
        get done(): boolean;
    }
}
