<template>
  <div>
    <div>
      <p>
        {{ object.question }}
      </p>
    </div>
    <div class="overflow-x-scroll overflow-y-scroll"
    v-html="object.media">
    </div>
    <div>
      <label for="file">
        Sube el desarrollo de tu respuesta
      </label>
      <input type="file" 
      name="file" 
      ref="attachment"
      @change="encode_file"> 
    </div>
  </div>
</template>

<script>
export default {
  name: "AttachmentQuestion",
  data: function() {
    return {
      att: ""
    }
  },
  props: ["object"],
  methods: {
    encode_file: function() {
      let file = this.$refs.attachment.files[0];
      let reader = new FileReader();
      this.att = reader.readAsDataURL(file);
      this.$emit("update_attachment", this.att);
    }
  }
}
</script>

<style>
td, th{
  padding-left: 2rem;
  padding-right: 2rem;
}
</style>


