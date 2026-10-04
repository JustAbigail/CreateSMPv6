import { $EntityDataAccessor } from "@package/net/minecraft/network/syncher";

declare module "@package/fuzs/bettertridents/mixin/accessor" {
    export class $ThrownTridentAccessor {
        static getLoyaltyId(): $EntityDataAccessor<number>;
        static get loyaltyId(): $EntityDataAccessor<number>;
    }
    export interface $ThrownTridentAccessor {
    }
    export class $ItemEntityAccessor {
    }
    export interface $ItemEntityAccessor {
        setBobOffs(arg0: number): void;
        setAge(arg0: number): void;
        set bobOffs(value: number);
        set age(value: number);
    }
    export class $ExperienceOrbAccessor {
    }
    export interface $ExperienceOrbAccessor {
        setAge(arg0: number): void;
        setValue(arg0: number): void;
        getAge(): number;
        set value(value: number);
    }
}
