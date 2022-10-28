<template>
  <div>
    <div>
      <p>
        {{objet.question}}
      </p>
    </div>
    <div class="overflow-x-scroll">
      <table>
        <tr>
          <th>
            _
          </th>
          <th v-for="col, index in object.table.cols" :key="index">
            {{col}}
          </th>
        </tr>
        <tr v-for="row, index in object.table.rows" :key="index">
          <td>
            {{row}}
          </td>
          <td v-for="col, index1 in object.table.cols" :key="index1">
            <input type="text" v-model="object.answers[col][row]">
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableQuestion",
  props: [object],
  mounted: function()  {
    for (let col in object.cols){
      object.answers[col] = {};
      for (let row in object.rows){
        object.answers[col][row] = "";
      }
    }    
  }
}
</script>
