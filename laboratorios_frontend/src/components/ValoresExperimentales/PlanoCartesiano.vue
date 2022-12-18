<template>
  <div class="h-full w-full p-6">
    <div class="h-full w-full" ref="chartContainer">
      <canvas ref="chart"> </canvas>
    </div>
  </div>
</template>

<script>
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default {
  name: "PlanoCartesiano",
  mounted: function () {
    let chartContainer = this.$refs.chartContainer;
    const chart = this.$refs.chart;
    chart.height = chartContainer.height;
    chart.width = chartContainer.width;
    const ctx = chart.getContext("2d");
    console.log(this.$store.state.practica1.valores_experimentales.datasets[0]);

    new Chart(ctx, {
      type: "line",
      data: this.$store.state.practica1.valores_experimentales.datasets,
      options: {
        scales: {
          x: {
            title: {
              text: this.$store.state.practica1.valores_experimentales
                .general_data.eje_x,
              display: true,
            },
            type: "linear",
            position: "bottom",
          },
          y: {
            title: {
              text: this.$store.state.practica1.valores_experimentales
                .general_data.eje_y,
              display: true,
            },
            type: "linear",
            position: "left",
          },
        },
        responsive: true,
      },
    });
  },
};
</script>
