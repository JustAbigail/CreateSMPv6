import { $SectionPos } from "@package/net/minecraft/core";
import { $List_, $List } from "@package/java/util";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";

declare module "@package/net/caffeinemc/mods/sodium/client/world/cloned" {
    export class $ChunkRenderContext {
        getVolume(): $BoundingBox;
        getRenderers(): $List<never>;
        getOrigin(): $SectionPos;
        getSections(): $ClonedChunkSection[];
        constructor(arg0: $SectionPos, arg1: $ClonedChunkSection[], arg2: $BoundingBox, arg3: $List_<never>);
        get volume(): $BoundingBox;
        get renderers(): $List<never>;
        get origin(): $SectionPos;
        get sections(): $ClonedChunkSection[];
    }
}
