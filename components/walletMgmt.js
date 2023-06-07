import { ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider("https://goerli.infura.io/v3/51608401cd76419c9674191690a3b242");
const wallet = ethers.Wallet.fromMnemonic('regret today deal sail fancy desk drill observe magnet toe firm neck');
const signer = wallet.connect(provider);

const address = async () => {
  return await signer.getAddress();
}

const balance = async () => {
  return await signer.getBalance();
}

const sendTransaction = async (to, value) => {
  return await signer.sendTransaction({
    to: to,
    value: ethers.utils.parseEther(value)
  });
}

address().then((address) => console.log(address));
balance().then((balance) => console.log(balance));