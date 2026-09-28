import { $Event } from "@package/net/neoforged/bus/api";

declare module "@package/com/hlysine/create_connected/compat" {
    export class $FeatureRefreshEvent$Pre extends $FeatureRefreshEvent {
    }
    export class $FeatureRefreshEvent extends $Event {
    }
    export class $FeatureRefreshEvent$Post extends $FeatureRefreshEvent {
    }
}
