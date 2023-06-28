<template>
  <div id="app">
    <nav>
      <router-link to="/" exact-active-class="active-link">Inicio</router-link> |
      <router-link to="/Catalogo" active-class="active-link">Catalogo</router-link> |
      <router-link to="/Contacto" exact-active-class="active-link">Contacto</router-link>

    </nav>
    <router-view/>
  </div>
</template>

<style>
body{
  background: black;
  background-image: url("assets/images/neocity.jpg");
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

/* nav a.router-link-exact-active {
  color: #42b983;
} */

.active-link{
  color:yellow !important
}
</style>
