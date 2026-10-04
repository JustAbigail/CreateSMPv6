import { $StructurePoolElement } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $Holder, $Holder_ } from "@package/net/minecraft/core";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $StructureTemplateManager, $StructureTemplate } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $List_, $List } from "@package/java/util";
import { $PlacedFeature } from "@package/net/minecraft/world/level/levelgen/placement";
import { $NoiseSettings, $NoiseSettings_ } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/com/yungnickyoung/minecraft/yungsapi/mixin/accessor" {
    export class $StructureTemplatePoolAccessor {
    }
    export interface $StructureTemplatePoolAccessor {
        getRawTemplates(): $List<$Pair<$StructurePoolElement, number>>;
        get rawTemplates(): $List<$Pair<$StructurePoolElement, number>>;
    }
    /**
     * Values that may be interpreted as {@link $StructureTemplatePoolAccessor}.
     */
    export type $StructureTemplatePoolAccessor_ = (() => $List_<$Pair<$StructurePoolElement, number>>);
    export class $BoundingBoxAccessor {
    }
    export interface $BoundingBoxAccessor {
        setMinY(arg0: number): void;
        setMinX(arg0: number): void;
        setMinZ(arg0: number): void;
        setMaxX(arg0: number): void;
        setMaxY(arg0: number): void;
        setMaxZ(arg0: number): void;
        set minY(value: number);
        set minX(value: number);
        set minZ(value: number);
        set maxX(value: number);
        set maxY(value: number);
        set maxZ(value: number);
    }
    export class $ListPoolElementAccessor {
    }
    export interface $ListPoolElementAccessor {
        getElements(): $List<$StructurePoolElement>;
        get elements(): $List<$StructurePoolElement>;
    }
    /**
     * Values that may be interpreted as {@link $ListPoolElementAccessor}.
     */
    export type $ListPoolElementAccessor_ = (() => $List_<$StructurePoolElement>);
    export class $FeaturePoolElementAccessor {
    }
    export interface $FeaturePoolElementAccessor {
        getFeature(): $Holder<$PlacedFeature>;
        get feature(): $Holder<$PlacedFeature>;
    }
    /**
     * Values that may be interpreted as {@link $FeaturePoolElementAccessor}.
     */
    export type $FeaturePoolElementAccessor_ = (() => $Holder_<$PlacedFeature>);
    export class $SinglePoolElementAccessor {
    }
    export interface $SinglePoolElementAccessor {
        callGetTemplate(arg0: $StructureTemplateManager): $StructureTemplate;
    }
    /**
     * Values that may be interpreted as {@link $SinglePoolElementAccessor}.
     */
    export type $SinglePoolElementAccessor_ = ((arg0: $StructureTemplateManager) => $StructureTemplate);
    export class $PotionAccessor {
    }
    export interface $PotionAccessor {
        getName(): string;
        setName(arg0: string): void;
    }
    export class $NoiseChunkAccessor {
    }
    export interface $NoiseChunkAccessor {
        getNoiseSettings(): $NoiseSettings;
        get noiseSettings(): $NoiseSettings;
    }
    /**
     * Values that may be interpreted as {@link $NoiseChunkAccessor}.
     */
    export type $NoiseChunkAccessor_ = (() => $NoiseSettings_);
}
