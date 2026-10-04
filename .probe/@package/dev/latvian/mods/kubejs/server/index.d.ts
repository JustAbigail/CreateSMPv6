import { $Level } from "@package/net/minecraft/world/level";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $PreTagKubeEvent } from "@package/dev/latvian/mods/kubejs/server/tag";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $ParseResults } from "@package/com/mojang/brigadier";
import { $CommandEvent } from "@package/net/neoforged/neoforge/event";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $List, $Map, $Set, $List_ } from "@package/java/util";
import { $SyncServerDataPayload } from "@package/dev/latvian/mods/kubejs/net";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $KubeEntityEvent } from "@package/dev/latvian/mods/kubejs/entity";
import { $VirtualDataPack, $GeneratedDataStage } from "@package/dev/latvian/mods/kubejs/script/data";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $Supplier_ } from "@package/java/util/function";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $PackResources } from "@package/net/minecraft/server/packs";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $RecipeSchemaStorage } from "@package/dev/latvian/mods/kubejs/recipe/schema";
import { $Throwable, $Object } from "@package/java/lang";
import { $ScriptType, $KubeJSContextFactory, $ScriptPack, $ScriptManager } from "@package/dev/latvian/mods/kubejs/script";
export * as tag from "@package/dev/latvian/mods/kubejs/server/tag";

declare module "@package/dev/latvian/mods/kubejs/server" {
    export class $ServerScriptManager extends $ScriptManager {
        static createPackResources(original: $List_<$PackResources>): $List<$PackResources>;
        static createForDataGen(): $ServerScriptManager;
        reloadAndCapture(): void;
        static release(): $ServerScriptManager;
        virtualPacks: $Map<$GeneratedDataStage, $VirtualDataPack>;
        scriptType: $ScriptType;
        registriesDataPack: $VirtualDataPack;
        serverRegistryTags: $Map<$ResourceLocation, $Set<$ResourceLocation>>;
        internalDataPack: $VirtualDataPack;
        canListenEvents: boolean;
        recipeSchemaStorage: $RecipeSchemaStorage;
        firstLoad: boolean;
        packs: $Map<string, $ScriptPack>;
        preTagEvents: $Map<$ResourceKey<never>, $PreTagKubeEvent>;
        serverData: $SyncServerDataPayload;
        contextFactory: $KubeJSContextFactory;
    }
    export class $CommandKubeEvent extends $ServerKubeEvent {
        getParseResults(): $ParseResults<$CommandSourceStack>;
        setParseResults(parse: $ParseResults<$CommandSourceStack>): void;
        getCommandName(): string;
        setException(exception: $Throwable): void;
        getException(): $Throwable;
        getInput(): string;
        server: $MinecraftServer;
        constructor(event: $CommandEvent);
        get commandName(): string;
        get input(): string;
    }
    export class $BasicCommandKubeEvent implements $KubeEntityEvent {
        respond(text: $Component_): void;
        respondLazily(text: $Supplier_<$Component>, informAdmins: boolean): void;
        getEntity(): $Entity;
        getPlayer(): $ServerPlayer;
        getBlock(): $LevelBlock;
        getLevel(): $Level;
        getId(): string;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        input: string;
        id: string;
        constructor(source: $CommandSourceStack, id: string, input: string);
        get entity(): $Entity;
        get player(): $ServerPlayer;
        get block(): $LevelBlock;
        get level(): $Level;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $ServerKubeEvent implements $KubeEvent {
        getServer(): $MinecraftServer;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        server: $MinecraftServer;
        constructor(s: $MinecraftServer);
    }
}
