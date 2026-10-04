import { $IPartyAllyAPI } from "@package/xaero/pac/common/parties/party/ally/api";
import { $Stream } from "@package/java/util/stream";
import { $PartyMemberRank_ } from "@package/xaero/pac/common/parties/party/member";
import { $IPartyMemberAPI } from "@package/xaero/pac/common/parties/party/member/api";
import { $UUID_, $UUID } from "@package/java/util";

declare module "@package/xaero/pac/common/parties/party/api" {
    export class $IPartyAPI {
    }
    export interface $IPartyAPI {
        setRank(arg0: $IPartyMemberAPI, arg1: $PartyMemberRank_): boolean;
        getMemberInfo(arg0: $UUID_): $IPartyMemberAPI;
        isAlly(arg0: $UUID_): boolean;
        getMemberCount(): number;
        getAllyCount(): number;
        getInviteCount(): number;
        getMemberInfoStream(): $Stream<$IPartyMemberAPI>;
        getStaffInfoStream(): $Stream<$IPartyMemberAPI>;
        getNonStaffInfoStream(): $Stream<$IPartyMemberAPI>;
        getInvitedPlayersStream(): $Stream<$IPartyPlayerInfoAPI>;
        getAllyPartiesStream(): $Stream<$IPartyAllyAPI>;
        isInvited(arg0: $UUID_): boolean;
        getDefaultName(): string;
        getId(): $UUID;
        getOwner(): $IPartyMemberAPI;
        get memberCount(): number;
        get allyCount(): number;
        get inviteCount(): number;
        get memberInfoStream(): $Stream<$IPartyMemberAPI>;
        get staffInfoStream(): $Stream<$IPartyMemberAPI>;
        get nonStaffInfoStream(): $Stream<$IPartyMemberAPI>;
        get invitedPlayersStream(): $Stream<$IPartyPlayerInfoAPI>;
        get allyPartiesStream(): $Stream<$IPartyAllyAPI>;
        get defaultName(): string;
        get id(): $UUID;
        get owner(): $IPartyMemberAPI;
    }
    export class $IPartyPlayerInfoAPI {
    }
    export interface $IPartyPlayerInfoAPI {
        getUsername(): string;
        getUUID(): $UUID;
        get username(): string;
        get UUID(): $UUID;
    }
}
