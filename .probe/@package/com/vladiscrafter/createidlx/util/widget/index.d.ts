import { $ScrollInput, $Label, $SelectionScrollInput } from "@package/com/simibubi/create/foundation/gui/widget";
import { $BiConsumer_ } from "@package/java/util/function";
import { $ModularGuiLineBuilder } from "@package/com/simibubi/create/foundation/gui";

declare module "@package/com/vladiscrafter/createidlx/util/widget" {
    export class $ModularGuiLineBuilderExt {
    }
    export interface $ModularGuiLineBuilderExt {
        createidlx$addBinaryScrollInput(arg0: number, arg1: number, arg2: $BiConsumer_<$SelectionScrollInput, $Label>, arg3: string): $ModularGuiLineBuilder;
        createidlx$addTimerScrollInput(arg0: number, arg1: number, arg2: $BiConsumer_<$ScrollInput, $Label>, arg3: string): $ModularGuiLineBuilder;
    }
}
