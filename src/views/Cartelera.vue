<template>
  <div>
    <h1>Cartelera</h1>
    <button @click="obtenerJuegos">Obtener Juegos</button>
    <div class="container">
      <div class="row">
        <div
          class="col-12 col-md-3"
          v-for="(juego, index) in juegos"
          :key="index"
        >
          <div class="card m-3">
            <img
              :src="juego.background_image"
              class="card-img-top object-fit-cover"
              height="200px"
            />
            <div class="card-body">
              <h5 class="card-title">{{ juego.name.slice(0,18) }}</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellendus rem libero at tenetur aspernatur perspiciatis,
                suscipit nihil asperiores enim. Reprehenderit nam soluta esse
                nesciunt accusantium aliquam dolorum, doloribus quidem ut?
              </p>
              <a  class="btn btn-primary" @click="redirect(juego.id)">Ver mas</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "component-name",
  // props: {},
  data: function () {
    return {
      juegos: [],
      page: 1,
    };
  },
  // computed: {},
  methods: {
    obtenerJuegos() {
      axios
        .get(
          "https://api.rawg.io/api/games?key=de294bb09054413cb1d75970171acf08&page=" +
            this.page
        )
        .then((json) => {
          let results = json.data.results;
          results.forEach((juego) => {
            this.juegos.push(juego);
          });
          console.log(this.juegos);
          this.page++;
        });
    },

    redirect(id){
      this.$router.push("/cartelera/"+ id)
    }

      
       
      
  },
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
</style>