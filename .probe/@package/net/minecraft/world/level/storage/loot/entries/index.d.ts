import { $Function_ } from "@package/java/util/function";
import { $LootPoolEntryAccessor } from "@package/fzzyhmstrs/emi_loot/mixins";
import { $MapCodec_, $MapCodec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $LootItemCondition$Builder, $LootItemCondition, $LootItemCondition$Builder_, $ConditionUserBuilder } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $RecordCodecBuilder$Mu, $RecordCodecBuilder$Instance } from "@package/com/mojang/serialization/codecs";
import { $Iterable_, $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $ValidationContext, $LootContext } from "@package/net/minecraft/world/level/storage/loot";
import { $Products$P1 } from "@package/com/mojang/datafixers";

declare module "@package/net/minecraft/world/level/storage/loot/entries" {
    /**
     * Base class for loot pool entry containers. This class just stores a list of conditions that are checked before the entry generates loot.
     */
    export class $LootPoolEntryContainer implements $ComposableEntryContainer, $LootPoolEntryAccessor {
        canRun(lootContext: $LootContext): boolean;
        static commonFields<T extends $LootPoolEntryContainer>(instance: $RecordCodecBuilder$Instance<T>): $Products$P1<$RecordCodecBuilder$Mu<T>, $List<$LootItemCondition>>;
        validate(validationContext: $ValidationContext): void;
        getType(): $LootPoolEntryType;
        getConditions(): $List<$LootItemCondition>;
        conditions: $List<$LootItemCondition>;
        constructor(conditions: $List_<$LootItemCondition>);
        get type(): $LootPoolEntryType;
    }
    export class $EntryGroup$Builder extends $LootPoolEntryContainer$Builder<$EntryGroup$Builder> {
        constructor(...children: $LootPoolEntryContainer$Builder<never>[]);
    }
    export interface $LootPoolEntryType extends RegistryMarked<RegistryTypes.LootPoolEntryTypeTag, RegistryTypes.LootPoolEntryType> {}
    export class $SequentialEntry$Builder extends $LootPoolEntryContainer$Builder<$SequentialEntry$Builder> {
        constructor(...children: $LootPoolEntryContainer$Builder<never>[]);
    }
    export class $AlternativesEntry$Builder extends $LootPoolEntryContainer$Builder<$AlternativesEntry$Builder> {
        constructor(...children: $LootPoolEntryContainer$Builder<never>[]);
    }
    /**
     * The SerializerType for `LootPoolEntryContainer`.
     */
    export class $LootPoolEntryType extends $Record {
        codec(): $MapCodec<$LootPoolEntryContainer>;
        constructor(arg0: $MapCodec_<$LootPoolEntryContainer>);
    }
    /**
     * Values that may be interpreted as {@link $LootPoolEntryType}.
     */
    export type $LootPoolEntryType_ = RegistryTypes.LootPoolEntryType | { codec?: $MapCodec_<$LootPoolEntryContainer>,  } | [codec?: $MapCodec_<$LootPoolEntryContainer>, ];
    /**
     * Base interface for loot pool entry containers.
     * A loot pool entry container holds one or more loot pools and will expand into those.
     * Additionally, the container can either succeed or fail, based on its conditions.
     */
    export class $ComposableEntryContainer {
    }
    export interface $ComposableEntryContainer {
    }
    /**
     * Values that may be interpreted as {@link $ComposableEntryContainer}.
     */
    export type $ComposableEntryContainer_ = (() => void);
    export class $LootPoolEntryContainer$Builder<T extends $LootPoolEntryContainer$Builder<T>> implements $ConditionUserBuilder<T> {
        getThis(): T;
        then(childBuilder: $LootPoolEntryContainer$Builder<never>): $SequentialEntry$Builder;
        otherwise(childBuilder: $LootPoolEntryContainer$Builder<never>): $AlternativesEntry$Builder;
        getConditions(): $List<$LootItemCondition>;
        append(childBuilder: $LootPoolEntryContainer$Builder<never>): $EntryGroup$Builder;
        build(): $LootPoolEntryContainer;
        when<E>(arg0: $Iterable_<E>, arg1: $Function_<E, $LootItemCondition$Builder>): T;
        when(arg0: $LootItemCondition$Builder_): T;
        unwrap(): T;
        constructor();
        get this(): T;
        get conditions(): $List<$LootItemCondition>;
    }
}
