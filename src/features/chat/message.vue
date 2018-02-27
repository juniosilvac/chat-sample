<template>
<div>
  <div class="container">
    <img src="/w3images/bandmember.jpg" alt="Avatar">
    <p>Hello. How are you today?</p>
    <span class="time-right">11:00</span>
  </div>

  <div class="container darker">
    <img src="/w3images/avatar_g2.jpg" alt="Avatar" class="right">
    <p>Hey! I'm fine. Thanks for asking!</p>
    <span class="time-left">11:01</span>
  </div>
</div>
</template>
<script>
export default {
  name: 'ChatMessage'
}
</script>
<style scoped>
 /* Chat containers */
.container {
    border: 2px solid #dedede;
    background-color: #00bfff;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;
}

/* Darker chat container */
.darker {
    border-color: #ccc;
    background-color: #ddd;
}

/* Clear floats */
.container::after {
    content: "";
    clear: both;
    display: table;
}

/* Style images */
.container img {
    float: left;
    max-width: 60px;
    width: 100%;
    margin-right: 20px;
    border-radius: 50%;
}

/* Style the right image */
.container img.right {
    float: right;
    margin-left: 20px;
    margin-right:0;
}

/* Style time text */
.time-right {
    float: right;
    color: #aaa;
}

/* Style time text */
.time-left {
    float: left;
    color: #999;
}
</style>
