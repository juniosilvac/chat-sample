<template>
<div class="container">
  <message></message>
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Digite a mensagem...">
      <span class="input-group-btn">
        <button class="btn btn-default" type="button">Enviar</button>
      </span>
    </div>
  </div>
</template>
<script>
import Message from './message'
export default {
  name: 'Chat',
  components: {
    Message
  }
}
</script>
<style scoped>
.container {
  width: 100%;
}
</style>
