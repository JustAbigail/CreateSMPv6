import { $Logger } from "@package/org/slf4j";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $SplashRenderer } from "@package/net/minecraft/client/gui/components";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $User } from "@package/net/minecraft/client";
import { $ResourceManager, $SimplePreparableReloadListener, $PreparableReloadListener$PreparationBarrier_, $PreparableReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $List, $UUID_, $Set_, $List_ } from "@package/java/util";
import { $PaintingVariant_ } from "@package/net/minecraft/world/entity/decoration";
import { $TextureAtlasExtension } from "@package/foundry/veil/ext";
import { $SkinProviderFileCacheAccessor } from "@package/gg/essential/mixins/transformers/client/resources";
import { $MetadataSectionSerializer } from "@package/net/minecraft/server/packs/metadata";
import { $Supplier } from "@package/java/util/function";
import { $Holder_ } from "@package/net/minecraft/core";
import { $PlayerSkinProviderAccessor } from "@package/gg/essential/mixins/impl/client/resources";
import { $Path_ } from "@package/java/nio/file";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $TextureAtlasHolderInvoker } from "@package/moe/prwk/emiffect/mixin";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $MapDecoration_ } from "@package/net/minecraft/world/level/saveddata/maps";
import { $TextureAtlasSprite, $TextureManager, $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $Enum, $Record, $AutoCloseable } from "@package/java/lang";
import { $MinecraftProfileTextures_, $MinecraftSessionService } from "@package/com/mojang/authlib/minecraft";
export * as model from "@package/net/minecraft/client/resources/model";
export * as sounds from "@package/net/minecraft/client/resources/sounds";
export * as server from "@package/net/minecraft/client/resources/server";
export * as metadata from "@package/net/minecraft/client/resources/metadata";
export * as language from "@package/net/minecraft/client/resources/language";

declare module "@package/net/minecraft/client/resources" {
    export class $MobEffectTextureManager extends $TextureAtlasHolder {
        get(effect: $Holder_<$MobEffect>): $TextureAtlasSprite;
        textureAtlas: $TextureAtlas;
        constructor(textureManager: $TextureManager);
    }
    export class $PaintingTextureManager extends $TextureAtlasHolder {
        getBackSprite(): $TextureAtlasSprite;
        get(paintingVariant: $PaintingVariant_): $TextureAtlasSprite;
        textureAtlas: $TextureAtlas;
        constructor(textureManager: $TextureManager);
        get backSprite(): $TextureAtlasSprite;
    }
    export class $PlayerSkin$Model extends $Enum<$PlayerSkin$Model> {
        static values(): $PlayerSkin$Model[];
        static valueOf(name: string): $PlayerSkin$Model;
        id(): string;
        static byName(name: string | null): $PlayerSkin$Model;
        static SLIM: $PlayerSkin$Model;
        static WIDE: $PlayerSkin$Model;
    }
    /**
     * Values that may be interpreted as {@link $PlayerSkin$Model}.
     */
    export type $PlayerSkin$Model_ = "slim" | "wide";
    export class $SplashManager extends $SimplePreparableReloadListener<$List<string>> {
        getSplash(): $SplashRenderer;
        apply(object: $List_<string>, resourceManager: $ResourceManager, profiler: $ProfilerFiller): void;
        static SPLASHES_LOCATION: $ResourceLocation;
        constructor(user: $User);
        get splash(): $SplashRenderer;
    }
    export class $MapDecorationTextureManager extends $TextureAtlasHolder {
        get(mapDecoration: $MapDecoration_): $TextureAtlasSprite;
        textureAtlas: $TextureAtlas;
        constructor(textureManager: $TextureManager);
    }
    export class $TextureAtlasHolder implements $PreparableReloadListener, $AutoCloseable, $TextureAtlasExtension, $TextureAtlasHolderInvoker {
        reload(preparationBarrier: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        close(): void;
        veil$hasTexture(arg0: $ResourceLocation_): boolean;
        /**
         * Gets a sprite associated with the passed resource location.
         */
        getSprite(location: $ResourceLocation_): $TextureAtlasSprite;
        getName(): string;
        /**
         * Gets a sprite associated with the passed resource location.
         */
        emiffect$invokeGetSprite(location: $ResourceLocation_): $TextureAtlasSprite;
        textureAtlas: $TextureAtlas;
        constructor(textureManager: $TextureManager, textureAtlasLocation: $ResourceLocation_, atlasInfoLocation: $ResourceLocation_);
        constructor(textureManager: $TextureManager, textureAtlasLocation: $ResourceLocation_, atlasInfoLocation: $ResourceLocation_, metadataSections: $Set_<$MetadataSectionSerializer<never>>);
        get name(): string;
    }
    export class $PlayerSkin extends $Record {
        texture(): $ResourceLocation;
        model(): $PlayerSkin$Model;
        capeTexture(): $ResourceLocation;
        textureUrl(): string;
        elytraTexture(): $ResourceLocation;
        secure(): boolean;
        constructor(arg0: $ResourceLocation_, arg1: string | null, arg2: $ResourceLocation_ | null, arg3: $ResourceLocation_ | null, arg4: $PlayerSkin$Model_, arg5: boolean);
    }
    /**
     * Values that may be interpreted as {@link $PlayerSkin}.
     */
    export type $PlayerSkin_ = { secure?: boolean, textureUrl?: string, texture?: $ResourceLocation_, capeTexture?: $ResourceLocation_, elytraTexture?: $ResourceLocation_, model?: $PlayerSkin$Model_,  } | [secure?: boolean, textureUrl?: string, texture?: $ResourceLocation_, capeTexture?: $ResourceLocation_, elytraTexture?: $ResourceLocation_, model?: $PlayerSkin$Model_, ];
    export class $SkinManager implements $PlayerSkinProviderAccessor {
        lookupInsecure(profile: $GameProfile): $Supplier<$PlayerSkin>;
        getInsecureSkin(profile: $GameProfile): $PlayerSkin;
        getSkinCache(): $SkinProviderFileCacheAccessor;
        getCapeCache(): $SkinProviderFileCacheAccessor;
        getElytraCache(): $SkinProviderFileCacheAccessor;
        getOrLoad(profile: $GameProfile): $CompletableFuture<$PlayerSkin>;
        registerTextures(uuid: $UUID_, textures: $MinecraftProfileTextures_): $CompletableFuture<$PlayerSkin>;
        static LOGGER: $Logger;
        constructor(textureManager: $TextureManager, root: $Path_, sessionService: $MinecraftSessionService, executor: $Executor_);
        get skinCache(): $SkinProviderFileCacheAccessor;
        get capeCache(): $SkinProviderFileCacheAccessor;
        get elytraCache(): $SkinProviderFileCacheAccessor;
    }
}
