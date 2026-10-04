import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";

declare module "@package/com/rieno/gadgetsandgizmos/mixin" {
    export class $CreativeModeInventoryScreenAccessor {
    }
    export interface $CreativeModeInventoryScreenAccessor {
        getLeftPos(): number;
        getTopPos(): number;
        getMenu(): $AbstractContainerMenu;
        get leftPos(): number;
        get topPos(): number;
        get menu(): $AbstractContainerMenu;
    }
}
