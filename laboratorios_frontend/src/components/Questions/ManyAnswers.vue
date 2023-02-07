<template >
    <div>
        <p>- {{ object.question }}</p>
      </div>
      <div
      class="overflow-x-scroll overflow-y-scroll"
      v-html="object.media"
    ></div>
      <div>
        <div class="mt-2 flex flex-row items-center justify-center" 
        v-for="(answer, index) in internal_answers" :key="index">
          <textarea
            class="w-[90%]"
            v-if="object.answer_type == 'textarea'"
            v-model="internal_answers[index]"
            @change="onChange(internal_answers)"
          ></textarea>

          <math-field  class="w-[90%] bg-white text-black"
          v-else-if="object.answer_type == 'math'"
          v-model="internal_answers[index]"
          @change="onChange(internal_answers)"
          ></math-field> 

          <input
            class="w-[90%]"
            v-else
            :type="object.answer_type"
            v-model="internal_answers[index]"
            @change="onChange(internal_answers)"
          />

          <button class="w-[10%]" 
          @click="deleteIndex(index)">
            <i class="fa-solid fa-trash"></i>
        </button>
        </div>
        <button class="w-full my-2 mb-5"
        @click="addAnswer">
            <i class="fa-solid fa-circle-plus"></i>
        </button>
      </div>
</template>
<script>
export default {
    name: 'ManyAnswers',
    data: function(){
      return {
        internal_answers: [...this.object.answers]
      }
    },
    props: ["object"],
    methods: {
      deleteIndex: function(index){
          this.internal_answers.splice(index,1) 
      },
      addAnswer: function(){
        this.internal_answers.push("") 
      },
      onChange: function (internal_answers) {
        this.$emit("update:answers", internal_answers);
      },
    }  
}
</script>
