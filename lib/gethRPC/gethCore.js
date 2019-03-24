import axios from 'axios';
import BigInteger from 'big-integer';

const BASE_URL = process.env.BASE_URL || "https://geth.kderbyma.com/";

export const web3 = {
    clientVersion : ()=>{
        return callAPI("POST", { "jsonrpc": "2.0", "method": "web3_clientVersion", "params": [], "id": 1 });
    },
    sha3 : (hexString)=>{        
        return callAPI("POST", {"jsonrpc":"2.0","method":"web3_sha3","params":['0x'+hexString],"id":64});
    }
};

export const net = {
    version : () => {
        return callAPI("POST", { "jsonrpc": "2.0", "method": "net_version", "params": [], "id": 1 })
    },
    peerCount : () => {
        return callAPI("POST", { "jsonrpc": "2.0", "method": "net_peerCount", "params": [], "id": 1 })
    }
};

export const eth = {
    coinbase: () => { 
        return callAPI("POST", { "jsonrpc": "2.0", "method": "eth_coinbase", "params": [], "id": 1 })
    },
    account: () => { 
        return callAPI("POST", { "jsonrpc": "2.0", "method": "eth_accounts", "params": [], "id": 1 })
    },
    getStorageAt: (address) => { 
        return callAPI("POST", { "jsonrpc":"2.0", "method": "eth_getStorageAt", "params": [''+address, "0x0", "latest"], "id": 1}) 
    },
    getBalanceAt: (address) => { 
        return callAPI("POST", { "jsonrpc":"2.0", "method": "eth_getBalance", "params": [''+address, "latest"], "id": 1})
    },
    newFilter: (filter,contractAddress,) => {
        web3.sha3(filter).then((response)=>{
            return callAPI("POST", {
                "jsonrpc":"2.0",
                "method":"eth_newFilter",
                "params":[{
                    fromBlock: "0x" + BigInteger("7022573", 10).toString(16),
                    toBlock: 'latest',
                    address: contractAddress,
                    topics: [response.result],
                }],
                "id":73
            });
        }) 
    },
    getFilterChanges: (filterId) => { 
        return callAPI("POST", {"jsonrpc":"2.0","method":"eth_getFilterLogs","params":[''+filterId],"id":73})
    },
    call: (contractAddress, address, signature, params, amount ) => { 
        web3.sha3(signature).then((data) => {
            let dataStr = data.slice(2,9);
            let amountCalc = BigInteger(amount).multiply(BigInteger("1000000000")).toString(16)
            let cnt = -1;
            let len = params.size
            while (cnt++ < len - 1) {
                let myInt = BigInteger(dataStr, 16).shiftLeft(256)
                let combinedInt = myInt || BigInteger(params[cnt])
                dataStr = combinedInt.toString(16)

                console.log("INT::", dataStr + "::" + myInt.toString(16))
                console.log("FORMAT::", data + "::" + dataStr)
                console.log("COMB::", combinedInt.toString(16))

            }

            return callAPI("POST",{
                "jsonrpc": "2.0", 
                "id" : 1, 
                "method": "eth_sendTransaction", 
                "params" : [ { 
                    "to" : '"'+contractAddress + '"', 
                    "from" : '"' + address + '"', 
                    "data" : "0x" + dataStr ,
                    "gas": "0x376c0",
                    "value": "0x" + amountCalc
                    } ]
                });
        });
    },
};

export const personal = {
    newAccount: (password) => { return callAPI("POST",{"jsonrpc":"2.0", "method": "personal_newAccount", "params": ["'"+password+"'"], "id": 1})},
    unlockAccount: (address, password) => {
        return callAPI("POST", {"jsonrpc":"2.0", "method": "personal_unlockAccount", "params": ["'"+address + "'","'" + password +"'", 300], "id": 1})},
};

export function callAPI(method,data){
    if(method === "POST"){
        console.log(data);
        return axios.post(BASE_URL,data);
    }else{
        return axios.get(BASE_URL);
    }
}