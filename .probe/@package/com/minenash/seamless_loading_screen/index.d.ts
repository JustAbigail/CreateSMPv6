import { $Enum } from "@package/java/lang";
export * as mixin from "@package/com/minenash/seamless_loading_screen/mixin";

declare module "@package/com/minenash/seamless_loading_screen" {
    export class $DisplayMode extends $Enum<$DisplayMode> {
        static values(): $DisplayMode[];
        static valueOf(name: string): $DisplayMode;
        next(): $DisplayMode;
        static FREEZE: $DisplayMode;
        static DISABLED: $DisplayMode;
        static ENABLED: $DisplayMode;
    }
    /**
     * Values that may be interpreted as {@link $DisplayMode}.
     */
    export type $DisplayMode_ = "enabled" | "freeze" | "disabled";
    export class $ServerInfoExtension {
    }
    export interface $ServerInfoExtension {
        getDisplayMode(): $DisplayMode;
        setDisplayMode(arg0: $DisplayMode_): void;
    }
}
