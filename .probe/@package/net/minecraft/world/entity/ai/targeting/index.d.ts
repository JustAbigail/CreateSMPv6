import { $Predicate_ } from "@package/java/util/function";
import { $LivingEntity } from "@package/net/minecraft/world/entity";

declare module "@package/net/minecraft/world/entity/ai/targeting" {
    export class $TargetingConditions {
        selector(customPredicate: $Predicate_<$LivingEntity> | null): $TargetingConditions;
        ignoreInvisibilityTesting(): $TargetingConditions;
        static forNonCombat(): $TargetingConditions;
        ignoreLineOfSight(): $TargetingConditions;
        static forCombat(): $TargetingConditions;
        test(attacker: $LivingEntity | null, target: $LivingEntity): boolean;
        copy(): $TargetingConditions;
        range(distance: number): $TargetingConditions;
        static DEFAULT: $TargetingConditions;
    }
}
