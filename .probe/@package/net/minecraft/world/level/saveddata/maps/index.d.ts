import { $LevelAccessor, $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $DyeColor_, $ItemStack_, $DyeColor } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $SavedData, $SavedData$Factory } from "@package/net/minecraft/world/level/saveddata";
import { $List, $List_, $Collection, $Map } from "@package/java/util";
import { $StationMapData, $StationBlockEntity, $StationMarker } from "@package/com/simibubi/create/content/trains/station";
import { $Consumer_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos, $Holder_, $Holder, $BlockPos_ } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $IHoldingPlayerExtension } from "@package/net/mehvahdjukaar/moonlight/core/misc";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Record, $Iterable } from "@package/java/lang";
import { $CustomMapData$Type_, $ExpandedMapData } from "@package/net/mehvahdjukaar/moonlight/api/map";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $MLMapMarker } from "@package/net/mehvahdjukaar/moonlight/api/map/decoration";

declare module "@package/net/minecraft/world/level/saveddata/maps" {
    export class $MapDecorationType extends $Record {
        assetId(): $ResourceLocation;
        showOnItemFrame(): boolean;
        explorationMapElement(): boolean;
        trackCount(): boolean;
        hasMapColor(): boolean;
        mapColor(): number;
        static CODEC: $Codec<$Holder<$MapDecorationType>>;
        static NO_MAP_COLOR: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MapDecorationType>>;
        constructor(arg0: $ResourceLocation_, arg1: boolean, arg2: number, arg3: boolean, arg4: boolean);
    }
    /**
     * Values that may be interpreted as {@link $MapDecorationType}.
     */
    export type $MapDecorationType_ = RegistryTypes.MapDecorationType | { trackCount?: boolean, showOnItemFrame?: boolean, mapColor?: number, assetId?: $ResourceLocation_, explorationMapElement?: boolean,  } | [trackCount?: boolean, showOnItemFrame?: boolean, mapColor?: number, assetId?: $ResourceLocation_, explorationMapElement?: boolean, ];
    export class $MapBanner extends $Record {
        static fromWorld(level: $BlockGetter, pos: $BlockPos_): $MapBanner;
        name(): ($Component) | undefined;
        getId(): string;
        color(): $DyeColor;
        pos(): $BlockPos;
        getDecoration(): $Holder<$MapDecorationType>;
        static CODEC: $Codec<$MapBanner>;
        static LIST_CODEC: $Codec<$List<$MapBanner>>;
        constructor(arg0: $BlockPos_, arg1: $DyeColor_, arg2: ($Component_) | undefined);
        get id(): string;
        get decoration(): $Holder<$MapDecorationType>;
    }
    /**
     * Values that may be interpreted as {@link $MapBanner}.
     */
    export type $MapBanner_ = { name?: ($Component_) | undefined, color?: $DyeColor_, pos?: $BlockPos_,  } | [name?: ($Component_) | undefined, color?: $DyeColor_, pos?: $BlockPos_, ];
    export class $MapItemSavedData$MapPatch extends $Record {
        mapColors(): number[];
        applyToMap(savedData: $MapItemSavedData): void;
        startX(): number;
        startY(): number;
        width(): number;
        height(): number;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, ($MapItemSavedData$MapPatch) | undefined>;
        constructor(startX: number, startY: number, width: number, height: number, mapColors: number[]);
    }
    /**
     * Values that may be interpreted as {@link $MapItemSavedData$MapPatch}.
     */
    export type $MapItemSavedData$MapPatch_ = { height?: number, mapColors?: number[], width?: number, startY?: number, startX?: number,  } | [height?: number, mapColors?: number[], width?: number, startY?: number, startX?: number, ];
    export class $MapDecoration extends $Record {
        renderOnFrame(): boolean;
        getSpriteLocation(): $ResourceLocation;
        name(): ($Component) | undefined;
        type(): $Holder<$MapDecorationType>;
        x(): number;
        y(): number;
        rot(): number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MapDecoration>;
        constructor(type: $Holder_<$MapDecorationType>, x: number, y: number, rot: number, name: ($Component_) | undefined);
        get spriteLocation(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $MapDecoration}.
     */
    export type $MapDecoration_ = { name?: ($Component_) | undefined, type?: $Holder_<$MapDecorationType>, y?: number, rot?: number, x?: number,  } | [name?: ($Component_) | undefined, type?: $Holder_<$MapDecorationType>, y?: number, rot?: number, x?: number, ];
    export class $MapItemSavedData$HoldingPlayer implements $IHoldingPlayerExtension {
        handler$gal000$moonlight$checkLocked(arg0: $MapId_, arg1: $CallbackInfoReturnable<any>): void;
        modifyReturnValue$gal000$moonlight$addExtraPacketData(arg0: $Packet<any>, arg1: $MapId_): $Packet<any>;
        handler$gal000$moonlight$lockData(arg0: number, arg1: number, arg2: $CallbackInfo): void;
        handler$gal000$moonlight$sanityCheck(arg0: number, arg1: number, arg2: $CallbackInfo): void;
        handler$gal000$moonlight$initializeDirty(arg0: $MapItemSavedData, arg1: $Player, arg2: $CallbackInfo): void;
        nextUpdatePacket(mapId: $MapId_): $Packet<never>;
        markColorsDirty(x: number, z: number): void;
        moonlight$setCustomDataDirty(arg0: $CustomMapData$Type_<any, any>, arg1: $Consumer_<any>): void;
        moonlight$setCustomMarkersDirty(): void;
        this$0: $MapItemSavedData;
        step: number;
        player: $Player;
        constructor(player: $MapItemSavedData, arg1: $Player);
    }
    export class $MapId extends $Record {
        id(): number;
        key(): string;
        static CODEC: $Codec<$MapId>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $MapId>;
        constructor(arg0: number);
    }
    /**
     * Values that may be interpreted as {@link $MapId}.
     */
    export type $MapId_ = { id?: number,  } | [id?: number, ];
    export class $MapItemSavedData extends $SavedData implements $ExpandedMapData, $StationMapData {
        ml$toggleCustomDecoration(accessor: $LevelAccessor, pos: $BlockPos_): boolean;
        ml$getCustomDecorations(): $Map<any, any>;
        ml$getVanillaDecorationSize(): number;
        static createForClient(scale: number, locked: boolean, dimension: $ResourceKey_<$Level>): $MapItemSavedData;
        toggleStation(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $StationBlockEntity): boolean;
        ml$addCustomMarker(arg0: $MLMapMarker<any>): void;
        getBanners(): $Collection<$MapBanner>;
        addDecoration(decorationType: $Holder_<$MapDecorationType>, level: $LevelAccessor | null, id: string, x: number, arg4: number, z: number, arg6: $Component_ | null): void;
        handler$gca000$moonlight$initCustomData(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: boolean, arg5: boolean, arg6: $ResourceKey_<any>, arg7: $CallbackInfo): void;
        handler$gca000$moonlight$save(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $CallbackInfoReturnable<any>): void;
        handler$gca000$moonlight$locked(arg0: $CallbackInfoReturnable<any>): void;
        handler$gca000$moonlight$scaled(arg0: $CallbackInfoReturnable<any>): void;
        removeDecoration(identifier: string): void;
        handler$gca000$moonlight$tickCarriedBy(arg0: $Player, arg1: $ItemStack_, arg2: $CallbackInfo): void;
        wrapOperation$zha000$betternether$bn_netherWithCompas(arg0: $Operation_<any>): $ResourceKey<any>;
        handler$gca000$moonlight$checkCustomDeco(arg0: $BlockGetter, arg1: number, arg2: number, arg3: $CallbackInfo): void;
        handler$gnb000$create$onCheckBanners(arg0: $BlockGetter, arg1: number, arg2: number, arg3: $CallbackInfo): void;
        modifyReturnValue$gca000$moonlight$ml$isExplorationMap(arg0: boolean): boolean;
        addClientSideDecorations(decorations: $List_<$MapDecoration_>): void;
        ml$setCustomDecorationsDirty(): void;
        ml$setCustomDataDirty(arg0: $CustomMapData$Type_<any, any>, arg1: $Consumer_<any>): void;
        ml$getCustomMarkers(): $Map<any, any>;
        ml$removeCustomMarker(arg0: string): boolean;
        ml$copy(): $MapItemSavedData;
        ml$resetCustomDecoration(): void;
        addStationMarker(arg0: $StationMarker): void;
        getUpdatePacket(mapId: $MapId_, player: $Player): $Packet<never>;
        isExplorationMap(): boolean;
        static createFresh(x: number, arg1: number, z: number, arg3: boolean, scale: boolean, trackingPosition: $ResourceKey_<$Level>): $MapItemSavedData;
        getHoldingPlayer(player: $Player): $MapItemSavedData$HoldingPlayer;
        checkBanners(reader: $BlockGetter, x: number, z: number): void;
        updateColor(x: number, z: number, color: number): boolean;
        /**
         * Adds the player passed to the list of visible players and checks to see which players are visible
         */
        tickCarriedBy(player: $Player, mapStack: $ItemStack_): void;
        scaled(): $MapItemSavedData;
        toggleBanner(accessor: $LevelAccessor, pos: $BlockPos_): boolean;
        ml$getCustomData(): $Map<any, any>;
        removedFromFrame(pos: $BlockPos_, entityId: number): void;
        isTrackedCountOverLimit(trackedCount: number): boolean;
        static addTargetDecoration(stack: $ItemStack_, pos: $BlockPos_, type: string, mapDecorationType: $Holder_<$MapDecorationType>): void;
        setColor(x: number, z: number, color: number): void;
        static load(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): $MapItemSavedData;
        static factory(): $SavedData$Factory<$MapItemSavedData>;
        locked(): $MapItemSavedData;
        getDecorations(): $Iterable<$MapDecoration>;
        centerZ: number;
        static TRACKED_DECORATION_LIMIT: number;
        centerX: number;
        moonlight$customData: $Map<any, any>;
        moonlight$customDecorations: $Map<any, any>;
        scale: number;
        decorations: $Map<string, $MapDecoration>;
        static MAX_SCALE: number;
        dimension: $ResourceKey<$Level>;
        colors: number[];
        get banners(): $Collection<$MapBanner>;
        get explorationMap(): boolean;
    }
    export interface $MapDecorationType extends RegistryMarked<RegistryTypes.MapDecorationTypeTag, RegistryTypes.MapDecorationType> {}
}
