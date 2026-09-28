import { $Stream } from "@package/java/util/stream";
import { $GlslFunctionNode } from "@package/io/github/ocelot/glslprocessor/api/node/function";
import { $GlslTypeQualifier, $GlslSpecifiedType, $GlslStructSpecifier, $GlslType_ } from "@package/io/github/ocelot/glslprocessor/api/grammar";
import { $Collection_, $List } from "@package/java/util";
import { $GlslNode, $GlslRootNode, $GlslNodeList, $GlslNodeType } from "@package/io/github/ocelot/glslprocessor/api/node";
import { $GlslNodeVisitor } from "@package/io/github/ocelot/glslprocessor/api/visitor";

declare module "@package/io/github/ocelot/glslprocessor/api/node/variable" {
    export class $GlslVariableDeclarationNode implements $GlslRootNode {
        getTypeQualifiers(): $List<$GlslTypeQualifier>;
        getNames(): $List<string>;
        getNodeType(): $GlslNodeType;
        visit(arg0: $GlslNodeVisitor): void;
        getName(): string;
        stream(): $Stream<$GlslNode>;
        setName(arg0: string): $GlslRootNode;
        asFunction(): $GlslFunctionNode;
        asField(): $GlslNewFieldNode;
        isStruct(): boolean;
        asDeclaration(): $GlslVariableDeclarationNode;
        asStruct(): $GlslStructDeclarationNode;
        isField(): boolean;
        isDeclaration(): boolean;
        isFunction(): boolean;
        getBody(): $GlslNodeList;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        constructor(arg0: $Collection_<$GlslTypeQualifier>, arg1: $Collection_<string>);
    }
    export class $GlslGetArrayNode implements $GlslNode {
        setIndex(arg0: $GlslNode): $GlslGetArrayNode;
        getNodeType(): $GlslNodeType;
        visit(arg0: $GlslNodeVisitor): void;
        stream(): $Stream<$GlslNode>;
        getIndex(): $GlslNode;
        getExpression(): $GlslNode;
        setExpression(arg0: $GlslNode): $GlslGetArrayNode;
        getBody(): $GlslNodeList;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        constructor(arg0: $GlslNode, arg1: $GlslNode);
    }
    export class $GlslVariableNode implements $GlslNode {
        getNodeType(): $GlslNodeType;
        visit(arg0: $GlslNodeVisitor): void;
        getName(): string;
        stream(): $Stream<$GlslNode>;
        setName(arg0: string): $GlslVariableNode;
        getBody(): $GlslNodeList;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        constructor(arg0: string);
    }
    export class $GlslStructDeclarationNode implements $GlslRootNode {
        getSpecifiedType(): $GlslSpecifiedType;
        getStructSpecifier(): $GlslStructSpecifier;
        setSpecifiedType(arg0: $GlslSpecifiedType): $GlslStructDeclarationNode;
        getNodeType(): $GlslNodeType;
        visit(arg0: $GlslNodeVisitor): void;
        getName(): string;
        stream(): $Stream<$GlslNode>;
        setName(arg0: string): $GlslStructDeclarationNode;
        asFunction(): $GlslFunctionNode;
        asField(): $GlslNewFieldNode;
        isStruct(): boolean;
        asDeclaration(): $GlslVariableDeclarationNode;
        asStruct(): $GlslStructDeclarationNode;
        isField(): boolean;
        isDeclaration(): boolean;
        isFunction(): boolean;
        getBody(): $GlslNodeList;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        constructor(arg0: $GlslSpecifiedType);
    }
    export class $GlslGetFieldNode implements $GlslNode {
        getFieldSelection(): string;
        setFieldSelection(arg0: string): $GlslGetFieldNode;
        getNodeType(): $GlslNodeType;
        visit(arg0: $GlslNodeVisitor): void;
        stream(): $Stream<$GlslNode>;
        getExpression(): $GlslNode;
        setExpression(arg0: $GlslNode): $GlslGetFieldNode;
        getBody(): $GlslNodeList;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        constructor(arg0: $GlslNode, arg1: string);
    }
    export class $GlslNewFieldNode implements $GlslRootNode {
        getInitializer(): $GlslNode;
        setInitializer(arg0: $GlslNode): $GlslNewFieldNode;
        getNodeType(): $GlslNodeType;
        visit(arg0: $GlslNodeVisitor): void;
        setType(arg0: $GlslType_): $GlslNewFieldNode;
        getName(): string;
        stream(): $Stream<$GlslNode>;
        setName(arg0: string): $GlslNewFieldNode;
        getType(): $GlslSpecifiedType;
        asFunction(): $GlslFunctionNode;
        asField(): $GlslNewFieldNode;
        isStruct(): boolean;
        asDeclaration(): $GlslVariableDeclarationNode;
        asStruct(): $GlslStructDeclarationNode;
        isField(): boolean;
        isDeclaration(): boolean;
        isFunction(): boolean;
        getBody(): $GlslNodeList;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        constructor(arg0: $GlslType_, arg1: string, arg2: $GlslNode);
    }
}
