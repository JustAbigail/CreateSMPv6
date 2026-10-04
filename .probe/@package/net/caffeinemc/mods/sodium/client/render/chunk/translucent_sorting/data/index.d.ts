import { $SectionPos } from "@package/net/minecraft/core";
import { $TQuad } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/quad";
import { $UpdatedQuadsList } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/bsp_tree";
import { $TranslucentGeometryCollector, $SortType } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting";
import { $IntBuffer } from "@package/java/nio";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data" {
    export class $TranslucentData {
        meshesWereModified(): boolean;
        getUpdatedQuads(): $UpdatedQuadsList;
        static writeQuadVertexIndexes(arg0: $IntBuffer, arg1: number): void;
        static writeQuadVertexIndexes(arg0: $IntBuffer, arg1: number[]): void;
        getSortType(): $SortType;
        oldDataMatches(arg0: $TranslucentGeometryCollector, arg1: $SortType, arg2: $TQuad[]): boolean;
        static vertexCountToQuadCount(arg0: number): number;
        static quadCountToIndexBytes(arg0: number): number;
        static quadCountToVertexCount(arg0: number): number;
        prepareTrigger(arg0: boolean): void;
        static VERTICES_PER_QUAD: number;
        static BYTES_PER_QUAD: number;
        static BYTES_PER_INDEX: number;
        static INDICES_PER_QUAD: number;
        sectionPos: $SectionPos;
        get updatedQuads(): $UpdatedQuadsList;
        get sortType(): $SortType;
    }
    export class $DynamicSorter extends $PresentSorter {
        getResultSize(): number;
        getQuadCount(): number;
        get resultSize(): number;
        get quadCount(): number;
    }
}
