import { $GlVertexFormat } from "@package/net/caffeinemc/mods/sodium/client/gl/attribute";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk/vertex/format" {
    export class $ChunkVertexType {
    }
    export interface $ChunkVertexType {
        getEncoder(): $ChunkVertexEncoder;
        getVertexFormat(): $GlVertexFormat;
    }
}
