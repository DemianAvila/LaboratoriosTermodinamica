<template>
  <div class="text-slate-50 flex flex-col w-full h-[80%] overflow-y-scroll">
    <div class="w-full">
      <h1 class="text-5xl mx-4 my-2 text-center">Cuestionario previo</h1>
    </div>
    
    <div
      class="mx-6 mt-2"
      v-for="(question, index) in $store.state.practica1.previo"
      :key="index"
    >
      <!---------------COMPONENT FOR OPEN QUESTIONS-------------->
      <OpenQuestion
        v-if="question.question_type == 'open'"
        :object="question"
        v-model:answer="$store.state.practica1.previo[index].answer.answer"
      >
      
      </OpenQuestion>
      <!--------------COMPONENT FOR NESTED MULTIPLE QUESTIONS------------->
      <MultipleCuestion
        v-if="question.question_type == 'multiple_question'"
        :object="question"
      >
      </MultipleCuestion>
      <!--------------COMPONENT FOR QUESIONS THAT ASKS MULTIPLE ANSWERS------------->
      <AnswerList
        v-if="question.question_type == 'answer_list'"
        :object="question"
      >
      </AnswerList>
      <!--------------COMPONENT THAT RECIEVES A TABLE AS AN ANSWER------------->
      <TableQuestion
        class="py-8"
        v-if="question.question_type == 'table'"
        :object="question"
        v-model:answers="$store.state.practica1.previo[index].answers"
      >
      </TableQuestion>
      <!-------------COMPONENT THAT RECIEVES THE DEVELOPMENT OF AN EXCERSICE AS AN ATTACHMENT---------------->
      <AttachmentQuestion
        class="py-8"
        v-if="question.question_type == 'attachment'"
        :object="question"
        v-model:attachment="$store.state.practica1.previo[index].answer"
      >
      </AttachmentQuestion>
      <!-------------COMPONENT THAT HANDLES MULTIPLE UNDIFINED ANSWERS---------------->
      <ManyAnswers
        class="py-8"
        v-if="question.question_type == 'many'"
        :object="question"
        v-model:answers="$store.state.practica1.previo[index].answers"
      />
      <ChoiceQuestion
        class="py-8"
        v-if="question.question_type == 'choice'"
        :object="question"
        v-model:answer="$store.state.practica1.previo[index].answer"
      />
    </div>
    <div class="flex flex-col justify-center items-center">
      <button class="bg-emerald-600 w-1/2 mt-6  h-12 rounded-lg flex flex-col justify-center items-center"
      @click="send">
        <p>Guardar</p> 
      </button>
    </div>
  </div>
</template>

<script>
import OpenQuestion from "@/components/Questions/OpenQuestion.vue";
import MultipleCuestion from "@/components/Questions/MultipleQuestion.vue";
import AnswerList from "@/components/Questions/AnswerList.vue";
import TableQuestion from "@/components/Questions/TableQuestion.vue";
import AttachmentQuestion from "@/components/Questions/AttachmentQuestion.vue";
import ManyAnswers from "@/components/Questions/ManyAnswers.vue";
import ChoiceQuestion from "@/components/Questions/ChoiceQuestion.vue";
import axios from "axios";

export default {
  name: "Practica1_Previo",
  components: {
    OpenQuestion,
    MultipleCuestion,
    AnswerList,
    TableQuestion,
    AttachmentQuestion,
    ManyAnswers,
    ChoiceQuestion
  },
  methods:{
    send: function(){
      console.log(this.$store.state.practica1.previo)
    },
    loadQuestions: async function(){
      let url = this.$store.state.config_info.api_url;
      url = `${url}/get_preguntas?practica_id=${this.$route.query.practica_id}&email=${localStorage.email}`;
      const router = this.$router;
      const config_info = this.$store.state.config_info
      try {
        const response = await axios(
          {
            url: url,
            method: "get",
            headers: {
              token: localStorage.jwt
            }
          }
        )
        this.$store.state.practica1.previo = {}
        this.$store.state.practica1.previo = response.data.cuestionario_previo;
      } catch(err){
        console.log(url)
        config_info.error_description = err
        router.push("/error");
      }
    }
  },
  mounted: async function () {
    this.loadQuestions()  
  },
  watch: {
    '$route.query.practica_id'(){
      this.loadQuestions()  
    }
  }
 
};
</script>

<style>
input {
  color: black;
}
textarea {
  color: black;
}
</style>
