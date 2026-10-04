import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Executor } from "@package/java/util/concurrent";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Minecraft, $NarratorStatus } from "@package/net/minecraft/client";
import { $List, $List_ } from "@package/java/util";
import { $Event } from "@package/net/fabricmc/fabric/api/event";
import { $FormattedCharSequence_ } from "@package/net/minecraft/util";
import { $BooleanSupplier, $BooleanSupplier_ } from "@package/java/util/function";
import { $Music } from "@package/net/minecraft/sounds";
import { $Path_ } from "@package/java/nio/file";
import { $GuiScreenAccessor } from "@package/gg/essential/mixins/transformers/client/gui";
import { $ClientTooltipPositioner_ } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $MenuType_, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Enum, $Record, $Runnable_ } from "@package/java/lang";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ScreenExtensions } from "@package/net/fabricmc/fabric/impl/client/screen";
import { $NarratableEntry$NarrationPriority, $NarratableEntry, $NarratableEntry$NarrationPriority_, $NarrationElementOutput } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $FocusNavigationEvent$ArrowNavigation, $FocusNavigationEvent$TabNavigation, $ScreenDirection_ } from "@package/net/minecraft/client/gui/navigation";
import { $CycleButton, $Tooltip, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $ScreenAccessor as $ScreenAccessor$2 } from "@package/de/mrjulsen/mcdragonlib/mixin";
import { $UDrawContext } from "@package/gg/essential/util";
import { $ScreenAccessor as $ScreenAccessor$1 } from "@package/net/createmod/ponder/mixin/client/accessor";
import { $ScreenAccessor } from "@package/net/fabricmc/fabric/mixin/screen";
import { $EssentialPostScreenDrawHook, $EssentialGuiScreenBeforeClose } from "@package/gg/essential/mixins/impl/client/gui";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Font, $ComponentPath, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $DownloadingTerrainScreenAccessor } from "@package/com/minenash/seamless_loading_screen/mixin";
import { $GuiEventListener, $AbstractContainerEventHandler } from "@package/net/minecraft/client/gui/components/events";
export * as worldselection from "@package/net/minecraft/client/gui/screens/worldselection";
export * as recipebook from "@package/net/minecraft/client/gui/screens/recipebook";
export * as inventory from "@package/net/minecraft/client/gui/screens/inventory";
export * as social from "@package/net/minecraft/client/gui/screens/social";

declare module "@package/net/minecraft/client/gui/screens" {
    export class $MenuScreens$ScreenConstructor<T extends $AbstractContainerMenu, U extends $Screen> {
    }
    export interface $MenuScreens$ScreenConstructor<T extends $AbstractContainerMenu, U extends $Screen> {
        fromPacket(title: $Component_, type: $MenuType_<T>, mc: $Minecraft, windowId: number): void;
        create(menu: T, inventory: $Inventory, title: $Component_): U;
    }
    /**
     * Values that may be interpreted as {@link $MenuScreens$ScreenConstructor}.
     */
    export type $MenuScreens$ScreenConstructor_<T, U> = ((arg0: T, arg1: $Inventory, arg2: $Component) => U);
    export class $ReceivingLevelScreen extends $Screen implements $DownloadingTerrainScreenAccessor {
        sls$shouldClose(): $BooleanSupplier;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(levelReceived: $BooleanSupplier_, reason: $ReceivingLevelScreen$Reason_);
    }
    export class $ReceivingLevelScreen$Reason extends $Enum<$ReceivingLevelScreen$Reason> {
        static values(): $ReceivingLevelScreen$Reason[];
        static valueOf(arg0: string): $ReceivingLevelScreen$Reason;
        static OTHER: $ReceivingLevelScreen$Reason;
        static NETHER_PORTAL: $ReceivingLevelScreen$Reason;
        static END_PORTAL: $ReceivingLevelScreen$Reason;
    }
    /**
     * Values that may be interpreted as {@link $ReceivingLevelScreen$Reason}.
     */
    export type $ReceivingLevelScreen$Reason_ = "nether_portal" | "end_portal" | "other";
    export class $Screen$DeferredTooltipRendering extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $Screen$DeferredTooltipRendering}.
     */
    export type $Screen$DeferredTooltipRendering_ = { tooltip?: $List_<$FormattedCharSequence_>, positioner?: $ClientTooltipPositioner_,  } | [tooltip?: $List_<$FormattedCharSequence_>, positioner?: $ClientTooltipPositioner_, ];
    export class $Screen extends $AbstractContainerEventHandler implements $Renderable, $ScreenExtensions, $ScreenAccessor, $ScreenAccessor$1, $ScreenAccessor$2, $GuiScreenAccessor, $EssentialGuiScreenBeforeClose, $EssentialPostScreenDrawHook {
        onClose(): void;
        tick(): void;
        init(): void;
        init(minecraft: $Minecraft, width: number, height: number): void;
        resize(minecraft: $Minecraft, width: number, height: number): void;
        added(): void;
        removed(): void;
        getTitle(): $Component;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        static isCopy(keyCode: number): boolean;
        isPauseScreen(): boolean;
        static hasShiftDown(): boolean;
        static hasAltDown(): boolean;
        static getTooltipFromItem(minecraft: $Minecraft, item: $ItemStack_): $List<$Component>;
        getBackgroundMusic(): $Music;
        static wrapScreenError(action: $Runnable_, errorDesc: string, screenName: string): void;
        static hasControlDown(): boolean;
        getNarrationMessage(): $Component;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        renderWithTooltip(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        renderBackground(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        shouldCloseOnEsc(): boolean;
        clearFocus(): void;
        changeFocus(path: $ComponentPath): void;
        setInitialFocus(listener: $GuiEventListener): void;
        setInitialFocus(): void;
        addRenderableWidget<T extends $GuiEventListener>(widget: T): T;
        addWidget<T extends $GuiEventListener>(widget: T): T;
        addRenderableOnly<T extends $Renderable>(renderable: T): T;
        removeWidget(listener: $GuiEventListener): void;
        clearWidgets(): void;
        insertText(text: string, overwrite: boolean): void;
        handleComponentClicked(style: $Style | null): boolean;
        repositionElements(): void;
        triggerImmediateNarration(onlyNarrateNew: boolean): void;
        rebuildWidgets(): void;
        handler$jee001$essential$onGuiClosed(ci: $CallbackInfo): void;
        renderPanorama(guiGraphics: $GuiGraphics, partialTick: number): void;
        renderBlurredBackground(partialTick: number): void;
        renderMenuBackground(guiGraphics: $GuiGraphics, x: number, y: number, width: number, height: number): void;
        renderMenuBackground(partialTick: $GuiGraphics): void;
        static renderMenuBackgroundTexture(guiGraphics: $GuiGraphics, texture: $ResourceLocation_, x: number, y: number, uOffset: number, vOffset: number, width: number, height: number): void;
        renderTransparentBackground(partialTick: $GuiGraphics): void;
        static isCut(keyCode: number): boolean;
        static isPaste(keyCode: number): boolean;
        static isSelectAll(keyCode: number): boolean;
        isValidCharacterForName(text: string, charTyped: string, cursorPos: number): boolean;
        onFilesDrop(packs: $List_<$Path_>): void;
        afterMouseMove(): void;
        afterMouseAction(): void;
        afterKeyboardAction(): void;
        handleDelayedNarration(): void;
        updateNarrationState(narrationElementOutput: $NarrationElementOutput): void;
        shouldNarrateNavigation(): boolean;
        updateNarratedWidget(narrationElementOutput: $NarrationElementOutput): void;
        static findNarratableWidget(entries: $List_<$NarratableEntry>, target: $NarratableEntry | null): $Screen$NarratableSearchResult;
        getUsageNarration(): $Component;
        updateNarratorStatus(onlyNarrateNew: boolean): void;
        clearTooltipForNextRenderPass(): void;
        setTooltipForNextRenderPass(tooltip: $List_<$FormattedCharSequence_>, positioner: $ClientTooltipPositioner_, override: boolean): void;
        setTooltipForNextRenderPass(title: $Component_): void;
        setTooltipForNextRenderPass(tooltip: $Tooltip, positioner: $ClientTooltipPositioner_, override: boolean): void;
        setTooltipForNextRenderPass(packs: $List_<$FormattedCharSequence_>): void;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        fabric_getButtons(): $List<any>;
        fabric_getRemoveEvent(): $Event<any>;
        fabric_getBeforeTickEvent(): $Event<any>;
        fabric_getAfterTickEvent(): $Event<any>;
        fabric_getBeforeRenderEvent(): $Event<any>;
        fabric_getAfterRenderEvent(): $Event<any>;
        fabric_getAllowKeyPressEvent(): $Event<any>;
        fabric_getBeforeKeyPressEvent(): $Event<any>;
        fabric_getAfterKeyPressEvent(): $Event<any>;
        fabric_getAllowKeyReleaseEvent(): $Event<any>;
        fabric_getBeforeKeyReleaseEvent(): $Event<any>;
        fabric_getAfterKeyReleaseEvent(): $Event<any>;
        fabric_getAllowMouseClickEvent(): $Event<any>;
        fabric_getBeforeMouseClickEvent(): $Event<any>;
        fabric_getAfterMouseClickEvent(): $Event<any>;
        fabric_getAllowMouseReleaseEvent(): $Event<any>;
        fabric_getBeforeMouseReleaseEvent(): $Event<any>;
        fabric_getAfterMouseReleaseEvent(): $Event<any>;
        fabric_getAllowMouseScrollEvent(): $Event<any>;
        fabric_getBeforeMouseScrollEvent(): $Event<any>;
        fabric_getAfterMouseScrollEvent(): $Event<any>;
        essential$afterDraw(drawContext: $UDrawContext, mouseX: number, mouseY: number, partialTicks: number): void;
        essential$beforeClose(): void;
        getMinecraft(): $Minecraft;
        getFont(): $Font;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        catnip$getRenderables(): $List<$Renderable>;
        dragonlib$createTabEvent(): $FocusNavigationEvent$TabNavigation;
        dragonlib$createArrowEvent(direction: $ScreenDirection_): $FocusNavigationEvent$ArrowNavigation;
        dragonlib$clearFocus(): void;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        getDrawables(): $List<$Renderable>;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        getSelectables(): $List<$NarratableEntry>;
        essential$addDrawableChild<T extends $GuiEventListener>(widget: T): T;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        essential$getChildren(): $List<$GuiEventListener>;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(title: $Component_);
        get pauseScreen(): boolean;
        get backgroundMusic(): $Music;
        get narrationMessage(): $Component;
        get usageNarration(): $Component;
        get drawables(): $List<$Renderable>;
        get selectables(): $List<$NarratableEntry>;
    }
    export class $Overlay implements $Renderable {
        isPauseScreen(): boolean;
        constructor();
        get pauseScreen(): boolean;
    }
    export class $Screen$NarratableSearchResult {
        entry: $NarratableEntry;
        index: number;
        priority: $NarratableEntry$NarrationPriority;
        constructor(entry: $NarratableEntry, index: number, priority: $NarratableEntry$NarrationPriority_);
    }
}
