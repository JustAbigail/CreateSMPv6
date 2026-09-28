import { $Function, $BiPredicate } from "@package/java/util/function";
import { $Component } from "@package/net/minecraft/network/chat";
import { $IPlayerConfigOptionSpecAPI } from "@package/xaero/pac/common/server/player/config/api/v2";
import { $Object, $Class } from "@package/java/lang";
import { $IPlayerConfigClientStorageAPI } from "@package/xaero/pac/client/player/config/api";

declare module "@package/xaero/pac/client/player/config/api/v2" {
    export class $IPlayerConfigStringableOptionClientStorageAPI<T> {
    }
    export interface $IPlayerConfigStringableOptionClientStorageAPI<T> extends $IPlayerConfigOptionClientStorageAPI<T> {
        getTooltipPrefix(): string;
        getCommandInputParser(): $Function<string, T>;
        getComponentWriterCast(): $Function<$Object, $Component>;
        isDefaulted(): boolean;
        getStringValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, string>;
        getOption(): $IPlayerConfigOptionSpecAPI<T>;
        getValue(): T;
        getId(): string;
        getType(): $Class<T>;
        getComment(): string;
        getValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, T>;
        getTranslation(): string;
        isMutable(): boolean;
    }
}
