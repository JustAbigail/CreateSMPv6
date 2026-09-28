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
    export type $ShaderStorageInfo_ = { name?: string, relative?: boolean, scaleX?: number, scaleY?: number, size?: number,  } | [name?: string, relative?: boolean, scaleX?: number, scaleY?: number, size?: number, ];
    export class $BuiltShaderStorageInfo extends $Record {
        scaleX(): number;
        scaleY(): number;
        relative(): boolean;
        content(): number[];
        size(): number;
        constructor(size: number, relative: boolean, scaleX: number, scaleY: number, content: number[]);
    }
    /**
     * Values that may be interpreted as {@link $BuiltShaderStorageInfo}.
     */
    export type $BuiltShaderStorageInfo_ = { content?: number[], relative?: boolean, scaleX?: number, scaleY?: number, size?: number,  } | [content?: number[], relative?: boolean, scaleX?: number, scaleY?: number, size?: number, ];
}
