import { $Type } from "@package/org/objectweb/asm";

declare module "@package/org/spongepowered/asm/mixin/injection/callback" {
    export class $Cancellable {
    }
    export interface $Cancellable {
        isCancelled(): boolean;
        cancel(): void;
        isCancellable(): boolean;
    }
    export class $CallbackInfoReturnable<R> extends $CallbackInfo {
        setReturnValue(arg0: R): void;
        getReturnValueF(): number;
        getReturnValueC(): string;
        getReturnValueD(): number;
        getReturnValueS(): number;
        getReturnValue(): R;
        getReturnValueI(): number;
        getReturnValueB(): number;
        getReturnValueZ(): boolean;
        getReturnValueJ(): number;
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
    }
    export class $CallbackInfo implements $Cancellable {
        isCancelled(): boolean;
        getId(): string;
        cancel(): void;
        isCancellable(): boolean;
        static getCallInfoClassName(arg0: $Type): string;
        constructor(arg0: string, arg1: boolean);
    }
}
