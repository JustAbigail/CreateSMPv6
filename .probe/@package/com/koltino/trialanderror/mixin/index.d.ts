import { $UUID_, $Set, $Set_, $UUID } from "@package/java/util";

declare module "@package/com/koltino/trialanderror/mixin" {
    export class $VaultServerDataAccessor {
    }
    export interface $VaultServerDataAccessor {
        getRewardedPlayers(): $Set<$UUID>;
    }
    /**
     * Values that may be interpreted as {@link $VaultServerDataAccessor}.
     */
    export type $VaultServerDataAccessor_ = (() => $Set_<$UUID_>);
    export class $VaultSharedDataAccessor {
    }
    export interface $VaultSharedDataAccessor {
        getConnectedPlayers(): $Set<$UUID>;
        setIsDirty(arg0: boolean): void;
    }
}
