import { $Supplier_ } from "@package/java/util/function";
import { $Component } from "@package/net/minecraft/network/chat";
import { $List } from "@package/java/util";
import { $Enum } from "@package/java/lang";
import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";

declare module "@package/net/neoforged/neoforge/client/settings" {
    /**
     * Defines the context that a `KeyMapping` is used.
     * Key conflicts occur when a `KeyMapping` has the same `IKeyConflictContext` and has conflicting modifiers and keyCodes.
     */
    export class $IKeyConflictContext {
    }
    export interface $IKeyConflictContext {
        isActive(): boolean;
        conflicts(other: $IKeyConflictContext): boolean;
    }
    export class $KeyModifier extends $Enum<$KeyModifier> {
        static getKeyModifier(arg0: $InputConstants$Key): $KeyModifier;
        getCombinedName(arg0: $InputConstants$Key, arg1: $Supplier_<$Component>): $Component;
        static valueFromString(arg0: string): $KeyModifier;
        /**
         * @deprecated
         */
        static getActiveModifier(): $KeyModifier;
        static isKeyCodeModifier(arg0: $InputConstants$Key): boolean;
        static getActiveModifiers(): $List<$KeyModifier>;
        codes(): $InputConstants$Key[];
        static values(): $KeyModifier[];
        static valueOf(arg0: string): $KeyModifier;
        matches(arg0: $InputConstants$Key): boolean;
        isActive(arg0: $IKeyConflictContext): boolean;
        static SHIFT: $KeyModifier;
        static MODIFIER_VALUES: $KeyModifier[];
        static ALT: $KeyModifier;
        static NONE: $KeyModifier;
        static CONTROL: $KeyModifier;
    }
    /**
     * Values that may be interpreted as {@link $KeyModifier}.
     */
    export type $KeyModifier_ = "control" | "shift" | "alt" | "none";
    export class $KeyConflictContext extends $Enum<$KeyConflictContext> implements $IKeyConflictContext {
        static values(): $KeyConflictContext[];
        static valueOf(arg0: string): $KeyConflictContext;
        static IN_GAME: $KeyConflictContext;
        static UNIVERSAL: $KeyConflictContext;
        static GUI: $KeyConflictContext;
    }
    /**
     * Values that may be interpreted as {@link $KeyConflictContext}.
     */
    export type $KeyConflictContext_ = "universal" | "gui" | "in_game";
}
