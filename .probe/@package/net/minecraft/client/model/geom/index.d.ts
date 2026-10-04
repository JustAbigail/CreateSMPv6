import { $ModelPartAccessor } from "@package/dev/engine_room/flywheel/impl/mixin";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Mat4 } from "@package/gg/essential/lib/kotgl/matrix/matrices";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $ResourceManager, $ResourceManagerReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $List, $Map_, $Map, $Set_, $List_ } from "@package/java/util";
import { $ExtraTransformHolder } from "@package/gg/essential/mixins/ext/client/model/geom";
import { $RandomSource } from "@package/net/minecraft/util";
import { $IUpperPartHelper } from "@package/dev/kosmx/playerAnim/impl";
import { $Direction_ } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $IModelPartExtension } from "@package/net/mehvahdjukaar/moonlight/api/client/model";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $VertexConsumer, $PoseStack, $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $Vector3f } from "@package/org/joml";
export * as builders from "@package/net/minecraft/client/model/geom/builders";

declare module "@package/net/minecraft/client/model/geom" {
    export class $ModelPart$Cube {
        compile(pose: $PoseStack$Pose, buffer: $VertexConsumer, packedLight: number, packedOverlay: number, color: number): void;
        minY: number;
        minX: number;
        maxZ: number;
        maxY: number;
        maxX: number;
        minZ: number;
        constructor(texCoordU: number, texCoordV: number, originX: number, originY: number, originZ: number, dimensionX: number, dimensionY: number, dimensionZ: number, gtowX: number, growY: number, growZ: number, mirror: boolean, texScaleU: number, texScaleV: number, visibleFaces: $Set_<$Direction_>);
    }
    export class $EntityModelSet implements $ResourceManagerReloadListener {
        bakeLayer(modelLayerLocation: $ModelLayerLocation): $ModelPart;
        onResourceManagerReload(resourceManager: $ResourceManager): void;
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        getName(): string;
        constructor();
        get name(): string;
    }
    export class $ModelPart$Visitor {
    }
    export interface $ModelPart$Visitor {
        visit(pose: $PoseStack$Pose, path: string, index: number, cube: $ModelPart$Cube): void;
    }
    /**
     * Values that may be interpreted as {@link $ModelPart$Visitor}.
     */
    export type $ModelPart$Visitor_ = ((arg0: $PoseStack$Pose, arg1: string, arg2: number, arg3: $ModelPart$Cube) => void);
    export class $ModelPart implements $IUpperPartHelper, $ModelPartAccessor, $IModelPartExtension, $ExtraTransformHolder {
        hasChild(name: string): boolean;
        setPos(x: number, y: number, z: number): void;
        storePose(): $PartPose;
        loadPose(partPose: $PartPose): void;
        setInitialPose(partPose: $PartPose): void;
        moonlight$setDimensions(arg0: number, arg1: number): void;
        getAllParts(): $Stream<$ModelPart>;
        getInitialPose(): $PartPose;
        offsetRotation(offset: $Vector3f): void;
        getRandomCube(random: $RandomSource): $ModelPart$Cube;
        moonlight$getTextHeight(): number;
        moonlight$getTextWidth(): number;
        resetPose(): void;
        translateAndRotate(poseStack: $PoseStack): void;
        isUpperPart(): boolean;
        setUpperPart(bl: boolean): void;
        offsetScale(offset: $Vector3f): void;
        setRotation(x: number, y: number, z: number): void;
        offsetPos(offset: $Vector3f): void;
        copyFrom(modelPart: $ModelPart): void;
        visit(poseStack: $PoseStack, visitor: $ModelPart$Visitor_): void;
        getChild(name: string): $ModelPart;
        setExtra(extra: $Mat4): void;
        getExtra(): $Mat4;
        isEmpty(): boolean;
        render(poseStack: $PoseStack, buffer: $VertexConsumer, packedLight: number, packedOverlay: number): void;
        render(poseStack: $PoseStack, buffer: $VertexConsumer, packedLight: number, packedOverlay: number, color: number): void;
        flywheel$children(): $Map<string, $ModelPart>;
        flywheel$compile(pose: $PoseStack$Pose, buffer: $VertexConsumer, packedLight: number, packedOverlay: number, color: number): void;
        visible: boolean;
        static DEFAULT_SCALE: number;
        zRot: number;
        yRot: number;
        xRot: number;
        yScale: number;
        children: $Map<string, $ModelPart>;
        xScale: number;
        cubes: $List<$ModelPart$Cube>;
        x: number;
        y: number;
        z: number;
        skipDraw: boolean;
        zScale: number;
        constructor(cubes: $List_<$ModelPart$Cube>, children: $Map_<string, $ModelPart>);
        get allParts(): $Stream<$ModelPart>;
        get empty(): boolean;
    }
    export class $ModelLayerLocation {
        getLayer(): string;
        getModel(): $ResourceLocation;
        constructor(model: $ResourceLocation_, layer: string);
        get layer(): string;
        get model(): $ResourceLocation;
    }
    export class $PartPose {
        static offsetAndRotation(x: number, y: number, z: number, xRot: number, yRot: number, zRot: number): $PartPose;
        static offset(x: number, y: number, z: number): $PartPose;
        static rotation(x: number, y: number, z: number): $PartPose;
        static ZERO: $PartPose;
        zRot: number;
        yRot: number;
        x: number;
        xRot: number;
        y: number;
        z: number;
        constructor(x: number, y: number, z: number, xRot: number, yRot: number, zRot: number);
    }
}
