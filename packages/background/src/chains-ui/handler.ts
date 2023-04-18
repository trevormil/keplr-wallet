import {
  Env,
  Handler,
  InternalHandler,
  KeplrError,
  Message,
} from "@keplr-wallet/router";
import { ChainsUIService } from "./service";
import {
  GetEnabledChainIdentifiersMsg,
  ToggleChainsMsg,
  EnableChainsMsg,
  DisableChainsMsg,
} from "./messages";

export const getHandler: (service: ChainsUIService) => Handler = (service) => {
  return (env: Env, msg: Message<unknown>) => {
    switch (msg.constructor) {
      case GetEnabledChainIdentifiersMsg:
        return handleGetEnabledChainIdentifiersMsg(service)(
          env,
          msg as GetEnabledChainIdentifiersMsg
        );
      case ToggleChainsMsg:
        return handleToggleChainsMsg(service)(env, msg as ToggleChainsMsg);
      case EnableChainsMsg:
        return handleEnableChainsMsg(service)(env, msg as EnableChainsMsg);
      case DisableChainsMsg:
        return handleDisableChainsMsg(service)(env, msg as DisableChainsMsg);
      default:
        throw new KeplrError("chains", 110, "Unknown msg type");
    }
  };
};

const handleGetEnabledChainIdentifiersMsg: (
  service: ChainsUIService
) => InternalHandler<GetEnabledChainIdentifiersMsg> = (service) => {
  return () => {
    return service.enabledChainIdentifies;
  };
};

const handleToggleChainsMsg: (
  service: ChainsUIService
) => InternalHandler<ToggleChainsMsg> = (service) => {
  return (_, msg) => {
    service.toggleChain(...msg.chainIds);
    return service.enabledChainIdentifies;
  };
};

const handleEnableChainsMsg: (
  service: ChainsUIService
) => InternalHandler<EnableChainsMsg> = (service) => {
  return (_, msg) => {
    service.enableChain(...msg.chainIds);
    return service.enabledChainIdentifies;
  };
};

const handleDisableChainsMsg: (
  service: ChainsUIService
) => InternalHandler<DisableChainsMsg> = (service) => {
  return (_, msg) => {
    service.disableChain(...msg.chainIds);
    return service.enabledChainIdentifies;
  };
};