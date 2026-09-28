import { $UDrawContext } from "@package/gg/essential/util";

declare module "@package/gg/essential/mixins/impl/client/gui" {
    export class $EssentialGuiScreenBeforeClose {
    }
    export interface $EssentialGuiScreenBeforeClose {
        essential$beforeClose(): void;
    }
    /**
     * Values that may be interpreted as {@link $EssentialGuiScreenBeforeClose}.
     */
    export type $EssentialGuiScreenBeforeClose_ = (() => void);
    export class $EssentialPostScreenDrawHook {
    }
    export interface $EssentialPostScreenDrawHook {
        essential$afterDraw(arg0: $UDrawContext, arg1: number, arg2: number, arg3: number): void;
    }
    /**
     * Values that may be interpreted as {@link $EssentialPostScreenDrawHook}.
     */
    export type $EssentialPostScreenDrawHook_ = ((arg0: $UDrawContext, arg1: number, arg2: number, arg3: number) => void);
}
