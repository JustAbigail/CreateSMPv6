import { $Runnable_, $Runnable } from "@package/java/lang";

declare module "@package/net/irisshaders/iris/gl/state" {
    export class $ValueUpdateNotifier {
    }
    export interface $ValueUpdateNotifier {
        setListener(arg0: $Runnable_): void;
    }
    /**
     * Values that may be interpreted as {@link $ValueUpdateNotifier}.
     */
    export type $ValueUpdateNotifier_ = ((arg0: $Runnable) => void);
}
