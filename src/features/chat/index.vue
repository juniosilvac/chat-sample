<template>
  <div class="panel-body msg_container_base">
    <sent-message></sent-message>
    <receive-message></receive-message>
  </div>
</template>

<script>
import SentMessage from './sentmessage'
import ReceiveMessage from './receivemessage'
export default {
  name: 'Chat',
  components: {
    SentMessage,
    ReceiveMessage
  }
}
</script>
<style scoped>
.msg_container_base{
  background: #e5e5e5;
  margin: 0;
  padding: 0 10px 10px;
  max-height:300px;
  overflow-x:hidden;
}
.msg_container_base::-webkit-scrollbar-track
{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
}

.msg_container_base::-webkit-scrollbar
{
    width: 12px;
    background-color: #F5F5F5;
}

.msg_container_base::-webkit-scrollbar-thumb
{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #555;
}
</style>
