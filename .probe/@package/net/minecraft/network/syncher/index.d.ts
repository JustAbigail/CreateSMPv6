import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Record, $Class } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $ClassTreeIdRegistry } from "@package/net/minecraft/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/network/syncher" {
    export class $SynchedEntityData$DataItem<T> {
        setDirty(dirty: boolean): void;
        isSetToDefault(): boolean;
        isDirty(): boolean;
        value(): $SynchedEntityData$DataValue<T>;
        getValue(): T;
        setValue(value: T): void;
        getAccessor(): $EntityDataAccessor<T>;
        accessor: $EntityDataAccessor<T>;
        constructor(accessor: $EntityDataAccessor_<T>, value: T);
        get setToDefault(): boolean;
    }
    export interface $EntityDataSerializer<T> extends RegistryMarked<RegistryTypes.NeoforgeEntityDataSerializersTag, RegistryTypes.NeoforgeEntityDataSerializers> {}
    export class $SynchedEntityData$Builder {
        build(): $SynchedEntityData;
        define<T>(accessor: $EntityDataAccessor_<T>, value: T): $SynchedEntityData$Builder;
        constructor(entity: $SyncedDataHolder);
    }
    export class $SyncedDataHolder {
    }
    export interface $SyncedDataHolder {
        onSyncedDataUpdated(dataAccessor: $EntityDataAccessor_<never>): void;
        onSyncedDataUpdated(newData: $List_<$SynchedEntityData$DataValue_<never>>): void;
    }
    /**
     * Handles encoding and decoding of data for `SynchedEntityData`.
     * Note that mods cannot add new serializers, because this is not a managed registry and the serializer ID is limited to 16.
     */
    export class $EntityDataSerializer<T> {
        static forValueType<T>(arg0: $StreamCodec<$RegistryFriendlyByteBuf, T>): $EntityDataSerializer<T>;
    }
    export interface $EntityDataSerializer<T> {
        createAccessor(id: number): $EntityDataAccessor<T>;
        copy(value: T): T;
        codec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
    }
    /**
     * Values that may be interpreted as {@link $EntityDataSerializer}.
     */
    export type $EntityDataSerializer_<T> = RegistryTypes.NeoforgeEntityDataSerializers;
    export class $SynchedEntityData$DataValue<T> extends $Record {
        value(): T;
        id(): number;
        write(buffer: $RegistryFriendlyByteBuf): void;
        static read(buffer: $RegistryFriendlyByteBuf, id: number): $SynchedEntityData$DataValue<never>;
        static create<T>(dataAccessor: $EntityDataAccessor_<T>, value: T): $SynchedEntityData$DataValue<T>;
        serializer(): $EntityDataSerializer<T>;
        constructor(id: number, serializer: $EntityDataSerializer_<T>, value: T);
    }
    /**
     * Values that may be interpreted as {@link $SynchedEntityData$DataValue}.
     */
    export type $SynchedEntityData$DataValue_<T> = { value?: any, id?: number, serializer?: $EntityDataSerializer_<any>,  } | [value?: any, id?: number, serializer?: $EntityDataSerializer_<any>, ];
    /**
     * A Key for `SynchedEntityData`.
     */
    export class $EntityDataAccessor<T> extends $Record {
        id(): number;
        serializer(): $EntityDataSerializer<T>;
        constructor(id: number, serializer: $EntityDataSerializer_<T>);
    }
    /**
     * Values that may be interpreted as {@link $EntityDataAccessor}.
     */
    export type $EntityDataAccessor_<T> = { id?: number, serializer?: $EntityDataSerializer_<any>,  } | [id?: number, serializer?: $EntityDataSerializer_<any>, ];
    /**
     * Keeps data in sync from server to client for an entity.
     * A maximum of 254 parameters per entity class can be registered. The system then ensures that these values are updated on the client whenever they change on the server.
     * 
     * Use `#defineId` to register a piece of data for your entity class.
     * Use `#define` during `Entity#defineSynchedData` to set the default value for a given parameter.
     */
    export class $SynchedEntityData {
        /**
         * Register a piece of data to be kept in sync for an entity class.
         * This method must be called during a static initializer of an entity class and the first parameter of this method must be that entity class.
         */
        static defineId<T>(clazz: $Class<$SyncedDataHolder>, serializer: $EntityDataSerializer_<T>): $EntityDataAccessor<T>;
        /**
         * Gets all data entries which have changed since the last check and clears their dirty flag.
         */
        packDirty(): $List<$SynchedEntityData$DataValue<never>>;
        /**
         * Gets all data entries which have changed since the last check and clears their dirty flag.
         */
        getNonDefaultValues(): $List<$SynchedEntityData$DataValue<never>>;
        /**
         * Updates the data using the given entries. Used on the client when the update packet is received.
         */
        assignValues(entries: $List_<$SynchedEntityData$DataValue_<never>>): void;
        /**
         * Whether any keys have changed since the last synchronization packet to the client.
         */
        isDirty(): boolean;
        /**
         * Get the value of the given key for this entity.
         */
        get<T>(key: $EntityDataAccessor_<T>): T;
        set<T>(key: $EntityDataAccessor_<T>, value: T, force: boolean): void;
        /**
         * Set the value of the given key for this entity.
         */
        set<T>(key: $EntityDataAccessor_<T>, value: T): void;
        static ID_REGISTRY: $ClassTreeIdRegistry;
        constructor(entity: $SyncedDataHolder, itemsById: $SynchedEntityData$DataItem<never>[]);
        get nonDefaultValues(): $List<$SynchedEntityData$DataValue<never>>;
        get dirty(): boolean;
    }
}
