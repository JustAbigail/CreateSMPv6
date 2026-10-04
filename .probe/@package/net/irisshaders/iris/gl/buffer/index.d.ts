import { $Record } from "@package/java/lang";

declare module "@package/net/irisshaders/iris/gl/buffer" {
    export class $ShaderStorageInfo extends $Record {
        scaleX(): number;
        scaleY(): number;
        relative(): boolean;
        name(): string;
        size(): number;
        constructor(size: number, relative: boolean, scaleX: number, scaleY: number, name: string);
    }
    /**
     * Values that may be interpreted as {@link $ShaderStorageInfo}.
     */
    export type $ShaderStorageInfo_ = { relative?: boolean, name?: string, size?: number, scaleY?: number, scaleX?: number,  } | [relative?: boolean, name?: string, size?: number, scaleY?: number, scaleX?: number, ];
    export class $BuiltShaderStorageInfo extends $Record {
        scaleX(): number;
        scaleY(): number;
        content(): number[];
        relative(): boolean;
        size(): number;
        constructor(size: number, relative: boolean, scaleX: number, scaleY: number, content: number[]);
    }
    /**
     * Values that may be interpreted as {@link $BuiltShaderStorageInfo}.
     */
    export type $BuiltShaderStorageInfo_ = { relative?: boolean, content?: number[], size?: number, scaleY?: number, scaleX?: number,  } | [relative?: boolean, content?: number[], size?: number, scaleY?: number, scaleX?: number, ];
}
