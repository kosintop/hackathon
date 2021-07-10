<template>
  <v-container>
    <v-row>
      <v-col></v-col>
      <v-col></v-col>
      <v-col></v-col>
    </v-row>
    <v-row class="">
        <v-col cols="12">
            <v-btn>New Project</v-btn>
        </v-col>
    </v-row>
    <v-row class="">
        <v-col cols="12">
           <!-- <v-data-table
		   	:headers=""
            :items="[{id:1,name:'ABC'}]"/> -->
        </v-col>
    </v-row>
      <v-row class="">
        <v-col cols="12">
            <div>Services</div>
        </v-col>
        <v-col cols="6">
            <v-img
            :src="require('../assets/shoes.jpg')"
            class="my-3"
            contain
            height="200"
            />
        </v-col>
        <v-col cols="6">
            <div>ฟรี! บริการตรวจสภาพฟาร์มข้าวของคุณแบบอัตโนมัติ ด้วยหุ่นยนต์</div>
            <router-link :to="{name:'testerBuy'}">
              <v-btn>Pay Now</v-btn>
            </router-link>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'TesterList',

    data: () => ({
    }),
  }
</script>
