import { $Map_, $Map } from "@package/java/util";

declare module "@package/io/gitlab/jfronny/respackopts/mixin" {
    export class $TranslationStorageAccessor {
    }
    export interface $TranslationStorageAccessor {
        getTranslations(): $Map<string, string>;
        setTranslations(arg0: $Map_<string, string>): void;
    }
}
