<template>
  <v-container>
    <v-app-bar class="mb-4" color="primary">
          <router-link :to="{name:'corporateProjectList'}">
            <div class="d-flex">
              <v-icon color='white'>fas fa-chevron-left</v-icon>
              <div class="ml-4" style="color:white">ย้อนกลับ</div>
            </div>
          </router-link>
    </v-app-bar>
    <v-row>
      <v-col>
        <v-card color='primary' class="pa-4" style="color:white">
          <div>Total Variants</div>
          <div class="font-weight-bold text-h4">3</div>
        </v-card>
      </v-col>
      <v-col>
        <v-card color='primary' class="pa-4" style="color:white">
          <div>Sales</div>
          <div class="font-weight-bold text-h4">4,321 units</div>
        </v-card>
      </v-col>
      <v-col>
        <v-card color='primary' class="pa-4" style="color:white">
          <div>RISE Score</div>
          <div class="font-weight-bold text-h4">4.2</div>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <apexchart height="400" type="line" :options="options" :series="series"></apexchart>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'ProjectList',
    data: () => ({
     options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [2020, 2021, 2022, 2023, 2024]
        }
      },
      series: [{
        name: 'Variant-A',
        data: [30, 40, 45, 50, 49]
      },{
        name: 'Variant-B',
        data: [35, 42, 37, 67, 80]
      },{
        name: 'Variant-C',
        data: [10, 25, 7, 55, 32]
      }]
    }),
  }
</script>
