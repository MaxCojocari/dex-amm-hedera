const { hethers } = require('@hashgraph/hethers');
const helloHederaJSON = require("../artifacts/contracts/HelloHedera.sol/HelloHedera.json");
const provider = hethers.providers.getDefaultProvider('testnet');
require("dotenv").config();

const main = async () => {
  const signer = new hethers.Wallet(process.env.PRIVATE_KEY, provider).connectAccount(process.env.ACCOUNT_ID);
  const factory = new hethers.ContractFactory(helloHederaJSON.abi, helloHederaJSON.bytecode, signer);
  const helloHedera = await factory.deploy("Hello Hedera!", { gasLimit: 300000 });

  console.log("Contract address: ", helloHedera.address);
  console.log(await helloHedera.get_message({ gasLimit: 30000 }));
  console.log(await helloHedera.get_owner({ gasLimit: 30000 }));
  console.log(await helloHedera.owner({ gasLimit: 30000 }));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
