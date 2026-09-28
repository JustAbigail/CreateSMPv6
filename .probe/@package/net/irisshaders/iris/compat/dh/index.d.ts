import { $Object } from "@package/java/lang";
import { $Matrix4f } from "@package/org/joml";
import { $IrisRenderingPipeline } from "@package/net/irisshaders/iris/pipeline";

declare module "@package/net/irisshaders/iris/compat/dh" {
    export class $DHCompat {
        clearPipeline(): void;
        static getNearPlane(): number;
        static getFarPlane(): number;
        getDepthTex(): number;
        getDepthTexNoTranslucent(): number;
        static hasRenderingEnabled(): boolean;
        static getProjection(): $Matrix4f;
        static run(): void;
        getInstance(): $Object;
        static lastPackIncompatible(): boolean;
        static getRenderDistance(): number;
        static checkFrame(): boolean;
        constructor(arg0: $IrisRenderingPipeline, arg1: boolean);
    }
}
