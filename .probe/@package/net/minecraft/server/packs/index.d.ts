import { $InputStream } from "@package/java/io";
import { $HashCode } from "@package/com/google/common/hash";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $VanillaPackResourcesAccessor } from "@package/team/creative/creativecore/mixin";
import { $IoSupplier, $ResourceProvider } from "@package/net/minecraft/server/packs/resources";
import { $PackResourcesExtension, $PackResourcesExtension$PackResourceConsumer_ } from "@package/foundry/veil/ext";
import { $UUID, $List, $Map_, $Map, $Set, $UUID_, $Set_, $List_ } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $IPackResources } from "@package/io/gitlab/jfronny/respackopts/util";
import { $MetadataSectionSerializer } from "@package/net/minecraft/server/packs/metadata";
import { $Consumer_, $BiConsumer } from "@package/java/util/function";
import { $Pack$Position_, $PackSource, $Pack$Position, $KnownPack_, $KnownPack } from "@package/net/minecraft/server/packs/repository";
import { $Stream } from "@package/java/util/stream";
import { $IPackResourcesExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Path_, $Path } from "@package/java/nio/file";
import { $URL } from "@package/java/net";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum, $Record, $AutoCloseable } from "@package/java/lang";
export * as repository from "@package/net/minecraft/server/packs/repository";
export * as resources from "@package/net/minecraft/server/packs/resources";
export * as metadata from "@package/net/minecraft/server/packs/metadata";

declare module "@package/net/minecraft/server/packs" {
    export class $PackResources {
        static PACK_META: string;
        static METADATA_EXTENSION: string;
    }
    export interface $PackResources extends $AutoCloseable, $IPackResourcesExtension {
        getResource(packType: $PackType_, location: $ResourceLocation_): $IoSupplier<$InputStream>;
        location(): $PackLocationInfo;
        close(): void;
        listResources(packType: $PackType_, namespace: string, path: string, resourceOutput: $PackResources$ResourceOutput_): void;
        getNamespaces(type: $PackType_): $Set<string>;
        packId(): string;
        getRootResource(...elements: string[]): $IoSupplier<$InputStream>;
        getMetadataSection<T>(deserializer: $MetadataSectionSerializer<T>): T;
        knownPackInfo(): ($KnownPack) | undefined;
    }
    export class $VanillaPackResources implements $PackResources, $IPackResources, $PackResourcesExtension, $VanillaPackResourcesAccessor {
        listRawPaths(packType: $PackType_, packLocation: $ResourceLocation_, output: $Consumer_<$Path>): void;
        respackopts$getTag(): string;
        veil$listResources(arg0: $PackResourcesExtension$PackResourceConsumer_): void;
        veil$isStatic(): boolean;
        veil$getRawResourceRoots(): $List<any>;
        veil$getIcon(): $IoSupplier<any>;
        veil$blurIcon(): boolean;
        getResource(packType: $PackType_, location: $ResourceLocation_): $IoSupplier<$InputStream>;
        location(): $PackLocationInfo;
        close(): void;
        listResources(packType: $PackType_, namespace: string, path: string, resourceOutput: $PackResources$ResourceOutput_): void;
        getNamespaces(type: $PackType_): $Set<string>;
        getRootResource(...elements: string[]): $IoSupplier<$InputStream>;
        getMetadataSection<T>(deserializer: $MetadataSectionSerializer<T>): T;
        asProvider(): $ResourceProvider;
        packId(): string;
        knownPackInfo(): ($KnownPack) | undefined;
        veil$listPacks(): $Stream<$PackResources>;
        isHidden(): boolean;
        getPathsForType(): $Map<$PackType, $List<$Path>>;
        constructor(location: $PackLocationInfo_, metadata: $BuiltInMetadata, namespaces: $Set_<string>, rootPaths: $List_<$Path_>, pathsForType: $Map_<$PackType_, $List_<$Path_>>);
        get hidden(): boolean;
        get pathsForType(): $Map<$PackType, $List<$Path>>;
    }
    export class $PackLocationInfo extends $Record {
        createChatLink(enabled: boolean, text: $Component_): $Component;
        id(): string;
        source(): $PackSource;
        title(): $Component;
        knownPackInfo(): ($KnownPack) | undefined;
        constructor(arg0: string, arg1: $Component_, arg2: $PackSource, arg3: ($KnownPack_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $PackLocationInfo}.
     */
    export type $PackLocationInfo_ = { source?: $PackSource, id?: string, knownPackInfo?: ($KnownPack_) | undefined, title?: $Component_,  } | [source?: $PackSource, id?: string, knownPackInfo?: ($KnownPack_) | undefined, title?: $Component_, ];
    export class $DownloadQueue$BatchResult extends $Record {
        downloaded(): $Map<$UUID, $Path>;
        failed(): $Set<$UUID>;
        constructor(arg0: $Map_<$UUID_, $Path_>, arg1: $Set_<$UUID_>);
        constructor();
    }
    /**
     * Values that may be interpreted as {@link $DownloadQueue$BatchResult}.
     */
    export type $DownloadQueue$BatchResult_ = { downloaded?: $Map_<$UUID_, $Path_>, failed?: $Set_<$UUID_>,  } | [downloaded?: $Map_<$UUID_, $Path_>, failed?: $Set_<$UUID_>, ];
    export class $BuiltInMetadata {
        get<T>(serializer: $MetadataSectionSerializer<T>): T;
        static of<T>(serializer: $MetadataSectionSerializer<T>, value: T): $BuiltInMetadata;
        static of<T1, T2>(serializer1: $MetadataSectionSerializer<T1>, value1: T1, serializer2: $MetadataSectionSerializer<T2>, value2: T2): $BuiltInMetadata;
        static of(): $BuiltInMetadata;
    }
    export class $DownloadQueue$DownloadRequest extends $Record {
        hash(): $HashCode;
        url(): $URL;
        constructor(arg0: $URL, arg1: $HashCode | null);
    }
    /**
     * Values that may be interpreted as {@link $DownloadQueue$DownloadRequest}.
     */
    export type $DownloadQueue$DownloadRequest_ = { url?: $URL, hash?: $HashCode,  } | [url?: $URL, hash?: $HashCode, ];
    export class $PackResources$ResourceOutput {
    }
    export interface $PackResources$ResourceOutput extends $BiConsumer<$ResourceLocation, $IoSupplier<$InputStream>> {
    }
    /**
     * Values that may be interpreted as {@link $PackResources$ResourceOutput}.
     */
    export type $PackResources$ResourceOutput_ = (() => void);
    export class $PackType extends $Enum<$PackType> implements $StringRepresentable {
        getDirectory(): string;
        static values(): $PackType[];
        static valueOf(arg0: string): $PackType;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CLIENT_RESOURCES: $PackType;
        static SERVER_DATA: $PackType;
        get directory(): string;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $PackType}.
     */
    export type $PackType_ = "client_resources" | "server_data";
    export class $AbstractPackResources implements $PackResources {
        static getMetadataFromStream<T>(deserializer: $MetadataSectionSerializer<T>, inputStream: $InputStream): T;
        location(): $PackLocationInfo;
        getMetadataSection<T>(deserializer: $MetadataSectionSerializer<T>): T;
        packId(): string;
        knownPackInfo(): ($KnownPack) | undefined;
        isHidden(): boolean;
        constructor(location: $PackLocationInfo_);
        get hidden(): boolean;
    }
    export class $PackSelectionConfig extends $Record {
        defaultPosition(): $Pack$Position;
        fixedPosition(): boolean;
        required(): boolean;
        constructor(arg0: boolean, arg1: $Pack$Position_, arg2: boolean);
    }
    /**
     * Values that may be interpreted as {@link $PackSelectionConfig}.
     */
    export type $PackSelectionConfig_ = { required?: boolean, fixedPosition?: boolean, defaultPosition?: $Pack$Position_,  } | [required?: boolean, fixedPosition?: boolean, defaultPosition?: $Pack$Position_, ];
}
