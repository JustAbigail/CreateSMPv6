import { $OutputStream, $InputStream } from "@package/java/io";
export * as entity from "@package/org/apache/http/entity";

declare module "@package/org/apache/http" {
    export class $HttpEntity {
    }
    export interface $HttpEntity {
        isChunked(): boolean;
        /**
         * @deprecated
         */
        consumeContent(): void;
        isRepeatable(): boolean;
        isStreaming(): boolean;
        getContentType(): $Header;
        getContentEncoding(): $Header;
        getContentLength(): number;
        writeTo(arg0: $OutputStream): void;
        getContent(): $InputStream;
    }
    export class $HeaderElement {
    }
    export interface $HeaderElement {
        getParameterByName(arg0: string): $NameValuePair;
        getName(): string;
        getValue(): string;
        getParameterCount(): number;
        getParameters(): $NameValuePair[];
        getParameter(arg0: number): $NameValuePair;
    }
    export class $Header {
    }
    export interface $Header extends $NameValuePair {
        getElements(): $HeaderElement[];
    }
    export class $NameValuePair {
    }
    export interface $NameValuePair {
        getName(): string;
        getValue(): string;
    }
}
