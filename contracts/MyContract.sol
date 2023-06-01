// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyContract {
    address payable public sender;
    address payable public receiver;
    uint public transactionAmount;
    bool public isTransactionComplete;

    constructor(address payable _receiver) {
        sender = payable(msg.sender);
        receiver = _receiver;
        isTransactionComplete = false;
    }

    function sendTransaction() public payable {
        require(!isTransactionComplete, "Transaction already completed");
        require(msg.sender == sender, "Only the sender can initiate the transaction");
        require(msg.value > 0, "Transaction amount must be greater than zero");

        transactionAmount = msg.value;
    }

    function completeTransaction() public {
        require(!isTransactionComplete, "Transaction already completed");
        require(msg.sender == receiver, "Only the receiver can complete the transaction");

        receiver.transfer(transactionAmount);
        isTransactionComplete = true;
    }
}