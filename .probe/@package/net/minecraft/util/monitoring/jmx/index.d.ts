import { $MinecraftServer } from "@package/net/minecraft/server";
import { $MBeanInfo, $DynamicMBean, $AttributeList, $Attribute } from "@package/javax/management";
import { $Object } from "@package/java/lang";

declare module "@package/net/minecraft/util/monitoring/jmx" {
    export class $MinecraftServerStatistics implements $DynamicMBean {
        getMBeanInfo(): $MBeanInfo;
        setAttributes(attributes: $AttributeList): $AttributeList;
        static registerJmxMonitoring(server: $MinecraftServer): void;
        getAttribute(name: string): $Object;
        setAttribute(attribute: $Attribute): void;
        invoke(actionName: string, params: $Object[], signature: string[]): $Object;
        getAttributes(attributes: string[]): $AttributeList;
    }
    export class $MinecraftServerStatistics$AttributeDescription {
    }
}
