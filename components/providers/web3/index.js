import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";
import { setupHooks } from "@components/providers/web3/hooks/setupHooks";

const {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} = require("react");
const Web3Context = createContext(null);

const initialValues = {
  provider: null,
  web3: null,
  contract: null,
  isLoading: true,
};

const Web3Provider = ({ children }) => {
  const [web3Api, setWeb3Api] = useState(initialValues);
  useEffect(() => {
    const loadProvider = async () => {
      try {
        const provider = await detectEthereumProvider();

        if (!provider) {
          setWeb3Api((api) => ({ ...api, isLoading: false }));
          return alert("Please, install Metamask.");
        }

        const web3 = new Web3(provider);
        setWeb3Api({
          provider,
          web3,
          contract: null,
          isLoading: false,
        });
      } catch (error) {
        console.error(error);
        alert("An error ocurred. Please, contact an administrator.");
      }
    };

    loadProvider();
  }, []);

  const _web3Api = useMemo(() => {
    const { web3, provider } = web3Api;
    return {
      ...web3Api,
      isWeb3Loaded: web3 != null,
      getHooks: () => setupHooks(web3),
      connect: provider
        ? async () => {
            try {
              await provider.request({ method: "eth_requestAccounts" });
            } catch (error) {
              alert("Cannot connect to Metamask, try again");
              location.reload();
            }
          }
        : () => dispatchErrors(),
    };
  }, [web3Api]);

  return (
    <Web3Context.Provider value={_web3Api}>{children}</Web3Context.Provider>
  );
};

const dispatchErrors = (error = {}) => {
  alert(
    "Cannot connect to Metamask, try again later or contact an administrator."
  );
  console.error(
    "Cannot connect to Metamask, try again later or contact an administrator.",
    error
  );
};

export const useWeb3 = () => {
  return useContext(Web3Context);
};

export const useHooks = (cb) => {
  const { getHooks } = useWeb3();
  return cb(getHooks());
};

export default Web3Provider;
