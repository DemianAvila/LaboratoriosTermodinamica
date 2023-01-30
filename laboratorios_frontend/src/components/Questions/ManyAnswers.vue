<template >
    <div>
        <p>- {{ object.question }}</p>
      </div>
      <div>
        <div class="mt-2 flex flex-row items-center justify-center" 
        v-for="(answer, index) in answers" :key="index">
          <textarea
            class="w-[90%]"
            v-if="object.answer_type == 'textarea'"
            :value="answers[index]"
            @input="$emit('updateAnswers', $event.target.value)"
          ></textarea>

          <math-field  class="w-[90%] bg-white text-black"
          v-else-if="object.answer_type == 'math'"
          :value="answers[index]"
        @input="$emit('updateAnswers', $event.target.value)"
          ></math-field> 

          <input
            class="w-[90%]"
            v-else
            :type="object.answer_type"
            :value="answers[index]"
            @input="$emit('updateAnswers', $event.target.value)"
          />

          <button class="w-[10%]" 
          @click="deleteIndex(index)">
            <i class="fa-solid fa-trash"></i>
        </button>
        </div>
        <button class="w-full my-2 mb-5"
        @click="answers.push('')">
            <i class="fa-solid fa-circle-plus"></i>
        </button>
      </div>
</template>
<script>
export default {
    name: 'ManyAnswers',
    props: ["object"],
    emits: ["updateAnswers"],
    data: function(){
        return {
            answers: [""]
        }
    },
    mounted: function(){
        if (this.object.answer == ""){
            this.answers = [""]
        }
        else {
            this.answers = this.object.answer
        }
    },
    methods: {
        deleteIndex: function(index){
            this.answers.splice(index,1) 
        }
    }  
}
</script>
