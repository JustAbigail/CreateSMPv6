import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos } from "@package/net/minecraft/core";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Visual, $SectionTrackedVisual$SectionCollector_, $DynamicVisual$Context, $LightUpdatedVisual, $BlockEntityVisual } from "@package/dev/engine_room/flywheel/api/visual";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $FrustumIntersection } from "@package/org/joml";

declare module "@package/dev/engine_room/flywheel/lib/visual" {
    export class $AbstractVisual implements $Visual {
        update(partialTick: number): void;
        "delete"(): void;
        constructor(ctx: $VisualizationContext, level: $Level_, partialTick: number);
    }
    export class $AbstractBlockEntityVisual<T extends $BlockEntity> extends $AbstractVisual implements $BlockEntityVisual<T>, $LightUpdatedVisual {
        isVisible(frustum: $FrustumIntersection): boolean;
        getVisualPosition(): $BlockPos;
        setSectionCollector(sectionCollector: $SectionTrackedVisual$SectionCollector_): void;
        doDistanceLimitThisFrame(context: $DynamicVisual$Context): boolean;
        constructor(ctx: $VisualizationContext, blockEntity: T, partialTick: number);
    }
}
