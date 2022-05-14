import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";

const { createContext, useContext, useState, useEffect } = require("react");
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
        console.log(provider);
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

  return (
    <Web3Context.Provider value={web3Api}>{children}</Web3Context.Provider>
  );
};

export const useWeb3 = () => {
  return useContext(Web3Context);
};

export default Web3Provider;
