import { $Record } from "@package/java/lang";
import { $InputResourceSet_, $InputResourceSet } from "@package/io/homo/superresolution/api";
import { $Matrix4f, $Vector2f } from "@package/org/joml";

declare module "@package/io/homo/superresolution/common/upscale" {
    export class $DispatchResource extends $Record {
        renderWidth(): number;
        renderHeight(): number;
        screenWidth(): number;
        screenHeight(): number;
        lastModelViewProjectionMatrix(): $Matrix4f;
        lastModelViewMatrix(): $Matrix4f;
        jitterSequenceLength(): number;
        modelViewProjectionMatrix(): $Matrix4f;
        screenSize(): $Vector2f;
        frameCount(): number;
        verticalFov(): number;
        jitterOffset(): $Vector2f;
        frameTimeDelta(): number;
        preExposure(): number;
        cameraNear(): number;
        cameraFar(): number;
        viewMatrix(): $Matrix4f;
        lastViewMatrix(): $Matrix4f;
        lastProjectionMatrix(): $Matrix4f;
        horizontalFov(): number;
        renderSize(): $Vector2f;
        resources(): $InputResourceSet;
        modelViewMatrix(): $Matrix4f;
        projectionMatrix(): $Matrix4f;
        constructor(renderWidth: number, renderHeight: number, renderSize: $Vector2f, screenWidth: number, screenHeight: number, screenSize: $Vector2f, frameCount: number, frameTimeDelta: number, verticalFov: number, horizontalFov: number, cameraNear: number, cameraFar: number, jitterOffset: $Vector2f, jitterSequenceLength: number, modelViewMatrix: $Matrix4f, projectionMatrix: $Matrix4f, modelViewProjectionMatrix: $Matrix4f, viewMatrix: $Matrix4f, lastModelViewMatrix: $Matrix4f, lastProjectionMatrix: $Matrix4f, lastModelViewProjectionMatrix: $Matrix4f, lastViewMatrix: $Matrix4f, preExposure: number, resources: $InputResourceSet_);
    }
    /**
     * Values that may be interpreted as {@link $DispatchResource}.
     */
    export type $DispatchResource_ = { modelViewProjectionMatrix?: $Matrix4f, renderHeight?: number, lastModelViewMatrix?: $Matrix4f, screenWidth?: number, horizontalFov?: number, lastModelViewProjectionMatrix?: $Matrix4f, verticalFov?: number, viewMatrix?: $Matrix4f, jitterSequenceLength?: number, screenHeight?: number, cameraFar?: number, jitterOffset?: $Vector2f, frameTimeDelta?: number, preExposure?: number, renderSize?: $Vector2f, lastProjectionMatrix?: $Matrix4f, resources?: $InputResourceSet_, renderWidth?: number, modelViewMatrix?: $Matrix4f, screenSize?: $Vector2f, cameraNear?: number, lastViewMatrix?: $Matrix4f, frameCount?: number, projectionMatrix?: $Matrix4f,  } | [modelViewProjectionMatrix?: $Matrix4f, renderHeight?: number, lastModelViewMatrix?: $Matrix4f, screenWidth?: number, horizontalFov?: number, lastModelViewProjectionMatrix?: $Matrix4f, verticalFov?: number, viewMatrix?: $Matrix4f, jitterSequenceLength?: number, screenHeight?: number, cameraFar?: number, jitterOffset?: $Vector2f, frameTimeDelta?: number, preExposure?: number, renderSize?: $Vector2f, lastProjectionMatrix?: $Matrix4f, resources?: $InputResourceSet_, renderWidth?: number, modelViewMatrix?: $Matrix4f, screenSize?: $Vector2f, cameraNear?: number, lastViewMatrix?: $Matrix4f, frameCount?: number, projectionMatrix?: $Matrix4f, ];
}
