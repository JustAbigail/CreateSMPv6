import { $LevelAccessor, $WorldGenLevel, $StructureManager } from "@package/net/minecraft/world/level";
import { $SinglePoolElementAccessor as $SinglePoolElementAccessor$1, $StructureTemplatePoolAccessor as $StructureTemplatePoolAccessor$1, $ListPoolElementAccessor, $FeaturePoolElementAccessor } from "@package/com/yungnickyoung/minecraft/yungsapi/mixin/accessor";
import { $StructurePoolAccess } from "@package/dev/worldgen/lithostitched/duck";
import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Pair, $Either } from "@package/com/mojang/datafixers/util";
import { $StructureTemplatePoolAccessor, $SinglePoolElementAccessor } from "@package/dev/worldgen/lithostitched/mixin/common";
import { $StructureTemplate$StructureBlockInfo, $StructureProcessorList, $StructureTemplate$StructureBlockInfo_, $StructureProcessor, $LiquidSettings_, $LiquidSettings, $StructureTemplateManager, $StructurePlaceSettings, $StructureTemplate } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $ChunkGenerator } from "@package/net/minecraft/world/level/chunk";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $List, $List_ } from "@package/java/util";
import { $PlacedFeature } from "@package/net/minecraft/world/level/levelgen/placement";
import { $StringRepresentable, $RandomSource, $StringRepresentable$EnumCodec } from "@package/net/minecraft/util";
import { $Function_, $Function } from "@package/java/util/function";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $Holder_, $Holder, $BlockPos_, $Vec3i } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $LithostitchedTemplates } from "@package/dev/worldgen/lithostitched/worldgen/structure";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $RecordCodecBuilder } from "@package/com/mojang/serialization/codecs";
import { $Rotation_ } from "@package/net/minecraft/world/level/block";
import { $Enum, $Record } from "@package/java/lang";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
export * as alias from "@package/net/minecraft/world/level/levelgen/structure/pools/alias";

declare module "@package/net/minecraft/world/level/levelgen/structure/pools" {
    export class $SinglePoolElement extends $StructurePoolElement implements $SinglePoolElementAccessor$1, $SinglePoolElementAccessor {
        static overrideLiquidSettingsCodec<E extends $SinglePoolElement>(): $RecordCodecBuilder<E, ($LiquidSettings) | undefined>;
        static processorsCodec<E extends $SinglePoolElement>(): $RecordCodecBuilder<E, $Holder<$StructureProcessorList>>;
        static templateCodec<E extends $SinglePoolElement>(): $RecordCodecBuilder<E, $Either<$ResourceLocation, $StructureTemplate>>;
        getDataMarkers(structureTemplateManager: $StructureTemplateManager, pos: $BlockPos_, rotation: $Rotation_, relativePosition: boolean): $List<$StructureTemplate$StructureBlockInfo>;
        static sortBySelectionPriority(structureBlockInfos: $List_<$StructureTemplate$StructureBlockInfo_>): void;
        getSettings(rotation: $Rotation_, boundingBox: $BoundingBox, liquidSettings: $LiquidSettings_, offset: boolean): $StructurePlaceSettings;
        getTemplate(structureTemplateManager: $StructureTemplateManager): $StructureTemplate;
        setProcessors(holder: $Holder_<$StructureProcessorList>): void;
        callGetTemplate(structureTemplateManager: $StructureTemplateManager): $StructureTemplate;
        getProcessors(): $Holder<$StructureProcessorList>;
        getTemplate(): $Either<$ResourceLocation, $StructureTemplate>;
        template: $Either<$ResourceLocation, $StructureTemplate>;
        static CODEC: $MapCodec<$SinglePoolElement>;
        overrideLiquidSettings: ($LiquidSettings) | undefined;
        processors: $Holder<$StructureProcessorList>;
        constructor(template: $Either<$ResourceLocation_, $StructureTemplate>, processors: $Holder_<$StructureProcessorList>, projection: $StructureTemplatePool$Projection_, overrideLiquidSettings: ($LiquidSettings_) | undefined);
    }
    export class $StructurePoolElement {
        place(structureTemplateManager: $StructureTemplateManager, level: $WorldGenLevel, structureManager: $StructureManager, generator: $ChunkGenerator, offset: $BlockPos_, pos: $BlockPos_, rotation: $Rotation_, box: $BoundingBox, random: $RandomSource, liquidSettings: $LiquidSettings_, keepJigsaws: boolean): boolean;
        handleDataMarker(level: $LevelAccessor, blockInfo: $StructureTemplate$StructureBlockInfo_, pos: $BlockPos_, rotation: $Rotation_, random: $RandomSource, box: $BoundingBox): void;
        getGroundLevelDelta(): number;
        static projectionCodec<E extends $StructurePoolElement>(): $RecordCodecBuilder<E, $StructureTemplatePool$Projection>;
        getProjection(): $StructureTemplatePool$Projection;
        getShuffledJigsawBlocks(structureTemplateManager: $StructureTemplateManager, pos: $BlockPos_, rotation: $Rotation_, random: $RandomSource): $List<$StructureTemplate$StructureBlockInfo>;
        setProjection(projection: $StructureTemplatePool$Projection_): $StructurePoolElement;
        static list(elements: $List_<$Function_<$StructureTemplatePool$Projection, $StructurePoolElement>>): $Function<$StructureTemplatePool$Projection, $ListPoolElement>;
        static single(id: string, liquidSettings: $LiquidSettings_): $Function<$StructureTemplatePool$Projection, $SinglePoolElement>;
        static single(id: string): $Function<$StructureTemplatePool$Projection, $SinglePoolElement>;
        static single(id: string, processors: $Holder_<$StructureProcessorList>, liquidSettings: $LiquidSettings_): $Function<$StructureTemplatePool$Projection, $SinglePoolElement>;
        static single(id: string, processors: $Holder_<$StructureProcessorList>): $Function<$StructureTemplatePool$Projection, $SinglePoolElement>;
        static empty(): $Function<$StructureTemplatePool$Projection, $EmptyPoolElement>;
        static feature(feature: $Holder_<$PlacedFeature>): $Function<$StructureTemplatePool$Projection, $FeaturePoolElement>;
        getType(): $StructurePoolElementType<never>;
        getSize(structureTemplateManager: $StructureTemplateManager, rotation: $Rotation_): $Vec3i;
        static legacy(id: string, processors: $Holder_<$StructureProcessorList>): $Function<$StructureTemplatePool$Projection, $LegacySinglePoolElement>;
        static legacy(id: string): $Function<$StructureTemplatePool$Projection, $LegacySinglePoolElement>;
        getBoundingBox(structureTemplateManager: $StructureTemplateManager, pos: $BlockPos_, rotation: $Rotation_): $BoundingBox;
        static CODEC: $Codec<$StructurePoolElement>;
        constructor(projection: $StructureTemplatePool$Projection_);
    }
    export class $ListPoolElement extends $StructurePoolElement implements $ListPoolElementAccessor {
        getElements(): $List<$StructurePoolElement>;
        static CODEC: $MapCodec<$ListPoolElement>;
        elements: $List<$StructurePoolElement>;
        constructor(elements: $List_<$StructurePoolElement>, projection: $StructureTemplatePool$Projection_);
    }
    export interface $StructureTemplatePool extends RegistryMarked<RegistryTypes.WorldgenTemplatePoolTag, RegistryTypes.WorldgenTemplatePool> {}
    export class $EmptyPoolElement extends $StructurePoolElement {
        static CODEC: $MapCodec<$EmptyPoolElement>;
        static INSTANCE: $EmptyPoolElement;
    }
    export class $FeaturePoolElement extends $StructurePoolElement implements $FeaturePoolElementAccessor {
        getFeature(): $Holder<$PlacedFeature>;
        static CODEC: $MapCodec<$FeaturePoolElement>;
        constructor(feature: $Holder_<$PlacedFeature>, projection: $StructureTemplatePool$Projection_);
    }
    export class $StructurePoolElementType<P extends $StructurePoolElement> {
        static register<P extends $StructurePoolElement>(name: string, codec: $MapCodec_<P>): $StructurePoolElementType<P>;
        static SINGLE: $StructurePoolElementType<$SinglePoolElement>;
        static LEGACY: $StructurePoolElementType<$LegacySinglePoolElement>;
        static FEATURE: $StructurePoolElementType<$FeaturePoolElement>;
        static LIST: $StructurePoolElementType<$ListPoolElement>;
        static EMPTY: $StructurePoolElementType<$EmptyPoolElement>;
    }
    export interface $StructurePoolElementType<P extends $StructurePoolElement> {
        codec(): $MapCodec<P>;
    }
    /**
     * Values that may be interpreted as {@link $StructurePoolElementType}.
     */
    export type $StructurePoolElementType_<P> = RegistryTypes.WorldgenStructurePoolElement | (() => $MapCodec_<P>);
    export class $DimensionPadding extends $Record {
        hasEqualTopAndBottom(): boolean;
        bottom(): number;
        top(): number;
        static ZERO: $DimensionPadding;
        static CODEC: $Codec<$DimensionPadding>;
        constructor(padding: number);
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $DimensionPadding}.
     */
    export type $DimensionPadding_ = { bottom?: number, top?: number,  } | [bottom?: number, top?: number, ];
    export class $LegacySinglePoolElement extends $SinglePoolElement {
        template: $Either<$ResourceLocation, $StructureTemplate>;
        static CODEC: $MapCodec<$LegacySinglePoolElement>;
        overrideLiquidSettings: ($LiquidSettings) | undefined;
        processors: $Holder<$StructureProcessorList>;
        constructor(arg0: $Either<$ResourceLocation_, $StructureTemplate>, arg1: $Holder_<$StructureProcessorList>, arg2: $StructureTemplatePool$Projection_, arg3: ($LiquidSettings_) | undefined);
    }
    export interface $StructurePoolElementType<P> extends RegistryMarked<RegistryTypes.WorldgenStructurePoolElementTag, RegistryTypes.WorldgenStructurePoolElement> {}
    export class $StructureTemplatePool implements $StructureTemplatePoolAccessor$1, $StructureTemplatePoolAccessor, $StructurePoolAccess {
        getMaxSize(structureTemplateManager: $StructureTemplateManager): number;
        getRandomTemplate(random: $RandomSource): $StructurePoolElement;
        getShuffledTemplates(random: $RandomSource): $List<$StructurePoolElement>;
        getLithostitchedTemplates(): $LithostitchedTemplates;
        compileRawTemplates(): void;
        size(): number;
        getFallback(): $Holder<$StructureTemplatePool>;
        getRawTemplates(): $List<$Pair<$StructurePoolElement, number>>;
        getVanillaTemplates(): $ObjectArrayList<$StructurePoolElement>;
        setRawTemplates(list: $List_<$Pair<$StructurePoolElement, number>>): void;
        setVanillaTemplates(objectArrayList: $ObjectArrayList<$StructurePoolElement>): void;
        static CODEC: $Codec<$Holder<$StructureTemplatePool>>;
        static DIRECT_CODEC: $Codec<$StructureTemplatePool>;
        constructor(fallback: $Holder_<$StructureTemplatePool>, rawTemplateFactories: $List_<$Pair<$Function_<$StructureTemplatePool$Projection, $StructurePoolElement>, number>>, projection: $StructureTemplatePool$Projection_);
        constructor(fallback: $Holder_<$StructureTemplatePool>, rawTemplates: $List_<$Pair<$StructurePoolElement, number>>);
    }
    /**
     * Values that may be interpreted as {@link $StructureTemplatePool}.
     */
    export type $StructureTemplatePool_ = RegistryTypes.WorldgenTemplatePool;
    export class $StructureTemplatePool$Projection extends $Enum<$StructureTemplatePool$Projection> implements $StringRepresentable {
        getName(): string;
        static values(): $StructureTemplatePool$Projection[];
        static valueOf(name: string): $StructureTemplatePool$Projection;
        getProcessors(): $ImmutableList<$StructureProcessor>;
        static byName(name: string): $StructureTemplatePool$Projection;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $StringRepresentable$EnumCodec<$StructureTemplatePool$Projection>;
        static TERRAIN_MATCHING: $StructureTemplatePool$Projection;
        static RIGID: $StructureTemplatePool$Projection;
    }
    /**
     * Values that may be interpreted as {@link $StructureTemplatePool$Projection}.
     */
    export type $StructureTemplatePool$Projection_ = "terrain_matching" | "rigid";
}
