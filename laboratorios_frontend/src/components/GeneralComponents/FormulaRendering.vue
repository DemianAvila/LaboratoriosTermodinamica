<template>
  <!--DEFINE A FORMULA RENDERING COMPONENT-->
  <div class="h-full w-full">
    <div v-html="formula_renderer(formula, tamanio)"></div>
  </div>
</template>

<script>
import katex from "katex";

export default {
  name: "FormulaRendering",
  props: ["formula", "tamanio"],
  methods: {
    formula_renderer: function (string, size) {
      console.log(size);
      console.log(string);
      if (typeof string == "undefined") {
        return "";
      } else {
        if (size == null) {
          let html = katex.renderToString(string, {
            throwOnError: false,
            output: "mathml",
          });
          return html;
        } else {
          let new_s = "\\" + size + "{ " + string + " }";
          let html = katex.renderToString(new_s, {
            throwOnError: false,
            output: "mathml",
          });
          return html;
        }
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
