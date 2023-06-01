import Web3 from 'web3';
import contract from 'truffle-contract';
import { ethers } from 'ethers';
import { Web3Provider } from '@ethersproject/providers';
import { MetaMaskProvider } from '@metamask/providers'



// Connect to an Ethereum provider
const providerUrl = 'http://localhost:7545'; // Ganache local network URL
const web3 = new Web3(providerUrl);

// Example: Get the current block number
web3.eth.getBlockNumber().then((blockNumber) => {
  console.log('Current block number:', blockNumber);
});
// Create a contract instance
const MyContract = contract(require('./build/contracts/MyContract.json'));
MyContract.setProvider(web3.currentProvider);

// Example: Call a read-only function
MyContract.deployed().then((instance) => {
  return instance.myFunction.call();
}).then((result) => {
  console.log('Function result:', result);
});
// Detect MetaMask provider
detectProvider().then((provider) => {
    if (provider) {
      console.log('MetaMask is installed!');
    } else {
      console.log('MetaMask is not installed.');
    }
  });