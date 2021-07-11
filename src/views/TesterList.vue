<template>
  <v-container style="max-width:600px">
    <v-app-bar class="mb-4" color="primary">
      <v-row>
        <v-col class="text-right">
          <router-link :to="{name:'testerMember'}">
            <v-avatar color="grey">
              <v-icon color='white'>fas fa-user</v-icon>
            </v-avatar>
          </router-link>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-row>
      <v-col class="text-center">
        <div class="text-h4">Right by RISE</div>
        <div class="text-subtitle">Testing Innovation Platform</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <div class="font-weight-bold text-h6" style="background-color:lightblue;border:1px solid black">Special Offer for You</div>
      </v-col>
    </v-row>
    <v-row class="mt-4">
        <v-col cols="12">
            <div class="text-h6 text-left">Physical Product</div>
        </v-col>
        <v-col cols="6">
            <v-img
            :src="require('../assets/shoes.jpg')"
            contain
            height="200"
            />
        </v-col>
        <v-col cols="6">
            <div class="text-h6 text-left font-weight-bold">รองเท้านันยาง</div>
            <div class="text-left">ทดลองเช่ารองเท้าวิ่งสุดล้ำฟรีก่อนใคร</div>
            <div class="text-left">เริ่มต้น 100บาทต่อเดือน</div>
            <div class="text-center">
              <router-link :to="{name:'testerBuy',query:{name:'shoes'}}">
                <v-btn class="my-4" color="primary">Test Now</v-btn>
              </router-link>
            </div>
        </v-col>
    </v-row>
    <v-divider/>
    <v-row class="mt-4">
        <v-col cols="12">
            <div class="text-h6 text-left">Digital Product</div>
        </v-col>
        <v-col cols="6">
            <v-img
            contain
            :src="require('../assets/airbnb.png')"
            height="200"
            />
        </v-col>
        <v-col cols="6">
            <div class="text-h6 text-left font-weight-bold">
              Home-sharing
            </div>
            <div class="text-left">ไม่ว่าคุณอยากจะเช่าที่พักแบบใด เป็นห้องเดี่ยวเล็ก ๆ บ้านทั้งหลัง หรือแม้แต่ปราสาท ก็สามารถหาได้จากแพลตฟอร์มนี้ 
                มีราคาไม่แพงเท่ากับโรงแรม แล้วยังได้เปิดประสบการณ์ใหม่ พูดคุยทำความรู้จักกับเจ้าของที่พักได้
            </div>
              <router-link :to="{name:'testerBuy',query:{name:'home'}}">
                <v-btn class="my-4" color="primary">Book Now</v-btn>
              </router-link>
        </v-col>
    </v-row>
     <v-divider/>
      <v-row class="mt-4">
        <v-col cols="12">
            <div class="text-h6 text-left">Services</div>
        </v-col>
        <v-col cols="6">
            <v-img
            contain
            :src="require('../assets/robot.png')"
            height="200"
            />
        </v-col>
        <v-col cols="6">
            <div class="text-h6 text-left font-weight-bold">
              Robot Service
            </div>
            <div class="text-left">ฟรี! บริการตรวจสภาพฟาร์มข้าวของคุณแบบอัตโนมัติ ด้วยหุ่นยนต์</div>
            <router-link :to="{name:'testerBuy',query:{name:'drone'}}">
              <v-btn class="my-4" color="primary">Try Now</v-btn>
            </router-link>
        </v-col>
    </v-row>
     <v-divider/>
  </v-container>
</template>

<script>
  export default {
    name: 'TesterList',

    data: () => ({
    }),
  }
</script>
