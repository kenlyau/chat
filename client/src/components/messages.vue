<script>
import {messagesStorage, session} from "../store";

export default {
    data: function(){
        return {
          msgs: []
        }
    },
    methods: {
        watchMessages: function(){
           messagesStorage.change().subscribe(res => {
                this.msgs = res;
           })
        }
    },
    created: function(){
         this.watchMessages();
    }
} 
</script>
<template>
<div class="messages">
    <div class="scroll-content">
        <ul>
            <li v-for="msg in msgs">{{msg.text}}</li>
        </ul>
    </div>
</div>
</template>
<style scoped>
    .messages {
         height: 100%;
         padding-top: 10px;
         padding-bottom: 100px;
    }
    .scroll-content {
         height: 100%;
         overflow-y: auto;
    }
</style>
