
declare module "@package/net/irisshaders/iris/mixin/statelisteners" {
    export class $BooleanStateAccessor {
    }
    export interface $BooleanStateAccessor {
        isEnabled(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BooleanStateAccessor}.
     */
    export type $BooleanStateAccessor_ = (() => boolean);
}
