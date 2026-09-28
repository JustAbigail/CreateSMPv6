import { $File_, $File } from "@package/java/io";
import { $AtomicReference } from "@package/java/util/concurrent/atomic";
import { $ClientContraption } from "@package/com/simibubi/create/content/contraptions/render";

declare module "@package/de/mrjulsen/paw/mixin" {
    export class $DimensionDataStorageAccessor {
    }
    export interface $DimensionDataStorageAccessor {
        paw$getDataFile(arg0: string): $File;
    }
    /**
     * Values that may be interpreted as {@link $DimensionDataStorageAccessor}.
     */
    export type $DimensionDataStorageAccessor_ = ((arg0: string) => $File_);
    export class $ContraptionAccessor {
    }
    export interface $ContraptionAccessor {
        paw$clientContraption(): $AtomicReference<$ClientContraption>;
    }
    /**
     * Values that may be interpreted as {@link $ContraptionAccessor}.
     */
    export type $ContraptionAccessor_ = (() => $AtomicReference<$ClientContraption>);
}
