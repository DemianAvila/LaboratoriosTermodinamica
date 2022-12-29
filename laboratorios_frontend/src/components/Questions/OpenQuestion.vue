<template>
  <div>
    <p>- {{ object.question }}</p>
    <div>

      <textarea
        class="w-full"
        v-if="object.answer.type == 'textarea'"
        :type="object.answer.type"
        @input="$emit('update:answer', $event.target.value)"
        :value="answer"
      ></textarea>

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
  emits: ["update:answer"]
  /*
  methods: {
    onChange: function (local_answer) {
      this.$emit("update:answer", local_answer);
      console.log(local_answer)
    },
  },*/
};
</script>
