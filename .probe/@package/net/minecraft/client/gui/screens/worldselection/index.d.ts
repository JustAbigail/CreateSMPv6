import { $Lifecycle, $Dynamic } from "@package/com/mojang/serialization";
import { $RegistryLayer, $WorldStem, $ReloadableServerResources, $RegistryLayer_ } from "@package/net/minecraft/server";
import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $WorldPreset } from "@package/net/minecraft/world/level/levelgen/presets";
import { $Executor } from "@package/java/util/concurrent";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Minecraft, $NarratorStatus } from "@package/net/minecraft/client";
import { $List, $OptionalLong, $Map } from "@package/java/util";
import { $Difficulty_, $Difficulty } from "@package/net/minecraft/world";
import { $Function_, $Consumer_, $BiFunction, $UnaryOperator } from "@package/java/util/function";
import { $Holder_, $RegistryAccess$Frozen, $Holder, $RegistryAccess, $Registry, $LayeredRegistryAccess } from "@package/net/minecraft/core";
import { $Tab } from "@package/net/minecraft/client/gui/components/tabs";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $Enum, $Record, $Runnable_ } from "@package/java/lang";
import { $WorldDimensions, $WorldDimensions_, $WorldOptions, $WorldGenSettings_ } from "@package/net/minecraft/world/level/levelgen";
import { $LevelSettings, $GameType, $WorldDataConfiguration, $GameRules, $WorldDataConfiguration_ } from "@package/net/minecraft/world/level";
import { $Component } from "@package/net/minecraft/network/chat";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $CycleButton, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $LevelStorageSource, $LevelStorageSource$LevelStorageAccess, $WorldData } from "@package/net/minecraft/world/level/storage";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Font } from "@package/net/minecraft/client/gui";
import { $LevelStem_, $LevelStem } from "@package/net/minecraft/world/level/dimension";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/net/minecraft/client/gui/screens/worldselection" {
    export class $WorldCreationContext$DimensionsUpdater {
    }
    export interface $WorldCreationContext$DimensionsUpdater extends $BiFunction<$RegistryAccess$Frozen, $WorldDimensions, $WorldDimensions> {
    }
    /**
     * Values that may be interpreted as {@link $WorldCreationContext$DimensionsUpdater}.
     */
    export type $WorldCreationContext$DimensionsUpdater_ = (() => void);
    export class $WorldCreationUiState {
        setWorldType(worldType: $WorldCreationUiState$WorldTypeEntry_): void;
        isAllowCommands(): boolean;
        setDifficulty(difficulty: $Difficulty_): void;
        updateDimensions(dimensionsUpdater: $WorldCreationContext$DimensionsUpdater_): void;
        onChanged(): void;
        setGameRules(gameRules: $GameRules): void;
        getAltPresetList(): $List<$WorldCreationUiState$WorldTypeEntry>;
        getNormalPresetList(): $List<$WorldCreationUiState$WorldTypeEntry>;
        isGenerateStructures(): boolean;
        setGenerateStructures(allowCommands: boolean): void;
        isBonusChest(): boolean;
        setBonusChest(allowCommands: boolean): void;
        getPresetEditor(): $PresetEditor;
        setSettings(settings: $WorldCreationContext_): void;
        getSettings(): $WorldCreationContext;
        setGameMode(gameMode: $WorldCreationUiState$SelectedGameMode_): void;
        getGameMode(): $WorldCreationUiState$SelectedGameMode;
        getTargetFolder(): string;
        tryUpdateDataConfiguration(worldDataConfiguration: $WorldDataConfiguration_): boolean;
        setAllowCommands(allowCommands: boolean): void;
        getWorldType(): $WorldCreationUiState$WorldTypeEntry;
        setSeed(name: string): void;
        getSeed(): string;
        getName(): string;
        setName(name: string): void;
        isDebug(): boolean;
        addListener(listener: $Consumer_<$WorldCreationUiState>): void;
        isHardcore(): boolean;
        getGameRules(): $GameRules;
        getDifficulty(): $Difficulty;
        constructor(savesFolder: $Path_, settings: $WorldCreationContext_, preset: ($ResourceKey_<$WorldPreset>) | undefined, seed: $OptionalLong);
        get altPresetList(): $List<$WorldCreationUiState$WorldTypeEntry>;
        get normalPresetList(): $List<$WorldCreationUiState$WorldTypeEntry>;
        get presetEditor(): $PresetEditor;
        get targetFolder(): string;
        get debug(): boolean;
        get hardcore(): boolean;
    }
    export class $PresetEditor {
        /**
         * @deprecated
         */
        static EDITORS: $Map<($ResourceKey<$WorldPreset>) | undefined, $PresetEditor>;
    }
    export interface $PresetEditor {
        createEditScreen(lastScreen: $CreateWorldScreen, context: $WorldCreationContext_): $Screen;
    }
    /**
     * Values that may be interpreted as {@link $PresetEditor}.
     */
    export type $PresetEditor_ = ((arg0: $CreateWorldScreen, arg1: $WorldCreationContext) => $Screen);
    export class $WorldCreationContext$OptionsModifier {
    }
    export interface $WorldCreationContext$OptionsModifier extends $UnaryOperator<$WorldOptions> {
    }
    /**
     * Values that may be interpreted as {@link $WorldCreationContext$OptionsModifier}.
     */
    export type $WorldCreationContext$OptionsModifier_ = (() => void);
    export class $WorldOpenFlows {
        openWorld(worldName: string, onFail: $Runnable_): void;
        createFreshLevel(levelName: string, levelSettings: $LevelSettings, worldOptions: $WorldOptions, dimensionGetter: $Function_<$RegistryAccess, $WorldDimensions>, lastScreen: $Screen): void;
        createLevelFromExistingSettings(levelStorage: $LevelStorageSource$LevelStorageAccess, resources: $ReloadableServerResources, registries: $LayeredRegistryAccess<$RegistryLayer_>, worldData: $WorldData): void;
        loadWorldStem(dynamic: $Dynamic<never>, safeMode: boolean, packRepository: $PackRepository): $WorldStem;
        recreateWorldData(levelStorage: $LevelStorageSource$LevelStorageAccess): $Pair<$LevelSettings, $WorldCreationContext>;
        static confirmWorldCreation(minecraft: $Minecraft, screen: $CreateWorldScreen, lifecycle: $Lifecycle, loadWorld: $Runnable_, skipWarnings: boolean): void;
        modifyExpressionValue$dha000$wover$wt_noWarningScreen(arg0: $Lifecycle): $Lifecycle;
        localvar$fci000$yeetusexperimentus$no(a: boolean): boolean;
        localvar$epc000$collective$loadLevel_bl2(arg0: boolean): boolean;
        constructor(minecraft: $Minecraft, levelSource: $LevelStorageSource);
    }
    export class $WorldCreationUiState$WorldTypeEntry extends $Record {
        describePreset(): $Component;
        isAmplified(): boolean;
        preset(): $Holder<$WorldPreset>;
        constructor(preset: $Holder_<$WorldPreset> | null);
        get amplified(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $WorldCreationUiState$WorldTypeEntry}.
     */
    export type $WorldCreationUiState$WorldTypeEntry_ = { preset?: $Holder_<$WorldPreset>,  } | [preset?: $Holder_<$WorldPreset>, ];
    export class $WorldCreationContext extends $Record {
        withSettings(options: $WorldOptions, selectedDimensions: $WorldDimensions_): $WorldCreationContext;
        dataPackResources(): $ReloadableServerResources;
        withDimensions(dimensionsUpdater: $WorldCreationContext$DimensionsUpdater_): $WorldCreationContext;
        worldgenLoadContext(): $RegistryAccess$Frozen;
        selectedDimensions(): $WorldDimensions;
        withOptions(optionsModifier: $WorldCreationContext$OptionsModifier_): $WorldCreationContext;
        dataConfiguration(): $WorldDataConfiguration;
        datapackDimensions(): $Registry<$LevelStem>;
        worldgenRegistries(): $LayeredRegistryAccess<$RegistryLayer>;
        withDataConfiguration(arg0: $WorldDataConfiguration_): $WorldCreationContext;
        validate(): void;
        options(): $WorldOptions;
        constructor(worldGenSettings: $WorldGenSettings_, worldGenRegistries: $LayeredRegistryAccess<$RegistryLayer_>, dataPackResources: $ReloadableServerResources, dataConfiguration: $WorldDataConfiguration_);
        constructor(options: $WorldOptions, datapackDimensions: $Registry<$LevelStem_>, selectedDimensions: $WorldDimensions_, worldgenRegistries: $LayeredRegistryAccess<$RegistryLayer_>, dataPackResources: $ReloadableServerResources, dataConfiguration: $WorldDataConfiguration_);
        constructor(options: $WorldOptions, selectedDimensions: $WorldDimensions_, worldGenRegistries: $LayeredRegistryAccess<$RegistryLayer_>, dataPackResources: $ReloadableServerResources, dataConfiguration: $WorldDataConfiguration_);
    }
    /**
     * Values that may be interpreted as {@link $WorldCreationContext}.
     */
    export type $WorldCreationContext_ = { worldgenRegistries?: $LayeredRegistryAccess<$RegistryLayer_>, selectedDimensions?: $WorldDimensions_, options?: $WorldOptions, dataConfiguration?: $WorldDataConfiguration_, dataPackResources?: $ReloadableServerResources, datapackDimensions?: $Registry<$LevelStem_>,  } | [worldgenRegistries?: $LayeredRegistryAccess<$RegistryLayer_>, selectedDimensions?: $WorldDimensions_, options?: $WorldOptions, dataConfiguration?: $WorldDataConfiguration_, dataPackResources?: $ReloadableServerResources, datapackDimensions?: $Registry<$LevelStem_>, ];
    export class $WorldCreationUiState$SelectedGameMode extends $Enum<$WorldCreationUiState$SelectedGameMode> {
        getInfo(): $Component;
        static values(): $WorldCreationUiState$SelectedGameMode[];
        static valueOf(arg0: string): $WorldCreationUiState$SelectedGameMode;
        static SURVIVAL: $WorldCreationUiState$SelectedGameMode;
        gameType: $GameType;
        displayName: $Component;
        static CREATIVE: $WorldCreationUiState$SelectedGameMode;
        static DEBUG: $WorldCreationUiState$SelectedGameMode;
        static HARDCORE: $WorldCreationUiState$SelectedGameMode;
        get info(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $WorldCreationUiState$SelectedGameMode}.
     */
    export type $WorldCreationUiState$SelectedGameMode_ = "survival" | "hardcore" | "creative" | "debug";
    export class $CreateWorldScreen extends $Screen {
        getUiState(): $WorldCreationUiState;
        localvar$fch000$yeetusexperimentus$dontShowWarning(showWarning: boolean): boolean;
        popScreen(): void;
        openExperimentsScreen(worldDataConfiguration: $WorldDataConfiguration_): void;
        openDataPackSelectionScreen(worldDataConfiguration: $WorldDataConfiguration_): void;
        static openFresh(minecraft: $Minecraft, lastScreen: $Screen | null): void;
        static createFromExisting(minecraft: $Minecraft, lastScreen: $Screen | null, levelSettings: $LevelSettings, settings: $WorldCreationContext_, tempDataPackDir: $Path_ | null): $CreateWorldScreen;
        modify$fpd000$resourcify$addTab(tabs: $Tab[]): $Tab[];
        handler$dhe000$wover$captureStorage(arg0: $CallbackInfoReturnable<any>): void;
        handler$dhg000$wover$captureRegistry(arg0: $CallbackInfoReturnable<any>): void;
        handler$dhc000$wover$createNewWorld(arg0: $CallbackInfoReturnable<any>): void;
        static createTempDataPackDirFromExistingWorld(datapackDir: $Path_, minecraft: $Minecraft): $Path;
        static access$000(arg0: $CreateWorldScreen): $Font;
        static access$100(arg0: $CreateWorldScreen, arg1: $GuiEventListener): void;
        static access$200(arg0: $CreateWorldScreen): $Font;
        static access$300(arg0: $CreateWorldScreen): $Minecraft;
        static access$400(arg0: $CreateWorldScreen): $Minecraft;
        static access$500(arg0: $CreateWorldScreen): $Font;
        static access$600(arg0: $CreateWorldScreen): $Font;
        static access$700(arg0: $CreateWorldScreen): $Minecraft;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static GAME_MODEL_LABEL: $Component;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static EXPERIMENTS_LABEL: $Component;
        static ALLOW_COMMANDS_INFO: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        uiState: $WorldCreationUiState;
        narratorButton: $CycleButton<$NarratorStatus>;
        static TAB_HEADER_BACKGROUND: $ResourceLocation;
        renderables: $List<$Renderable>;
        static NAME_LABEL: $Component;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
    }
}
