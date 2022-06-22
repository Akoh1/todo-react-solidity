import web3 from './web3';

const address = '0xCEd946eEd0C9cB13b4ED71040270111C8a43a888';

const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"string","name":"value","type":"string"}],"name":"addStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"task_id","type":"uint256"},{"internalType":"string","name":"author","type":"string"}],"name":"changeTaskAuthor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"task_id","type":"uint256"},{"internalType":"string","name":"name","type":"string"}],"name":"changeTaskName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"task_id","type":"uint256"},{"internalType":"uint256","name":"status_id","type":"uint256"}],"name":"changeTaskStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"author","type":"string"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"createTask","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAllTasks","outputs":[{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"author","type":"string"},{"internalType":"uint256","name":"status","type":"uint256"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"bool","name":"added","type":"bool"},{"internalType":"bool","name":"created","type":"bool"}],"internalType":"struct Todo.Task[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllTasksLength","outputs":[{"internalType":"uint256","name":"length","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStatus","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"task_id","type":"uint256"}],"name":"getTask","outputs":[{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"author","type":"string"},{"internalType":"uint256","name":"status","type":"uint256"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"bool","name":"added","type":"bool"},{"internalType":"bool","name":"created","type":"bool"}],"internalType":"struct Todo.Task","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"status_id","type":"uint256"}],"name":"getTasksAtState","outputs":[{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"author","type":"string"},{"internalType":"uint256","name":"status","type":"uint256"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"bool","name":"added","type":"bool"},{"internalType":"bool","name":"created","type":"bool"}],"internalType":"struct Todo.Task[]","name":"","type":"tuple[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"removeStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"removeTask","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"state_tasks","outputs":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"author","type":"string"},{"internalType":"uint256","name":"status","type":"uint256"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"bool","name":"added","type":"bool"},{"internalType":"bool","name":"created","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"status","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"status_exist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tasks","outputs":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"author","type":"string"},{"internalType":"uint256","name":"status","type":"uint256"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"bool","name":"added","type":"bool"},{"internalType":"bool","name":"created","type":"bool"}],"stateMutability":"view","type":"function"}];


export default new web3.eth.Contract(abi, address);

// import ganache from 'ganache-cli';
// import Web3 from 'web3';
// import { abi, evm} from './compile.js';
// const web3 = new Web3(ganache.provider());



// let todo;

// let accounts = await web3.eth.getAccounts();
//   // console.log("accounts: "+accounts);
//   // balance = await web3.eth.getBalance(accounts[3]);
//   // console.log("Balance: " + balance);
// todo = await new web3.eth.Contract(JSON.parse(abi))
//     .deploy({
//       data: evm,
//     }).send({ from: accounts[0], gas: '3000000' });

// export default todo;


    