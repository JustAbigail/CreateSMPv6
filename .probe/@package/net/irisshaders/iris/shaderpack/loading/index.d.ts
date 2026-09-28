import { $Enum } from "@package/java/lang";
import { $BlendModeOverride } from "@package/net/irisshaders/iris/gl/blending";

declare module "@package/net/irisshaders/iris/shaderpack/loading" {
    export class $ProgramGroup extends $Enum<$ProgramGroup> {
        static values(): $ProgramGroup[];
        static valueOf(arg0: string): $ProgramGroup;
        getBaseName(): string;
        static Composite: $ProgramGroup;
        static Dh: $ProgramGroup;
        static Gbuffers: $ProgramGroup;
        static Deferred: $ProgramGroup;
        static Begin: $ProgramGroup;
        static Shadow: $ProgramGroup;
        static Prepare: $ProgramGroup;
        static Setup: $ProgramGroup;
        static Final: $ProgramGroup;
        static ShadowComposite: $ProgramGroup;
    }
    /**
     * Values that may be interpreted as {@link $ProgramGroup}.
     */
    export type $ProgramGroup_ = "setup" | "begin" | "shadow" | "shadowcomposite" | "prepare" | "gbuffers" | "deferred" | "composite" | "final" | "dh";
    export class $ProgramArrayId extends $Enum<$ProgramArrayId> {
        getNumPrograms(): number;
        getSourcePrefix(): string;
        static values(): $ProgramArrayId[];
        static valueOf(arg0: string): $ProgramArrayId;
        getGroup(): $ProgramGroup;
        static Composite: $ProgramArrayId;
        static Deferred: $ProgramArrayId;
        static Begin: $ProgramArrayId;
        static Prepare: $ProgramArrayId;
        static Setup: $ProgramArrayId;
        static ShadowComposite: $ProgramArrayId;
    }
    /**
     * Values that may be interpreted as {@link $ProgramArrayId}.
     */
    export type $ProgramArrayId_ = "setup" | "begin" | "shadowcomposite" | "prepare" | "deferred" | "composite";
    export class $ProgramId extends $Enum<$ProgramId> {
        getBlendModeOverride(): $BlendModeOverride;
        static values(): $ProgramId[];
        static valueOf(arg0: string): $ProgramId;
        getSourceName(): string;
        getGroup(): $ProgramGroup;
        getFallback(): ($ProgramId) | undefined;
        static Water: $ProgramId;
        static Basic: $ProgramId;
        static ShadowSolid: $ProgramId;
        static Clouds: $ProgramId;
        static DhWater: $ProgramId;
        static DhShadow: $ProgramId;
        static Shadow: $ProgramId;
        static DhGeneric: $ProgramId;
        static ShadowWater: $ProgramId;
        static SpiderEyes: $ProgramId;
        static SkyTextured: $ProgramId;
        static Item: $ProgramId;
        static TerrainCutout: $ProgramId;
        static BeaconBeam: $ProgramId;
        static HandWater: $ProgramId;
        static ShadowCutout: $ProgramId;
        static EntitiesGlowing: $ProgramId;
        static ShadowLightning: $ProgramId;
        static Final: $ProgramId;
        static Textured: $ProgramId;
        static ShadowEntities: $ProgramId;
        static BlockTrans: $ProgramId;
        static DamagedBlock: $ProgramId;
        static SkyBasic: $ProgramId;
        static EntitiesTrans: $ProgramId;
        static Hand: $ProgramId;
        static TexturedLit: $ProgramId;
        static Particles: $ProgramId;
        static Entities: $ProgramId;
        static Line: $ProgramId;
        static Weather: $ProgramId;
        static ShadowBlock: $ProgramId;
        static Terrain: $ProgramId;
        static ParticlesTrans: $ProgramId;
        static Lightning: $ProgramId;
        static Block: $ProgramId;
        static DhTerrain: $ProgramId;
        static TerrainSolid: $ProgramId;
        static ArmorGlint: $ProgramId;
    }
    /**
     * Values that may be interpreted as {@link $ProgramId}.
     */
    export type $ProgramId_ = "shadow" | "shadowsolid" | "shadowcutout" | "shadowwater" | "shadowentities" | "shadowlightning" | "shadowblock" | "basic" | "line" | "textured" | "texturedlit" | "skybasic" | "skytextured" | "clouds" | "terrain" | "terrainsolid" | "terraincutout" | "damagedblock" | "block" | "blocktrans" | "beaconbeam" | "item" | "entities" | "entitiestrans" | "lightning" | "particles" | "particlestrans" | "entitiesglowing" | "armorglint" | "spidereyes" | "hand" | "weather" | "water" | "handwater" | "dhterrain" | "dhwater" | "dhgeneric" | "dhshadow" | "final";
}
