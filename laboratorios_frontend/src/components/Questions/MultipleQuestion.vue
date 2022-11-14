<template>
  <div>
    <p>- {{ object.question }}</p>
  </div>
  <div>
    <div class="ml-5" v-for="(field, index) in object.fields" :key="index">
      <p>• {{ field.field }}</p>
      <textarea
        class="w-full"
        v-if="field.type == 'textarea'"
        v-model="field.answer"
      ></textarea>
      <input class="w-full" v-else :type="field.type" v-model="field.answer" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MultipleQuestion",
  props: ["object"],
};
</script>
