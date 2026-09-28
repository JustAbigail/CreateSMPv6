import { $Codec } from "@package/com/mojang/serialization";
import { $Record } from "@package/java/lang";

declare module "@package/net/neoforged/neoforge/registries/datamaps/builtin" {
    export class $Compostable extends $Record {
        canVillagerCompost(): boolean;
        chance(): number;
        static CODEC: $Codec<$Compostable>;
        static CHANCE_CODEC: $Codec<$Compostable>;
        constructor(chance: number, canVillagerCompost: boolean);
        constructor(arg0: number);
    }
    /**
     * Values that may be interpreted as {@link $Compostable}.
     */
    export type $Compostable_ = { canVillagerCompost?: boolean, chance?: number,  } | [canVillagerCompost?: boolean, chance?: number, ];
}
