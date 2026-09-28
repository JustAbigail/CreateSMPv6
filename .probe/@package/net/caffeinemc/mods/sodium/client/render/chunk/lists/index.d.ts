import { $SectionPos } from "@package/net/minecraft/core";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $ByteIterator } from "@package/net/caffeinemc/mods/sodium/client/util/iterator";
import { $SortedRenderListsAccessor } from "@package/foundry/veil/forge/mixin/compat/sodium";
import { $Iterator } from "@package/java/util";
import { $RenderRegion } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/region";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk/lists" {
    export class $ChunkRenderListIterable {
    }
    export interface $ChunkRenderListIterable {
        iterator(arg0: boolean): $Iterator<$ChunkRenderList>;
        iterator(): $Iterator<$ChunkRenderList>;
    }
    /**
     * Values that may be interpreted as {@link $ChunkRenderListIterable}.
     */
    export type $ChunkRenderListIterable_ = ((arg0: boolean) => $Iterator<$ChunkRenderList>);
    export class $ChunkRenderList {
        sectionsWithEntitiesIterator(): $ByteIterator;
        sectionsWithSpritesIterator(): $ByteIterator;
        getLastVisibleFrame(): number;
        getSectionsWithGeometryCount(): number;
        sectionsWithGeometryIterator(arg0: boolean): $ByteIterator;
        getSectionsWithSpritesCount(): number;
        getSectionsWithEntitiesCount(): number;
        prepareForRender(arg0: $SectionPos, arg1: $SortItemsProvider): void;
        getRegion(): $RenderRegion;
        size(): number;
        reset(arg0: number, arg1: boolean): void;
        add(arg0: number, arg1: number): void;
        constructor(arg0: $RenderRegion);
    }
    export class $SortItemsProvider {
    }
    export interface $SortItemsProvider {
        setCachedSortItems(arg0: number[]): void;
        getCachedSortItems(): number[];
        ensureSortItemsOfLength(arg0: number): number[];
    }
    export class $SortedRenderLists implements $ChunkRenderListIterable, $SortedRenderListsAccessor {
        static init$veil_$md$e5fdf9$0(arg0: $ObjectArrayList<any>): $SortedRenderLists;
        static empty(): $SortedRenderLists;
        iterator(): $Iterator<$ChunkRenderList>;
        iterator(arg0: boolean): $Iterator<$ChunkRenderList>;
    }
}
