import { $Path_, $Path } from "@package/java/nio/file";
import { $PackType, $PackType_ } from "@package/net/minecraft/server/packs";
import { $DiscreteVoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $StringSplitter$WidthProvider_, $StringSplitter$WidthProvider } from "@package/net/minecraft/client";
import { $List_, $Map_, $Map, $List } from "@package/java/util";

declare module "@package/team/creative/creativecore/mixin" {
    export class $MouseHandlerAccessor {
    }
    export interface $MouseHandlerAccessor {
        getLastHandleMovementTime(): number;
        get lastHandleMovementTime(): number;
    }
    /**
     * Values that may be interpreted as {@link $MouseHandlerAccessor}.
     */
    export type $MouseHandlerAccessor_ = (() => number);
    export class $VanillaPackResourcesAccessor {
    }
    export interface $VanillaPackResourcesAccessor {
        getPathsForType(): $Map<$PackType, $List<$Path>>;
        get pathsForType(): $Map<$PackType, $List<$Path>>;
    }
    /**
     * Values that may be interpreted as {@link $VanillaPackResourcesAccessor}.
     */
    export type $VanillaPackResourcesAccessor_ = (() => $Map_<$PackType_, $List_<$Path_>>);
    export class $StringSplitterAccessor {
    }
    export interface $StringSplitterAccessor {
        getWidthProvider(): $StringSplitter$WidthProvider;
        get widthProvider(): $StringSplitter$WidthProvider;
    }
    /**
     * Values that may be interpreted as {@link $StringSplitterAccessor}.
     */
    export type $StringSplitterAccessor_ = (() => $StringSplitter$WidthProvider_);
    export class $VoxelShapeAccessor {
    }
    export interface $VoxelShapeAccessor {
        setShape(arg0: $DiscreteVoxelShape): void;
        set shape(value: $DiscreteVoxelShape);
    }
    /**
     * Values that may be interpreted as {@link $VoxelShapeAccessor}.
     */
    export type $VoxelShapeAccessor_ = ((arg0: $DiscreteVoxelShape) => void);
}
