var crushcoinWallet = require('./lib/wallet');
var Wallet = new crushcoinWallet();

// examples

let exampleAddress = 'cxyx8BweZoLHstEkeTWcDH3PFnRmNQhfRB8ZYrCyXn9TUoXFaxZq9yJPN5UKV3bKwEd6xqxKqrZq7Q1mzCHkh5S237MXbWbjP';
// Wallet.getBalance().then(console.log);

// Wallet.getAddresses().then(function(response){
//     console.log(response);
// });

// Wallet.createAddress().then(console.log);

// Wallet.getViewKey().then(console.log);

// let adr = 'cxxprz4mPUebJjcJKJmnx9aYnMNzdJZ85SMGDJp8FCrER824KTbKwn8PN5UKV3bKwEd6xqxKqrZq7Q1mzCHkh5S237MW7vXgw';
// Wallet.getSpendKeys(adr).then(console.log);

// Wallet.deleteAddress(adr).then(console.log);

// Wallet.getStatus().then(console.log);

// Wallet.getBlockHashes(0, 10).then(console.log);

// let params = {
//     firstBlockIndex: 7000,
//     blockCount: 854,
//     addresses: ['cxyHbhSg9bwFWu2kV3qb9kBrpi9G5m9fDQWaPQCDtYBT1PbCfxtnvtTfpnpM11EhJSchRfSs2snAmBDb9qHicE882tUzdZj88']
// }
// Wallet.getTransactions(params)
//     .then(console.log)

// Wallet.getTransaction('964c63bd3ed5b65145ae4f86cb486010c1339b8dc0c4cf3eba52c09d23cb8d7a')
//     .then(console.log)


// Wallet.getDelayedTransactionHashes().then(console.log)

// let dest = 'cxyhK8DDMkhCm1EADwvn9y4fF8f6i9GYqcyQye1Pj1jV8Y19kzNoFrGPN5UKV3bKwEd6xqxKqrZq7Q1mzCHkh5S237MXWwmpz'
// let params = {
//     'anonymity':0,
//     'fee':1000000,
//     'unlockTime':0,
//     'addresses':[exampleAddress],
//     'transfers':[ 
//         {  
//             'amount':123456,
//             'address': dest
//         }
//     ],
//     'changeAddress': exampleAddress

// }

// Wallet.sendTransaction(params).then(console.log);


// let params = '4975114df0d560f5fa137a992f47797bf68683e21661746b0c025ec6268170af';

// Wallet.getTransaction(params).then(console.log);




