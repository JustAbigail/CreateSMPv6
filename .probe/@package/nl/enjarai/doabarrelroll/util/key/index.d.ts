import { $InputContext } from "@package/nl/enjarai/doabarrelroll/api/key";
import { $List } from "@package/java/util";

declare module "@package/nl/enjarai/doabarrelroll/util/key" {
    export class $ContextualKeyBinding {
    }
    export interface $ContextualKeyBinding {
        doABarrelRoll$getContexts(): $List<$InputContext>;
        doABarrelRoll$addToContext(arg0: $InputContext): void;
    }
}
