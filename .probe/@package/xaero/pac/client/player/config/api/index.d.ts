import { $IPlayerConfigOptionSpecAPI as $IPlayerConfigOptionSpecAPI$1, $PlayerConfigType } from "@package/xaero/pac/common/server/player/config/api";
import { $Stream } from "@package/java/util/stream";
import { $IClientPlayerConfigGroupManagerAPI } from "@package/xaero/pac/client/player/config/group/api";
import { $IPlayerConfigOptionSpecAPI } from "@package/xaero/pac/common/server/player/config/api/v2";
import { $UUID, $List } from "@package/java/util";
import { $Comparable } from "@package/java/lang";
import { $IPlayerConfigPermissionAPI } from "@package/xaero/pac/common/player/config/api";
import { $IPlayerConfigStringableOptionClientStorageAPI as $IPlayerConfigStringableOptionClientStorageAPI$1 } from "@package/xaero/pac/client/player/config/api/v2";

declare module "@package/xaero/pac/client/player/config/api" {
    export class $IPlayerConfigClientStorageAPI {
    }
    export interface $IPlayerConfigClientStorageAPI {
        getMain(): $IPlayerConfigClientStorageAPI;
        getSubConfigIds(): $List<string>;
        getSubConfigAPIStream(): $Stream<$IPlayerConfigClientStorageAPI>;
        isBeingDeleted(): boolean;
        /**
         * @deprecated
         */
        getOptionStorage<T extends $Comparable<T>>(arg0: $IPlayerConfigOptionSpecAPI$1<T>): $IPlayerConfigStringableOptionClientStorageAPI<never>;
        /**
         * @deprecated
         */
        optionStream(): $Stream<$IPlayerConfigStringableOptionClientStorageAPI<never>>;
        getPlayerGroups(): $IClientPlayerConfigGroupManagerAPI;
        subConfigExists(arg0: string): boolean;
        getEffectiveSubConfig(arg0: string): $IPlayerConfigClientStorageAPI;
        getSubCount(): number;
        getSubConfigLimit(): number;
        getSubConfig(arg0: string): $IPlayerConfigClientStorageAPI;
        getOption<T>(arg0: $IPlayerConfigOptionSpecAPI<T>): $IPlayerConfigStringableOptionClientStorageAPI$1<T>;
        getPermissions(): $IPlayerConfigPermissionAPI;
        getType(): $PlayerConfigType;
        options(): $Stream<$IPlayerConfigStringableOptionClientStorageAPI$1<never>>;
        getOwner(): $UUID;
    }
}
