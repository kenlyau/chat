import Horizon from '@horizon/client';
import uuid from "uuid/v4";

var horizon,messages;

var fetchInit = function(){ 
    let promise  = new Promise(function(resolver, reject) {
        if (horizon){
            resolver(horizon);
            return;
        }

        fetch("http://portal.xiandusi.com:8181/login")
        .then(function(res){return res.json()})
        .then(function(res){
            init(res.token);
            resolver(horizon);
        })
        .catch(function(e){
            reject(e);
        })
    
    });

    return promise;
};

function init(token){
horizon = window.horizon =  new Horizon({
    //secure: false,
    authType: {
        storeLocally: true,
        token: token
    }, 
    host: "portal.xiandusi.com:8181"
});
horizon.connect();
messages = horizon("messages");

}
var session = {
    get: function(){
        if (localStorage.getItem("session")){
           return localStorage.getItem("session");
        }else{
            let newSession = uuid();
            localStorage.setItem("session",newSession);
            return newSession
        }
    }
};

var messagesStorage = {
    raw: messages,
    add: function(msg){
         messages.store({
            id: uuid(),
            from: session.get(),
            text: msg,
            time: +new Date() 
         });
    },
    change: function(){
         return messages.watch()
    }
    
};
export {
   fetchInit,
   messagesStorage,
   session
}
