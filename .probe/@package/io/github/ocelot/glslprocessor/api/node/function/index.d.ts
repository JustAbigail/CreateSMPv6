import { $GlslNewFieldNode, $GlslVariableDeclarationNode, $GlslStructDeclarationNode } from "@package/io/github/ocelot/glslprocessor/api/node/variable";
import { $Stream } from "@package/java/util/stream";
import { $GlslSpecifiedType, $GlslFunctionHeader, $GlslParameterDeclaration, $GlslTypeSpecifier, $GlslTypeSpecifier_ } from "@package/io/github/ocelot/glslprocessor/api/grammar";
import { $Collection_, $List } from "@package/java/util";
import { $GlslNode, $GlslRootNode, $GlslNodeList, $GlslNodeType } from "@package/io/github/ocelot/glslprocessor/api/node";
import { $GlslNodeVisitor } from "@package/io/github/ocelot/glslprocessor/api/visitor";

declare module "@package/io/github/ocelot/glslprocessor/api/node/function" {
    export class $GlslPrimitiveConstructorNode implements $GlslNode {
        setPrimitiveType(arg0: $GlslTypeSpecifier_): void;
        getNodeType(): $GlslNodeType;
        visit(arg0: $GlslNodeVisitor): void;
        stream(): $Stream<$GlslNode>;
        getPrimitiveType(): $GlslTypeSpecifier;
        getBody(): $GlslNodeList;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        constructor(arg0: $GlslTypeSpecifier_);
    }
    export class $GlslFunctionNode implements $GlslRootNode {
        setHeader(arg0: $GlslFunctionHeader): void;
        getNodeType(): $GlslNodeType;
        getBody(): $GlslNodeList;
        visit(arg0: $GlslNodeVisitor): void;
        getName(): string;
        stream(): $Stream<$GlslNode>;
        getReturnType(): $GlslSpecifiedType;
        getParameters(): $List<$GlslParameterDeclaration>;
        getHeader(): $GlslFunctionHeader;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        asFunction(): $GlslFunctionNode;
        asField(): $GlslNewFieldNode;
        isStruct(): boolean;
        asDeclaration(): $GlslVariableDeclarationNode;
        asStruct(): $GlslStructDeclarationNode;
        isField(): boolean;
        isDeclaration(): boolean;
        isFunction(): boolean;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        setBody(...arg0: $GlslNode[]): boolean;
        setName(arg0: string): $GlslRootNode;
        constructor(arg0: $GlslFunctionHeader, arg1: $Collection_<$GlslNode>);
    }
    export class $GlslInvokeFunctionNode implements $GlslNode {
        setHeader(arg0: $GlslNode): void;
        getNodeType(): $GlslNodeType;
        visit(arg0: $GlslNodeVisitor): void;
        stream(): $Stream<$GlslNode>;
        getParameters(): $List<$GlslNode>;
        getHeader(): $GlslNode;
        getBody(): $GlslNodeList;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        constructor(arg0: $GlslNode, arg1: $Collection_<$GlslNode>);
    }
}
