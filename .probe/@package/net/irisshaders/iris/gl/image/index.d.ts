import { $IntSupplier_ } from "@package/java/util/function";
import { $PixelType_, $TextureType, $InternalTextureFormat, $PixelFormat_, $InternalTextureFormat_, $TextureType_, $PixelFormat, $PixelType } from "@package/net/irisshaders/iris/gl/texture";
import { $GlResource } from "@package/net/irisshaders/iris/gl";

declare module "@package/net/irisshaders/iris/gl/image" {
    export class $GlImage extends $GlResource {
        shouldClear(): boolean;
        getPixelType(): $PixelType;
        updateNewSize(arg0: number, arg1: number): void;
        getSamplerName(): string;
        getInternalFormat(): $InternalTextureFormat;
        getFormat(): $PixelFormat;
        getName(): string;
        getId(): number;
        getTarget(): $TextureType;
        constructor(arg0: string, arg1: string, arg2: $TextureType_, arg3: $PixelFormat_, arg4: $InternalTextureFormat_, arg5: $PixelType_, arg6: boolean, arg7: number, arg8: number, arg9: number);
    }
    export class $ImageHolder {
    }
    export interface $ImageHolder {
        hasImage(arg0: string): boolean;
        addTextureImage(arg0: $IntSupplier_, arg1: $InternalTextureFormat_, arg2: string): void;
    }
}
