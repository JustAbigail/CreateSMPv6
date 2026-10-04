import { $Either } from "@package/com/mojang/datafixers/util";
import { $ICustomPlayerConfigGroupAPI } from "@package/xaero/pac/common/server/player/config/group/custom/api";
import { $List } from "@package/java/util";
import { $PlayerConfigGroupActionError } from "@package/xaero/pac/common/player/config/group/api";
import { $ICustomPlayerConfigGroupDataManagerAPI } from "@package/xaero/pac/common/player/config/group/custom/api";

declare module "@package/xaero/pac/common/server/player/config/group/api" {
    export class $IServerPlayerConfigGroupManagerAPI {
    }
    export interface $IServerPlayerConfigGroupManagerAPI extends $ICustomPlayerConfigGroupDataManagerAPI {
        removeCustom(arg0: string): ($PlayerConfigGroupActionError) | undefined;
        getCustom(arg0: string): $ICustomPlayerConfigGroupAPI;
        getAllIdsSorted(): $List<string>;
        dataExists(arg0: string): boolean;
        addCustomLimited(arg0: string): $Either<$ICustomPlayerConfigGroupAPI, $PlayerConfigGroupActionError>;
        getUnwrapped(arg0: string): $IPlayerConfigGroupAPI;
        getMaxGroups(): number;
        getGroupSpace(): number;
        addCustom(arg0: string): $Either<$ICustomPlayerConfigGroupAPI, $PlayerConfigGroupActionError>;
        get(arg0: string): $IPlayerConfigGroupAPI;
        get allIdsSorted(): $List<string>;
        get maxGroups(): number;
        get groupSpace(): number;
    }
}
