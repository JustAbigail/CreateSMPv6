import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $List } from "@package/java/util";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $SpectatorPage } from "@package/net/minecraft/client/gui/spectator/categories";
export * as categories from "@package/net/minecraft/client/gui/spectator/categories";

declare module "@package/net/minecraft/client/gui/spectator" {
    export class $SpectatorMenu {
        getSelectedItem(): $SpectatorMenuItem;
        selectSlot(slot: number): void;
        getCurrentPage(): $SpectatorPage;
        getSelectedCategory(): $SpectatorMenuCategory;
        selectCategory(category: $SpectatorMenuCategory): void;
        getSelectedSlot(): number;
        getItems(): $List<$SpectatorMenuItem>;
        getItem(index: number): $SpectatorMenuItem;
        exit(): void;
        static CLOSE_SPRITE: $ResourceLocation;
        static PREVIOUS_PAGE_TEXT: $Component;
        static SCROLL_RIGHT_SPRITE: $ResourceLocation;
        static NEXT_PAGE_TEXT: $Component;
        static EMPTY_SLOT: $SpectatorMenuItem;
        page: number;
        static CLOSE_MENU_TEXT: $Component;
        static SCROLL_LEFT_SPRITE: $ResourceLocation;
        constructor(listener: $SpectatorMenuListener_);
        get selectedItem(): $SpectatorMenuItem;
        get currentPage(): $SpectatorPage;
        get selectedCategory(): $SpectatorMenuCategory;
        get selectedSlot(): number;
        get items(): $List<$SpectatorMenuItem>;
    }
    export class $SpectatorMenuItem {
    }
    export interface $SpectatorMenuItem {
        renderIcon(guiGraphics: $GuiGraphics, shadeColor: number, alpha: number): void;
        selectItem(menu: $SpectatorMenu): void;
        getName(): $Component;
        isEnabled(): boolean;
        get name(): $Component;
        get enabled(): boolean;
    }
    export class $SpectatorMenuCategory {
    }
    export interface $SpectatorMenuCategory {
        getPrompt(): $Component;
        getItems(): $List<$SpectatorMenuItem>;
        get prompt(): $Component;
        get items(): $List<$SpectatorMenuItem>;
    }
    export class $SpectatorMenuListener {
    }
    export interface $SpectatorMenuListener {
        onSpectatorMenuClosed(menu: $SpectatorMenu): void;
    }
    /**
     * Values that may be interpreted as {@link $SpectatorMenuListener}.
     */
    export type $SpectatorMenuListener_ = ((arg0: $SpectatorMenu) => void);
}
