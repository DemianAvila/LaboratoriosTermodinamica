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
        v-model:attachment="$store.state.practica1.previo[index].attachment"
      >
      </AttachmentQuestion>
    </div>
  </div>
</template>

<script>
import OpenQuestion from "@/components/Questions/OpenQuestion.vue";
import MultipleCuestion from "@/components/Questions/MultipleQuestion.vue";
import AnswerList from "@/components/Questions/AnswerList.vue";
import TableQuestion from "@/components/Questions/TableQuestion.vue";
import AttachmentQuestion from "@/components/Questions/AttachmentQuestion.vue";

export default {
  name: "Practica1_Previo",
  components: {
    OpenQuestion,
    MultipleCuestion,
    AnswerList,
    TableQuestion,
    AttachmentQuestion,
  },
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
