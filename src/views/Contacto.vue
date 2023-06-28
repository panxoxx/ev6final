<template>
    <div>
         <form  class="container w-50 bg-dark">
      <div class="form-group">
        <label for="nombre" class="custom-label">Nombre:</label>
        <input type="text" class="form-control" id="nombre" placeholder="Ingresa tu nombre">
      </div>
      <div class="form-group">
        <label for="correo" class="custom-label">Correo electrónico:</label>
        <input type="email" class="form-control" id="correo" placeholder="Ingresa tu correo electrónico">
      </div>
      <div class="form-group">
        <label for="mensaje" class="custom-label">Mensaje:</label>
        <textarea class="form-control" id="mensaje" rows="5" placeholder="Ingresa tu mensaje"></textarea>
      </div>
      <button type="submit" class="btn btn-primary m-3">Enviar</button>
    </form>

    </div>
</template>

<script>
export default {
    name: 'component-name',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>

.custom-label{
 color: white;
 margin: 5px;
 
}
    
</style>