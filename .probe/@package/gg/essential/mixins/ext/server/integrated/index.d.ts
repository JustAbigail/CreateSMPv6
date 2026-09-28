import { $UUID_ } from "@package/java/util";
import { $McIntegratedServerManager } from "@package/gg/essential/sps";

declare module "@package/gg/essential/mixins/ext/server/integrated" {
    export class $IntegratedServerExt {
    }
    export interface $IntegratedServerExt {
        essential$undoLan(arg0: $UUID_): void;
        getEssential$manager(): $McIntegratedServerManager;
    }
}
