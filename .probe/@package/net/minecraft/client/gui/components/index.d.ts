import { $Language } from "@package/net/minecraft/locale";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $GuiMessage, $GuiMessageTag, $OptionInstance$TooltipSupplier_, $GuiMessage$Line_, $Minecraft, $GuiMessage_, $GuiMessageTag_ } from "@package/net/minecraft/client";
import { $UUID_, $Map, $UUID, $List, $Collection_, $List_ } from "@package/java/util";
import { $WidgetHeightAccessor } from "@package/rikka/lanserverproperties/mixin";
import { $FormattedCharSequence, $FormattedCharSequence_, $ArrayListDeque } from "@package/net/minecraft/util";
import { $PlayerInfo } from "@package/net/minecraft/client/multiplayer";
import { $Supplier_, $Consumer_, $Predicate_, $Predicate, $Consumer, $Function_, $BooleanSupplier, $BiFunction_, $BooleanSupplier_, $Supplier } from "@package/java/util/function";
import { $BossEvent$BossBarColor, $BossEvent, $BossEvent$BossBarOverlay_, $BossEvent$BossBarColor_, $BossEvent$BossBarOverlay } from "@package/net/minecraft/world";
import { $SoundManager, $WeighedSoundEvents, $SoundEventListener } from "@package/net/minecraft/client/sounds";
import { $IAbstractWidgetExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $ClientTooltipPositioner } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $LocalIntRef, $LocalFloatRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $Record } from "@package/java/lang";
import { $LayoutElement } from "@package/net/minecraft/client/gui/layouts";
import { $NarratableEntry$NarrationPriority, $NarrationElementOutput, $NarratableEntry, $NarrationSupplier } from "@package/net/minecraft/client/gui/narration";
import { $MessageSignature_, $MutableComponent, $Component_, $MutableComponent_, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $ScreenRectangle_, $FocusNavigationEvent_, $ScreenRectangle } from "@package/net/minecraft/client/gui/navigation";
import { $ClientboundBossEventPacket } from "@package/net/minecraft/network/protocol/game";
import { $AbstractWidgetAccessor as $AbstractWidgetAccessor$1 } from "@package/de/mrjulsen/mcdragonlib/mixin";
import { $Duration_ } from "@package/java/time";
import { $LocalSampleLogger, $RemoteDebugSampleType_ } from "@package/net/minecraft/util/debugchart";
import { $AccessEditBox } from "@package/com/blamejared/searchables/mixin";
import { $AbstractWidgetAccessor } from "@package/io/homo/superresolution/common/mixin/gui";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Scoreboard, $Objective } from "@package/net/minecraft/world/scores";
import { $Gui, $Font, $ComponentPath, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $DebugHudAccesor } from "@package/com/minenash/seamless_loading_screen/mixin";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";
export * as toasts from "@package/net/minecraft/client/gui/components/toasts";
export * as tabs from "@package/net/minecraft/client/gui/components/tabs";
export * as events from "@package/net/minecraft/client/gui/components/events";
export * as spectator from "@package/net/minecraft/client/gui/components/spectator";

declare module "@package/net/minecraft/client/gui/components" {
    export class $DebugScreenOverlay implements $DebugHudAccesor {
        getTickTimeLogger(): $LocalSampleLogger;
        toggleOverlay(): void;
        toggleProfilerChart(): void;
        toggleFpsCharts(): void;
        toggleNetworkCharts(): void;
        getPingLogger(): $LocalSampleLogger;
        logRemoteSample(sample: number[], sampleType: $RemoteDebugSampleType_): void;
        showNetworkCharts(): boolean;
        collectSystemInformationText(): $List<string>;
        collectGameInformationText(): $List<string>;
        getGameInformation(): $List<string>;
        drawGameInformation(guiGraphics: $GuiGraphics): void;
        getSystemInformation(): $List<string>;
        drawSystemInformation(guiGraphics: $GuiGraphics): void;
        handler$dfh000$fabric_renderer_api_v1$getLeftText(arg0: $CallbackInfoReturnable<any>): void;
        localvar$bhc000$veil$modifyGameInformation(arg0: $List_<any>): $List<any>;
        localvar$hjh000$sable$addDebugInfo(arg0: $List_<any>): $List<any>;
        showFpsCharts(): boolean;
        getBandwidthLogger(): $LocalSampleLogger;
        clearChunkCache(): void;
        reset(): void;
        render(guiGraphics: $GuiGraphics): void;
        showProfilerChart(): boolean;
        showDebugScreen(): boolean;
        logFrameDuration(frameDuration: number): void;
        seamless$showDebugHud(arg0: boolean): void;
        seamless$renderingChartVisible(arg0: boolean): void;
        seamless$renderingAndTickChartsVisible(arg0: boolean): void;
        constructor(minecraft: $Minecraft);
        get tickTimeLogger(): $LocalSampleLogger;
        get pingLogger(): $LocalSampleLogger;
        get gameInformation(): $List<string>;
        get systemInformation(): $List<string>;
        get bandwidthLogger(): $LocalSampleLogger;
    }
    export class $Tooltip implements $NarrationSupplier {
        static create(message: $Component_): $Tooltip;
        static create(message: $Component_, narration: $Component_ | null): $Tooltip;
        toCharSequence(minecraft: $Minecraft): $List<$FormattedCharSequence>;
        /**
         * Updates the narration output with the current narration information.
         */
        updateNarration(narrationElementOutput: $NarrationElementOutput): void;
        static splitTooltip(minecraft: $Minecraft, message: $Component_): $List<$FormattedCharSequence>;
        cachedTooltip: $List<$FormattedCharSequence>;
        splitWithLanguage: $Language;
        constructor(message: $Component_, narration: $Component_ | null);
    }
    export class $WidgetTooltipHolder {
        refreshTooltipForNextRenderPass(hovering: boolean, focused: boolean, screenRectangle: $ScreenRectangle_): void;
        createTooltipPositioner(screenRectangle: $ScreenRectangle_, hovering: boolean, focused: boolean): $ClientTooltipPositioner;
        get(): $Tooltip;
        set(tooltip: $Tooltip | null): void;
        setDelay(delay: $Duration_): void;
        updateNarration(output: $NarrationElementOutput): void;
        constructor();
        set delay(value: $Duration_);
    }
    export class $EditBox extends $AbstractWidget implements $Renderable, $AccessEditBox {
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        isVisible(): boolean;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setTextColor(num: number): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setMaxLength(num: number): void;
        setBordered(select: boolean): void;
        setResponder(responder: $Consumer_<string>): void;
        setCanLoseFocus(select: boolean): void;
        setHint(hint: $Component_): void;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        canConsumeInput(): boolean;
        moveCursor(delta: number, select: boolean): void;
        moveCursorToStart(select: boolean): void;
        /**
         * Returns the current position of the cursor.
         */
        getInnerWidth(): number;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        isBordered(): boolean;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setTextColorUneditable(num: number): void;
        /**
         * Adds the given text after the cursor, or replaces the currently selected text if there is a selection.
         */
        setSuggestion(textToWrite: string | null): void;
        getScreenX(delta: number): number;
        setTextShadow(select: boolean): void;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        getTextShadow(): boolean;
        moveCursorToEnd(select: boolean): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setHighlightPos(num: number): void;
        /**
         * Returns the text between the cursor and selectionEnd.
         */
        getHighlighted(): string;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setCursorPosition(num: number): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        deleteWords(num: number): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        deleteChars(num: number): void;
        getWordPosition(delta: number): number;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        deleteCharsToPos(num: number): void;
        moveCursorTo(delta: number, select: boolean): void;
        setEditable(select: boolean): void;
        setFilter(validator: $Predicate_<string>): void;
        setFormatter(textFormatter: $BiFunction_<string, number, $FormattedCharSequence>): void;
        /**
         * Returns the text between the cursor and selectionEnd.
         */
        getValue(): string;
        /**
         * Adds the given text after the cursor, or replaces the currently selected text if there is a selection.
         */
        setValue(textToWrite: string): void;
        setVisible(select: boolean): void;
        /**
         * Returns the current position of the cursor.
         */
        getCursorPosition(): number;
        /**
         * Adds the given text after the cursor, or replaces the currently selected text if there is a selection.
         */
        insertText(textToWrite: string): void;
        searchables$getFilter(): $Predicate<string>;
        searchables$getResponder(): $Consumer<string>;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        static BACKWARDS: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_TEXT_COLOR: number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        static FORWARDS: number;
        height: number;
        constructor(font: $Font, x: number, y: number, width: number, height: number, editBox: $EditBox | null, message: $Component_);
        constructor(font: $Font, x: number, y: number, width: number, height: number, message: $Component_);
        constructor(font: $Font, width: number, height: number, message: $Component_);
        set textColor(value: number);
        set maxLength(value: number);
        set responder(value: $Consumer_<string>);
        set canLoseFocus(value: boolean);
        set hint(value: $Component_);
        get innerWidth(): number;
        set textColorUneditable(value: number);
        set suggestion(value: string | null);
        set highlightPos(value: number);
        get highlighted(): string;
        set editable(value: boolean);
        set filter(value: $Predicate_<string>);
        set formatter(value: $BiFunction_<string, number, $FormattedCharSequence>);
    }
    export class $SplashRenderer {
        render(guiGraphics: $GuiGraphics, screenWidth: number, font: $Font, color: number): void;
        static CHRISTMAS: $SplashRenderer;
        static HALLOWEEN: $SplashRenderer;
        static NEW_YEAR: $SplashRenderer;
        constructor(splash: string);
    }
    export class $Button extends $AbstractButton {
        static builder(message: $Component_, onPress: $Button$OnPress_): $Button$Builder;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(x: number, y: number, width: number, height: number, message: $Component_, onPress: $Button$OnPress_, createNarration: $Button$CreateNarration_);
        constructor(arg0: $Button$Builder);
    }
    export class $CycleButton$Builder<T> {
        withValues(values: $CycleButton$ValueListSupplier<T>): $CycleButton$Builder<T>;
        withValues(defaultList: $List_<T>, selectedList: $List_<T>): $CycleButton$Builder<T>;
        withValues(...values: T[]): $CycleButton$Builder<T>;
        withValues(values: $Collection_<T>): $CycleButton$Builder<T>;
        withValues(altListSelector: $BooleanSupplier_, defaultList: $List_<T>, selectedList: $List_<T>): $CycleButton$Builder<T>;
        withInitialValue(initialValue: T): $CycleButton$Builder<T>;
        displayOnlyValue(): $CycleButton$Builder<T>;
        withCustomNarration(narrationProvider: $Function_<$CycleButton<T>, $MutableComponent>): $CycleButton$Builder<T>;
        withTooltip(tooltipSupplier: $OptionInstance$TooltipSupplier_<T>): $CycleButton$Builder<T>;
        create(x: number, y: number, width: number, height: number, name: $Component_, onValueChange: $CycleButton$OnValueChange_<T>): $CycleButton<T>;
        create(message: $Component_, onValueChange: $CycleButton$OnValueChange_<T>): $CycleButton<T>;
        create(x: number, y: number, width: number, height: number, name: $Component_): $CycleButton<T>;
        constructor(valueStringifier: $Function_<T, $Component>);
    }
    export class $CycleButton<T> extends $AbstractButton {
        createDefaultNarrationMessage(): $MutableComponent;
        static booleanBuilder(componentOn: $Component_, componentOff: $Component_): $CycleButton$Builder<boolean>;
        static onOffBuilder(): $CycleButton$Builder<boolean>;
        static onOffBuilder(initialValue: boolean): $CycleButton$Builder<boolean>;
        getValue(): T;
        static builder<T>(valueStringifier: $Function_<T, $Component>): $CycleButton$Builder<T>;
        setValue(value: T): void;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        onValueChange: $CycleButton$OnValueChange<T>;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static DEFAULT_ALT_LIST_SELECTOR: $BooleanSupplier;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        height: number;
        constructor(x: number, y: number, width: number, height: number, message: $Component_, name: $Component_, index: number, value: T, values: $CycleButton$ValueListSupplier<T>, valueStringifier: $Function_<T, $Component>, narrationProvider: $Function_<$CycleButton<T>, $MutableComponent>, onValueChange: $CycleButton$OnValueChange_<T>, tooltipSupplier: $OptionInstance$TooltipSupplier_<T>, displayOnlyValue: boolean);
    }
    export class $Button$Builder {
        createNarration(createNarration: $Button$CreateNarration_): $Button$Builder;
        size(x: number, y: number): $Button$Builder;
        bounds(x: number, y: number, width: number, height: number): $Button$Builder;
        pos(x: number, y: number): $Button$Builder;
        build(): $Button;
        build(arg0: $Function_<$Button$Builder, $Button>): $Button;
        width(width: number): $Button$Builder;
        tooltip(tooltip: $Tooltip | null): $Button$Builder;
        constructor(message: $Component_, onPress: $Button$OnPress_);
    }
    export class $Button$OnPress {
    }
    export interface $Button$OnPress {
        onPress(button: $Button): void;
    }
    /**
     * Values that may be interpreted as {@link $Button$OnPress}.
     */
    export type $Button$OnPress_ = ((arg0: $Button) => void);
    export class $BossHealthOverlay {
        shouldCreateWorldFog(): boolean;
        reset(): void;
        update(packet: $ClientboundBossEventPacket): void;
        render(guiGraphics: $GuiGraphics): void;
        shouldDarkenScreen(): boolean;
        shouldPlayMusic(): boolean;
        events: $Map<$UUID, $LerpingBossEvent>;
        constructor(minecraft: $Minecraft);
    }
    export class $CycleButton$ValueListSupplier<T> {
        static create<T>(altListSelector: $BooleanSupplier_, defaultList: $List_<T>, selectedList: $List_<T>): $CycleButton$ValueListSupplier<T>;
        static create<T>(values: $Collection_<T>): $CycleButton$ValueListSupplier<T>;
    }
    export interface $CycleButton$ValueListSupplier<T> {
        getSelectedList(): $List<T>;
        getDefaultList(): $List<T>;
        get selectedList(): $List<T>;
        get defaultList(): $List<T>;
    }
    export class $CycleButton$OnValueChange<T> {
    }
    export interface $CycleButton$OnValueChange<T> {
        onValueChange(cycleButton: $CycleButton<T>, value: T): void;
    }
    /**
     * Values that may be interpreted as {@link $CycleButton$OnValueChange}.
     */
    export type $CycleButton$OnValueChange_<T> = ((arg0: $CycleButton<T>, arg1: T) => void);
    export class $ChatComponent$DelayedMessageDeletion extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ChatComponent$DelayedMessageDeletion}.
     */
    export type $ChatComponent$DelayedMessageDeletion_ = { deletableAfter?: number, signature?: $MessageSignature_,  } | [deletableAfter?: number, signature?: $MessageSignature_, ];
    export class $LerpingBossEvent extends $BossEvent {
        darkenScreen: boolean;
        playBossMusic: boolean;
        color: $BossEvent$BossBarColor;
        overlay: $BossEvent$BossBarOverlay;
        name: $Component;
        progress: number;
        createWorldFog: boolean;
        targetPercent: number;
        setTime: number;
        constructor(id: $UUID_, name: $Component_, progress: number, color: $BossEvent$BossBarColor_, overlay: $BossEvent$BossBarOverlay_, darkenScreen: boolean, bossMusic: boolean, worldFog: boolean);
    }
    export class $AbstractButton extends $AbstractWidget {
        renderString(guiGraphics: $GuiGraphics, font: $Font, color: number): void;
        onPress(): void;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        height: number;
        constructor(x: number, y: number, width: number, height: number, message: $Component_);
    }
    export class $ChatComponent$State {
        messages: $List<$GuiMessage>;
        history: $List<string>;
        delayedMessageDeletions: $List<$ChatComponent$DelayedMessageDeletion>;
        constructor(messages: $List_<$GuiMessage_>, history: $List_<string>, delayedMessageDeletions: $List_<$ChatComponent$DelayedMessageDeletion_>);
    }
    export class $WidgetSprites extends $Record {
        enabledFocused(): $ResourceLocation;
        disabledFocused(): $ResourceLocation;
        get(enabled: boolean, focused: boolean): $ResourceLocation;
        enabled(): $ResourceLocation;
        disabled(): $ResourceLocation;
        constructor(enabled: $ResourceLocation_, disabled: $ResourceLocation_);
        constructor(enabled: $ResourceLocation_, disabled: $ResourceLocation_, enabledFocused: $ResourceLocation_);
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $WidgetSprites}.
     */
    export type $WidgetSprites_ = { enabledFocused?: $ResourceLocation_, disabled?: $ResourceLocation_, disabledFocused?: $ResourceLocation_, enabled?: $ResourceLocation_,  } | [enabledFocused?: $ResourceLocation_, disabled?: $ResourceLocation_, disabledFocused?: $ResourceLocation_, enabled?: $ResourceLocation_, ];
    export class $ChatComponent {
        getLinesPerPage(): number;
        scrollChat(posInc: number): void;
        handleChatQueueClicked(mouseX: number, arg1: number): boolean;
        getMessageTagAt(mouseX: number, arg1: number): $GuiMessageTag;
        getClickedComponentStyleAt(mouseX: number, arg1: number): $Style;
        /**
         * Adds this string to the list of sent messages, for recall using the up/down arrow keys
         */
        addRecentChat(message: string): void;
        /**
         * Resets the chat scroll (executed when the GUI is closed, among others)
         */
        resetChatScroll(): void;
        getRecentChat(): $ArrayListDeque<string>;
        static defaultUnfocusedPct(): number;
        /**
         * Resets the chat scroll (executed when the GUI is closed, among others)
         */
        rescaleChat(): void;
        handler$gff000$sounds$$cooldown_period(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: $CallbackInfo): void;
        modify$bjn000$chat_heads$chatheads$moveText(font: $Font, formattedCharSequence: $FormattedCharSequence_, x: number, y: number, color: number, guiMessage: $GuiMessage$Line_, yRef: $LocalIntRef, opacityRef: $LocalFloatRef): number;
        handler$bjn000$chat_heads$chatheads$renderChatHead(guiGraphics: $GuiGraphics, tickCount: number, mouseX: number, mouseY: number, focused: boolean, ci: $CallbackInfo, guiMessage: $GuiMessage$Line_, yRef: $LocalIntRef, opacityRef: $LocalFloatRef): void;
        handler$bjn000$chat_heads$chatheads$forgetRenderData(guiGraphics: $GuiGraphics, tickCount: number, mouseX: number, mouseY: number, focused: boolean, ci: $CallbackInfo): void;
        /**
         * Clears the chat.
         */
        clearMessages(clearSentMsgHistory: boolean): void;
        handler$gff000$sounds$$mention_recieve_sound_effect(arg0: $Component_, arg1: $MessageSignature_, arg2: $GuiMessageTag_, arg3: $CallbackInfo): void;
        modifyExpressionValue$bjn000$chat_heads$chatheads$fixTextOverflow(original: number): number;
        /**
         * Returns `true` if the chat GUI is open
         */
        isChatFocused(): boolean;
        deleteMessage(messageSignature: $MessageSignature_): void;
        modify$bjn000$chat_heads$chatheads$correctClickPosition(x: number, guiMessage: $GuiMessage$Line_): number;
        storeState(): $ChatComponent$State;
        /**
         * Resets the chat scroll (executed when the GUI is closed, among others)
         */
        tick(): void;
        static getWidth(height: number): number;
        getWidth(): number;
        static getHeight(height: number): number;
        getHeight(): number;
        render(guiGraphics: $GuiGraphics, tickCount: number, mouseX: number, mouseY: number, focused: boolean): void;
        addMessage(chatComponent: $Component_, headerSignature: $MessageSignature_ | null, tag: $GuiMessageTag_ | null): void;
        addMessage(chatComponent: $Component_): void;
        restoreState(state: $ChatComponent$State): void;
        getScale(): number;
        constructor(minecraft: $Minecraft);
        get linesPerPage(): number;
        get recentChat(): $ArrayListDeque<string>;
        get chatFocused(): boolean;
        get scale(): number;
    }
    export class $PlayerTabOverlay {
        getNameForDisplay(playerInfo: $PlayerInfo): $Component;
        renderPingIcon(guiGraphics: $GuiGraphics, width: number, x: number, y: number, playerInfo: $PlayerInfo): void;
        setHeader(footer: $Component_ | null): void;
        setFooter(footer: $Component_ | null): void;
        reset(): void;
        render(guiGraphics: $GuiGraphics, width: number, scoreboard: $Scoreboard, objective: $Objective | null): void;
        /**
         * Called by GuiIngame to update the information stored in the playerlist, does not actually render the list, however.
         */
        setVisible(visible: boolean): void;
        static MAX_ROWS_PER_COL: number;
        visible: boolean;
        constructor(minecraft: $Minecraft, gui: $Gui);
        set header(value: $Component_ | null);
        set footer(value: $Component_ | null);
    }
    export class $TabOrderedElement {
    }
    export interface $TabOrderedElement {
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getTabOrderGroup(): number;
        get tabOrderGroup(): number;
    }
    export class $Renderable {
    }
    export interface $Renderable {
        /**
         * Renders the graphical user interface (GUI) element.
         */
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Renderable}.
     */
    export type $Renderable_ = ((arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number) => void);
    export class $SubtitleOverlay implements $SoundEventListener {
        onPlaySound(sound: $SoundInstance, accessor: $WeighedSoundEvents, range: number): void;
        render(guiGraphics: $GuiGraphics): void;
        constructor(minecraft: $Minecraft);
    }
    export class $AbstractWidget implements $Renderable, $GuiEventListener, $LayoutElement, $NarratableEntry, $IAbstractWidgetExtension, $AbstractWidgetAccessor, $WidgetHeightAccessor, $AbstractWidgetAccessor$1 {
        getTooltip(): $Tooltip;
        setAlpha(alpha: number): void;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isHovered(): boolean;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        createNarrationMessage(): $MutableComponent;
        /**
         * @deprecated
         */
        onClick(mouseX: number, arg1: number): void;
        onRelease(mouseX: number, arg1: number): void;
        onDrag(mouseX: number, arg1: number, mouseY: number, arg3: number): void;
        isValidClickButton(button: number): boolean;
        playDownSound(handler: $SoundManager): void;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isHoveredOrFocused(): boolean;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getFGColor(): number;
        setFGColor(height: number): void;
        clearFGColor(): void;
        updateWidgetNarration(narrationElementOutput: $NarrationElementOutput): void;
        defaultButtonNarrationText(narrationElementOutput: $NarrationElementOutput): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getBottom(): number;
        setRectangle(width: number, height: number, x: number, y: number): void;
        setTabOrderGroup(height: number): void;
        static wrapDefaultNarrationMessage(message: $Component_): $MutableComponent;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getY(): number;
        setX(height: number): void;
        setY(height: number): void;
        clicked(mouseX: number, arg1: number): boolean;
        setSize(width: number, height: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getWidth(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getHeight(): number;
        getMessage(): $Component;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isActive(): boolean;
        setMessage(message: $Component_): void;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getRight(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getX(): number;
        static renderScrollingString(guiGraphics: $GuiGraphics, font: $Font, text: $Component_, minX: number, minY: number, maxX: number, maxY: number, color: number): void;
        renderScrollingString(guiGraphics: $GuiGraphics, font: $Font, width: number, color: number): void;
        static renderScrollingString(guiGraphics: $GuiGraphics, font: $Font, text: $Component_, centerX: number, minX: number, minY: number, maxX: number, maxY: number, color: number): void;
        setWidth(height: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getTabOrderGroup(): number;
        /**
         * Retrieves the next focus path based on the given focus navigation event.
         * 
         * @return the next focus path as a ComponentPath, or `null` if there is no next focus path.
         */
        nextFocusPath(event: $FocusNavigationEvent_): $ComponentPath;
        isMouseOver(mouseX: number, arg1: number): boolean;
        updateNarration(narrationElementOutput: $NarrationElementOutput): void;
        /**
         * @return the narration priority
         */
        narrationPriority(): $NarratableEntry$NarrationPriority;
        /**
         * @return the `ScreenRectangle` occupied by the GUI element
         */
        getRectangle(): $ScreenRectangle;
        /**
         * Sets the focus state of the GUI element.
         */
        setFocused(focused: boolean): void;
        /**
         * Called when a mouse button is clicked within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseClicked(mouseX: number, arg1: number, mouseY: number): boolean;
        /**
         * Called when a mouse button is clicked within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseReleased(mouseX: number, arg1: number, mouseY: number): boolean;
        visitWidgets(consumer: $Consumer_<$AbstractWidget>): void;
        setTooltip(tooltip: $Tooltip | null): void;
        setTooltipDelay(tooltipDelay: $Duration_): void;
        /**
         * Called when the mouse is dragged within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseDragged(mouseX: number, arg1: number, mouseY: number, arg3: number, button: number): boolean;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isFocused(): boolean;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        getCurrentFocusPath(): $ComponentPath;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        charTyped(arg0: string, arg1: number): boolean;
        mouseMoved(mouseX: number, arg1: number): void;
        setPosition(width: number, height: number): void;
        onClick(arg0: number, arg1: number, arg2: number): void;
        setHeight_(height: number): void;
        dragonlib$setHeight(height: number): void;
        setHeight(height: number): void;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(x: number, y: number, width: number, height: number, message: $Component_);
        get hovered(): boolean;
        get hoveredOrFocused(): boolean;
        get bottom(): number;
        get right(): number;
        set tooltipDelay(value: $Duration_);
        get currentFocusPath(): $ComponentPath;
        set height_(value: number);
    }
    export class $Button$CreateNarration {
    }
    export interface $Button$CreateNarration {
        createNarrationMessage(messageSupplier: $Supplier_<$MutableComponent>): $MutableComponent;
    }
    /**
     * Values that may be interpreted as {@link $Button$CreateNarration}.
     */
    export type $Button$CreateNarration_ = ((arg0: $Supplier<$MutableComponent>) => $MutableComponent_);
}
