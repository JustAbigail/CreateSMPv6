import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $EntityVisual } from "@package/dev/engine_room/flywheel/api/visual";

declare module "@package/dev/engine_room/flywheel/lib/visualization" {
    export class $SimpleEntityVisualizer$Factory<T extends $Entity> {
    }
    export interface $SimpleEntityVisualizer$Factory<T extends $Entity> {
        create(arg0: $VisualizationContext, arg1: T, arg2: number): $EntityVisual<T>;
    }
    /**
     * Values that may be interpreted as {@link $SimpleEntityVisualizer$Factory}.
     */
    export type $SimpleEntityVisualizer$Factory_<T> = ((arg0: $VisualizationContext, arg1: T, arg2: number) => $EntityVisual<T>);
}
