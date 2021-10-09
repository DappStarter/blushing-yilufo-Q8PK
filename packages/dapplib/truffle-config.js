require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give glove fresh speak notice crime remove coffee hockey private orange gesture'; 
let testAccounts = [
"0x0bda6ed03fe95b5d52cba31e7113a83a4d81fc5061ad9301de1505ae78229cfd",
"0xa2b0ead56e7f5edb08dcab7b47e94757601048965c72d5d344f79f5c8b3257b4",
"0xaf815c2d2c99fb9096888dde8d8f30ab4fcb4b4c77d9eea9578e1ddab67cc482",
"0x51a7c5612cf3bbd5adf8ba46a97ad86086a9e3503cc3aeec7729891aaa6eb513",
"0x4aee0611b44d0244a65a8c68bcce7298f15bea71cefc96f4610d5e350f1cd453",
"0x21d453ae9d48698c3916b22243ffba13dafe9f79a8dd51813c75fa40670b7c64",
"0x262ec39b4532212e8c326769365b29c66324f5688e0a7ea5d44a8805255f7e3e",
"0xded64242a05d9be59ddaf4827fce33431b6be8483852e390f86bb689a4c515ae",
"0xae6600970f6de50a6669b0dbd40132cb3f3caa1429dac2304bf31801352456b4",
"0x21a801df31291f21aaccd9788b790a0dc0faa35b03d4a3d888d03780c56614b0"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

