import { $GpuObject } from "@package/io/homo/superresolution/core/graphics/impl";
import { $ByteBuffer } from "@package/java/nio";

declare module "@package/io/homo/superresolution/core/graphics/impl/vertex" {
    export class $IVertexBuffer {
    }
    export interface $IVertexBuffer extends $GpuObject {
        getSizeInBytes(): number;
        isDynamic(): boolean;
        getVertexCount(): number;
        unmap(): void;
        map(arg0: number, arg1: number, arg2: boolean): $ByteBuffer;
        map(arg0: boolean): $ByteBuffer;
        destroy(): void;
        updateData(arg0: number[], arg1: number, arg2: number): void;
        updateData(arg0: number[]): void;
        updateData(arg0: $ByteBuffer): void;
        updateData(arg0: $ByteBuffer, arg1: number): void;
        getVertexFormat(): $VertexFormat;
        get sizeInBytes(): number;
        get dynamic(): boolean;
        get vertexCount(): number;
        get vertexFormat(): $VertexFormat;
    }
}
