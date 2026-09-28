import { $CommandList } from "@package/net/caffeinemc/mods/sodium/client/gl/device";
import { $GlVertexAttributeBinding } from "@package/net/caffeinemc/mods/sodium/client/gl/attribute";
import { $GlBufferTarget, $GlBuffer, $GlBufferTarget_ } from "@package/net/caffeinemc/mods/sodium/client/gl/buffer";
import { $Enum, $Record } from "@package/java/lang";

declare module "@package/net/caffeinemc/mods/sodium/client/gl/tessellation" {
    export class $GlTessellation {
    }
    export interface $GlTessellation {
        unbind(arg0: $CommandList): void;
        "delete"(arg0: $CommandList): void;
        bind(arg0: $CommandList): void;
        getPrimitiveType(): $GlPrimitiveType;
    }
    export class $TessellationBinding extends $Record {
        static forVertexBuffer(arg0: $GlBuffer, arg1: $GlVertexAttributeBinding[]): $TessellationBinding;
        static forElementBuffer(arg0: $GlBuffer): $TessellationBinding;
        attributeBindings(): $GlVertexAttributeBinding[];
        target(): $GlBufferTarget;
        buffer(): $GlBuffer;
        constructor(target: $GlBufferTarget_, buffer: $GlBuffer, attributeBindings: $GlVertexAttributeBinding[]);
    }
    /**
     * Values that may be interpreted as {@link $TessellationBinding}.
     */
    export type $TessellationBinding_ = { attributeBindings?: $GlVertexAttributeBinding[], buffer?: $GlBuffer, target?: $GlBufferTarget_,  } | [attributeBindings?: $GlVertexAttributeBinding[], buffer?: $GlBuffer, target?: $GlBufferTarget_, ];
    export class $GlPrimitiveType extends $Enum<$GlPrimitiveType> {
        static values(): $GlPrimitiveType[];
        static valueOf(arg0: string): $GlPrimitiveType;
        getId(): number;
        static TRIANGLES: $GlPrimitiveType;
        static PATCHES: $GlPrimitiveType;
        static POINTS: $GlPrimitiveType;
        static LINES: $GlPrimitiveType;
    }
    /**
     * Values that may be interpreted as {@link $GlPrimitiveType}.
     */
    export type $GlPrimitiveType_ = "points" | "lines" | "triangles" | "patches";
}
