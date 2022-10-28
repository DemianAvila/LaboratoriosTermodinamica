<template>
  <div>
    <div>
      <p>
        {{ objet.question }}
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
  props: [object],
  methods: {
    encode_file: function() {
      let file = this.$refs.attachment.files[0];
      let reader = new FileReader();
      object.attachment = reader.readAsDataURL(file);
    }
  }
}
</script>


