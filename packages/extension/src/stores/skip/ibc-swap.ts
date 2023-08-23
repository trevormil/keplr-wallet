import { IChainStore } from "@keplr-wallet/stores";
import { Currency, IBCCurrency } from "@keplr-wallet/types";
import { ObservableQueryAssets } from "./assets";
import { computed, makeObservable } from "mobx";
import { ObservableQueryChains } from "./chains";

export class ObservableQueryIbcSwap {
  constructor(
    protected readonly chainStore: IChainStore,
    protected readonly queryAssets: ObservableQueryAssets,
    protected readonly queryChains: ObservableQueryChains,
    public readonly swapChainId: string
  ) {
    makeObservable(this);
  }

  isSwappableCurrency(
    chainId: string,
    currency: Currency | IBCCurrency
  ): boolean {
    const chainIdentifier = this.chainStore.getChain(chainId).chainIdentifier;
    return (
      this.swapCurrenciesMap.has(chainIdentifier) &&
      this.swapCurrenciesMap
        .get(chainIdentifier)!
        .has(currency.coinMinimalDenom)
    );
  }

  // Key: chain identifier, inner key: coin minimal denom
  @computed
  get swapCurrenciesMap(): Map<string, Map<string, Currency | IBCCurrency>> {
    const swapChainInfo = this.chainStore.getChain(this.swapChainId);

    const queryAssets = this.queryAssets.getAssets(swapChainInfo.chainId);
    const assets = queryAssets.assets;

    const res = new Map<string, Map<string, Currency | IBCCurrency>>();

    const getMap = (chainId: string) => {
      const chainIdentifier = this.chainStore.getChain(chainId).chainIdentifier;
      let innerMap = res.get(chainIdentifier);
      if (!innerMap) {
        innerMap = new Map<string, Currency | IBCCurrency>();
        res.set(chainIdentifier, innerMap);
      }

      return innerMap;
    };

    for (const asset of assets) {
      const chainId = asset.chainId;

      const currency = this.chainStore
        .getChain(chainId)
        .findCurrency(asset.denom);

      if (currency) {
        // If ibc currency is well known.
        if (
          "originCurrency" in currency &&
          currency.originCurrency &&
          "originChainId" in currency &&
          currency.originChainId &&
          // XXX: multi-hop ibc currency는 나중에 생각해본다...
          currency.paths.length === 1
        ) {
          const originChainId = currency.originChainId;
          if (this.queryChains.isSupportsMemo(originChainId)) {
            // 기본적으로 해당 체인이 ibc transfer에서 memo를 지원하지 않으면 osmosis에서 pfm을 쓸 수 없기 때문에
            // 해당 체인의 ibc currency를 넣지 않는다.
            const originCurrency = currency.originCurrency;
            getMap(currency.originChainId).set(
              originCurrency.coinMinimalDenom,
              originCurrency
            );
          }
        } else if (!("paths" in currency)) {
          // if currency is not ibc currency
          getMap(chainId).set(currency.coinMinimalDenom, currency);
        }
      }
    }

    return res;
  }
}
