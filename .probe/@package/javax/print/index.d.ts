import { $Serializable, $Reader, $InputStream } from "@package/java/io";
import { $Object, $Cloneable, $Class } from "@package/java/lang";
import { $Attribute, $PrintRequestAttributeSet, $PrintServiceAttribute, $AttributeSet, $DocAttributeSet, $PrintServiceAttributeSet, $PrintJobAttributeSet } from "@package/javax/print/attribute";
import { $PrintJobListener, $PrintJobAttributeListener_, $PrintServiceAttributeListener_ } from "@package/javax/print/event";
export * as attribute from "@package/javax/print/attribute";
export * as event from "@package/javax/print/event";

declare module "@package/javax/print" {
    export class $DocFlavor implements $Serializable, $Cloneable {
        getMimeType(): string;
        getMediaType(): string;
        getMediaSubtype(): string;
        getRepresentationClassName(): string;
        getParameter(arg0: string): string;
        static hostEncoding: string;
        constructor(arg0: string, arg1: string);
    }
    export class $PrintService {
    }
    export interface $PrintService {
        createPrintJob(): $DocPrintJob;
        addPrintServiceAttributeListener(arg0: $PrintServiceAttributeListener_): void;
        removePrintServiceAttributeListener(arg0: $PrintServiceAttributeListener_): void;
        getSupportedDocFlavors(): $DocFlavor[];
        isDocFlavorSupported(arg0: $DocFlavor): boolean;
        getSupportedAttributeCategories(): $Class<never>[];
        isAttributeCategorySupported(arg0: $Class<$Attribute>): boolean;
        getDefaultAttributeValue(arg0: $Class<$Attribute>): $Object;
        getSupportedAttributeValues(arg0: $Class<$Attribute>, arg1: $DocFlavor, arg2: $AttributeSet): $Object;
        isAttributeValueSupported(arg0: $Attribute, arg1: $DocFlavor, arg2: $AttributeSet): boolean;
        getUnsupportedAttributes(arg0: $DocFlavor, arg1: $AttributeSet): $AttributeSet;
        getServiceUIFactory(): $ServiceUIFactory;
        getAttribute<T extends $PrintServiceAttribute>(arg0: $Class<T>): T;
        getName(): string;
        equals(arg0: $Object): boolean;
        hashCode(): number;
        getAttributes(): $PrintServiceAttributeSet;
    }
    export class $DocPrintJob {
    }
    export interface $DocPrintJob {
        getPrintService(): $PrintService;
        addPrintJobListener(arg0: $PrintJobListener): void;
        removePrintJobListener(arg0: $PrintJobListener): void;
        addPrintJobAttributeListener(arg0: $PrintJobAttributeListener_, arg1: $PrintJobAttributeSet): void;
        removePrintJobAttributeListener(arg0: $PrintJobAttributeListener_): void;
        print(arg0: $Doc, arg1: $PrintRequestAttributeSet): void;
        getAttributes(): $PrintJobAttributeSet;
    }
    export class $Doc {
    }
    export interface $Doc {
        getDocFlavor(): $DocFlavor;
        getPrintData(): $Object;
        getStreamForBytes(): $InputStream;
        getReaderForText(): $Reader;
        getAttributes(): $DocAttributeSet;
    }
    export class $ServiceUIFactory {
        getUIClassNamesForRole(arg0: number): string[];
        getUI(arg0: number, arg1: string): $Object;
        static ABOUT_UIROLE: number;
        static PANEL_UI: string;
        static RESERVED_UIROLE: number;
        static MAIN_UIROLE: number;
        static DIALOG_UI: string;
        static ADMIN_UIROLE: number;
        static JCOMPONENT_UI: string;
        static JDIALOG_UI: string;
    }
}
