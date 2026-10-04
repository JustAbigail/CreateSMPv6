import { $Type } from "@package/org/objectweb/asm";

declare module "@package/org/spongepowered/asm/mixin/injection/callback" {
    export class $Cancellable {
    }
    export interface $Cancellable {
        isCancelled(): boolean;
        cancel(): void;
        isCancellable(): boolean;
        get cancelled(): boolean;
        get cancellable(): boolean;
    }
    export class $CallbackInfoReturnable<R> extends $CallbackInfo {
        getReturnValue(): R;
        getReturnValueC(): string;
        getReturnValueD(): number;
        getReturnValueF(): number;
        getReturnValueI(): number;
        getReturnValueJ(): number;
        getReturnValueS(): number;
        getReturnValueZ(): boolean;
        setReturnValue(arg0: R): void;
        getReturnValueB(): number;
        constructor(arg0: string, arg1: boolean, arg2: number);
        constructor(arg0: string, arg1: boolean, arg2: number);
        constructor(arg0: string, arg1: boolean, arg2: number);
        constructor(arg0: string, arg1: boolean, arg2: number);
        constructor(arg0: string, arg1: boolean, arg2: boolean);
        constructor(arg0: string, arg1: boolean);
        constructor(arg0: string, arg1: boolean, arg2: R);
        constructor(arg0: string, arg1: boolean, arg2: number);
        constructor(arg0: string, arg1: boolean, arg2: string);
        constructor(arg0: string, arg1: boolean, arg2: number);
        get returnValueC(): string;
        get returnValueD(): number;
        get returnValueF(): number;
        get returnValueI(): number;
        get returnValueJ(): number;
        get returnValueS(): number;
        get returnValueZ(): boolean;
        get returnValueB(): number;
    }
    export class $CallbackInfo implements $Cancellable {
        isCancelled(): boolean;
        getId(): string;
        cancel(): void;
        isCancellable(): boolean;
        static getCallInfoClassName(arg0: $Type): string;
        constructor(arg0: string, arg1: boolean);
        get cancelled(): boolean;
        get id(): string;
        get cancellable(): boolean;
    }
}
