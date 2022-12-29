<template>
  <div>
    <div>
      <p>
        {{ object.question }}
      </p>
    </div>
    <div
      class="overflow-x-scroll overflow-y-scroll"
      v-html="object.media"
    ></div>
    <div>
      <label for="file"> Sube el desarrollo de tu respuesta </label>
      <input type="file" name="file" ref="attachment" @change="encode_file" />
      <div class="flex flex-row justify-center items-center">
        <p class="p-2">
          Tu respuesta:
        </p>
        <a :href="att.file" target="_blank" :download="att.name" class="bg-emerald-600 w-1/4 mt-6  h-12 rounded-lg flex flex-col justify-center items-center p-2">
          <i class="fa-solid fa-download"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name: "AttachmentQuestion",
  data: function () {
    return {
      att: {
        file: "",
        name: ""
      },
    };
  },
  props: ["object", "attachment"],
  emits: ['update:attachment'],
  methods: {
    encode_file: async function () {

      function readFileAsync(file) {
        return new Promise((resolve, reject) => {
          let reader = new FileReader();

          reader.onload = () => {
            resolve(
              {
                file: reader.result,
                name: file.name
              });
          };

          reader.onerror = reject;

          reader.readAsDataURL(file);
        })
      }

      try {
        let file = this.$refs.attachment.files[0];
        this.att = await readFileAsync(file);
      } catch(err) {
        console.log(err);
      }

      this.$emit("update:attachment", this.att);
    }
  },
};
</script>

<style>
td,
th {
  padding-left: 2rem;
  padding-right: 2rem;
}
</style>
