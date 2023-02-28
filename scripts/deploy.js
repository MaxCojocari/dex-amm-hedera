const { hethers } = require('@hashgraph/hethers');
const helloHederaJSON = require("../artifacts/contracts/HelloHedera.sol/HelloHedera.json");
require("dotenv").config();


const provider = hethers.providers.getDefaultProvider('testnet');

const main = async () => {
  console.log(1);
  const signer = new hethers.Wallet(process.env.PRIVATE_KEY, provider).connectAccount(process.env.ACCOUNT_ID);
  console.log(2);
  const factory = new hethers.ContractFactory(helloHederaJSON.abi, helloHederaJSON.bytecode, signer);
  console.log(3);
  const helloHedera = await factory.deploy("Hello Hedera!", { gasLimit: 300000 });
  console.log(4);

  console.log(await helloHedera.get_message({ gasLimit: 30000 }));
  console.log(await helloHedera.get_owner({ gasLimit: 30000 }));
  console.log(await helloHedera.owner({ gasLimit: 30000 }));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
