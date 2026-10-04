import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $Version, $Version$ModVersionProvider } from "@package/de/ambertation/wunderlib/utils";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";

declare module "@package/de/ambertation/wunderlib/configs" {
    export class $AbstractConfig$ConfigToken<T> extends $Record {
        key(): string;
        defaultValue(): T;
        path(): string;
        constructor(path: string, key: string, defaultValue: T);
    }
    /**
     * Values that may be interpreted as {@link $AbstractConfig$ConfigToken}.
     */
    export type $AbstractConfig$ConfigToken_<T> = { key?: string, defaultValue?: any, path?: string,  } | [key?: string, defaultValue?: any, path?: string, ];
    export class $AbstractConfig$Group extends $Record {
        modID(): string;
        order(): number;
        title(): string;
        constructor(modID: string, title: string, order: number);
    }
    /**
     * Values that may be interpreted as {@link $AbstractConfig$Group}.
     */
    export type $AbstractConfig$Group_ = { modID?: string, order?: number, title?: string,  } | [modID?: string, order?: number, title?: string, ];
    export class $AbstractConfig$Value$AfterChange<C extends $AbstractConfig<C>, T, R extends $AbstractConfig$Value<T, R>> {
    }
    export interface $AbstractConfig$Value$AfterChange<C extends $AbstractConfig<C>, T, R extends $AbstractConfig$Value<T, R>> {
        changed(arg0: R): void;
    }
    /**
     * Values that may be interpreted as {@link $AbstractConfig$Value$AfterChange}.
     */
    export type $AbstractConfig$Value$AfterChange_<C, T, R> = ((arg0: R) => void);
    export class $AbstractConfig$Value<T, R extends $AbstractConfig$Value<T, R>> {
        migrate(arg0: $AbstractConfig$Value<T, R>): void;
        hideInUI(): R;
        setDependency(arg0: $AbstractConfig$BooleanValue): R;
        isHiddenInUI(): boolean;
        hasDependency(): boolean;
        getIsValidSupplier(): $Supplier<boolean>;
        notifyAfterChange(arg0: $AbstractConfig$Value$AfterChange_<C, T, R>): void;
        valueEquals(arg0: string): boolean;
        getOrder(): number;
        getParentFile(): C;
        isDeprecated(): boolean;
        remove(): void;
        get(): T;
        set(arg0: T): void;
        setGroup(arg0: $AbstractConfig$Group_): R;
        getRaw(): T;
        setOrder(arg0: number): R;
        getDependency(): $AbstractConfig$BooleanValue;
        getGroup(): $AbstractConfig$Group;
        token: $AbstractConfig$ConfigToken<T>;
        get hiddenInUI(): boolean;
        get isValidSupplier(): $Supplier<boolean>;
        get parentFile(): C;
        get deprecated(): boolean;
        get raw(): T;
    }
    export class $AbstractConfig$BooleanValue extends $AbstractConfig$Value<boolean, $AbstractConfig$BooleanValue> {
        and(...arg0: $AbstractConfig$BooleanValue[]): $AbstractConfig$BooleanValue;
        and(arg0: $Supplier_<boolean>): $AbstractConfig$BooleanValue;
        or(...arg0: $AbstractConfig$BooleanValue[]): $AbstractConfig$BooleanValue;
        or(arg0: $Supplier_<boolean>): $AbstractConfig$BooleanValue;
        token: $AbstractConfig$ConfigToken<boolean>;
        constructor(arg0: $AbstractConfig<any>, arg1: string, arg2: string, arg3: boolean);
        constructor(arg0: $AbstractConfig<any>, arg1: string, arg2: string, arg3: boolean, arg4: boolean);
    }
    export class $AbstractConfig<C extends $AbstractConfig<C>> {
        getMaxOrder(): number;
        loadFromDisc(): void;
        lastModifiedVersion(): $Version;
        createdVersion(): $Version;
        getAllVisibleValues(): $List<$AbstractConfig$Value<never, never>>;
        getAllVisibleValues(arg0: $AbstractConfig$Group_): $List<$AbstractConfig$Value<never, never>>;
        static getAllVisibleValues(arg0: $AbstractConfig$Group_, arg1: $List_<$AbstractConfig<never>>): $List<$AbstractConfig$Value<never, never>>;
        getAllGroups(): $List<$AbstractConfig$Group>;
        static getAllGroups(arg0: $List_<$AbstractConfig<never>>): $List<$AbstractConfig$Group>;
        getAllValues(): $List<$AbstractConfig$Value<never, never>>;
        getValue(arg0: string, arg1: string): $AbstractConfig$Value<never, never>;
        save(arg0: boolean): void;
        save(): void;
        static getAllCategories(arg0: $List_<$AbstractConfig<never>>): string;
        static CREATE_VERSION: string;
        static MODIFY_VERSION: string;
        location: $ResourceLocation;
        category: string;
        constructor(arg0: $Version$ModVersionProvider, arg1: string, arg2: string);
        constructor(arg0: $Version$ModVersionProvider, arg1: string);
        get maxOrder(): number;
        get allValues(): $List<$AbstractConfig$Value<never, never>>;
    }
}
