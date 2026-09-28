import { $DataComponentPatch_, $DataComponentMap, $DataComponentPatch } from "@package/net/minecraft/core/component";

declare module "@package/net/fabricmc/fabric/api/transfer/v1/storage" {
    export class $TransferVariant<O> {
    }
    export interface $TransferVariant<O> {
        hasComponents(): boolean;
        componentsMatch(arg0: $DataComponentPatch_): boolean;
        isOf(arg0: O): boolean;
        withComponentChanges(arg0: $DataComponentPatch_): $TransferVariant<O>;
        getComponentMap(): $DataComponentMap;
        isBlank(): boolean;
        getObject(): O;
        getComponents(): $DataComponentPatch;
    }
}
