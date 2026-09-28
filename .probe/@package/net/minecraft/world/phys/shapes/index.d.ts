import { $Predicate_ } from "@package/java/util/function";
import { $BlockPos_, $Direction_, $AxisCycle_, $Direction$Axis_, $Direction } from "@package/net/minecraft/core";
import { $Item_, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $VoxelShapeAccess, $DiscreteVSAccess } from "@package/malte0811/ferritecore/mixin/accessors";
import { $VoxelShapeAccessor as $VoxelShapeAccessor$1 } from "@package/com/copycatsplus/copycats/mixin/copycat";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $DoubleList } from "@package/it/unimi/dsi/fastutil/doubles";
import { $VoxelShapeAccessor } from "@package/team/creative/creativecore/mixin";
import { $FastVoxelShapeIterable } from "@package/dev/ryanhcode/sable/mixinterface/voxel_shape_iteration";
import { $Iterator, $List } from "@package/java/util";
import { $DiscreteVoxelShapeAccessor } from "@package/dev/ryanhcode/sable/mixin/voxel_shape_iteration";
import { $Vec3_, $AABB_, $Vec3, $AABB, $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/phys/shapes" {
    export class $DiscreteVoxelShape$IntFaceConsumer {
    }
    export interface $DiscreteVoxelShape$IntFaceConsumer {
        consume(direction: $Direction_, x: number, y: number, z: number): void;
    }
    /**
     * Values that may be interpreted as {@link $DiscreteVoxelShape$IntFaceConsumer}.
     */
    export type $DiscreteVoxelShape$IntFaceConsumer_ = ((arg0: $Direction, arg1: number, arg2: number, arg3: number) => void);
    export class $DiscreteVoxelShape implements $DiscreteVoxelShapeAccessor, $DiscreteVSAccess {
        isFull(x: number, y: number, z: number): boolean;
        isFull(rotation: $AxisCycle_, x: number, y: number, z: number): boolean;
        forAllFaces(faceConsumer: $DiscreteVoxelShape$IntFaceConsumer_): void;
        firstFull(axis: $Direction$Axis_, y: number, z: number): number;
        firstFull(axis: $Direction$Axis_): number;
        lastFull(axis: $Direction$Axis_, y: number, z: number): number;
        lastFull(axis: $Direction$Axis_): number;
        forAllBoxes(consumer: $DiscreteVoxelShape$IntLineConsumer_, combine: boolean): void;
        forAllEdges(consumer: $DiscreteVoxelShape$IntLineConsumer_, combine: boolean): void;
        isFullWide(rotation: $AxisCycle_, x: number, y: number, z: number): boolean;
        isFullWide(x: number, y: number, z: number): boolean;
        isEmpty(): boolean;
        fill(xSize: number, ySize: number, zSize: number): void;
        getSize(axis: $Direction$Axis_): number;
        getXSize(): number;
        getYSize(): number;
        getZSize(): number;
        zSize: number;
        ySize: number;
        xSize: number;
        constructor(xSize: number, ySize: number, zSize: number);
    }
    export class $EntityCollisionContext implements $CollisionContext {
        canStandOnFluid(fluid1: $FluidState, fluid2: $FluidState): boolean;
        isDescending(): boolean;
        isHoldingItem(item: $Item_): boolean;
        isAbove(shape: $VoxelShape, pos: $BlockPos_, canAscend: boolean): boolean;
        getEntity(): $Entity;
        static EMPTY: $CollisionContext;
        /**
         * @deprecated
         */
        constructor(entity: $Entity);
        constructor(descending: boolean, entityBottom: number, arg2: $ItemStack_, heldItem: $Predicate_<$FluidState>, canStandOnFluid: $Entity | null);
    }
    export class $CollisionContext {
        static of(entity: $Entity): $CollisionContext;
        static empty(): $CollisionContext;
    }
    export interface $CollisionContext {
        canStandOnFluid(fluid1: $FluidState, fluid2: $FluidState): boolean;
        isDescending(): boolean;
        isHoldingItem(item: $Item_): boolean;
        isAbove(shape: $VoxelShape, pos: $BlockPos_, canAscend: boolean): boolean;
    }
    export class $VoxelShape implements $VoxelShapeAccessor$1, $VoxelShapeAccessor, $FastVoxelShapeIterable, $VoxelShapeAccess {
        getCoords(axis: $Direction$Axis_): $DoubleList;
        singleEncompassing(): $VoxelShape;
        forAllBoxes(action: $Shapes$DoubleLineConsumer_): void;
        forAllEdges(action: $Shapes$DoubleLineConsumer_): void;
        findIndex(axis: $Direction$Axis_, position: number): number;
        collideX(movementAxis: $AxisCycle_, collisionBox: $AABB_, desiredOffset: number): number;
        sable$allBoxes(): $Iterator<any>;
        getFaceShape(side: $Direction_): $VoxelShape;
        move(xOffset: number, arg1: number, yOffset: number): $VoxelShape;
        get(axis: $Direction$Axis_, index: number): number;
        min(axis: $Direction$Axis_, primaryPosition: number, arg2: number): number;
        min(axis: $Direction$Axis_): number;
        max(axis: $Direction$Axis_): number;
        max(axis: $Direction$Axis_, primaryPosition: number, arg2: number): number;
        isEmpty(): boolean;
        bounds(): $AABB;
        optimize(): $VoxelShape;
        collide(movementAxis: $Direction$Axis_, collisionBox: $AABB_, desiredOffset: number): number;
        clip(startVec: $Vec3_, endVec: $Vec3_, pos: $BlockPos_): $BlockHitResult;
        closestPointTo(point: $Vec3_): ($Vec3) | undefined;
        toAabbs(): $List<$AABB>;
        getShape(): $DiscreteVoxelShape;
        copycats$getShape(): $DiscreteVoxelShape;
        copycats$setShape(shape: $DiscreteVoxelShape): void;
        copycats$callGetCoords(axis: $Direction$Axis_): $DoubleList;
        setShape(shape: $DiscreteVoxelShape): void;
        getFaces(): $VoxelShape[];
        setFaces(arg0: $VoxelShape[]): void;
        shape: $DiscreteVoxelShape;
        constructor(shape: $DiscreteVoxelShape);
    }
    export class $DiscreteVoxelShape$IntLineConsumer {
    }
    export interface $DiscreteVoxelShape$IntLineConsumer {
        consume(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
    }
    /**
     * Values that may be interpreted as {@link $DiscreteVoxelShape$IntLineConsumer}.
     */
    export type $DiscreteVoxelShape$IntLineConsumer_ = ((arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number) => void);
    export class $Shapes$DoubleLineConsumer {
    }
    export interface $Shapes$DoubleLineConsumer {
        consume(minX: number, arg1: number, minY: number, arg3: number, minZ: number, arg5: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Shapes$DoubleLineConsumer}.
     */
    export type $Shapes$DoubleLineConsumer_ = ((arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number) => void);
}
