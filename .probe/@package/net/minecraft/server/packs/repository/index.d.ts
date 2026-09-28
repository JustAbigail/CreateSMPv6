import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $List, $Set, $Set_, $Collection_, $List_, $Collection } from "@package/java/util";
import { $InclusiveRange, $InclusiveRange_ } from "@package/net/minecraft/util";
import { $Consumer_, $Consumer, $UnaryOperator_, $Predicate_, $Function_, $UnaryOperator } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $PackLocationInfo, $PackLocationInfo_, $PackSelectionConfig_, $PackResources, $PackSelectionConfig, $PackType_ } from "@package/net/minecraft/server/packs";
import { $InvokerPackRepository } from "@package/com/rinko1231/op2r/mixin/accessor";
import { $FabricResourcePackProfile } from "@package/net/fabricmc/fabric/impl/resource/loader";
import { $Enum, $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $PackMetadataSection_ } from "@package/net/minecraft/server/packs/metadata/pack";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/server/packs/repository" {
    export class $Pack$Position extends $Enum<$Pack$Position> {
        static values(): $Pack$Position[];
        insert<T>(list: $List_<T>, element: T, packFactory: $Function_<T, $PackSelectionConfig>, flipPosition: boolean): number;
        static valueOf(arg0: string): $Pack$Position;
        opposite(): $Pack$Position;
        static TOP: $Pack$Position;
        static BOTTOM: $Pack$Position;
    }
    /**
     * Values that may be interpreted as {@link $Pack$Position}.
     */
    export type $Pack$Position_ = "top" | "bottom";
    export class $KnownPack extends $Record {
        isVanilla(): boolean;
        namespace(): string;
        version(): string;
        id(): string;
        static vanilla(name: string): $KnownPack;
        static VANILLA_NAMESPACE: string;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $KnownPack>;
        constructor(arg0: string, arg1: string, arg2: string);
    }
    /**
     * Values that may be interpreted as {@link $KnownPack}.
     */
    export type $KnownPack_ = { namespace?: string, id?: string, version?: string,  } | [namespace?: string, id?: string, version?: string, ];
    export class $PackSource {
        static create(decorator: $UnaryOperator_<$Component>, shouldAddAutomatically: boolean): $PackSource;
        static BUILT_IN: $PackSource;
        static SERVER: $PackSource;
        static FEATURE: $PackSource;
        static NO_DECORATION: $UnaryOperator<$Component>;
        static WORLD: $PackSource;
        static DEFAULT: $PackSource;
    }
    export interface $PackSource {
        shouldAddAutomatically(): boolean;
        decorate(name: $Component_): $Component;
    }
    export class $Pack$ResourcesSupplier {
    }
    export interface $Pack$ResourcesSupplier {
        openPrimary(location: $PackLocationInfo_): $PackResources;
        openFull(location: $PackLocationInfo_, metadata: $Pack$Metadata_): $PackResources;
    }
    export class $PackRepository implements $InvokerPackRepository {
        rebuildSelected(ids: $Collection_<string>): $List<$Pack>;
        addPack(id: string): boolean;
        removePack(id: string): boolean;
        /**
         * Gets all known packs, including those that are not enabled.
         */
        getAvailablePacks(): $Collection<$Pack>;
        /**
         * Gets all known packs, including those that are not enabled.
         */
        getAvailableIds(): $Collection<string>;
        getRequestedFeatureFlags(): $FeatureFlagSet;
        getPack(id: string): $Pack;
        addPackFinder(arg0: $RepositorySource_): void;
        handler$fmk000$fabric_resource_loader_v0$construct(arg0: $RepositorySource_[], arg1: $CallbackInfo): void;
        reload(): void;
        isAvailable(id: string): boolean;
        static displayPackList(packs: $Collection_<$Pack>): string;
        /**
         * Gets all known packs, including those that are not enabled.
         */
        getSelectedIds(): $Collection<string>;
        openAllSelected(): $List<$PackResources>;
        /**
         * Gets all known packs, including those that are not enabled.
         */
        getSelectedPacks(): $Collection<$Pack>;
        setSelected(ids: $Collection_<string>): void;
        callRebuildSelected(ids: $Collection_<string>): $List<$Pack>;
        sources: $Set<$RepositorySource>;
        constructor(...sources: $RepositorySource_[]);
    }
    export class $Pack$Metadata extends $Record {
        requestedFeatures(): $FeatureFlagSet;
        overlays(): $List<string>;
        isHidden(): boolean;
        description(): $Component;
        compatibility(): $PackCompatibility;
        /**
         * @deprecated
         */
        constructor(arg0: $Component_, arg1: $PackCompatibility_, arg2: $FeatureFlagSet, arg3: $List_<string>);
        constructor(description: $Component_, compatibility: $PackCompatibility_, requestedFeatures: $FeatureFlagSet, overlays: $List_<string>, isHidden: boolean);
    }
    /**
     * Values that may be interpreted as {@link $Pack$Metadata}.
     */
    export type $Pack$Metadata_ = { isHidden?: boolean, requestedFeatures?: $FeatureFlagSet, description?: $Component_, overlays?: $List_<string>, compatibility?: $PackCompatibility_,  } | [isHidden?: boolean, requestedFeatures?: $FeatureFlagSet, description?: $Component_, overlays?: $List_<string>, compatibility?: $PackCompatibility_, ];
    export class $PackCompatibility extends $Enum<$PackCompatibility> {
        static forVersion(range: $InclusiveRange_<number>, version: number): $PackCompatibility;
        getConfirmation(): $Component;
        isCompatible(): boolean;
        getDescription(): $Component;
        static values(): $PackCompatibility[];
        static valueOf(arg0: string): $PackCompatibility;
        static TOO_OLD: $PackCompatibility;
        static COMPATIBLE: $PackCompatibility;
        static TOO_NEW: $PackCompatibility;
    }
    /**
     * Values that may be interpreted as {@link $PackCompatibility}.
     */
    export type $PackCompatibility_ = "too_old" | "too_new" | "compatible";
    export class $RepositorySource {
    }
    export interface $RepositorySource {
        loadPacks(onLoad: $Consumer_<$Pack>): void;
    }
    /**
     * Values that may be interpreted as {@link $RepositorySource}.
     */
    export type $RepositorySource_ = ((arg0: $Consumer<$Pack>) => void);
    export class $Pack implements $FabricResourcePackProfile {
        static readPackMetadata(location: $PackLocationInfo_, resources: $Pack$ResourcesSupplier, version: number): $Pack$Metadata;
        getDefaultPosition(): $Pack$Position;
        getRequestedFeatures(): $FeatureFlagSet;
        streamSelfAndChildren(): $Stream<$Pack>;
        fabric_parentsEnabled(arg0: $Set_<any>): boolean;
        isFixedPosition(): boolean;
        withChildren(arg0: $List_<$Pack>): $Pack;
        static getDeclaredPackVersions(id: string, metadata: $PackMetadataSection_): $InclusiveRange<number>;
        getChatLink(green: boolean): $Component;
        getPackSource(): $PackSource;
        fabric_isHidden(): boolean;
        fabric_setParentsPredicate(arg0: $Predicate_<any>): void;
        getDescription(): $Component;
        static readMetaAndCreate(location: $PackLocationInfo_, resources: $Pack$ResourcesSupplier, packType: $PackType_, selectionConfig: $PackSelectionConfig_): $Pack;
        selectionConfig(): $PackSelectionConfig;
        isHidden(): boolean;
        location(): $PackLocationInfo;
        getId(): string;
        open(): $PackResources;
        getChildren(): $List<$Pack>;
        getTitle(): $Component;
        isRequired(): boolean;
        hidden(): $Pack;
        getCompatibility(): $PackCompatibility;
        resources: $Pack$ResourcesSupplier;
        constructor(location: $PackLocationInfo_, resources: $Pack$ResourcesSupplier, metadata: $Pack$Metadata_, selectionConfig: $PackSelectionConfig_);
    }
}
