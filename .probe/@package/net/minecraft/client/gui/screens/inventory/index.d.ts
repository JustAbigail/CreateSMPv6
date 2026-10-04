import { $HandledScreenAccessor } from "@package/dev/emi/emi/mixin/accessor";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Executor } from "@package/java/util/concurrent";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $CycleButton, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $Minecraft, $NarratorStatus } from "@package/net/minecraft/client";
import { $List, $Set } from "@package/java/util";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $CreativeModeInventoryScreenAccessor as $CreativeModeInventoryScreenAccessor$1 } from "@package/com/rieno/gadgetsandgizmos/mixin";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Slot, $AbstractContainerMenu, $ClickType_ } from "@package/net/minecraft/world/inventory";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $CreativeModeInventoryScreenAccessor } from "@package/dev/simulated_team/simulated/mixin/accessor";
export * as tooltip from "@package/net/minecraft/client/gui/screens/inventory/tooltip";

declare module "@package/net/minecraft/client/gui/screens/inventory" {
    export class $AbstractContainerScreen<T extends $AbstractContainerMenu> extends $Screen implements $MenuAccess<T>, $HandledScreenAccessor, $CreativeModeInventoryScreenAccessor, $CreativeModeInventoryScreenAccessor$1 {
        getTooltipFromContainerItem(stack: $ItemStack_): $List<$Component>;
        renderSlot(guiGraphics: $GuiGraphics, slot: $Slot): void;
        static renderSlotHighlight(guiGraphics: $GuiGraphics, x: number, y: number, blitOffset: number): void;
        renderSlotHighlight(arg0: $GuiGraphics, arg1: $Slot, arg2: number, arg3: number, arg4: number): void;
        static renderSlotHighlight(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
        containerTick(): void;
        renderLabels(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number): void;
        renderBg(guiGraphics: $GuiGraphics, partialTick: number, mouseX: number, mouseY: number): void;
        isHovering(x: number, y: number, width: number, height: number, mouseX: number, arg5: number): boolean;
        isHovering(slot: $Slot, mouseX: number, arg2: number): boolean;
        hasClickedOutside(mouseX: number, arg1: number, mouseY: number, arg3: number, guiLeft: number): boolean;
        /**
         * Called when the mouse is clicked over a slot or outside the gui.
         */
        slotClicked(slot: $Slot, slotId: number, mouseButton: number, type: $ClickType_): void;
        recalculateQuickCraftRemaining(): void;
        renderSlotContents(arg0: $GuiGraphics, arg1: $ItemStack_, arg2: $Slot, arg3: string | null): void;
        clearDraggingState(): void;
        handleSlotStateChanged(slotId: number, containerId: number, newState: boolean): void;
        checkHotbarKeyPressed(keyCode: number, scanCode: number): boolean;
        getSlotUnderMouse(): $Slot;
        findSlot(mouseX: number, arg1: number): $Slot;
        getXSize(): number;
        getYSize(): number;
        getSlotColor(arg0: number): number;
        renderTooltip(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number): void;
        getGuiTop(): number;
        getGuiLeft(): number;
        getFocusedSlot(): $Slot;
        getBackgroundWidth(): number;
        getBackgroundHeight(): number;
        invokeGetSlotAt(mouseX: number, arg1: number): $Slot;
        getLeftPos(): number;
        getTopPos(): number;
        getY(): number;
        getX(): number;
        getMenu(): T;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        static PANORAMA: $PanoramaRenderer;
        static INVENTORY_LOCATION: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: T;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: T, playerInventory: $Inventory, title: $Component_);
        get slotUnderMouse(): $Slot;
        get XSize(): number;
        get YSize(): number;
        get guiTop(): number;
        get guiLeft(): number;
        get focusedSlot(): $Slot;
        get backgroundWidth(): number;
        get backgroundHeight(): number;
        get y(): number;
        get x(): number;
    }
    export class $EffectRenderingInventoryScreen<T extends $AbstractContainerMenu> extends $AbstractContainerScreen<T> {
        canSeeEffects(): boolean;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        static PANORAMA: $PanoramaRenderer;
        static INVENTORY_LOCATION: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: T;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: T, playerInventory: $Inventory, title: $Component_);
    }
    export class $MenuAccess<T extends $AbstractContainerMenu> {
    }
    export interface $MenuAccess<T extends $AbstractContainerMenu> {
        getMenu(): T;
        get menu(): T;
    }
    /**
     * Values that may be interpreted as {@link $MenuAccess}.
     */
    export type $MenuAccess_<T> = (() => T);
}
