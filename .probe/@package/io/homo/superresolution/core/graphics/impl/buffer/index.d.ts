import { $Destroyable } from "@package/io/homo/superresolution/core/impl";
import { $GpuObject } from "@package/io/homo/superresolution/core/graphics/impl";
import { $ByteBuffer, $Buffer } from "@package/java/nio";

declare module "@package/io/homo/superresolution/core/graphics/impl/buffer" {
    export class $IBuffer {
    }
    export interface $IBuffer extends $GpuObject, $Destroyable {
        getUsages(): $BufferUsages;
        unmap(): void;
        map(arg0: boolean): $ByteBuffer;
        map(arg0: number, arg1: number, arg2: boolean): $ByteBuffer;
        getSize(): number;
    }
    /**
     * @deprecated
     */
    export class $IBufferData {
    }
    export interface $IBufferData {
        containerPtr(): number;
        asByteBuffer(): $ByteBuffer;
        size(): number;
        get(arg0: number[], arg1: number): void;
        put(arg0: number[], arg1: number): void;
        update(arg0: $Buffer): void;
        container(): $Buffer;
        free(): void;
        updatePartial(arg0: $Buffer, arg1: number, arg2: number): void;
    }
}
