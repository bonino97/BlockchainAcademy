import { handler as createAccountHook } from "@components/providers/web3/hooks/useAccount";
import { handler as createNetworkHook } from "@components/providers/web3/hooks/useNetwork";

export const setupHooks = (...deps) => {
  return {
    useAccount: createAccountHook(...deps),
    useNetwork: createNetworkHook(...deps),
  };
};
