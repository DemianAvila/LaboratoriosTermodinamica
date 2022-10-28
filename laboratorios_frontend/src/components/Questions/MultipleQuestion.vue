<template>
  <div>
    <p>
      {{object.question}}
    </p>
  </div>
  <div>
    <div v-for="field, index in object.fields" :key="index">
      <p>
        {{field.field}}
        <input :type="field.type" v-model="field.answer">
      </p>
    </div>
  </div>
  

</template>

<script>
export default {
    name: "MultipleQuestion",
    props: [object]
}
</script>
