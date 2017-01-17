import Horizon from '@horizon/client';
import uuid from "uuid/v4";

var horizon = new Horizon({secure: false, host: "portal.xiandusi.com:8181"});
horizon.connect();
var messages = horizon("messages");

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
   messagesStorage,
   session
}
