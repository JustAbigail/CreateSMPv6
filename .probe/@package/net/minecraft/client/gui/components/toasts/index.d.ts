import { $SoundManager } from "@package/net/minecraft/client/sounds";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $Minecraft } from "@package/net/minecraft/client";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Object, $Enum, $Class } from "@package/java/lang";

declare module "@package/net/minecraft/client/gui/components/toasts" {
    export class $ToastComponent {
        getToast<T extends $Toast>(toastClass: $Class<T>, token: $Object): T;
        getNotificationDisplayTimeMultiplier(): number;
        addToast(toast: $Toast_): void;
        clear(): void;
        getMinecraft(): $Minecraft;
        render(guiGraphics: $GuiGraphics): void;
        freeSlots(): number;
        minecraft: $Minecraft;
        constructor(minecraft: $Minecraft);
        get notificationDisplayTimeMultiplier(): number;
    }
    export class $Toast$Visibility extends $Enum<$Toast$Visibility> {
        static values(): $Toast$Visibility[];
        static valueOf(arg0: string): $Toast$Visibility;
        playSound(handler: $SoundManager): void;
        static HIDE: $Toast$Visibility;
        static SHOW: $Toast$Visibility;
    }
    /**
     * Values that may be interpreted as {@link $Toast$Visibility}.
     */
    export type $Toast$Visibility_ = "show" | "hide";
    export class $Toast {
        static NO_TOKEN: $Object;
        static SLOT_HEIGHT: number;
    }
    export interface $Toast {
        getToken(): $Object;
        slotCount(): number;
        width(): number;
        height(): number;
        render(guiGraphics: $GuiGraphics, toastComponent: $ToastComponent, timeSinceLastVisible: number): $Toast$Visibility;
        get token(): $Object;
    }
    /**
     * Values that may be interpreted as {@link $Toast}.
     */
    export type $Toast_ = ((arg0: $GuiGraphics, arg1: $ToastComponent, arg2: number) => $Toast$Visibility_);
    export class $TutorialToast$Icons extends $Enum<$TutorialToast$Icons> {
        static values(): $TutorialToast$Icons[];
        static valueOf(arg0: string): $TutorialToast$Icons;
        render(guiGraphics: $GuiGraphics, x: number, y: number): void;
        static MOUSE: $TutorialToast$Icons;
        static WOODEN_PLANKS: $TutorialToast$Icons;
        static MOVEMENT_KEYS: $TutorialToast$Icons;
        static RIGHT_CLICK: $TutorialToast$Icons;
        static TREE: $TutorialToast$Icons;
        static SOCIAL_INTERACTIONS: $TutorialToast$Icons;
        static RECIPE_BOOK: $TutorialToast$Icons;
    }
    /**
     * Values that may be interpreted as {@link $TutorialToast$Icons}.
     */
    export type $TutorialToast$Icons_ = "movement_keys" | "mouse" | "tree" | "recipe_book" | "wooden_planks" | "social_interactions" | "right_click";
    export class $TutorialToast implements $Toast {
        hide(): void;
        updateProgress(progress: number): void;
        render(guiGraphics: $GuiGraphics, toastComponent: $ToastComponent, timeSinceLastVisible: number): $Toast$Visibility;
        getToken(): $Object;
        slotCount(): number;
        width(): number;
        height(): number;
        static PROGRESS_BAR_HEIGHT: number;
        static PROGRESS_BAR_X: number;
        static PROGRESS_BAR_WIDTH: number;
        static PROGRESS_BAR_Y: number;
        constructor(icon: $TutorialToast$Icons_, title: $Component_, message: $Component_ | null, progressable: boolean);
        get token(): $Object;
    }
}
