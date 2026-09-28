import { $ConstraintType, $SuperConstraint, $ConstraintType_ } from "@package/gg/essential/elementa/constraints";
import { $Matrix2b } from "@package/gg/essential/elementa/utils";
import { $UIComponent } from "@package/gg/essential/elementa";
import { $List } from "@package/java/util";
import { $Object } from "@package/java/lang";
import { $Pair } from "@package/kotlin";

declare module "@package/gg/essential/elementa/constraints/resolution" {
    export class $ConstraintVisitor {
        visitParent(arg0: $ConstraintType_): void;
        visitSelf(arg0: $ConstraintType_): void;
        setConstraint(arg0: $SuperConstraint<never>, arg1: $ConstraintType_): void;
        visitSibling(arg0: $ConstraintType_, arg1: number): void;
        getComponent(): $UIComponent;
        visitChildren(arg0: $ConstraintType_): void;
        constructor(arg0: $DirectedAcyclicGraph<$ResolverNode>, arg1: $UIComponent);
    }
    export class $DirectedAcyclicGraph<T> {
        addVertices(...arg0: T[]): $DirectedAcyclicGraph<T>;
        getCyclicLoop(): $List<T>;
        static access$getVertices$p(arg0: $DirectedAcyclicGraph<any>): $List<any>;
        static access$getEdges(arg0: $DirectedAcyclicGraph<any>): $Matrix2b;
        addEdges(...arg0: $Pair<T, T>[]): $DirectedAcyclicGraph<T>;
        addEdge(arg0: T, arg1: T): $DirectedAcyclicGraph<T>;
        addVertex(arg0: T): $DirectedAcyclicGraph<T>;
        constructor();
    }
    export class $ResolverNode {
        getConstraintType(): $ConstraintType;
        static copy$default(arg0: $ResolverNode, arg1: $UIComponent, arg2: $SuperConstraint<any>, arg3: $ConstraintType_, arg4: number, arg5: $Object): $ResolverNode;
        component3(): $ConstraintType;
        component2(): $SuperConstraint<never>;
        copy(arg0: $UIComponent, arg1: $SuperConstraint<never>, arg2: $ConstraintType_): $ResolverNode;
        getComponent(): $UIComponent;
        getConstraint(): $SuperConstraint<never>;
        component1(): $UIComponent;
        constructor(arg0: $UIComponent, arg1: $SuperConstraint<never>, arg2: $ConstraintType_);
    }
}
