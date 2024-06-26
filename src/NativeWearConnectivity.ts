import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

// Messages
export type Payload = {};
export type Nodes = { displayName: string; id: string }[];
export type ReplyCallback = (reply: string) => void;
export type ReplyWithNodesCallback = (reply: Nodes) => void;
export type ErrorCallback = (err: string) => void;

export type SendMessage = (
  message: Payload,
  cb: ReplyCallback,
  errCb: ErrorCallback
) => void;

export type SendGenuineMessage = (
  path: string,
  cb: ReplyCallback,
  errCb: ErrorCallback
) => void;

export type GetNodes = (
  capability: string,
  cb?: ReplyWithNodesCallback,
  errCb?: ErrorCallback
) => void;

export type OpenRemoteURI = (
  uri: string,
  nodeId: string,
  cb?: ReplyCallback,
  errCb?: ErrorCallback
) => void;

export interface Spec extends TurboModule {
  sendMessage: SendMessage;
  sendGenuineMessage: SendGenuineMessage;
  getCapableAndReachableNodes: GetNodes;
  getNonCapableAndReachableNodes: GetNodes;
  openRemoteURI: OpenRemoteURI;
}

export default TurboModuleRegistry.getEnforcing<Spec>('WearConnectivity');
