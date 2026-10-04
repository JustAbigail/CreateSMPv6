import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $IPartyAllyAPI } from "@package/xaero/pac/common/parties/party/ally/api";
import { $Stream } from "@package/java/util/stream";
import { $IPartyPlayerInfoAPI, $IPartyAPI } from "@package/xaero/pac/common/parties/party/api";
import { $PartyMemberRank_ } from "@package/xaero/pac/common/parties/party/member";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $IPartyMemberAPI } from "@package/xaero/pac/common/parties/party/member/api";
import { $UUID_, $UUID } from "@package/java/util";

declare module "@package/xaero/pac/common/server/parties/party/api" {
    export class $IServerPartyAPI {
    }
    export interface $IServerPartyAPI extends $IPartyAPI {
        getOnlineMemberStream(): $Stream<$ServerPlayer>;
        setRank(arg0: $IPartyMemberAPI, arg1: $PartyMemberRank_): boolean;
        uninvitePlayer(arg0: $UUID_): $IPartyPlayerInfoAPI;
        invitePlayer(arg0: $UUID_, arg1: string): $IPartyPlayerInfoAPI;
        getMemberInfo(arg0: $UUID_): $IPartyMemberAPI;
        getMemberInfo(arg0: string): $IPartyMemberAPI;
        addAllyParty(arg0: $UUID_): void;
        removeAllyParty(arg0: $UUID_): void;
        isAlly(arg0: $UUID_): boolean;
        getMemberCount(): number;
        getAllyCount(): number;
        getInviteCount(): number;
        getMemberInfoStream(): $Stream<$IPartyMemberAPI>;
        getStaffInfoStream(): $Stream<$IPartyMemberAPI>;
        getNonStaffInfoStream(): $Stream<$IPartyMemberAPI>;
        getInvitedPlayersStream(): $Stream<$IPartyPlayerInfoAPI>;
        getAllyPartiesStream(): $Stream<$IPartyAllyAPI>;
        addMember(arg0: $UUID_, arg1: $PartyMemberRank_ | null, arg2: string): $IPartyMemberAPI;
        isInvited(arg0: $UUID_): boolean;
        getDefaultName(): string;
        getId(): $UUID;
        getOwner(): $IPartyMemberAPI;
        removeMember(arg0: $UUID_): $IPartyMemberAPI;
        get onlineMemberStream(): $Stream<$ServerPlayer>;
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
    export class $IPartyManagerAPI {
    }
    export interface $IPartyManagerAPI {
        partyExistsForOwner(arg0: $UUID_): boolean;
        removePartyByOwner(arg0: $UUID_): void;
        removePartyById(arg0: $UUID_): void;
        removeParty(arg0: $IServerPartyAPI): void;
        getPartiesThatAlly(arg0: $UUID_): $Stream<$IServerPartyAPI>;
        createPartyForOwner(arg0: $Player): $IServerPartyAPI;
        getPartyById(arg0: $UUID_): $IServerPartyAPI;
        getPartyByOwner(arg0: $UUID_): $IServerPartyAPI;
        getPartyByMember(arg0: $UUID_): $IServerPartyAPI;
        getAllStream(): $Stream<$IServerPartyAPI>;
        get allStream(): $Stream<$IServerPartyAPI>;
    }
}
