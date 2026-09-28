import { $Record } from "@package/java/lang";
import { $InputResourceSet_, $InputResourceSet } from "@package/io/homo/superresolution/api";
import { $Matrix4f, $Vector2f } from "@package/org/joml";

declare module "@package/io/homo/superresolution/common/upscale" {
    export class $DispatchResource extends $Record {
        screenWidth(): number;
        screenHeight(): number;
        renderWidth(): number;
        renderHeight(): number;
        lastModelViewProjectionMatrix(): $Matrix4f;
        lastModelViewMatrix(): $Matrix4f;
        jitterSequenceLength(): number;
        verticalFov(): number;
        jitterOffset(): $Vector2f;
        frameTimeDelta(): number;
        preExposure(): number;
        cameraNear(): number;
        cameraFar(): number;
        renderSize(): $Vector2f;
        viewMatrix(): $Matrix4f;
        lastViewMatrix(): $Matrix4f;
        lastProjectionMatrix(): $Matrix4f;
        horizontalFov(): number;
        modelViewProjectionMatrix(): $Matrix4f;
        screenSize(): $Vector2f;
        frameCount(): number;
        resources(): $InputResourceSet;
        projectionMatrix(): $Matrix4f;
        modelViewMatrix(): $Matrix4f;
        constructor(renderWidth: number, renderHeight: number, renderSize: $Vector2f, screenWidth: number, screenHeight: number, screenSize: $Vector2f, frameCount: number, frameTimeDelta: number, verticalFov: number, horizontalFov: number, cameraNear: number, cameraFar: number, jitterOffset: $Vector2f, jitterSequenceLength: number, modelViewMatrix: $Matrix4f, projectionMatrix: $Matrix4f, modelViewProjectionMatrix: $Matrix4f, viewMatrix: $Matrix4f, lastModelViewMatrix: $Matrix4f, lastProjectionMatrix: $Matrix4f, lastModelViewProjectionMatrix: $Matrix4f, lastViewMatrix: $Matrix4f, preExposure: number, resources: $InputResourceSet_);
    }
    /**
     * Values that may be interpreted as {@link $DispatchResource}.
     */
    export type $DispatchResource_ = { preExposure?: number, frameTimeDelta?: number, jitterOffset?: $Vector2f, cameraFar?: number, screenHeight?: number, jitterSequenceLength?: number, viewMatrix?: $Matrix4f, verticalFov?: number, lastModelViewProjectionMatrix?: $Matrix4f, horizontalFov?: number, screenWidth?: number, lastModelViewMatrix?: $Matrix4f, renderHeight?: number, modelViewProjectionMatrix?: $Matrix4f, projectionMatrix?: $Matrix4f, frameCount?: number, lastViewMatrix?: $Matrix4f, cameraNear?: number, screenSize?: $Vector2f, modelViewMatrix?: $Matrix4f, renderWidth?: number, resources?: $InputResourceSet_, lastProjectionMatrix?: $Matrix4f, renderSize?: $Vector2f,  } | [preExposure?: number, frameTimeDelta?: number, jitterOffset?: $Vector2f, cameraFar?: number, screenHeight?: number, jitterSequenceLength?: number, viewMatrix?: $Matrix4f, verticalFov?: number, lastModelViewProjectionMatrix?: $Matrix4f, horizontalFov?: number, screenWidth?: number, lastModelViewMatrix?: $Matrix4f, renderHeight?: number, modelViewProjectionMatrix?: $Matrix4f, projectionMatrix?: $Matrix4f, frameCount?: number, lastViewMatrix?: $Matrix4f, cameraNear?: number, screenSize?: $Vector2f, modelViewMatrix?: $Matrix4f, renderWidth?: number, resources?: $InputResourceSet_, lastProjectionMatrix?: $Matrix4f, renderSize?: $Vector2f, ];
}
