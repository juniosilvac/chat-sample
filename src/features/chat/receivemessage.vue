<template>
   <div class="row msg_container base_receive">
    <div class="col-md-2 col-xs-2 avatar">
            <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" class="img-responsive" width="100" height="100">
        </div>
        <div class="col-xs-10 col-md-10">
            <div class="messages msg_receive">
                <p class="">that mongodb thing looks good, huh? tiny master db, and huge document
                    store</p>
                <time datetime="2009-11-13T20:00" class="">Timothy • 51 min</time>
            </div>
        </div>
    </div>
</template>
<style scoped>
.msg_container {
    padding: 10px;
    overflow: hidden;
    display: flex;
}

.msg_receive{
    padding-left:0;
    margin-left:0;
}

.base_receive > .avatar:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 0;
    border: 5px solid #FFF;
    border-left-color: rgba(0, 0, 0, 0);
    border-bottom-color: rgba(0, 0, 0, 0);
}
.avatar {
    position: relative;
}

.messages {
  background: white;
  padding: 10px;
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  max-width:100%;
}
.messages > p {
    font-size: 13px;
    margin: 0 0 0.2rem 0;
  }
.messages > time {
    font-size: 11px;
    color: #ccc;
}

img {
    display: block;
}
</style>
