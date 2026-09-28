import { $Function1_, $Function2_ } from "@package/kotlin/jvm/functions";
import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $Window } from "@package/gg/essential/elementa/components";
import { $LayoutScope, $Modifier_ } from "@package/gg/essential/gui/layoutdsl";
import { $Map_, $Map } from "@package/java/util";
import { $Object } from "@package/java/lang";
import { $Unit } from "@package/kotlin";

declare module "@package/gg/essential/gui/proxies" {
    export class $ScreenWithVanillaProxyElementsExt {
    }
    export interface $ScreenWithVanillaProxyElementsExt {
        essential$getProxyHandler(): $ScreenWithProxiesHandler;
    }
    /**
     * Values that may be interpreted as {@link $ScreenWithVanillaProxyElementsExt}.
     */
    export type $ScreenWithVanillaProxyElementsExt_ = (() => $ScreenWithProxiesHandler);
    export class $ScreenWithProxiesHandler$Companion {
        forMainMenu(screen: $Screen): $ScreenWithProxiesHandler;
        forPauseMenu(screen: $Screen): $ScreenWithProxiesHandler;
        forOptionsMenu(screen: $Screen): $ScreenWithProxiesHandler;
        mountWithProxy($this$mountWithProxy: $LayoutScope, proxyHandler: $ScreenWithProxiesHandler, id: string, modifier: $Modifier_, block: $Function1_<$LayoutScope, $Unit>): void;
        static mountWithProxy$default(arg0: $ScreenWithProxiesHandler$Companion, arg1: $LayoutScope, arg2: $ScreenWithProxiesHandler, arg3: string, arg4: $Modifier_, arg5: $Function1_<any, any>, arg6: number, arg7: $Object): void;
        constructor($constructor_marker: $DefaultConstructorMarker);
    }
    export class $ScreenWithProxiesHandler {
        static forMainMenu(screen: $Screen): $ScreenWithProxiesHandler;
        initGui(): void;
        static forPauseMenu(screen: $Screen): $ScreenWithProxiesHandler;
        static forOptionsMenu(screen: $Screen): $ScreenWithProxiesHandler;
        static access$getMainMenuButtons$cp(): $Map<any, any>;
        static access$getMainMenuFlags$cp(): $Map<any, any>;
        static access$getMainAndPauseMenuPlayers$cp(): $Map<any, any>;
        static access$getPauseMenuButtons$cp(): $Map<any, any>;
        static access$getPauseMenuFlags$cp(): $Map<any, any>;
        static access$getOptionsMenuButtons$cp(): $Map<any, any>;
        static access$getProxiesById$p($this: $ScreenWithProxiesHandler): $Map<any, any>;
        static Companion: $ScreenWithProxiesHandler$Companion;
        constructor(screen: $Screen, buttonIds: $Map_<string, number>, flagIds: $Map_<string, number>, playerIds: $Map_<string, number>, initialLayout: $Function2_<$Window, $ScreenWithProxiesHandler, $Unit>);
    }
}
