import { $Serializable } from "@package/java/io";
import { $Transferable, $FlavorMap, $DataFlavor } from "@package/java/awt/datatransfer";
import { $InputEvent } from "@package/java/awt/event";
import { $Point, $Cursor, $Component, $Image } from "@package/java/awt";
import { $Object, $Class } from "@package/java/lang";
import { $Iterator, $EventObject, $List, $EventListener, $List_ } from "@package/java/util";

declare module "@package/java/awt/dnd" {
    export class $DropTargetListener {
    }
    export interface $DropTargetListener extends $EventListener {
        dragEnter(arg0: $DropTargetDragEvent): void;
        dragOver(arg0: $DropTargetDragEvent): void;
        dropActionChanged(arg0: $DropTargetDragEvent): void;
        dragExit(arg0: $DropTargetEvent): void;
        drop(arg0: $DropTargetDropEvent): void;
    }
    export class $DragGestureListener {
    }
    export interface $DragGestureListener extends $EventListener {
        dragGestureRecognized(arg0: $DragGestureEvent): void;
    }
    /**
     * Values that may be interpreted as {@link $DragGestureListener}.
     */
    export type $DragGestureListener_ = ((arg0: $DragGestureEvent) => void);
    export class $DropTarget implements $DropTargetListener, $Serializable {
        setDefaultActions(arg0: number): void;
        addDropTargetListener(arg0: $DropTargetListener): void;
        getDropTargetContext(): $DropTargetContext;
        dragEnter(arg0: $DropTargetDragEvent): void;
        dragOver(arg0: $DropTargetDragEvent): void;
        dropActionChanged(arg0: $DropTargetDragEvent): void;
        dragExit(arg0: $DropTargetEvent): void;
        getDefaultActions(): number;
        removeDropTargetListener(arg0: $DropTargetListener): void;
        getFlavorMap(): $FlavorMap;
        setFlavorMap(arg0: $FlavorMap): void;
        drop(arg0: $DropTargetDropEvent): void;
        addNotify(): void;
        removeNotify(): void;
        isActive(): boolean;
        getComponent(): $Component;
        setActive(arg0: boolean): void;
        setComponent(arg0: $Component): void;
        constructor(arg0: $Component, arg1: $DropTargetListener);
        constructor(arg0: $Component, arg1: number, arg2: $DropTargetListener, arg3: boolean, arg4: $FlavorMap);
        constructor();
        constructor(arg0: $Component, arg1: number, arg2: $DropTargetListener, arg3: boolean);
        constructor(arg0: $Component, arg1: number, arg2: $DropTargetListener);
    }
    export class $DragGestureRecognizer implements $Serializable {
        getSourceActions(): number;
        setSourceActions(arg0: number): void;
        addDragGestureListener(arg0: $DragGestureListener_): void;
        getDragSource(): $DragSource;
        getTriggerEvent(): $InputEvent;
        resetRecognizer(): void;
        removeDragGestureListener(arg0: $DragGestureListener_): void;
        getComponent(): $Component;
        setComponent(arg0: $Component): void;
    }
    export class $DropTargetContext implements $Serializable {
        getDropTarget(): $DropTarget;
        dropComplete(arg0: boolean): void;
        getComponent(): $Component;
    }
    export class $DragSource implements $Serializable {
        getFlavorMap(): $FlavorMap;
        startDrag(arg0: $DragGestureEvent, arg1: $Cursor, arg2: $Image, arg3: $Point, arg4: $Transferable, arg5: $DragSourceListener, arg6: $FlavorMap): void;
        startDrag(arg0: $DragGestureEvent, arg1: $Cursor, arg2: $Transferable, arg3: $DragSourceListener, arg4: $FlavorMap): void;
        startDrag(arg0: $DragGestureEvent, arg1: $Cursor, arg2: $Image, arg3: $Point, arg4: $Transferable, arg5: $DragSourceListener): void;
        startDrag(arg0: $DragGestureEvent, arg1: $Cursor, arg2: $Transferable, arg3: $DragSourceListener): void;
        static getDefaultDragSource(): $DragSource;
        createDragGestureRecognizer<T extends $DragGestureRecognizer>(arg0: $Class<T>, arg1: $Component, arg2: number, arg3: $DragGestureListener_): T;
        createDefaultDragGestureRecognizer(arg0: $Component, arg1: number, arg2: $DragGestureListener_): $DragGestureRecognizer;
        removeDragSourceListener(arg0: $DragSourceListener): void;
        getDragSourceListeners(): $DragSourceListener[];
        removeDragSourceMotionListener(arg0: $DragSourceMotionListener_): void;
        getDragSourceMotionListeners(): $DragSourceMotionListener[];
        static getDragThreshold(): number;
        addDragSourceListener(arg0: $DragSourceListener): void;
        addDragSourceMotionListener(arg0: $DragSourceMotionListener_): void;
        static isDragImageSupported(): boolean;
        getListeners<T extends $EventListener>(arg0: $Class<T>): T[];
        static DefaultCopyNoDrop: $Cursor;
        static DefaultMoveNoDrop: $Cursor;
        static DefaultMoveDrop: $Cursor;
        static DefaultLinkDrop: $Cursor;
        static DefaultLinkNoDrop: $Cursor;
        static DefaultCopyDrop: $Cursor;
        constructor();
    }
    export class $DragGestureEvent extends $EventObject {
        startDrag(arg0: $Cursor, arg1: $Image, arg2: $Point, arg3: $Transferable, arg4: $DragSourceListener): void;
        startDrag(arg0: $Cursor, arg1: $Transferable): void;
        startDrag(arg0: $Cursor, arg1: $Transferable, arg2: $DragSourceListener): void;
        getDragSource(): $DragSource;
        getTriggerEvent(): $InputEvent;
        getDragOrigin(): $Point;
        getDragAction(): number;
        getSourceAsDragGestureRecognizer(): $DragGestureRecognizer;
        toArray(arg0: $Object[]): $Object[];
        toArray(): $Object[];
        iterator(): $Iterator<$InputEvent>;
        getComponent(): $Component;
        constructor(arg0: $DragGestureRecognizer, arg1: number, arg2: $Point, arg3: $List_<$InputEvent>);
    }
    export class $DropTargetEvent extends $EventObject {
        getDropTargetContext(): $DropTargetContext;
        constructor(arg0: $DropTargetContext);
    }
    export class $DropTargetDragEvent extends $DropTargetEvent {
        getSourceActions(): number;
        getTransferable(): $Transferable;
        isDataFlavorSupported(arg0: $DataFlavor): boolean;
        getDropAction(): number;
        getCurrentDataFlavors(): $DataFlavor[];
        acceptDrag(arg0: number): void;
        rejectDrag(): void;
        getCurrentDataFlavorsAsList(): $List<$DataFlavor>;
        getLocation(): $Point;
        constructor(arg0: $DropTargetContext, arg1: $Point, arg2: number, arg3: number);
    }
    export class $DragSourceListener {
    }
    export interface $DragSourceListener extends $EventListener {
        dragEnter(arg0: $DragSourceDragEvent): void;
        dragOver(arg0: $DragSourceDragEvent): void;
        dropActionChanged(arg0: $DragSourceDragEvent): void;
        dragExit(arg0: $DragSourceEvent): void;
        dragDropEnd(arg0: $DragSourceDropEvent): void;
    }
    export class $DragSourceMotionListener {
    }
    export interface $DragSourceMotionListener extends $EventListener {
        dragMouseMoved(arg0: $DragSourceDragEvent): void;
    }
    /**
     * Values that may be interpreted as {@link $DragSourceMotionListener}.
     */
    export type $DragSourceMotionListener_ = ((arg0: $DragSourceDragEvent) => void);
    export class $DropTargetDropEvent extends $DropTargetEvent {
        getSourceActions(): number;
        getTransferable(): $Transferable;
        isDataFlavorSupported(arg0: $DataFlavor): boolean;
        rejectDrop(): void;
        getDropAction(): number;
        getCurrentDataFlavors(): $DataFlavor[];
        dropComplete(arg0: boolean): void;
        acceptDrop(arg0: number): void;
        getCurrentDataFlavorsAsList(): $List<$DataFlavor>;
        isLocalTransfer(): boolean;
        getLocation(): $Point;
        constructor(arg0: $DropTargetContext, arg1: $Point, arg2: number, arg3: number, arg4: boolean);
        constructor(arg0: $DropTargetContext, arg1: $Point, arg2: number, arg3: number);
    }
}
