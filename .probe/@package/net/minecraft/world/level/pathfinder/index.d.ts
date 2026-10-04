import { $CollisionGetter, $PathNavigationRegion, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $PathExtension } from "@package/dev/ryanhcode/sable/mixinterface/entity/pathfinding";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $Set, $Set_, $List_ } from "@package/java/util";
import { $Enum, $Record } from "@package/java/lang";
import { $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/level/pathfinder" {
    export class $Path$DebugData extends $Record {
        closedSet(): $Node[];
        openSet(): $Node[];
        write(buffer: $FriendlyByteBuf): void;
        static read(buffer: $FriendlyByteBuf): $Path$DebugData;
        targetNodes(): $Set<$Target>;
        constructor(arg0: $Node[], arg1: $Node[], arg2: $Set_<$Target>);
    }
    /**
     * Values that may be interpreted as {@link $Path$DebugData}.
     */
    export type $Path$DebugData_ = { openSet?: $Node[], closedSet?: $Node[], targetNodes?: $Set_<$Target>,  } | [openSet?: $Node[], closedSet?: $Node[], targetNodes?: $Set_<$Target>, ];
    export class $Node {
        static createHash(x: number, y: number, z: number): number;
        distanceToXZ(point: $Node): number;
        distanceManhattan(point: $Node): number;
        distanceManhattan(pos: $BlockPos_): number;
        asVec3(): $Vec3;
        writeToStream(buffer: $FriendlyByteBuf): void;
        static createFromStream(buffer: $FriendlyByteBuf): $Node;
        asBlockPos(): $BlockPos;
        cloneAndMove(x: number, y: number, z: number): $Node;
        /**
         * Returns `true` if this point has already been assigned to a path
         */
        inOpenSet(): boolean;
        static readContents(buffer: $FriendlyByteBuf, node: $Node): void;
        distanceToSqr(point: $Node): number;
        distanceToSqr(pos: $BlockPos_): number;
        distanceTo(pos: $BlockPos_): number;
        distanceTo(point: $Node): number;
        cameFrom: $Node;
        f: number;
        g: number;
        x: number;
        h: number;
        y: number;
        closed: boolean;
        z: number;
        walkedDistance: number;
        costMalus: number;
        type: $PathType;
        heapIdx: number;
        constructor(x: number, y: number, z: number);
    }
    export class $PathComputationType extends $Enum<$PathComputationType> {
        static values(): $PathComputationType[];
        static valueOf(arg0: string): $PathComputationType;
        static LAND: $PathComputationType;
        static AIR: $PathComputationType;
        static WATER: $PathComputationType;
    }
    /**
     * Values that may be interpreted as {@link $PathComputationType}.
     */
    export type $PathComputationType_ = "land" | "water" | "air";
    export class $Target extends $Node {
        setReached(): void;
        updateBest(heuristic: number, node: $Node): void;
        /**
         * Gets the nearest path point of the path that is constructed
         */
        getBestNode(): $Node;
        static createFromStream(buffer: $FriendlyByteBuf): $Target;
        isReached(): boolean;
        cameFrom: $Node;
        f: number;
        g: number;
        x: number;
        h: number;
        y: number;
        closed: boolean;
        z: number;
        walkedDistance: number;
        costMalus: number;
        type: $PathType;
        heapIdx: number;
        constructor(x: number, y: number, z: number);
        constructor(node: $Node);
        get bestNode(): $Node;
    }
    export class $PathTypeCache {
        getOrCompute(level: $BlockGetter, pos: $BlockPos_): $PathType;
        invalidate(pos: $BlockPos_): void;
        constructor();
    }
    export class $PathfindingContext {
        getPathTypeFromState(x: number, y: number, z: number): $PathType;
        currentEvalPos(): $BlockPos;
        mobPosition(): $BlockPos;
        level(): $CollisionGetter;
        getBlockState(pos: $BlockPos_): $BlockState;
        constructor(level: $CollisionGetter, mob: $Mob);
    }
    export class $PathFinder {
        distance(first: $Node, second: $Node): number;
        /**
         * Finds a path to one of the specified positions and post-processes it or returns null if no path could be found within given accuracy
         */
        findPath(region: $PathNavigationRegion, mob: $Mob, targetPositions: $Set_<$BlockPos_>, maxRange: number, accuracy: number, searchDepthMultiplier: number): $Path;
        constructor(nodeEvaluator: $NodeEvaluator, maxVisitedNodes: number);
    }
    export class $NodeEvaluator {
        canWalkOverFences(): boolean;
        getTargetNodeAt(x: number, arg1: number, y: number): $Target;
        getPathTypeOfMob(context: $PathfindingContext, x: number, y: number, z: number, mob: $Mob): $PathType;
        getNeighbors(outputArray: $Node[], node: $Node): number;
        canFloat(): boolean;
        canPassDoors(): boolean;
        canOpenDoors(): boolean;
        setCanWalkOverFences(canFloat: boolean): void;
        getPathType(mob: $Mob, pos: $BlockPos_): $PathType;
        getPathType(context: $PathfindingContext, x: number, y: number, z: number): $PathType;
        static isBurningBlock(state: $BlockState_): boolean;
        setCanOpenDoors(canFloat: boolean): void;
        setCanFloat(canFloat: boolean): void;
        setCanPassDoors(canFloat: boolean): void;
        /**
         * This method is called when all nodes have been processed and PathEntity is created.
         */
        done(): void;
        prepare(level: $PathNavigationRegion, mob: $Mob): void;
        getTarget(x: number, arg1: number, y: number): $Target;
        /**
         * Returns a mapped point or creates and adds one
         */
        getNode(x: number, y: number, z: number): $Node;
        getNode(pos: $BlockPos_): $Node;
        getStart(): $Node;
        mob: $Mob;
        entityHeight: number;
        entityDepth: number;
        nodes: $Int2ObjectMap<$Node>;
        currentContext: $PathfindingContext;
        entityWidth: number;
        constructor();
        get start(): $Node;
    }
    export class $PathType extends $Enum<$PathType> {
        getMalus(): number;
        static values(): $PathType[];
        static valueOf(arg0: string): $PathType;
        static LAVA: $PathType;
        static DANGER_POWDER_SNOW: $PathType;
        static LEAVES: $PathType;
        static BLOCKED: $PathType;
        static WALKABLE: $PathType;
        static TRAPDOOR: $PathType;
        static BREACH: $PathType;
        static POWDER_SNOW: $PathType;
        static DOOR_WOOD_CLOSED: $PathType;
        static DANGER_TRAPDOOR: $PathType;
        static DANGER_FIRE: $PathType;
        static DAMAGE_FIRE: $PathType;
        static WATER: $PathType;
        static WATER_BORDER: $PathType;
        static WALKABLE_DOOR: $PathType;
        static DOOR_IRON_CLOSED: $PathType;
        static FENCE: $PathType;
        static OPEN: $PathType;
        static RAIL: $PathType;
        static DAMAGE_OTHER: $PathType;
        static DOOR_OPEN: $PathType;
        static UNPASSABLE_RAIL: $PathType;
        static COCOA: $PathType;
        static DANGER_OTHER: $PathType;
        static STICKY_HONEY: $PathType;
        static DAMAGE_CAUTIOUS: $PathType;
        get malus(): number;
    }
    /**
     * Values that may be interpreted as {@link $PathType}.
     */
    export type $PathType_ = "blocked" | "open" | "walkable" | "walkable_door" | "trapdoor" | "powder_snow" | "danger_powder_snow" | "fence" | "lava" | "water" | "water_border" | "rail" | "unpassable_rail" | "danger_fire" | "damage_fire" | "danger_other" | "damage_other" | "door_open" | "door_wood_closed" | "door_iron_closed" | "breach" | "leaves" | "sticky_honey" | "cocoa" | "damage_cautious" | "danger_trapdoor";
    export class $Path implements $PathExtension {
        getDistToTarget(): number;
        writeToStream(buffer: $FriendlyByteBuf): void;
        static createFromStream(buf: $FriendlyByteBuf): $Path;
        setNextNodeIndex(currentPathIndex: number): void;
        /**
         * Gets the vector of the `Node` associated with the given index.
         */
        getEntityPosAtNode(entity: $Entity, index: number): $Vec3;
        static readNodeArray(buffer: $FriendlyByteBuf): $Node[];
        static writeNodeArray(buffer: $FriendlyByteBuf, nodeArray: $Node[]): void;
        debugData(): $Path$DebugData;
        /**
         * Returns the last `Node` of the Array.
         */
        getPreviousNode(): $Node;
        /**
         * Returns `true` if this path has reached the end
         */
        notStarted(): boolean;
        truncateNodes(currentPathIndex: number): void;
        /**
         * Returns `true` if the EntityPath are the same. Non instance related equals.
         */
        sameAs(pathentity: $Path | null): boolean;
        getNodeCount(): number;
        /**
         * @return the current `PathEntity` target node as a `Vec3D`
         */
        getNextEntityPos(entity: $Entity): $Vec3;
        getNextNodePos(): $BlockPos;
        /**
         * Returns the last `Node` of the Array.
         */
        getNextNode(): $Node;
        getNextNodeIndex(): number;
        getNodePos(index: number): $BlockPos;
        /**
         * Returns the last `Node` of the Array.
         */
        getEndNode(): $Node;
        sable$setLocalPath(arg0: $Level_, arg1: boolean): void;
        /**
         * Returns `true` if this path has reached the end
         */
        canReach(): boolean;
        /**
         * Returns `true` if this path has reached the end
         */
        isDone(): boolean;
        copy(): $Path;
        getTarget(): $BlockPos;
        /**
         * Directs this path to the next point in its array
         */
        advance(): void;
        replaceNode(index: number, point: $Node): void;
        /**
         * Returns the `Node` located at the specified index, usually the current one.
         */
        getNode(index: number): $Node;
        setDebug(openSet: $Node[], closedSet: $Node[], targetNodes: $Set_<$Target>): void;
        constructor(nodes: $List_<$Node>, target: $BlockPos_, reached: boolean);
        get distToTarget(): number;
        get previousNode(): $Node;
        get nodeCount(): number;
        get nextNodePos(): $BlockPos;
        get nextNode(): $Node;
        get endNode(): $Node;
        get done(): boolean;
        get target(): $BlockPos;
    }
}
