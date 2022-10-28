<template>
  <div>
    <p>
      - {{object.question}}
    </p>
    <div>
      <textarea class="w-full"
      v-if="object.answer.type=='textarea'"
      :type="object.answer.type" 
      @change="onChange(local_answer)"
      v-model="local_answer"></textarea>

      <input class="w-full"
      v-else
      :type="object.answer.type" 
      @change="onChange(local_answer)"
      v-model="local_answer">
    </div>
  </div>
</template>

<script>
export default {
  name: "OpenQuestion",
  data: function() {
    return{
      local_answer: ""
    }
  },
  props: ["object", "answer"],
  methods: {
    onChange: function(local_answer) {
      this.$emit("update:answer", local_answer)
    }
  }
}
</script>
