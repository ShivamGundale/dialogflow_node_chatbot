const express = require('express');
const { WebhookClient } = require('dialogflow-fulfillment');
const server = express();

server.use(express.json());

server.get('/', (req,res)=>{
    res.send( "we are on server");
    
})


server.post('/', (req, res) => {
    const agent = new WebhookClient({ request: req, response: res });

    function chatfun(agent) {
        agent.add("I am connected ");
    }
    function helpfun(agent) {
        agent.add("I will help ");
    }

    const intentMap = new Map();
    intentMap.set('connect', chatfun);
    intentMap.set('help', helpfun);

    agent.handleRequest(intentMap);
});

server.listen(8080, () => {
    console.log("Server started bro");
});
