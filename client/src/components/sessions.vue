<script>
import {messagesStorage, session} from "../store";

export default {
    data: function(){
       return { 
           sessions: [],
           user: {}
       }
    },
    methods: {
        init: function(){
            this.user.id = session.get();
            this.user.avatar = "//www.gravatar.com/wavatar/" + this.user.id;
        }
    },
    created: function(){
        this.init();
    }

}
</script>
<template>
<div class="sessions">
    <div class="avatar">
       <img :src="user.avatar">
       <p>{{user.id}}</p>
    </div>
    <dl>
        <dt>频道</dt>
        <dd>#DEMO</dd>
    </dl>
    <dl>
        <dt>用户</dt>
        <dd v-for="session in sessions">{{session}}<dd>
    </dl>
</div>
</template>
<style scoped>
    .avatar {
       height: 134px;
       padding-top: 16px;
       background: #223d48;
    }
    .avatar img {
       margin: 0 auto;
       display: block;
       border-radius: 50%;
       overflow: hidden;
    }
    .avatar p {
        padding: 5px 10px;
        color: #efefef;
        font-size: 12px;
    }
    dl {
        padding: 10px 10px 0 10px;
    }
    dt,dd {
        maring-left: 10px;
    }
</style>
