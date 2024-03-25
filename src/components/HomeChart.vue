<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-6">
        <h2>Our Sales</h2>
        <canvas ref="barChart"></canvas>
      </div>
      <div class="col-md-6">
        <h2>Current Trend</h2>
        <canvas ref="pieChart"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import Chart from "chart.js/auto";

export default {
  name: "HomeChart",
  setup() {
    const barChart = ref(null);
    const pieChart = ref(null);

    const fetchData = async () => {
      try {
        const response = await axios.get("/api/analytics");
        const data = response.data;

        const productNames = data.map((item) => item.name);
        const frequencies = data.map((item) => item.frequency);

        new Chart(barChart.value, {
          type: "bar",
          data: {
            labels: productNames,
            datasets: [
              {
                label: "Sales",
                data: frequencies,
                backgroundColor: "rgba(54, 162, 235, 0.6)",
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });

        const mostPopularProduct = data.reduce(
          (max, item) => (item.frequency > max.frequency ? item : max),
          data[0]
        );
        new Chart(pieChart.value, {
          type: "pie",
          data: {
            labels: productNames,
            datasets: [
              {
                data: frequencies,
                backgroundColor: productNames.map((_, index) =>
                  index === productNames.indexOf(mostPopularProduct.name)
                    ? "rgba(255, 99, 132, 0.6)"
                    : "rgba(75, 192, 192, 0.6)"
                ),
              },
            ],
          },
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    onMounted(() => {
      fetchData();
    });

    return {
      barChart,
      pieChart,
    };
  },
};
</script>

<style></style>
