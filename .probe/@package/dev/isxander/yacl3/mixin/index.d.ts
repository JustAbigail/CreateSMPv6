
declare module "@package/dev/isxander/yacl3/mixin" {
    export class $OptionInstanceAccessor<T> {
    }
    export interface $OptionInstanceAccessor<T> {
        getInitialValue(): T;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstanceAccessor}.
     */
    export type $OptionInstanceAccessor_<T> = (() => T);
}
