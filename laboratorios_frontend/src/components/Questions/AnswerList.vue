<template>
  <div>
    <p>- {{ object.question }}</p>
  </div>
  <div
      class="overflow-x-scroll overflow-y-scroll"
      v-html="object.media"
    ></div>
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
/*
5550912414
6275 3501 6819 8970
11/27
282
*/
export default {
  name: "AnswerList",
  props: ["object"],
};
</script>
