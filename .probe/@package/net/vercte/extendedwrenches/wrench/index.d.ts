import { $IntFunction } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Enum, $Record } from "@package/java/lang";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/net/vercte/extendedwrenches/wrench" {
    export class $WrenchPart extends $Enum<$WrenchPart> implements $StringRepresentable {
        static values(): $WrenchPart[];
        static valueOf(arg0: string): $WrenchPart;
        getId(): number;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static HEAD: $WrenchPart;
        static BY_ID: $IntFunction<$WrenchPart>;
        static COG: $WrenchPart;
        static HANDLE: $WrenchPart;
        static AXIS: $WrenchPart;
        get id(): number;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $WrenchPart}.
     */
    export type $WrenchPart_ = "head" | "handle" | "cog" | "axis";
    export interface $WrenchMaterial extends RegistryMarked<RegistryTypes.ExtendedwrenchesWrenchMaterialTag, RegistryTypes.ExtendedwrenchesWrenchMaterial> {}
    export class $WrenchMaterial extends $Record {
        texture(): $ResourceLocation;
        part(): $WrenchPart;
        static CODEC: $Codec<$WrenchMaterial>;
        constructor(texture: $ResourceLocation_, part: $WrenchPart_);
    }
    /**
     * Values that may be interpreted as {@link $WrenchMaterial}.
     */
    export type $WrenchMaterial_ = RegistryTypes.ExtendedwrenchesWrenchMaterial | { texture?: $ResourceLocation_, part?: $WrenchPart_,  } | [texture?: $ResourceLocation_, part?: $WrenchPart_, ];
}
