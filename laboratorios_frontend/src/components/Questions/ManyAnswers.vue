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
        v-for="(answer, index) in prop_answers" :key="index">
          <textarea
            class="w-[90%]"
            v-if="object.answer_type == 'textarea'"
            @input="onChange($event.target.value, index)"
            :value="answer"
          ></textarea>

          <math-field  class="w-[90%] bg-white text-black"
          v-else-if="object.answer_type == 'math'"
          @input="onChange($event.target.value, index)"
          :value="answer"
          ></math-field> 

          <input
            class="w-[90%]"
            v-else
            :type="object.answer_type"
            @input="onChange($event.target.value, index)"
            :value="answer"
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
    props: ["object"],
    data: function(){
      return {
        prop_answers: [...this.object.answers]
      }
    },
    methods: {
      deleteIndex: function(index){
          this.prop_answers.splice(index,1) 
      },
      addAnswer: function(){
        this.prop_answers.push("") 
      },
      onChange: function (data, index) {
        this.prop_answers[index]=data
        console.log(this.prop_answers)
        this.$emit("update:answers", this.prop_answers);
      }
    }  
}
</script>
