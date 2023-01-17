<template >
    <div>
        <p>- {{ object.question }}</p>
      </div>
      <div>
        <div class="mt-2 flex flex-row items-center justify-center" 
        v-for="(answer, index) in answers" :key="index"
        @change="$emit('update:answer', answers)">
          <textarea
            class="w-[90%]"
            v-if="object.answer_type == 'textarea'"
            v-model="answers[index]"
          ></textarea>

          <math-field  class="w-[90%] bg-white text-black"
          v-else-if="object.answer_type == 'math'"
          :value="answer"
          v-model="answers[index]"></math-field> 

          <input
            class="w-[90%]"
            v-else
            :type="object.answer_type"
            v-model="answers[index]"
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
    props: ["object", "answer"],
    emits: ["update:answer"],
    data: function(){
        return {
            answers: [""]
        }
    },
    mounted: function(){
        if (this.object.answer == ""){
            console.log(this.object.answer == "")
            this.answers = [""]
        }
    },
    methods: {
        deleteIndex: function(index){
            this.answers.splice(index,1) 
        }
    }  
}
</script>
