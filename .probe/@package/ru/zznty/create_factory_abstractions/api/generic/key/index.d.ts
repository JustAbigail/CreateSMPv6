import { $GenericInventorySummaryProvider_, $GenericInventorySummaryProvider } from "@package/ru/zznty/create_factory_abstractions/api/generic/capability";
import { $HolderLookup$Provider, $Direction } from "@package/net/minecraft/core";
import { $MultiBufferSource_, $MultiBufferSource } from "@package/net/minecraft/client/renderer";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Component } from "@package/net/minecraft/network/chat";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $LangBuilder } from "@package/net/createmod/catnip/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Comparator, $List } from "@package/java/util";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/ru/zznty/create_factory_abstractions/api/generic/key" {
    export class $GenericKeySerializer<Key extends $GenericKey> {
    }
    export interface $GenericKeySerializer<Key extends $GenericKey> {
        write(arg0: Key, arg1: $RegistryFriendlyByteBuf): void;
        write(arg0: Key, arg1: $HolderLookup$Provider, arg2: $CompoundTag_): void;
        read(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): Key;
        read(arg0: $RegistryFriendlyByteBuf): Key;
    }
    export class $GenericKeyClientRenderHandler<K extends $GenericKey> {
    }
    export interface $GenericKeyClientRenderHandler<K extends $GenericKey> {
        renderPanelFilter(arg0: K, arg1: $PoseStack, arg2: $MultiBufferSource_, arg3: number, arg4: number): void;
    }
    /**
     * Values that may be interpreted as {@link $GenericKeyClientRenderHandler}.
     */
    export type $GenericKeyClientRenderHandler_<K> = ((arg0: K, arg1: $PoseStack, arg2: $MultiBufferSource, arg3: number, arg4: number) => void);
    export class $GenericKeyRegistration {
    }
    export interface $GenericKeyRegistration {
        clientProvider<K extends $GenericKey>(): $GenericKeyClientProvider<K>;
        provider<K extends $GenericKey>(): $GenericKeyProvider<K>;
        serializer<K extends $GenericKey>(): $GenericKeySerializer<K>;
    }
    /**
     * Values that may be interpreted as {@link $GenericKeyRegistration}.
     */
    export type $GenericKeyRegistration_ = RegistryTypes.CreateFactoryAbstractionsGenericKeys;
    export class $GenericKey {
        static COMPARATOR: $Comparator<$GenericKey>;
        static EMPTY: $GenericKey;
    }
    export interface $GenericKey {
    }
    export class $GenericKeyClientProvider<Key extends $GenericKey> {
    }
    export interface $GenericKeyClientProvider<Key extends $GenericKey> {
        renderHandler(): $GenericKeyClientRenderHandler<Key>;
        guiHandler(): $GenericKeyClientGuiHandler<Key>;
    }
    export class $GenericKeyClientGuiHandler<K extends $GenericKey> {
    }
    export interface $GenericKeyClientGuiHandler<K extends $GenericKey> {
        renderSlot(arg0: $GuiGraphics, arg1: K, arg2: number, arg3: number): void;
        renderDecorations(arg0: $GuiGraphics, arg1: K, arg2: number, arg3: number, arg4: number): void;
        tooltipBuilder(arg0: K, arg1: number): $List<$Component>;
        maxStackSize(arg0: K): number;
        stackSize(arg0: K): number;
        nameBuilder(arg0: K): $LangBuilder;
        nameBuilder(arg0: K, arg1: number): $LangBuilder;
    }
    export class $GenericCapabilityWrapperProvider<Cap> {
    }
    export interface $GenericCapabilityWrapperProvider<Cap> {
        capability(): $BlockCapability<Cap, $Direction>;
        wrap(arg0: $GenericInventorySummaryProvider_): Cap;
        unwrap(arg0: Cap): $GenericInventorySummaryProvider;
    }
    export interface $GenericKeyRegistration extends RegistryMarked<RegistryTypes.CreateFactoryAbstractionsGenericKeysTag, RegistryTypes.CreateFactoryAbstractionsGenericKeys> {}
    export class $GenericKeyProvider<Key extends $GenericKey> {
    }
    export interface $GenericKeyProvider<Key extends $GenericKey> extends $Comparator<Key> {
        wrapGeneric<T>(arg0: T): Key;
        ingredientTypeUid(): string;
        capabilityWrapperProvider<Cap>(): $GenericCapabilityWrapperProvider<Cap>;
        resourceKey<T>(arg0: Key): ($ResourceKey<T>) | undefined;
        defaultKey(): Key;
        wrap<T>(arg0: T): Key;
        unwrap<T>(arg0: Key): T;
    }
}
