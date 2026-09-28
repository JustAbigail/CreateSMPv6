import { $AtlasPBRLoader$PBRTextureAtlasSprite } from "@package/net/irisshaders/iris/pbr/loader";
import { $Path_ } from "@package/java/nio/file";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $SpriteContents$Ticker, $Dumpable, $TextureAtlasSprite, $AbstractTexture, $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $Enum } from "@package/java/lang";

declare module "@package/net/irisshaders/iris/pbr/texture" {
    export class $PBRAtlasHolder {
        getNormalAtlas(): $PBRAtlasTexture;
        setNormalAtlas(arg0: $PBRAtlasTexture): void;
        getSpecularAtlas(): $PBRAtlasTexture;
        setSpecularAtlas(arg0: $PBRAtlasTexture): void;
        cycleAnimationFrames(): void;
        constructor();
    }
    export class $PBRSpriteHolder {
        getNormalSprite(): $TextureAtlasSprite;
        getSpecularSprite(): $TextureAtlasSprite;
        setNormalSprite(arg0: $TextureAtlasSprite): void;
        setSpecularSprite(arg0: $TextureAtlasSprite): void;
        close(): void;
        constructor();
    }
    export class $PBRAtlasTexture extends $AbstractTexture implements $PBRDumpable {
        getDefaultDumpLocation(): $ResourceLocation;
        addSprite(arg0: $AtlasPBRLoader$PBRTextureAtlasSprite): void;
        tryUpload(arg0: number, arg1: number, arg2: number): boolean;
        static syncAnimation(arg0: $SpriteContents$Ticker, arg1: $SpriteContents$Ticker): void;
        getAtlasId(): $ResourceLocation;
        clear(): void;
        getType(): $PBRType;
        dumpContents(arg0: $ResourceLocation_, arg1: $Path_): void;
        cycleAnimationFrames(): void;
        upload(arg0: number, arg1: number, arg2: number): void;
        getSprite(arg0: $ResourceLocation_): $AtlasPBRLoader$PBRTextureAtlasSprite;
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        blur: boolean;
        id: number;
        constructor(arg0: $TextureAtlas, arg1: $PBRType_);
    }
    export class $SpriteContentsExtension {
    }
    export interface $SpriteContentsExtension {
        getPBRHolder(): $PBRSpriteHolder;
        getOrCreatePBRHolder(): $PBRSpriteHolder;
    }
    export class $TextureAtlasExtension {
    }
    export interface $TextureAtlasExtension {
        getPBRHolder(): $PBRAtlasHolder;
        getOrCreatePBRHolder(): $PBRAtlasHolder;
    }
    export class $PBRType extends $Enum<$PBRType> {
        static fromFileLocation(arg0: string): $PBRType;
        static removeSuffix(arg0: string): string;
        appendSuffix(arg0: string): string;
        static values(): $PBRType[];
        static valueOf(arg0: string): $PBRType;
        getDefaultValue(): number;
        getSuffix(): string;
        static SPECULAR: $PBRType;
        static NORMAL: $PBRType;
    }
    /**
     * Values that may be interpreted as {@link $PBRType}.
     */
    export type $PBRType_ = "normal" | "specular";
    export class $PBRDumpable {
    }
    export interface $PBRDumpable extends $Dumpable {
        getDefaultDumpLocation(): $ResourceLocation;
    }
}
