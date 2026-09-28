import { $Component } from "@package/net/minecraft/network/chat";
import { $Set_, $Set } from "@package/java/util";
import { $Enum, $Record } from "@package/java/lang";
import { $ReflectionBasedSerialization } from "@package/com/mojang/realmsclient/dto";

declare module "@package/com/mojang/realmsclient/util" {
    export class $RealmsPersistence {
        static readFile(): $RealmsPersistence$RealmsPersistenceData;
        static writeFile(persistenceData: $RealmsPersistence$RealmsPersistenceData): void;
        read(): $RealmsPersistence$RealmsPersistenceData;
        save(persistenceData: $RealmsPersistence$RealmsPersistenceData): void;
        constructor();
    }
    export class $RealmsPersistence$RealmsPersistenceData implements $ReflectionBasedSerialization {
        hasUnreadNews: boolean;
        newsLink: string;
        constructor();
    }
    export class $LevelType extends $Enum<$LevelType> {
        getDtoIndex(): number;
        getName(): $Component;
        static values(): $LevelType[];
        static valueOf(arg0: string): $LevelType;
        static AMPLIFIED: $LevelType;
        static FLAT: $LevelType;
        static LARGE_BIOMES: $LevelType;
        static DEFAULT: $LevelType;
    }
    /**
     * Values that may be interpreted as {@link $LevelType}.
     */
    export type $LevelType_ = "default" | "flat" | "large_biomes" | "amplified";
    export class $WorldGenerationInfo extends $Record {
        levelType(): $LevelType;
        experiments(): $Set<string>;
        generateStructures(): boolean;
        seed(): string;
        constructor(arg0: string, arg1: $LevelType_, arg2: boolean, arg3: $Set_<string>);
    }
    /**
     * Values that may be interpreted as {@link $WorldGenerationInfo}.
     */
    export type $WorldGenerationInfo_ = { generateStructures?: boolean, levelType?: $LevelType_, experiments?: $Set_<string>, seed?: string,  } | [generateStructures?: boolean, levelType?: $LevelType_, experiments?: $Set_<string>, seed?: string, ];
}
