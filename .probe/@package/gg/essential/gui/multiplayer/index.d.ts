import { $Function1_ } from "@package/kotlin/jvm/functions";
import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $ServerData } from "@package/net/minecraft/client/multiplayer";
import { $JoinMultiplayerScreen } from "@package/net/minecraft/client/gui/screens/multiplayer";
import { $UMatrixStack } from "@package/gg/essential/universal";
import { $Button } from "@package/net/minecraft/client/gui/components";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $UUID_, $List_ } from "@package/java/util";
import { $NewServerDiscoveryManager$ImpressionTracker } from "@package/gg/essential/network/connectionmanager/serverdiscovery";
import { $UDrawContext } from "@package/gg/essential/util";

declare module "@package/gg/essential/gui/multiplayer" {
    export class $EssentialMultiplayerGui$Companion {
        isRefreshing(): boolean;
        getCancelButtonText(): string;
        getSecondButtonRowYOffset(): number;
        getServerListSeed(): number;
        setServerListSeed(arg0: number): void;
        setRefreshing(arg0: boolean): void;
        getInstance(): $EssentialMultiplayerGui;
        constructor($constructor_marker: $DefaultConstructorMarker);
    }
    export class $EssentialMultiplayerGui {
        initGui(screen: $JoinMultiplayerScreen): void;
        updatePlayerActivity(uuid: $UUID_): void;
        updateSpsSessions(): void;
        getImpressionTracker(): $NewServerDiscoveryManager$ImpressionTracker;
        setImpressionTracker(arg0: $NewServerDiscoveryManager$ImpressionTracker): void;
        onButtonClicked(button: $Button): void;
        showTooltipString(xPos: number, yPos: number, targetWidth: number, targetHeight: number, text: string): void;
        showDownloadModal(serverData: $ServerData): void;
        static access$isRefreshing$cp(): boolean;
        static access$setRefreshing$cp(arg0: boolean): void;
        static access$getCancelButtonText$cp(): string;
        static access$getSecondButtonRowYOffset$cp(): number;
        static access$getServerListSeed$cp(): number;
        static access$setServerListSeed$cp(arg0: number): void;
        setupButtons(buttons: $List_<$Button>, addButton: $Function1_<$Button, $Button>, removeButton: $Function1_<$Button, $Button>): void;
        updateButtonState(): void;
        onConnectToServer(serverData: $ServerData, ci: $CallbackInfo): void;
        switchTab(tab: number): void;
        static getInstance(): $EssentialMultiplayerGui;
        draw(drawContext: $UDrawContext): void;
        onClosed(): void;
        static Companion: $EssentialMultiplayerGui$Companion;
        impressionTracker: $NewServerDiscoveryManager$ImpressionTracker;
        constructor();
    }
    export class $FriendsIndicator {
        updatePlayerStatus(uuid: $UUID_): void;
        draw(matrixStack: $UMatrixStack, x: number, y: number, listWidth: number, mouseX: number, mouseY: number, populationInfoText: number): string;
        getServer(): $ServerData;
        /**
         * @deprecated
         */
        static HEAD_SIZE: number;
        /**
         * @deprecated
         */
        static PADDED_HEAD_WIDTH: number;
        /**
         * @deprecated
         */
        static TRUNCATED_WIDTH: number;
        /**
         * @deprecated
         */
        static HEAD_PADDING: number;
        /**
         * @deprecated
         */
        static MAX_ALLOWED_ICONS: number;
        constructor(server: $ServerData);
    }
}
