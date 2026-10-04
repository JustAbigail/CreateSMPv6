import { $Record } from "@package/java/lang";

declare module "@package/net/irisshaders/iris/shaderpack/error" {
    export class $RusticError extends $Record {
        badLine(): string;
        severity(): string;
        lineNumber(): number;
        file(): string;
        detailMessage(): string;
        message(): string;
        constructor(severity: string, message: string, detailMessage: string, file: string, lineNumber: number, badLine: string);
    }
    /**
     * Values that may be interpreted as {@link $RusticError}.
     */
    export type $RusticError_ = { detailMessage?: string, badLine?: string, file?: string, message?: string, lineNumber?: number, severity?: string,  } | [detailMessage?: string, badLine?: string, file?: string, message?: string, lineNumber?: number, severity?: string, ];
}
