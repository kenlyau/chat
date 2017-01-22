<script>
import {fetchInit, messagesStorage, session} from "../store";

export default {
    data: function(){
        return {
          msgs: []
        }
    },
    methods: {
        watchMessages: function(){
           fetchInit().then(() => {
             messagesStorage.change().subscribe(res => {
                this.msgs = res;
                this.$el.querySelector(".scroll-content").scrollTop = 99999;
             })
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
         padding: 0 10px;
         overflow-y: auto;
    }
</style>
