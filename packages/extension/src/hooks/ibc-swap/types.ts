import { IAmountConfig } from "@keplr-wallet/hooks";
import { CoinPretty, RatePretty } from "@keplr-wallet/unit";
import { AppCurrency } from "@keplr-wallet/types";

export interface IIBCSwapAmountConfig extends IAmountConfig {
  outChainId: string;
  outCurrency: AppCurrency;
  outAmount: CoinPretty;
  swapFeeBps: number;
  slippageOutOverIn: RatePretty;
  spotPriceOutOverIn: CoinPretty;
  effectivePriceOutOverIn: CoinPretty;

  // 얘는 FeeConfig 밑에 있어야 할 것 같지만...
  // 그렇게하면 좀 귀찮아져서 그냥 여기에 넣는다.
  swapFee: CoinPretty[];

  isFetching: boolean;
  refresh(): Promise<void>;
}
