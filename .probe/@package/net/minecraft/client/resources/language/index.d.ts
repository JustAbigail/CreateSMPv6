import { $Consumer_ } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { $TranslationStorageAccessor } from "@package/io/gitlab/jfronny/respackopts/mixin";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Component } from "@package/net/minecraft/network/chat";
import { $CompletableFuture, $Executor_ } from "@package/java/util/concurrent";
import { $Language } from "@package/net/minecraft/locale";
import { $TranslationStorage } from "@package/com/natamus/collective_common_neoforge/translations";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $IdentifiableResourceReloadListener } from "@package/net/fabricmc/fabric/api/resource";
import { $ResourceManager, $ResourceManagerReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $Record } from "@package/java/lang";
import { $SortedMap, $List_, $Map_, $Locale, $Map, $Collection } from "@package/java/util";

declare module "@package/net/minecraft/client/resources/language" {
    export class $LanguageManager implements $ResourceManagerReloadListener, $IdentifiableResourceReloadListener {
        getLanguages(): $SortedMap<string, $LanguageInfo>;
        getSelected(): string;
        onResourceManagerReload(resourceManager: $ResourceManager): void;
        getLanguage(code: string): $LanguageInfo;
        setSelected(selected: string): void;
        getJavaLocale(): $Locale;
        getFabricId(): $ResourceLocation;
        getFabricDependencies(): $Collection<any>;
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        getName(): string;
        constructor(currentCode: string, reloadFallback: $Consumer_<$ClientLanguage>);
    }
    export class $ClientLanguage extends $Language implements $TranslationStorageAccessor, $TranslationStorage {
        static loadFrom(resourceManager: $ResourceManager, filenames: $List_<string>, defaultRightToLeft: boolean): $ClientLanguage;
        collective$mergeTranslations(arg0: $Map_<any, any>): void;
        getTranslations(): $Map<string, string>;
        setTranslations(arg0: $Map_<string, string>): void;
        storage: $Map<string, string>;
        static DEFAULT: string;
    }
    export class $LanguageInfo extends $Record {
        bidirectional(): boolean;
        toComponent(): $Component;
        region(): string;
        name(): string;
        static CODEC: $Codec<$LanguageInfo>;
        constructor(arg0: string, arg1: string, arg2: boolean);
    }
    /**
     * Values that may be interpreted as {@link $LanguageInfo}.
     */
    export type $LanguageInfo_ = { region?: string, bidirectional?: boolean, name?: string,  } | [region?: string, bidirectional?: boolean, name?: string, ];
}
