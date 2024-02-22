<template>
  <div class="my-5">
    <p>- {{ object.question }}</p>
    <div>
      <div
        class="overflow-x-scroll overflow-y-scroll"
        v-html="object.media"
      ></div>
      <textarea
        class="w-full"
        v-if="object.answer.type == 'textarea'"
        :type="object.answer.type"
        @input="$emit('update:answer', $event.target.value)"
        :value="answer"
      ></textarea>

      <math-field
        class="w-full bg-white text-black"
        v-else-if="object.answer.type == 'math'"
        @input="$emit('update:answer', $event.target.value)"
        :value="answer"
      ></math-field>

      <input
        class="w-full"
        v-else
        :type="object.answer.type"
        @input="$emit('update:answer', $event.target.value)"
        :value="answer"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "OpenQuestion",
  data: function () {
    return {
      local_answer: "",
    };
  },
  props: ["object", "answer"],
  emits: ["update:answer"],
};
</script>
