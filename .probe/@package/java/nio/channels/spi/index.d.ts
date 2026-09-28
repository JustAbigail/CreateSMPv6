import { $ProtocolFamily_ } from "@package/java/net";
import { $Selector, $Pipe, $DatagramChannel, $ServerSocketChannel, $Channel, $SocketChannel, $SelectableChannel, $InterruptibleChannel } from "@package/java/nio/channels";

declare module "@package/java/nio/channels/spi" {
    export class $AbstractSelector extends $Selector {
    }
    export class $AbstractSelectableChannel extends $SelectableChannel {
    }
    export class $AbstractInterruptibleChannel implements $Channel, $InterruptibleChannel {
        isOpen(): boolean;
        close(): void;
    }
    export class $SelectorProvider {
        openServerSocketChannel(arg0: $ProtocolFamily_): $ServerSocketChannel;
        openServerSocketChannel(): $ServerSocketChannel;
        openPipe(): $Pipe;
        openSelector(): $AbstractSelector;
        openDatagramChannel(arg0: $ProtocolFamily_): $DatagramChannel;
        openDatagramChannel(): $DatagramChannel;
        openSocketChannel(arg0: $ProtocolFamily_): $SocketChannel;
        openSocketChannel(): $SocketChannel;
        static provider(): $SelectorProvider;
        inheritedChannel(): $Channel;
    }
}
