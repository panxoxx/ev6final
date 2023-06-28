<template>
  <div class="container">
    <img src="@/assets/images/banner.png" width="500px" />
    <div class="columns-container bg-black">
      <div class="column">
         <h1>Quienes Somos</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          repudiandae deleniti, eius eaque facilis enim fugiat fuga itaque, ab
          molestias ex, possimus voluptas voluptates qui? Sapiente blanditiis
          corrupti eum illum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          repudiandae deleniti, eius eaque facilis enim fugiat fuga itaque, ab
          molestias ex, possimus voluptas voluptates qui? Sapiente blanditiis
          corrupti eum illum.
        </p>
      </div>
      <div class="column">
         <h1>Como Funciona</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit odit
          optio earum quae delectus aperiam eos ipsum odio modi? Deserunt,
          officiis! Quos debitis ipsam repellendus, ipsum nemo harum ea
          voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          repudiandae deleniti, eius eaque facilis enim fugiat fuga itaque, ab
          molestias ex, possimus voluptas voluptates qui? Sapiente blanditiis
          corrupti eum illum.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "component-name",
  // props: {},
  data: function () {
    return {};
  },
  // computed: {},
  //methods: {}
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style>

.columns-container {
height: 300px;
display:flex;
justify-content: center;
gap:20px;
margin-top: 20px;
}

.column {
width:50%;
margin: 30px;
text-align: justify;
}

.column h1{
    text-align: center;   
    color: red;
}

.column p{
    color: white;
}

.columns-container{
    border-radius:5%;
}
</style>