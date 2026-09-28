import { $LevelSettings } from "@package/net/minecraft/world/level";
import { $Services, $WorldStem_, $TickTask, $MinecraftServer$ReloadableResources, $MinecraftServer, $Services_ } from "@package/net/minecraft/server";
import { $GlobalSavedSubLevelPointer_ } from "@package/dev/ryanhcode/sable/sublevel/storage/holding";
import { $SubLevelData } from "@package/dev/ryanhcode/sable/sublevel/storage/serialization";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Minecraft } from "@package/net/minecraft/client";
import { $WorldData, $PlayerDataStorage, $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $ServerSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $Queue, $UUID_ } from "@package/java/util";
import { $McIntegratedServerManager } from "@package/gg/essential/sps";
import { $ChunkProgressListenerFactory_ } from "@package/net/minecraft/server/level/progress";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $Proxy } from "@package/java/net";
import { $IDeferrableIntegratedServer } from "@package/org/embeddedt/modernfix/duck/suspend_integrated_server_during_load";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $Thread } from "@package/java/lang";
import { $IntegratedServerExt } from "@package/gg/essential/mixins/ext/server/integrated";
import { $SableToastableServer } from "@package/dev/ryanhcode/sable/mixinterface/toast";

declare module "@package/net/minecraft/client/server" {
    export class $IntegratedServer extends $MinecraftServer implements $IDeferrableIntegratedServer, $SableToastableServer, $IntegratedServerExt {
        setUUID(uuid: $UUID_): void;
        /**
         * Saves all necessary data as preparation for stopping the server.
         */
        mfix$markClientLoadFinished(): void;
        sable$reportSubLevelLoadFailure(arg0: $GlobalSavedSubLevelPointer_): void;
        sable$reportSubLevelSaveFailure(arg0: $SubLevelData): void;
        sable$reportSubLevelPhysicsFailure(arg0: $ServerSubLevel): void;
        essential$undoLan(uuid: $UUID_): void;
        handler$jlo00b$essential$tick(ci: $CallbackInfo): void;
        handler$zbo000$openpartiesandclaims$onTickPaused(arg0: $CallbackInfo): void;
        handler$jhn000$essential$disconnectPlayers(ci: $CallbackInfo): void;
        handler$jlk001$essential$runTasks(ci: $CallbackInfo): void;
        getEssential$manager(): $McIntegratedServerManager;
        static VANILLA_BRAND: string;
        proxy: $Proxy;
        static ANONYMOUS_PLAYER_PROFILE: $GameProfile;
        pendingRunnables: $Queue<$TickTask>;
        nextTickTimeNanos: number;
        resources: $MinecraftServer$ReloadableResources;
        worldData: $WorldData;
        services: $Services;
        storageSource: $LevelStorageSource$LevelStorageAccess;
        static ABSOLUTE_MAX_WORLD_SIZE: number;
        static DEMO_SETTINGS: $LevelSettings;
        playerDataStorage: $PlayerDataStorage;
        constructor(serverThread: $Thread, minecraft: $Minecraft, storageSource: $LevelStorageSource$LevelStorageAccess, packRepository: $PackRepository, worldStem: $WorldStem_, services: $Services_, progressListenerFactory: $ChunkProgressListenerFactory_);
    }
}
