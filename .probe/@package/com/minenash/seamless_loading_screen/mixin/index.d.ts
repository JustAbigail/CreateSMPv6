import { $BooleanSupplier } from "@package/java/util/function";

declare module "@package/com/minenash/seamless_loading_screen/mixin" {
    export class $DebugHudAccesor {
    }
    export interface $DebugHudAccesor {
        seamless$showDebugHud(arg0: boolean): void;
        seamless$renderingChartVisible(arg0: boolean): void;
        seamless$renderingAndTickChartsVisible(arg0: boolean): void;
    }
    export class $DownloadingTerrainScreenAccessor {
    }
    export interface $DownloadingTerrainScreenAccessor {
        sls$shouldClose(): $BooleanSupplier;
    }
    /**
     * Values that may be interpreted as {@link $DownloadingTerrainScreenAccessor}.
     */
    export type $DownloadingTerrainScreenAccessor_ = (() => $BooleanSupplier);
}
