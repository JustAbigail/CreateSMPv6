import { $Stream } from "@package/java/util/stream";
import { $GlslSpecifiedType } from "@package/io/github/ocelot/glslprocessor/api/grammar";
import { $Enum } from "@package/java/lang";
import { $Collection_, $List } from "@package/java/util";
import { $GlslNode, $GlslNodeList, $GlslNodeType } from "@package/io/github/ocelot/glslprocessor/api/node";
import { $GlslNodeVisitor } from "@package/io/github/ocelot/glslprocessor/api/visitor";

declare module "@package/io/github/ocelot/glslprocessor/api/node/branch" {
    export class $GlslIfNode implements $GlslNode {
        setFirst(arg0: $Collection_<$GlslNode>): $GlslIfNode;
        setSecond(arg0: $Collection_<$GlslNode>): $GlslIfNode;
        getNodeType(): $GlslNodeType;
        visit(arg0: $GlslNodeVisitor): void;
        stream(): $Stream<$GlslNode>;
        getFirst(): $GlslNodeList;
        getSecond(): $GlslNodeList;
        getExpression(): $GlslNode;
        setExpression(arg0: $GlslNode): void;
        getBody(): $GlslNodeList;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        constructor(arg0: $GlslNode, arg1: $Collection_<$GlslNode>, arg2: $Collection_<$GlslNode>);
    }
    export class $GlslReturnNode implements $GlslNode {
        getNodeType(): $GlslNodeType;
        visit(arg0: $GlslNodeVisitor): void;
        getValue(): $GlslNode;
        stream(): $Stream<$GlslNode>;
        setValue(arg0: $GlslNode): void;
        getBody(): $GlslNodeList;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        constructor(arg0: $GlslNode);
    }
    export class $GlslWhileLoopNode$Type extends $Enum<$GlslWhileLoopNode$Type> {
        static values(): $GlslWhileLoopNode$Type[];
        static valueOf(arg0: string): $GlslWhileLoopNode$Type;
        static WHILE: $GlslWhileLoopNode$Type;
        static DO: $GlslWhileLoopNode$Type;
    }
    /**
     * Values that may be interpreted as {@link $GlslWhileLoopNode$Type}.
     */
    export type $GlslWhileLoopNode$Type_ = "while" | "do";
    export class $GlslJumpNode extends $Enum<$GlslJumpNode> implements $GlslNode {
        getNodeType(): $GlslNodeType;
        visit(arg0: $GlslNodeVisitor): void;
        static values(): $GlslJumpNode[];
        static valueOf(arg0: string): $GlslJumpNode;
        stream(): $Stream<$GlslNode>;
        getBody(): $GlslNodeList;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        static CONTINUE: $GlslJumpNode;
        static DISCARD: $GlslJumpNode;
        static BREAK: $GlslJumpNode;
    }
    /**
     * Values that may be interpreted as {@link $GlslJumpNode}.
     */
    export type $GlslJumpNode_ = "continue" | "break" | "discard";
    export class $GlslSwitchNode implements $GlslNode {
        getCondition(): $GlslNode;
        setBranches(arg0: $Collection_<$GlslNode>): $GlslSwitchNode;
        setBranches(...arg0: $GlslNode[]): $GlslSwitchNode;
        setCondition(arg0: $GlslNode): $GlslSwitchNode;
        getBranches(): $List<$GlslNode>;
        getNodeType(): $GlslNodeType;
        visit(arg0: $GlslNodeVisitor): void;
        stream(): $Stream<$GlslNode>;
        getBody(): $GlslNodeList;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        constructor(arg0: $GlslNode, arg1: $Collection_<$GlslNode>);
    }
    export class $GlslForLoopNode implements $GlslNode {
        getCondition(): $GlslNode;
        getIncrement(): $GlslNode;
        setCondition(arg0: $GlslNode): $GlslForLoopNode;
        setIncrement(arg0: $GlslNode): $GlslForLoopNode;
        getInit(): $GlslNode;
        getNodeType(): $GlslNodeType;
        getBody(): $GlslNodeList;
        visit(arg0: $GlslNodeVisitor): void;
        stream(): $Stream<$GlslNode>;
        setInit(arg0: $GlslNode): $GlslForLoopNode;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        constructor(arg0: $GlslNode, arg1: $GlslNode, arg2: $GlslNode, arg3: $Collection_<$GlslNode>);
    }
    export class $GlslWhileLoopNode implements $GlslNode {
        getLoopType(): $GlslWhileLoopNode$Type;
        setLoopType(arg0: $GlslWhileLoopNode$Type_): $GlslWhileLoopNode;
        getCondition(): $GlslNode;
        setCondition(arg0: $GlslNode): $GlslWhileLoopNode;
        getNodeType(): $GlslNodeType;
        getBody(): $GlslNodeList;
        visit(arg0: $GlslNodeVisitor): void;
        stream(): $Stream<$GlslNode>;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        constructor(arg0: $GlslNode, arg1: $Collection_<$GlslNode>, arg2: $GlslWhileLoopNode$Type_);
    }
    export class $GlslCaseLabelNode implements $GlslNode {
        getCondition(): $GlslNode;
        setCondition(arg0: $GlslNode): void;
        getNodeType(): $GlslNodeType;
        visit(arg0: $GlslNodeVisitor): void;
        stream(): $Stream<$GlslNode>;
        isDefault(): boolean;
        getBody(): $GlslNodeList;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        constructor(arg0: $GlslNode);
    }
}
