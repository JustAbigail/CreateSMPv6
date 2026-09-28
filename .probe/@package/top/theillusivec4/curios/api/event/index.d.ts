import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Multimap, $ImmutableList } from "@package/com/google/common/collect";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $AttributeModifier_, $Attribute, $AttributeModifier } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Set, $Set_, $Collection_, $Collection } from "@package/java/util";
import { $Tuple } from "@package/net/minecraft/util";
import { $SlotContext_, $SlotContext } from "@package/top/theillusivec4/curios/api";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $TriState_, $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $ICuriosItemHandler, $ICurio$DropRule_, $ICurio$DropRule } from "@package/top/theillusivec4/curios/api/type/capability";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LivingEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/top/theillusivec4/curios/api/event" {
    export class $CurioCanEquipEvent extends $LivingEvent {
        setEquipResult(arg0: $TriState_): void;
        getEquipResult(): $TriState;
        getSlotContext(): $SlotContext;
        getStack(): $ItemStack;
        constructor(arg0: $ItemStack_, arg1: $SlotContext_, arg2: $TriState_);
        /**
         * @deprecated
         */
        constructor(arg0: $ItemStack_, arg1: $SlotContext_);
    }
    export class $SlotModifiersUpdatedEvent extends $LivingEvent {
        getTypes(): $Set<string>;
        constructor(arg0: $LivingEntity, arg1: $Set_<string>);
    }
    export class $CurioChangeEvent extends $LivingEvent {
        getFrom(): $ItemStack;
        getSlotIndex(): number;
        getIdentifier(): string;
        getTo(): $ItemStack;
        constructor(arg0: $LivingEntity, arg1: string, arg2: number, arg3: $ItemStack_, arg4: $ItemStack_);
    }
    export class $CurioCanUnequipEvent extends $LivingEvent {
        setUnequipResult(arg0: $TriState_): void;
        getUnequipResult(): $TriState;
        getSlotContext(): $SlotContext;
        getStack(): $ItemStack;
        constructor(arg0: $ItemStack_, arg1: $SlotContext_);
    }
    export class $CurioAttributeModifierEvent extends $Event {
        removeModifier(arg0: $Holder_<$Attribute>, arg1: $AttributeModifier_): boolean;
        getSlotContext(): $SlotContext;
        getOriginalModifiers(): $Multimap<$Holder<$Attribute>, $AttributeModifier>;
        removeAttribute(arg0: $Holder_<$Attribute>): $Collection<$AttributeModifier>;
        addModifier(arg0: $Holder_<$Attribute>, arg1: $AttributeModifier_): boolean;
        clearModifiers(): void;
        getModifiers(): $Multimap<$Holder<$Attribute>, $AttributeModifier>;
        getId(): $ResourceLocation;
        getItemStack(): $ItemStack;
        constructor(arg0: $ItemStack_, arg1: $SlotContext_, arg2: $ResourceLocation_, arg3: $Multimap<$Holder_<$Attribute>, $AttributeModifier_>);
    }
    export class $DropRulesEvent extends $LivingEvent {
        getLootingLevel(): number;
        getCurioHandler(): $ICuriosItemHandler;
        isRecentlyHit(): boolean;
        getSource(): $DamageSource;
        getOverrides(): $ImmutableList<$Tuple<$Predicate<$ItemStack>, $ICurio$DropRule>>;
        addOverride(arg0: $Predicate_<$ItemStack>, arg1: $ICurio$DropRule_): void;
        constructor(arg0: $LivingEntity, arg1: $ICuriosItemHandler, arg2: $DamageSource_, arg3: number, arg4: boolean);
    }
    export class $CurioDropsEvent extends $LivingEvent implements $ICancellableEvent {
        getLootingLevel(): number;
        getCurioHandler(): $ICuriosItemHandler;
        isRecentlyHit(): boolean;
        getDrops(): $Collection<$ItemEntity>;
        getSource(): $DamageSource;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $ICuriosItemHandler, arg2: $DamageSource_, arg3: $Collection_<$ItemEntity>, arg4: number, arg5: boolean);
    }
}
