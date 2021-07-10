<template>
  <v-container>
    <v-row>
      <v-col class="text-right">
        <router-link :to="{name:'testerMember'}">
          <v-avatar color="indigo">X</v-avatar>
        </router-link>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <div>Right by RISE</div>
        <div>Testing Innovation Platform</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <div style="background-color:yellow;border:1px solid black">Special Offer for You</div>
      </v-col>
    </v-row>
    <v-row class="">
        <v-col cols="12">
            <div>Physical Product</div>
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
            <div>ทดลองเช่ารองเท้าวิ่งสุดล้ำฟรีก่อนใคร</div>
            <div>เริ่มต้น 100บาทต่อเดือน</div>
            <div class="text-center">
              <router-link :to="{name:'testerBuy'}">
                <v-btn>Pay Now</v-btn>
              </router-link>
            </div>
        </v-col>
    </v-row>
    <v-row class="">
        <v-col cols="12">
            <div>Digital Product</div>
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
            <div>Home-sharing ที่ไม่ว่าคุณอยากจะเช่าที่พักแบบใด เป็นห้องเดี่ยวเล็ก ๆ บ้านทั้งหลัง หรือแม้แต่ปราสาท ก็สามารถหาได้จากแพลตฟอร์มนี้ 
                มีราคาไม่แพงเท่ากับโรงแรม แล้วยังได้เปิดประสบการณ์ใหม่ พูดคุยทำความรู้จักกับเจ้าของที่พักได้
            </div>
              <router-link :to="{name:'testerBuy'}">
                <v-btn>Pay Now</v-btn>
              </router-link>
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
