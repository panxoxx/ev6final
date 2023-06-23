<template >
  <div class="container">
    <h1>
      {{id}}
    </h1>
    <table class="table table-striped">
      <tbody>
        <tr>   
            <!-- <th class="img-fluid"><img :src="personaje.background_image"  height="400" style="object-fit:cover"/></th> -->
          </tr>
          <tr>   
            <th class="label">NOMBRE</th>
          </tr>
          <tr>
            <!-- <td class="info">{{personaje.name}}</td> -->
          </tr>

           <tr>   
            <th class="label">PLATAFORMAS</th>
          </tr>
          <tr v-for="plataforma in plataformas" v-bind:key="plataforma.id">
            <td class="info">{{plataforma.platform.name}}</td>
          </tr>

           <tr>   
            <th class="label">WEB</th>
          </tr>
          <tr>
            <td class="info">{{personaje.website}}</td>
          </tr>

       
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios" 
export default {
  name: "new-component",
  // props: {
  //   id:{
  //     type:String,
  //     required: true
  //   }
  // },
  data() {
    return {
      personaje:null,
      plataformas:null,

    };
  },
  computed: {
    id(){
      return this.$route.params.id
    }
  },
  methods: {
      Juego() {
      axios
        .get(`https://api.rawg.io/api/games/${this.id}?key=de294bb09054413cb1d75970171acf08`)
        .then((json)=>{
          this.personaje=json.data;
          console.log(json.data)
          this.plataformas=json.data.platforms;
          console.log(json.data.platforms)
        })
    },
  },
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  created(){
    this.obtenerJuego()
  }
  // -- End Lifecycle Methods
};
</script>

<style scoped>
.container {
  width: 40%;
  
}

.label{
  color: rgb(0, 0, 0);
  font-weight: bold;
  font-size:17+px; 

}

.info{
   color: rgb(0, 0, 0);
  font-size:15px; 

}


</style>