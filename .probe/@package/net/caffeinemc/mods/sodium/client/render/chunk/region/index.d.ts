import { $CommandList, $MultiDrawBatch } from "@package/net/caffeinemc/mods/sodium/client/gl/device";
import { $RenderSection } from "@package/net/caffeinemc/mods/sodium/client/render/chunk";
import { $ShadowRenderRegion } from "@package/net/irisshaders/iris/mixinterface";
import { $SectionRenderDataStorage } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/data";
import { $ChunkRenderList } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/lists";
import { $StagingBuffer } from "@package/net/caffeinemc/mods/sodium/client/gl/arena/staging";
import { $TerrainRenderPass } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/terrain";
import { $RenderRegionExtension } from "@package/foundry/veil/forge/ext";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk/region" {
    export class $RenderRegion implements $ShadowRenderRegion, $RenderRegionExtension {
        removeSection(arg0: $RenderSection): void;
        getChunkX(): number;
        getChunkZ(): number;
        getOriginX(): number;
        getOriginY(): number;
        getOriginZ(): number;
        getRenderList(): $ChunkRenderList;
        veil$getPerspectiveRenderList(): $ChunkRenderList;
        getChunkY(): number;
        swapToRegularRenderList(): void;
        swapToShadowRenderList(): void;
        clearAllCachedBatches(): void;
        clearCachedBatchFor(arg0: $TerrainRenderPass): void;
        getCachedBatch(arg0: $TerrainRenderPass): $MultiDrawBatch;
        refreshTesselation(arg0: $CommandList): void;
        refreshIndexedTesselation(arg0: $CommandList): void;
        getFillFractionInv(): number;
        iris$forceClearAllBatches(): void;
        createResources(arg0: $CommandList): $RenderRegion$DeviceResources;
        createStorage(arg0: $TerrainRenderPass): $SectionRenderDataStorage;
        getY(): number;
        addSection(arg0: $RenderSection): void;
        getStorage(arg0: $TerrainRenderPass): $SectionRenderDataStorage;
        getSection(arg0: number): $RenderSection;
        update(arg0: $CommandList): void;
        isEmpty(): boolean;
        getResources(): $RenderRegion$DeviceResources;
        static key(arg0: number, arg1: number, arg2: number): number;
        "delete"(arg0: $CommandList): void;
        getX(): number;
        getZ(): number;
        static SECTION_INDEX_COUNT_ESTIMATE: number;
        static REGION_WIDTH: number;
        static REGION_HEIGHT_M: number;
        static REGION_WIDTH_SH: number;
        static REGION_LENGTH_M: number;
        static REGION_SIZE: number;
        static SECTION_BUFFER_ESTIMATE: number;
        static SECTION_VERTEX_COUNT_ESTIMATE: number;
        static REGION_LENGTH: number;
        static REGION_LENGTH_SH: number;
        static REGION_WIDTH_M: number;
        static REGION_HEIGHT_SH: number;
        static REGION_HEIGHT: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $StagingBuffer);
    }
}
