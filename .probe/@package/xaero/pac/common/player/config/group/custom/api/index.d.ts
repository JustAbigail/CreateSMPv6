import { $List } from "@package/java/util";

declare module "@package/xaero/pac/common/player/config/group/custom/api" {
    export class $ICustomPlayerConfigGroupDataManagerAPI {
    }
    export interface $ICustomPlayerConfigGroupDataManagerAPI {
        getAllIdsSorted(): $List<string>;
        dataExists(arg0: string): boolean;
        getMaxGroups(): number;
        getGroupSpace(): number;
    }
}
