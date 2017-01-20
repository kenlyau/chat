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
         <div class="content-box">
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
html, body, .app {
    height: 100%;
    min-height: 380px;
}
body {
    font-size: 14px;
    line-height: 1.5;
}
ul,li,dl,dt,dd {
    list-style: none;
}
::-webkit-scrollbar {
    width: 5px;
    background-color: #f5f5f5;
}
::-webkit-scrollbar-thumb {
    background-color: #2b5060
}
.content-box {
    height: 100%;
    overflow:hidden;
}
.side{
    height: 100%;
    background: #2B5060;
    color: #fff;
    float: left;
    width: 30%;
}
.main {
    height: 100%;
    float: left;
    width: 70%;

}
</style>
