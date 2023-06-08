function isValidEthereumAddress(address) {
  const regex = /^(0x)?[0-9a-fA-F]{40}$/;
  return regex.test(address);
}

export default isValidEthereumAddress;