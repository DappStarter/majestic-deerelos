require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'hope area off tragic educate ranch remain million grace nasty force text'; 
let testAccounts = [
"0xcc6c9a445ae29cdeee47695251c143f5d98f6986762699fc688ec318ed3d1e85",
"0xa7f2d88b69dc6c74d7c5212f1fa2de374a7d5c028f9f2bf3e5f61663895262fe",
"0xae15b0bccbbd46e04b4774ef998bb4165e32fd0ee5d2524c54861dbb8e980986",
"0x66c6fc495140c83bb19e40367f9b4c21df6c1aa933d0e0c3c2f91d49c217365a",
"0x9991943edc9ceff17a4f8d203fef1cc0283cdacbb56d68fd99f217832b86e110",
"0xd7be2f48ce9e6f2b8410ce8699232909da56eee4ddab71d0eb419440646adc83",
"0xbfa8765d8139bf95c7400f9bc62095eff742b68007591a79f9b316957cd089ba",
"0x82f6b5790885c88b051757c507bb9ad04a5cf44bac71d2a08f61c911c2043062",
"0xd2c7e3a193c4cd2ecfcb573baba1fbab8f8ea59291b28ba77a3ab28d6fdabb91",
"0xf19ff5c5fb9d35b2f81d443f78dab616a55fc2bdc5a989c7367ebf2d8bdfa1ef"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

