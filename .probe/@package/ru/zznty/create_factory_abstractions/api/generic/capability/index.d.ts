import { $GenericInventorySummary } from "@package/ru/zznty/create_factory_abstractions/generic/support";

declare module "@package/ru/zznty/create_factory_abstractions/api/generic/capability" {
    export class $GenericInventorySummaryProvider {
    }
    export interface $GenericInventorySummaryProvider {
        apply(arg0: $GenericInventorySummary): void;
    }
    /**
     * Values that may be interpreted as {@link $GenericInventorySummaryProvider}.
     */
    export type $GenericInventorySummaryProvider_ = ((arg0: $GenericInventorySummary) => void);
}
