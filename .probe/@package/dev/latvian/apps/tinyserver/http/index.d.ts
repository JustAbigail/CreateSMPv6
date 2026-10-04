import { $Instant } from "@package/java/time";
import { $HTTPResponse, $HTTPPayload } from "@package/dev/latvian/apps/tinyserver/http/response";
import { $OptionalString, $HTTPServer, $OptionalString_, $CompiledPath, $CompiledPath_, $HTTPConnection } from "@package/dev/latvian/apps/tinyserver";
import { $Throwable, $Enum, $Record } from "@package/java/lang";
import { $List, $Map_, $Map, $Set, $List_ } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
export * as file from "@package/dev/latvian/apps/tinyserver/http/file";
export * as response from "@package/dev/latvian/apps/tinyserver/http/response";

declare module "@package/dev/latvian/apps/tinyserver/http" {
    export class $HTTPMethod extends $Enum<$HTTPMethod> {
        body(): boolean;
        static values(): $HTTPMethod[];
        static valueOf(name: string): $HTTPMethod;
        static fromString(method: string): $HTTPMethod;
        static TRACE: $HTTPMethod;
        static HEAD: $HTTPMethod;
        static DELETE: $HTTPMethod;
        static POST: $HTTPMethod;
        static GET: $HTTPMethod;
        static CONNECT: $HTTPMethod;
        static OPTIONS: $HTTPMethod;
        static PUT: $HTTPMethod;
        static PATCH: $HTTPMethod;
    }
    /**
     * Values that may be interpreted as {@link $HTTPMethod}.
     */
    export type $HTTPMethod_ = "head" | "get" | "post" | "put" | "patch" | "delete" | "options" | "trace" | "connect";
    export class $HTTPPathHandler<REQ extends $HTTPRequest> extends $Record {
        method(): $HTTPMethod;
        handler(): $HTTPHandler<REQ>;
        path(): $CompiledPath;
        static DEFAULT: $HTTPPathHandler<never>;
        constructor(method: $HTTPMethod_, path: $CompiledPath_, handler: $HTTPHandler_<REQ>);
    }
    /**
     * Values that may be interpreted as {@link $HTTPPathHandler}.
     */
    export type $HTTPPathHandler_<REQ> = { handler?: $HTTPHandler_<$HTTPRequest>, path?: $CompiledPath_, method?: $HTTPMethod_,  } | [handler?: $HTTPHandler_<$HTTPRequest>, path?: $CompiledPath_, method?: $HTTPMethod_, ];
    export class $Body {
        getPostData(): $Map<string, $OptionalString>;
        byteBuffer(): $ByteBuffer;
        name(): string;
        fileName(): string;
        bytes(): number[];
        property(key: string): $OptionalString;
        text(): string;
        contentType(): string;
        constructor();
        get postData(): $Map<string, $OptionalString>;
    }
    export class $HTTPRequest {
        queryString(): string;
        bodyBuffer(): $ByteBuffer;
        fullPath(): string;
        ipv6(): string;
        handleResponse(payload: $HTTPPayload, response: $HTTPResponse, error: $Throwable): $HTTPResponse;
        preInit(session: $HTTPConnection<never>, startTime: $Instant, method: $HTTPMethod_): void;
        variables(): $Map<string, $OptionalString>;
        createPreResponse(handler: $HTTPHandler_<never>): $HTTPResponse;
        afterResponse(payload: $HTTPPayload, response: $HTTPResponse, handler: $HTTPHandler_<never>, error: $Throwable): void;
        mainBody(): $Body;
        formData(): $Map<string, $OptionalString>;
        formData(key: string): $OptionalString;
        acceptedEncodings(): $Set<string>;
        bodyList(): $List<$Body>;
        gitHubSignature(): string;
        gitHubEvent(): string;
        cookies(): $Map<string, $OptionalString>;
        headers(): $List<$Header>;
        variable(name: string): $OptionalString;
        ip(): string;
        cookie(key: string): $OptionalString;
        header(name: string): $OptionalString;
        method(): $HTTPMethod;
        init(path: string, pathParts: string[], compiledPath: $CompiledPath_, headers: $List_<$Header_>, queryString: string, query: $Map_<string, $OptionalString_>): void;
        startTime(): $Instant;
        query(): $Map<string, $OptionalString>;
        query(key: string): $OptionalString;
        path(): string;
        country(): string;
        server(): $HTTPServer<never>;
        connection(): $HTTPConnection<never>;
        userAgent(): string;
        pathParts(): string[];
        afterInit(): void;
        constructor();
    }
    export class $HTTPHandler<REQ extends $HTTPRequest> {
    }
    export interface $HTTPHandler<REQ extends $HTTPRequest> {
        isFileHandler(): boolean;
        handle(req: REQ): $HTTPResponse;
        get fileHandler(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $HTTPHandler}.
     */
    export type $HTTPHandler_<REQ> = ((req: REQ) => $HTTPResponse);
    export class $Header extends $Record {
        value(): $OptionalString;
        key(): string;
        is(name: string): boolean;
        constructor(key: string, value: string);
        constructor(key: string, value: $OptionalString_);
    }
    /**
     * Values that may be interpreted as {@link $Header}.
     */
    export type $Header_ = { key?: string, value?: $OptionalString_,  } | [key?: string, value?: $OptionalString_, ];
    export class $HTTPUpgrade<REQ extends $HTTPRequest> {
    }
    export interface $HTTPUpgrade<REQ extends $HTTPRequest> {
        start(req: REQ): void;
        protocol(): string;
        isClosed(): boolean;
        get closed(): boolean;
    }
}
