<template>
  <!--DEFINE A FORMULA RENDERING COMPONENT-->
  <div class="h-full
  w-full">
    <div
      v-html="formula_renderer(formula)">
    </div>
  </div>
</template>


<script>
  import katex from 'katex';


  export default {
    name: 'FormulaRendering',
    props: ['formula'],
    methods: {
      formula_renderer: function (string) {
        console.log(string)
        if(typeof(string)=='undefined'){
          return ""
        }
          let html = katex.renderToString(string, {
          throwOnError: false,
          output: "mathml"
        });
        return html
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
