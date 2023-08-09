import { init } from "@keplr-wallet/background";
import { ScryptParams } from "@keplr-wallet/background/src/keyring/legacy";
import {
  RNEnv,
  RNMessageRequesterInternalToUI,
  RNRouterBackground,
} from "../router";
import { AsyncKVStore } from "../common";
import { BACKGROUND_PORT } from "@keplr-wallet/router";

import { CommunityChainInfoRepo, EmbedChainInfos } from "../config";

const router = new RNRouterBackground(RNEnv.produceEnv);

init(
  router,
  (prefix: string) => new AsyncKVStore(prefix),
  new RNMessageRequesterInternalToUI(),
  EmbedChainInfos,
  [
    "https://app.osmosis.zone",
    "https://www.stargaze.zone",
    "https://app.umee.cc",
    "https://junoswap.com",
    "https://frontier.osmosis.zone",
    "https://daodao.zone",
    "https://app.regen.network",
    "https://app.stride.zone",
    "https://app.wynddao.com",
    "https://osmosis.marsprotocol.io",
    "https://hub.injective.network",
    "https://cosmos.pstake.finance",
    "https://app.streamswap.io",
    "https://index.ion.wtf",
    "https://ion.wtf",
    "https://app.calculated.fi",
    "https://app.dexter.zone",
    "https://trade.levana.finance",
  ],
  ["https://wallet.keplr.app"],
  CommunityChainInfoRepo,
  {
    create: (params: {
      iconRelativeUrl?: string;
      title: string;
      message: string;
    }) => {
      console.log(`Notification: ${params.title}, ${params.message}`);
    },
  },
  // TODO: 아무거나 넣음. 추후에 수정해야함.
  {
    commonCrypto: {
      scrypt: async (text: string, params: ScryptParams) => {
        return Buffer.from(text);
      },
    },
    getDisabledChainIdentifiers: async () => {
      return [];
    },
  }
);

router.listen(BACKGROUND_PORT);
