<template>
    <div class="row msg_container base_sent">
        <div class="col-xs-10 col-md-10">
            <div class="messages msg_sent">
                <p class="">that mongodb thing looks good, huh? tiny master db, and huge document
                    store</p>
                <time datetime="2009-11-13T20:00" class="">Timothy • 51 min</time>
            </div>
        </div>
        <div class="col-md-2 col-xs-2 avatar">
            <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" class="img-responsive" width="100" height="100">
        </div>
    </div>
</template>
<style scoped>
.msg_container {
    padding: 10px;
    overflow: hidden;
    display: flex;
}

.msg_sent{
    padding-bottom:20px !important;
    margin-right:0;
}

.base_sent {
  justify-content: flex-end;
  align-items: flex-end;
}

.base_sent > .avatar:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 0;
    border: 5px solid white;
    border-right-color: transparent;
    border-top-color: transparent;
    box-shadow: 1px 1px 2px rgba(black, 0.2);
}
.msg_sent > time{
    float: right;
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
