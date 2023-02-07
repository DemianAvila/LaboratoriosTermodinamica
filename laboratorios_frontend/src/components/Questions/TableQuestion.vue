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
    <div class="overflow-x-scroll">
      <table class="border border-white p-2">
        <tr>
          <th class="border border-white p-2"></th>
          <th
            class="border border-white p-2"
            v-for="(col, index) in object.table.cols"
            :key="index"
          >
            {{ col }}
          </th>
        </tr>
        <tr v-for="(row, index) in object.table.rows" :key="index">
          <td class="border border-white p-2">
            {{ row }}
          </td>
          <td
            class="border border-white p-2"
            v-for="(col, index1) in object.table.cols"
            :key="index1"
          >
            <input
              type="text"
              v-model="table_answers[col][row]"
              @change="onChange(table_answers)"
            />
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableQuestion",
  props: ["object"],
  data: function () {
    return {
      table_answers: {},
    };
  },
  created: function () {
    for (let col of this.object.table.cols) {
      this.table_answers[col] = {};
      for (let row of this.object.table.rows) {
        this.table_answers[col][row] = "";
      }
    }
  },
  methods: {
    onChange: function (table_answers) {
      this.$emit("update:answers", table_answers);
    },
  },
};
</script>
