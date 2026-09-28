import { $Runnable_ } from "@package/java/lang";
export * as custom from "@package/net/irisshaders/iris/uniforms/custom";

declare module "@package/net/irisshaders/iris/uniforms" {
    export class $FrameUpdateNotifier {
        addListener(arg0: $Runnable_): void;
        onNewFrame(): void;
        constructor();
    }
}
