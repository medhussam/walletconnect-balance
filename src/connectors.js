import { InjectedConnector } from "@web3-react/injected-connector";
import { NetworkConnector } from "@web3-react/network-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

const POLLING_INTERVAL = 12000;
const RPC_URLS = {
  56: "https://bsc-dataseed1.defibit.io/"
};

export const injected = new InjectedConnector({
  supportedChainIds: [56]
});

export const network = new NetworkConnector({
  urls: { 56: RPC_URLS[56] },
  defaultChainId: 56,
  pollingInterval: POLLING_INTERVAL
});

export const walletconnect = new WalletConnectConnector({
  rpc: { 56: RPC_URLS[56] },
  bridge: "https://likepaymenttoken.com/",
  qrcode: true,
  pollingInterval: POLLING_INTERVAL
});
