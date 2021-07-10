<template>
  <v-container>
    <v-row>
      <v-col class="text-center">
        <div>Logo</div>
      </v-col>
    </v-row>
    <v-row class="">
        <v-col cols="12">
            <v-img
            :src="require('../assets/shoes.jpg')"
            class="my-3"
            contain
            height="200"
            />
        </v-col>
        <v-col cols="12">
            <div>รองเท้าวิ่งสุดล้ำที่ช่วยปรับลดอาการปวดร้าวของเท้าคุณขณะวิ่ง</div>
            <div>เช่าเพียง 100 บาท ต่อเดือน ฟรีค่าจัดส่ง และคืนของ</div>
            <v-btn>Pay Now</v-btn>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'TesterBuy',

    data: () => ({
    }),
  }
</script>
