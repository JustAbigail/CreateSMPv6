import { $Supplier_ } from "@package/java/util/function";
import { $OperatingSystem, $SystemArchitecture, $OperatingSystemType } from "@package/io/homo/superresolution/api/platform";
import { $ArrayList, $Set, $List } from "@package/java/util";

declare module "@package/io/homo/superresolution/api/utils" {
    export class $Requirement {
        static nothing(): $Requirement;
        getGlMajorVersion(): number;
        getGlMinorVersion(): number;
        getMissingGlExtensions(): $List<string>;
        glMajorVersion(arg0: number): $Requirement;
        glMinorVersion(arg0: number): $Requirement;
        vulkanMajorVersion(arg0: number): $Requirement;
        vulkanMinorVersion(arg0: number): $Requirement;
        vulkanPatchVersion(arg0: number): $Requirement;
        addSupportedOS(arg0: $OperatingSystemType): $Requirement;
        addSupportedOS(arg0: $SystemArchitecture): $Requirement;
        addSupportedOS(arg0: $SystemArchitecture, arg1: $OperatingSystemType): $Requirement;
        addSupportedOS(arg0: $OperatingSystem): $Requirement;
        getRequiredGlExtensions(): $Set<string>;
        getVulkanMajorVersion(): number;
        getRequiredVulkanDeviceExtensions(): $Set<string>;
        isRequiresVulkan(): boolean;
        isRequiresDevEnv(): boolean;
        getVulkanMinorVersion(): number;
        getVulkanPatchVersion(): number;
        developmentEnvironment(arg0: boolean): $Requirement;
        requireVulkan(arg0: boolean): $Requirement;
        vulkanVersion(arg0: number, arg1: number, arg2: number): $Requirement;
        requireVulkanDeviceExtension(arg0: string): $Requirement;
        requiredGlExtension(arg0: string): $Requirement;
        getMissingVkExtensions(): $List<string>;
        getSupportedOS(): $Set<$OperatingSystem>;
        /**
         * @deprecated
         */
        getIncludeOS(): $ArrayList<$OperatingSystem>;
        isFalse(arg0: $Supplier_<boolean>): $Requirement;
        check(): $Requirement$Result;
        isTrue(arg0: $Supplier_<boolean>): $Requirement;
        glVersion(arg0: number, arg1: number): $Requirement;
    }
}
