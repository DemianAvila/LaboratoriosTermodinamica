<template>

  <!--INDEFINITE CONTENT CARROUSEL, SORT LIKE A COMPARISON TABLE-->
  <div class="h-full
  w-full">
    <div class="w-full
    max-h-[75%]
    flex
    flex-col
    justify-center
    items-center
    lg:w-full
    lg:h-full
    lg:flex-row">
      <!--MUST CREATE RECURSIVE BOXES OF CONTENT ABLE TO SCROLL -->
      <!--BORDER THE BOX-->
      <div class="w-full
      h-full
      overflow-y-scroll
      lg:overflow-x-scroll
      flex
      flex-col
      lg:flex-row">
        <div v-for="(item,index) in prop.fragments"
        class="border
        border-slate-50
        p-2
        divide-y
        my-5
        lg:mx-5
        lg:h-[80%]
        lg:min-w-[30rem]"
        :key="index">
          <h1 class="text-2xl
          text-center
          lg:text-4xl
          lg:h-[30%]">
            {{item.header}}
          </h1>
          <p class="lg:h-[50%]
          lg:text-2xl">
            {{item.text}}
          </p>
          <div class="flex
          justify-center
          items-center
          lg:h-[20%]">
            <div
              v-if="typeof(item.attachment_type) != 'undefined' && item.attachment_type == 'formula'">
                <FormulaRendering class="lg:hidden" :tamanio="null" :formula="item.attachment"></FormulaRendering>
                <FormulaRendering class="hidden lg:flex" tamanio="Huge" :formula="item.attachment"></FormulaRendering>
            </div>
          </div>
        </div>  
      </div>
    </div>
  </div>
</template>


<script>
  import katex from 'katex';
  import FormulaRendering from './FormulaRendering.vue'


  export default {
    name: 'WireframePracticas2',
    components: {
    FormulaRendering
    },
    props: ['prop'],
    methods: {
      formula_renderer: function (string) {
        if(typeof(string)=='undefined'){
          return ""
        }
          let html = katex.renderToString(string, {
          throwOnError: false,
          output: "mathml"
        });
        console.log(string)
        console.log(html)
        return html
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
