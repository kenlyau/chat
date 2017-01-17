<script>
import Messages from "./components/messages.vue";
import Sessions from "./components/sessions.vue";
import TextBox from "./components/text.vue";

export default {
    components: {Messages, Sessions, TextBox}   
}
</script>
<template>
<div id="app" class="app">
    <div class="container">
         <div class="side">
              <sessions></sessions>
         </div>
         <div class="main">
              <messages></messages>
              <text-box></text-box>
         </div>
    </div>
</div>
</template>
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-size: 14px;
    line-height: 1.5;
}
ul,li,dl,dt,dd {
    list-style: none;
}

.container {
    width: 600px;
    height: 500px;
    margin: 60px auto;
    overflow:hidden;
    box-shadow: 0 0 12px 2px #999;
}
.side {
    width: 200px;
    height: 100%;
    background: #2B5060;
    color: #fff;
    float: left;
}
.main {
    width: 400px;
    padding: 0 10px;
    height: 100%;
    float: left;
}
</style>
