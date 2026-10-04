import { $ChunkRenderTypeSetAccessor } from "@package/net/caffeinemc/mods/sodium/mixin/platform/neoforge";
import { $Consumer_, $BooleanSupplier, $BooleanSupplier_ } from "@package/java/util/function";
import { $ExtendedChunkRenderTypeSet } from "@package/net/fabricmc/fabric/impl/blockrenderlayer";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ReceivingLevelScreen$Reason_, $ReceivingLevelScreen$Reason, $ReceivingLevelScreen } from "@package/net/minecraft/client/gui/screens";
import { $ChunkRenderTypeSetAccessor as $ChunkRenderTypeSetAccessor$1 } from "@package/dev/eriksonn/aeronautics/mixin/levitite";
import { $Iterable_, $Record, $Iterable } from "@package/java/lang";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Spliterator, $Iterator, $List, $BitSet, $Collection_, $List_ } from "@package/java/util";
export * as extensions from "@package/net/neoforged/neoforge/client/extensions";
export * as event from "@package/net/neoforged/neoforge/client/event";
export * as model from "@package/net/neoforged/neoforge/client/model";
export * as settings from "@package/net/neoforged/neoforge/client/settings";
export * as gui from "@package/net/neoforged/neoforge/client/gui";
export * as entity from "@package/net/neoforged/neoforge/client/entity";
export * as textures from "@package/net/neoforged/neoforge/client/textures";

declare module "@package/net/neoforged/neoforge/client" {
    export class $ChunkRenderTypeSet implements $Iterable<$RenderType>, $ChunkRenderTypeSetAccessor$1, $ChunkRenderTypeSetAccessor, $ExtendedChunkRenderTypeSet {
        static create$sodium_$md$3675d4$2(arg0: $BitSet): $ChunkRenderTypeSet;
        sinytra$firstLayer(): $RenderType;
        static setChunkRenderTypesList$aeronautics_$md$3675d4$0(arg0: $List_<any>): void;
        static setChunkRenderTypes$aeronautics_$md$3675d4$1(arg0: $RenderType[]): void;
        static union(arg0: $Iterable_<$ChunkRenderTypeSet>): $ChunkRenderTypeSet;
        static union(arg0: $Collection_<$ChunkRenderTypeSet>): $ChunkRenderTypeSet;
        static union(...arg0: $ChunkRenderTypeSet[]): $ChunkRenderTypeSet;
        static intersection(arg0: $Collection_<$ChunkRenderTypeSet>): $ChunkRenderTypeSet;
        static intersection(arg0: $Iterable_<$ChunkRenderTypeSet>): $ChunkRenderTypeSet;
        static intersection(...arg0: $ChunkRenderTypeSet[]): $ChunkRenderTypeSet;
        isEmpty(): boolean;
        iterator(): $Iterator<$RenderType>;
        static of(arg0: $Collection_<$RenderType>): $ChunkRenderTypeSet;
        static of(...arg0: $RenderType[]): $ChunkRenderTypeSet;
        contains(arg0: $RenderType): boolean;
        asList(): $List<$RenderType>;
        static all(): $ChunkRenderTypeSet;
        static none(): $ChunkRenderTypeSet;
        spliterator(): $Spliterator<$RenderType>;
        forEach(arg0: $Consumer_<$RenderType>): void;
        getBits(): $BitSet;
        [Symbol.iterator](): Iterator<$RenderType>
        static set chunkRenderTypesList$aeronautics_$md$3675d4$0(value: $List_<any>);
        static set chunkRenderTypes$aeronautics_$md$3675d4$1(value: $RenderType[]);
        get empty(): boolean;
        get bits(): $BitSet;
    }
    export class $DimensionTransitionScreenManager$ReceivingLevelScreenFactory {
    }
    export interface $DimensionTransitionScreenManager$ReceivingLevelScreenFactory {
        create(supplier: $BooleanSupplier_, reason: $ReceivingLevelScreen$Reason_): $ReceivingLevelScreen;
    }
    /**
     * Values that may be interpreted as {@link $DimensionTransitionScreenManager$ReceivingLevelScreenFactory}.
     */
    export type $DimensionTransitionScreenManager$ReceivingLevelScreenFactory_ = ((arg0: $BooleanSupplier, arg1: $ReceivingLevelScreen$Reason) => $ReceivingLevelScreen);
    export class $ExtendedServerListData extends $Record {
        truncated(): boolean;
        numberOfMods(): number;
        extraReason(): string;
        isCompatible(): boolean;
        type(): string;
        constructor(arg0: string, arg1: boolean, arg2: number, arg3: string);
        constructor(type: string, isCompatible: boolean, numberOfMods: number, extraReason: string, truncated: boolean);
        get compatible(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ExtendedServerListData}.
     */
    export type $ExtendedServerListData_ = { isCompatible?: boolean, extraReason?: string, numberOfMods?: number, type?: string, truncated?: boolean,  } | [isCompatible?: boolean, extraReason?: string, numberOfMods?: number, type?: string, truncated?: boolean, ];
    export class $RenderTypeGroup extends $Record {
        entityFabulous(): $RenderType;
        entity(): $RenderType;
        isEmpty(): boolean;
        block(): $RenderType;
        static EMPTY: $RenderTypeGroup;
        constructor(block: $RenderType, entity: $RenderType, entityFabulous: $RenderType);
        constructor(arg0: $RenderType, arg1: $RenderType);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RenderTypeGroup}.
     */
    export type $RenderTypeGroup_ = { entity?: $RenderType, entityFabulous?: $RenderType, block?: $RenderType,  } | [entity?: $RenderType, entityFabulous?: $RenderType, block?: $RenderType, ];
    /**
     * An ItemDecorator that is used to render something on specific items, when the DurabilityBar and StackCount is rendered.
     * Add it to an item using RegisterItemDecorationsEvent#register(ItemLike, IItemDecorator).
     */
    export class $IItemDecorator {
    }
    export interface $IItemDecorator {
        /**
         * Is called after GuiGraphics#renderItemDecorations(Font, ItemStack, int, int, String) is done rendering.
         * The StackCount is rendered at blitOffset+200 so use the blitOffset with caution.
         * 
         * The RenderState during this call will be: enableTexture, enableDepthTest, enableBlend and defaultBlendFunc
         */
        render(guiGraphics: $GuiGraphics, font: $Font, stack: $ItemStack_, xOffset: number, yOffset: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IItemDecorator}.
     */
    export type $IItemDecorator_ = ((arg0: $GuiGraphics, arg1: $Font, arg2: $ItemStack, arg3: number, arg4: number) => boolean);
}
