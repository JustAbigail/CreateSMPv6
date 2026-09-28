import { $Reader, $Externalizable, $ObjectInput, $ObjectOutput } from "@package/java/io";
import { $EventObject, $Map, $EventListener } from "@package/java/util";
import { $Object, $Cloneable, $ClassLoader, $Class } from "@package/java/lang";

declare module "@package/java/awt/datatransfer" {
    export class $Clipboard {
        setContents(arg0: $Transferable, arg1: $ClipboardOwner_): void;
        getData(arg0: $DataFlavor): $Object;
        getAvailableDataFlavors(): $DataFlavor[];
        isDataFlavorAvailable(arg0: $DataFlavor): boolean;
        addFlavorListener(arg0: $FlavorListener_): void;
        removeFlavorListener(arg0: $FlavorListener_): void;
        getFlavorListeners(): $FlavorListener[];
        getContents(arg0: $Object): $Transferable;
        getName(): string;
        constructor(arg0: string);
    }
    export class $DataFlavor implements $Externalizable, $Cloneable {
        getRepresentationClass(): $Class<never>;
        getMimeType(): string;
        getSubType(): string;
        isRepresentationClassInputStream(): boolean;
        isRepresentationClassByteBuffer(): boolean;
        isFlavorTextType(): boolean;
        isMimeTypeEqual(arg0: string): boolean;
        isMimeTypeEqual(arg0: $DataFlavor): boolean;
        isRepresentationClassReader(): boolean;
        getPrimaryType(): string;
        writeExternal(arg0: $ObjectOutput): void;
        readExternal(arg0: $ObjectInput): void;
        isRepresentationClassCharBuffer(): boolean;
        getDefaultRepresentationClass(): $Class<never>;
        isRepresentationClassSerializable(): boolean;
        isRepresentationClassRemote(): boolean;
        static getTextPlainUnicodeFlavor(): $DataFlavor;
        static selectBestTextFlavor(arg0: $DataFlavor[]): $DataFlavor;
        getReaderForText(arg0: $Transferable): $Reader;
        getHumanPresentableName(): string;
        setHumanPresentableName(arg0: string): void;
        isMimeTypeSerializedObject(): boolean;
        getDefaultRepresentationClassAsString(): string;
        isFlavorSerializedObjectType(): boolean;
        isFlavorRemoteObjectType(): boolean;
        isFlavorJavaFileListType(): boolean;
        equals(arg0: $DataFlavor): boolean;
        /**
         * @deprecated
         */
        equals(arg0: string): boolean;
        clone(): $Object;
        match(arg0: $DataFlavor): boolean;
        getParameter(arg0: string): string;
        static javaJVMLocalObjectMimeType: string;
        static stringFlavor: $DataFlavor;
        static javaFileListFlavor: $DataFlavor;
        static javaSerializedObjectMimeType: string;
        /**
         * @deprecated
         */
        static plainTextFlavor: $DataFlavor;
        static javaRemoteObjectMimeType: string;
        static imageFlavor: $DataFlavor;
        static selectionHtmlFlavor: $DataFlavor;
        static allHtmlFlavor: $DataFlavor;
        static fragmentHtmlFlavor: $DataFlavor;
        constructor(arg0: string);
        constructor(arg0: string, arg1: string, arg2: $ClassLoader);
        constructor(arg0: string, arg1: string);
        constructor(arg0: $Class<never>, arg1: string);
        constructor();
    }
    export class $Transferable {
    }
    export interface $Transferable {
        getTransferDataFlavors(): $DataFlavor[];
        getTransferData(arg0: $DataFlavor): $Object;
        isDataFlavorSupported(arg0: $DataFlavor): boolean;
    }
    export class $FlavorMap {
    }
    export interface $FlavorMap {
        getNativesForFlavors(arg0: $DataFlavor[]): $Map<$DataFlavor, string>;
        getFlavorsForNatives(arg0: string[]): $Map<string, $DataFlavor>;
    }
    export class $FlavorListener {
    }
    export interface $FlavorListener extends $EventListener {
        flavorsChanged(arg0: $FlavorEvent): void;
    }
    /**
     * Values that may be interpreted as {@link $FlavorListener}.
     */
    export type $FlavorListener_ = ((arg0: $FlavorEvent) => void);
    export class $FlavorEvent extends $EventObject {
        constructor(arg0: $Clipboard);
    }
    export class $ClipboardOwner {
    }
    export interface $ClipboardOwner {
        lostOwnership(arg0: $Clipboard, arg1: $Transferable): void;
    }
    /**
     * Values that may be interpreted as {@link $ClipboardOwner}.
     */
    export type $ClipboardOwner_ = ((arg0: $Clipboard, arg1: $Transferable) => void);
}
