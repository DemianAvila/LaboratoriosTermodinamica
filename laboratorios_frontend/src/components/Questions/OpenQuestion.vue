<template>
  <div>
    <p>
      {{obejct.question}}
    </p>
    <div>
      <input :type="obejct.answer.type" v-model="object.answer.answer">
    </div>
  </div>
</template>

<script>
export default {
  name: "OpenQuestion",
  props: [object]
}
</script>
