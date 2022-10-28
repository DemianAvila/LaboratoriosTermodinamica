<template>
  <div>
    <p>
      {{ object.question }}
    </p>
  </div>
  <div>
    <div v-for="answer, index in object.answers" :key="index">
      <input type="text" v-model="object.answers[index]">
    </div>
  </div>
</template>

<script>
export default {
  name: "AnswerList",
  props: [object],
};
</script>
