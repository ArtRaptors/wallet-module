## Crushcoin Wallet Module

A NodeJS wrapper for the Cytponote and Bytecoin Wallet RPC JSON daemon.

### Dependencies

You must have the Crushcoin Wallet daemon running, or have a URL from which you can access one remotely. 

```javascript

const Wallet = require('@crushcoin/wallet')

// Connect to a wallet daemon.
const wallet = new Wallet('127.0.0.1', 8070)

wallet.getAddresess().then(console.log)

```