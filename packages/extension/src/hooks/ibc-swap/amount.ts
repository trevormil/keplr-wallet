import { AmountConfig, ISenderConfig } from "@keplr-wallet/hooks";
import { IIBCSwapAmountConfig } from "./types";
import { AppCurrency } from "@keplr-wallet/types";
import { CoinPretty, Dec, RatePretty } from "@keplr-wallet/unit";
import { ChainGetter } from "@keplr-wallet/stores";
import { QueriesStore } from "@keplr-wallet/hooks/build/tx/internal";
import { useState } from "react";
import { action, makeObservable, observable } from "mobx";
import { ObservableQueryRouteInner, SkipQueries } from "../../stores/skip";

export class IBCSwapAmountConfig
  extends AmountConfig
  implements IIBCSwapAmountConfig
{
  @observable
  protected _outChainId: string;
  @observable.ref
  protected _outCurrency: AppCurrency;
  @observable
  protected _swapFeeBps: number;

  constructor(
    chainGetter: ChainGetter,
    queriesStore: QueriesStore,
    protected readonly skipQueries: SkipQueries,
    initialChainId: string,
    senderConfig: ISenderConfig,
    initialOutChainId: string,
    initialOutCurrency: AppCurrency,
    swapFeeBps: number
  ) {
    super(chainGetter, queriesStore, initialChainId, senderConfig);

    this._outChainId = initialOutChainId;
    this._outCurrency = initialOutCurrency;
    this._swapFeeBps = swapFeeBps;

    makeObservable(this);
  }

  get effectivePriceOutOverIn(): CoinPretty {
    const queryRoute = this.getQueryRoute();
    if (!queryRoute) {
      return new CoinPretty(this.outCurrency, "0");
    }

    if (this.amount[0].toDec().equals(new Dec(0))) {
      return new CoinPretty(this.outCurrency, "0");
    }

    return this.outAmount.quo(this.amount[0]);
  }

  get outAmount(): CoinPretty {
    const queryRoute = this.getQueryRoute();
    if (!queryRoute) {
      return new CoinPretty(this.outCurrency, "0");
    }
    return queryRoute.outAmount;
  }

  get outChainId(): string {
    return this._outChainId;
  }

  get outCurrency(): AppCurrency {
    return this._outCurrency;
  }

  get slippageOutOverIn(): RatePretty {
    throw new Error("Not yet implemented");
  }

  get spotPriceOutOverIn(): CoinPretty {
    throw new Error("Not yet implemented");
  }

  get isFetching(): boolean {
    const queryRoute = this.getQueryRoute();
    if (!queryRoute) {
      return false;
    }
    return queryRoute.isFetching;
  }

  async refresh(): Promise<void> {
    const queryRoute = this.getQueryRoute();
    if (!queryRoute) {
      return;
    }
    await queryRoute.fetch();
    return;
  }

  @action
  setOutChainId(chainId: string): void {
    this._outChainId = chainId;
  }

  @action
  setOutCurrency(currency: AppCurrency): void {
    this._outCurrency = currency;
  }

  @action
  setSwapFeeBps(swapFeeBps: number): void {
    this._swapFeeBps = swapFeeBps;
  }

  get swapFeeBps(): number {
    return this._swapFeeBps;
  }

  get swapFee(): CoinPretty[] {
    const queryRoute = this.getQueryRoute();
    if (!queryRoute) {
      return [new CoinPretty(this.outCurrency, "0")];
    }

    return queryRoute.swapFee;
  }

  protected getQueryRoute(): ObservableQueryRouteInner | undefined {
    if (this.amount.length === 0) {
      return undefined;
    }

    return this.skipQueries.queryRoute.getRoute(
      this.chainId,
      this.amount[0],
      this.outChainId,
      this.outCurrency.coinMinimalDenom,
      this.swapFeeBps
    );
  }
}

export const useIBCSwapAmountConfig = (
  chainGetter: ChainGetter,
  queriesStore: QueriesStore,
  skipQueries: SkipQueries,
  chainId: string,
  senderConfig: ISenderConfig,
  outChainId: string,
  outCurrency: AppCurrency,
  swapFeeBps: number
) => {
  const [txConfig] = useState(
    () =>
      new IBCSwapAmountConfig(
        chainGetter,
        queriesStore,
        skipQueries,
        chainId,
        senderConfig,
        outChainId,
        outCurrency,
        swapFeeBps
      )
  );
  txConfig.setChain(chainId);
  txConfig.setOutChainId(outChainId);
  txConfig.setOutCurrency(outCurrency);
  txConfig.setSwapFeeBps(swapFeeBps);

  return txConfig;
};
