<template>
  <div>
    <p>- {{ object.question }}</p>
  </div>
  <div>
    <div class="mt-2" v-for="(answer, index) in object.answers" :key="index">
      <textarea
        class="w-full"
        v-if="answer.type == 'textarea'"
        v-model="answer.answer"
      ></textarea>
      <input
        class="w-full"
        v-else
        :type="answer.type"
        v-model="answer.answer"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "AnswerList",
  props: ["object"],
};
</script>
