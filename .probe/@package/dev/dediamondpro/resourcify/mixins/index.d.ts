import { $PackSelectionModel } from "@package/net/minecraft/client/gui/screens/packs";
import { $Path } from "@package/java/nio/file";

declare module "@package/dev/dediamondpro/resourcify/mixins" {
    export class $PackScreenAccessor {
    }
    export interface $PackScreenAccessor {
        getDirectory(): $Path;
        getModel(): $PackSelectionModel;
    }
}
