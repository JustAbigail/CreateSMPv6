import { $VertexFormatAttribute_ } from "@package/net/caffeinemc/mods/sodium/client/render/vertex";
import { $Map_ } from "@package/java/util";

declare module "@package/net/caffeinemc/mods/sodium/client/gl/attribute" {
    export class $GlVertexAttributeBinding extends $GlVertexAttribute {
        getIndex(): number;
        constructor(arg0: number, arg1: $GlVertexAttribute);
    }
    export class $GlVertexFormat {
        getStride(): number;
        getShaderBindings(): $GlVertexAttributeBinding[];
        getAttribute(arg0: $VertexFormatAttribute_): $GlVertexAttribute;
        static builder(arg0: number): $GlVertexFormat$Builder;
        constructor(arg0: $Map_<$VertexFormatAttribute_, $GlVertexAttribute>, arg1: $GlVertexAttributeBinding[], arg2: number);
    }
}
