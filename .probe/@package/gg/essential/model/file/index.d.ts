import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $KSerializer } from "@package/kotlinx/serialization";
import { $AnimationEvent } from "@package/gg/essential/cosmetics/events";
import { $SerialDescriptor } from "@package/kotlinx/serialization/descriptors";
import { $EnumEntries } from "@package/kotlin/enums";
import { $Enum, $Object } from "@package/java/lang";
import { $List, $Map_, $Map, $List_ } from "@package/java/util";
import { $SoundCategory_, $SoundCategory, $Channels } from "@package/gg/essential/model";
import { $CompositeEncoder } from "@package/kotlinx/serialization/encoding";
import { $Lazy } from "@package/kotlin";
import { $SerializationConstructorMarker } from "@package/kotlinx/serialization/internal";

declare module "@package/gg/essential/model/file" {
    export class $ParticlesFile {
        getParticleEffect(): $ParticlesFile$ParticleEffect;
        static write$Self$cosmetics(arg0: $ParticlesFile, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        getFormatVersion(): string;
        static getFormatVersion$annotations(): void;
        static getParticleEffect$annotations(): void;
        copy(arg0: string, arg1: $ParticlesFile$ParticleEffect): $ParticlesFile;
        component1(): string;
        component2(): $ParticlesFile$ParticleEffect;
        static copy$default(arg0: $ParticlesFile, arg1: string, arg2: $ParticlesFile$ParticleEffect, arg3: number, arg4: $Object): $ParticlesFile;
        static Companion: $ParticlesFile$Companion;
        constructor(arg0: number, arg1: string, arg2: $ParticlesFile$ParticleEffect, arg3: $SerializationConstructorMarker);
        constructor(arg0: string, arg1: $ParticlesFile$ParticleEffect);
    }
    export class $AnimationFile {
        component3(): $List<$AnimationEvent>;
        getTriggers(): $List<$AnimationEvent>;
        static write$Self$cosmetics(arg0: $AnimationFile, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        getAnimations(): $Map<string, $AnimationFile$Animation>;
        getFormatVersion(): string;
        static getFormatVersion$annotations(): void;
        copy(arg0: string, arg1: $Map_<string, $AnimationFile$Animation>, arg2: $List_<$AnimationEvent>): $AnimationFile;
        component1(): string;
        component2(): $Map<string, $AnimationFile$Animation>;
        static copy$default(arg0: $AnimationFile, arg1: string, arg2: $Map_<any, any>, arg3: $List_<any>, arg4: number, arg5: $Object): $AnimationFile;
        static Companion: $AnimationFile$Companion;
        constructor(arg0: string, arg1: $Map_<string, $AnimationFile$Animation>, arg2: $List_<$AnimationEvent>);
        constructor(arg0: number, arg1: string, arg2: $Map_<any, any>, arg3: $List_<any>, arg4: $SerializationConstructorMarker);
        constructor(arg0: string, arg1: $Map_<any, any>, arg2: $List_<any>, arg3: number, arg4: $DefaultConstructorMarker);
    }
    export class $ModelFile$Companion {
        serializer(): $KSerializer<$ModelFile>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $AnimationFile$Animation {
        component3(): $Map<string, $Channels>;
        component4(): $Map<number, $List<$AnimationFile$Animation$ParticleEffect>>;
        component5(): $Map<number, $List<$AnimationFile$Animation$SoundEffect>>;
        getAnimationLength(): number;
        static write$Self$cosmetics(arg0: $AnimationFile$Animation, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        getBones(): $Map<string, $Channels>;
        getLoop(): $AnimationFile$Loop;
        static getAnimationLength$annotations(): void;
        static getParticleEffects$annotations(): void;
        getParticleEffects(): $Map<number, $List<$AnimationFile$Animation$ParticleEffect>>;
        static getSoundEffects$annotations(): void;
        getSoundEffects(): $Map<number, $List<$AnimationFile$Animation$SoundEffect>>;
        copy(arg0: $AnimationFile$Loop_, arg1: number, arg2: $Map_<string, $Channels>, arg3: $Map_<number, $List_<$AnimationFile$Animation$ParticleEffect>>, arg4: $Map_<number, $List_<$AnimationFile$Animation$SoundEffect>>): $AnimationFile$Animation;
        component1(): $AnimationFile$Loop;
        component2(): number;
        static copy$default(arg0: $AnimationFile$Animation, arg1: $AnimationFile$Loop_, arg2: number, arg3: $Map_<any, any>, arg4: $Map_<any, any>, arg5: $Map_<any, any>, arg6: number, arg7: $Object): $AnimationFile$Animation;
        static Companion: $AnimationFile$Animation$Companion;
        constructor(arg0: number, arg1: $AnimationFile$Loop_, arg2: number, arg3: $Map_<any, any>, arg4: $Map_<any, any>, arg5: $Map_<any, any>, arg6: $SerializationConstructorMarker);
        constructor();
        constructor(arg0: $AnimationFile$Loop_, arg1: number, arg2: $Map_<string, $Channels>, arg3: $Map_<number, $List_<$AnimationFile$Animation$ParticleEffect>>, arg4: $Map_<number, $List_<$AnimationFile$Animation$SoundEffect>>);
        constructor(arg0: $AnimationFile$Loop_, arg1: number, arg2: $Map_<any, any>, arg3: $Map_<any, any>, arg4: $Map_<any, any>, arg5: number, arg6: $DefaultConstructorMarker);
    }
    export class $AnimationFile$Loop extends $Enum<$AnimationFile$Loop> {
        static access$get$cachedSerializer$delegate$cp(): $Lazy<any>;
        static values(): $AnimationFile$Loop[];
        static valueOf(arg0: string): $AnimationFile$Loop;
        static getEntries(): $EnumEntries<$AnimationFile$Loop>;
        static Companion: $AnimationFile$Loop$Companion;
        static HoldOnLastFrame: $AnimationFile$Loop;
        static True: $AnimationFile$Loop;
        static False: $AnimationFile$Loop;
    }
    /**
     * Values that may be interpreted as {@link $AnimationFile$Loop}.
     */
    export type $AnimationFile$Loop_ = "false" | "true" | "holdonlastframe";
    export class $ParticlesFile$ParticleEffect {
        component3(): $Map<string, $ParticlesFile$Event>;
        component4(): $ParticleEffectComponents;
        static write$Self$cosmetics(arg0: $ParticlesFile$ParticleEffect, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        getCurves(): $Map<string, $ParticlesFile$Curve>;
        getEvents(): $Map<string, $ParticlesFile$Event>;
        getDescription(): $ParticlesFile$Description;
        copy(arg0: $ParticlesFile$Description, arg1: $Map_<string, $ParticlesFile$Curve>, arg2: $Map_<string, $ParticlesFile$Event>, arg3: $ParticleEffectComponents): $ParticlesFile$ParticleEffect;
        getComponents(): $ParticleEffectComponents;
        component1(): $ParticlesFile$Description;
        component2(): $Map<string, $ParticlesFile$Curve>;
        static copy$default(arg0: $ParticlesFile$ParticleEffect, arg1: $ParticlesFile$Description, arg2: $Map_<any, any>, arg3: $Map_<any, any>, arg4: $ParticleEffectComponents, arg5: number, arg6: $Object): $ParticlesFile$ParticleEffect;
        static Companion: $ParticlesFile$ParticleEffect$Companion;
        constructor(arg0: $ParticlesFile$Description, arg1: $Map_<any, any>, arg2: $Map_<any, any>, arg3: $ParticleEffectComponents, arg4: number, arg5: $DefaultConstructorMarker);
        constructor(arg0: number, arg1: $ParticlesFile$Description, arg2: $Map_<any, any>, arg3: $Map_<any, any>, arg4: $ParticleEffectComponents, arg5: $SerializationConstructorMarker);
        constructor(arg0: $ParticlesFile$Description, arg1: $Map_<string, $ParticlesFile$Curve>, arg2: $Map_<string, $ParticlesFile$Event>, arg3: $ParticleEffectComponents);
    }
    export class $ParticlesFile$Material extends $Enum<$ParticlesFile$Material> {
        static access$get$cachedSerializer$delegate$cp(): $Lazy<any>;
        getNeedsSorting(): boolean;
        getBackfaceCulling(): boolean;
        static values(): $ParticlesFile$Material[];
        static valueOf(arg0: string): $ParticlesFile$Material;
        static getEntries(): $EnumEntries<$ParticlesFile$Material>;
        static Companion: $ParticlesFile$Material$Companion;
        static Add: $ParticlesFile$Material;
        static Blend: $ParticlesFile$Material;
        static Cutout: $ParticlesFile$Material;
    }
    /**
     * Values that may be interpreted as {@link $ParticlesFile$Material}.
     */
    export type $ParticlesFile$Material_ = "add" | "cutout" | "blend";
    export class $SoundDefinitionsFile {
        static write$Self$cosmetics(arg0: $SoundDefinitionsFile, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        static getDefinitions$annotations(): void;
        copy(arg0: $Map_<string, $SoundDefinitionsFile$Definition>): $SoundDefinitionsFile;
        getDefinitions(): $Map<string, $SoundDefinitionsFile$Definition>;
        component1(): $Map<string, $SoundDefinitionsFile$Definition>;
        static copy$default(arg0: $SoundDefinitionsFile, arg1: $Map_<any, any>, arg2: number, arg3: $Object): $SoundDefinitionsFile;
        static Companion: $SoundDefinitionsFile$Companion;
        constructor(arg0: number, arg1: $Map_<any, any>, arg2: $SerializationConstructorMarker);
        constructor(arg0: $Map_<string, $SoundDefinitionsFile$Definition>);
    }
    export class $ParticlesFile$Companion {
        serializer(): $KSerializer<$ParticlesFile>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $SoundDefinitionsFile$Definition {
        component3(): number;
        component4(): boolean;
        component5(): $List<$SoundDefinitionsFile$Sound>;
        getSounds(): $List<$SoundDefinitionsFile$Sound>;
        getMinDistance(): number;
        getFixedPosition(): boolean;
        static write$Self$cosmetics(arg0: $SoundDefinitionsFile$Definition, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        getMaxDistance(): number;
        static getMinDistance$annotations(): void;
        static getMaxDistance$annotations(): void;
        static getFixedPosition$annotations(): void;
        copy(arg0: $SoundCategory_, arg1: number, arg2: number, arg3: boolean, arg4: $List_<$SoundDefinitionsFile$Sound>): $SoundDefinitionsFile$Definition;
        getCategory(): $SoundCategory;
        component1(): $SoundCategory;
        component2(): number;
        static copy$default(arg0: $SoundDefinitionsFile$Definition, arg1: $SoundCategory_, arg2: number, arg3: number, arg4: boolean, arg5: $List_<any>, arg6: number, arg7: $Object): $SoundDefinitionsFile$Definition;
        static Companion: $SoundDefinitionsFile$Definition$Companion;
        constructor(arg0: number, arg1: $SoundCategory_, arg2: number, arg3: number, arg4: boolean, arg5: $List_<any>, arg6: $SerializationConstructorMarker);
        constructor(arg0: $SoundCategory_, arg1: number, arg2: number, arg3: boolean, arg4: $List_<$SoundDefinitionsFile$Sound>);
        constructor(arg0: $SoundCategory_, arg1: number, arg2: number, arg3: boolean, arg4: $List_<any>, arg5: number, arg6: $DefaultConstructorMarker);
    }
    export class $ModelFile$Geometry {
        static write$Self$cosmetics(arg0: $ModelFile$Geometry, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        getBones(): $List<$ModelFile$Bone>;
        getDescription(): $ModelFile$Description;
        copy(arg0: $ModelFile$Description, arg1: $List_<$ModelFile$Bone>): $ModelFile$Geometry;
        component1(): $ModelFile$Description;
        component2(): $List<$ModelFile$Bone>;
        static copy$default(arg0: $ModelFile$Geometry, arg1: $ModelFile$Description, arg2: $List_<any>, arg3: number, arg4: $Object): $ModelFile$Geometry;
        static Companion: $ModelFile$Geometry$Companion;
        constructor(arg0: number, arg1: $ModelFile$Description, arg2: $List_<any>, arg3: $SerializationConstructorMarker);
        constructor(arg0: $ModelFile$Description, arg1: $List_<$ModelFile$Bone>);
        constructor(arg0: $ModelFile$Description, arg1: $List_<any>, arg2: number, arg3: $DefaultConstructorMarker);
    }
    export class $SoundDefinitionsFile$Companion {
        serializer(): $KSerializer<$SoundDefinitionsFile>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $ModelFile {
        static write$Self$cosmetics(arg0: $ModelFile, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        getFormatVersion(): string;
        static getGeometries$annotations(): void;
        getGeometries(): $List<$ModelFile$Geometry>;
        static getFormatVersion$annotations(): void;
        copy(arg0: string, arg1: $List_<$ModelFile$Geometry>): $ModelFile;
        component1(): string;
        component2(): $List<$ModelFile$Geometry>;
        static copy$default(arg0: $ModelFile, arg1: string, arg2: $List_<any>, arg3: number, arg4: $Object): $ModelFile;
        static Companion: $ModelFile$Companion;
        constructor(arg0: number, arg1: string, arg2: $List_<any>, arg3: $SerializationConstructorMarker);
        constructor(arg0: string, arg1: $List_<$ModelFile$Geometry>);
        constructor(arg0: string, arg1: $List_<any>, arg2: number, arg3: $DefaultConstructorMarker);
    }
    export class $AnimationFile$Companion {
        serializer(): $KSerializer<$AnimationFile>;
        constructor(arg0: $DefaultConstructorMarker);
    }
}
