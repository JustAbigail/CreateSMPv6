import { $Level_ } from "@package/net/minecraft/world/level";
import { $KineticNetworkAccessor } from "@package/com/hlysine/create_connected/mixin/kineticbattery";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $FlywheelAccessibleKineticNetwork } from "@package/com/kipti/bnb/mixin_accessor";
import { $KineticBlockEntity } from "@package/com/simibubi/create/content/kinetics/base";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Map } from "@package/java/util";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as base from "@package/com/simibubi/create/content/kinetics/base";
export * as belt from "@package/com/simibubi/create/content/kinetics/belt";
export * as fan from "@package/com/simibubi/create/content/kinetics/fan";
export * as transmission from "@package/com/simibubi/create/content/kinetics/transmission";
export * as mechanicalArm from "@package/com/simibubi/create/content/kinetics/mechanicalArm";
export * as deployer from "@package/com/simibubi/create/content/kinetics/deployer";

declare module "@package/com/simibubi/create/content/kinetics" {
    export class $KineticNetwork implements $FlywheelAccessibleKineticNetwork, $KineticNetworkAccessor {
        calculateCapacity(): number;
        updateNetwork(): void;
        initFromTE(arg0: number, arg1: number, arg2: number): void;
        addSilently(arg0: $KineticBlockEntity, arg1: number, arg2: number): void;
        bits_n_bobs$getFlywheelStressAbsoptionCapacity(): number;
        bits_n_bobs$getFlywheelStressReleaseCapacity(): number;
        bits_n_bobs$updateFlywheelStresses(): void;
        getActualCapacityOf(arg0: $KineticBlockEntity): number;
        updateCapacityFor(arg0: $KineticBlockEntity, arg1: number): void;
        updateStressFor(arg0: $KineticBlockEntity, arg1: number): void;
        updateStress(): void;
        handler$ehh000$bits_n_bobs$updateNetworkHead(arg0: $CallbackInfo): void;
        updateCapacity(): void;
        handler$ehh000$bits_n_bobs$addSilently(arg0: $KineticBlockEntity, arg1: number, arg2: number, arg3: $CallbackInfo): void;
        handler$ehh000$bits_n_bobs$add(arg0: $KineticBlockEntity, arg1: $CallbackInfo): void;
        handler$ehh000$bits_n_bobs$remove(arg0: $KineticBlockEntity, arg1: $CallbackInfo): void;
        calculateStress(): number;
        getActualStressOf(arg0: $KineticBlockEntity): number;
        redirect$eab000$simulated$extraKineticsCapacity(arg0: $Level_, arg1: $BlockPos_): $BlockEntity;
        redirect$eab000$simulated$extraKineticsStress(arg0: $Level_, arg1: $BlockPos_): $BlockEntity;
        remove(arg0: $KineticBlockEntity): void;
        add(arg0: $KineticBlockEntity): void;
        getSize(): number;
        sync(): void;
        getUnloadedStress(): number;
        sources: $Map<$KineticBlockEntity, number>;
        members: $Map<$KineticBlockEntity, number>;
        initialized: boolean;
        id: number;
        constructor();
    }
}
