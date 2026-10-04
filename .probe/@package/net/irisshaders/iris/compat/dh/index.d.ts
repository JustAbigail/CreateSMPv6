import { $Object } from "@package/java/lang";
import { $Matrix4f } from "@package/org/joml";
import { $IrisRenderingPipeline } from "@package/net/irisshaders/iris/pipeline";

declare module "@package/net/irisshaders/iris/compat/dh" {
    export class $DHCompat {
        static checkFrame(): boolean;
        clearPipeline(): void;
        static getNearPlane(): number;
        static getFarPlane(): number;
        getDepthTex(): number;
        getDepthTexNoTranslucent(): number;
        static hasRenderingEnabled(): boolean;
        static getProjection(): $Matrix4f;
        static run(): void;
        getInstance(): $Object;
        static getRenderDistance(): number;
        static lastPackIncompatible(): boolean;
        constructor(arg0: $IrisRenderingPipeline, arg1: boolean);
        static get nearPlane(): number;
        static get farPlane(): number;
        get depthTex(): number;
        get depthTexNoTranslucent(): number;
        static get projection(): $Matrix4f;
        get instance(): $Object;
        static get renderDistance(): number;
    }
}
