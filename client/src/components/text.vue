<script>
import {messagesStorage, session} from "../store";

export default {
    data: function(){
        return {
             newMessage: ""
        }
    },
    methods: {
       onSend: function(){
           if (!this.newMessage){
               return false;
           }
           messagesStorage.add(this.newMessage);
           this.newMessage = ""
       }
    }

}
</script>
<template>
<textarea @keyup.enter.prevent="onSend" v-model="newMessage" placeholder="Press enter send a message"></textarea>
</template>
<style scoped>
textarea {
    position: relative;
    top: -100px;
    width: 100%;
    height: 80px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: none;
    padding: 10px;
}
</style>
