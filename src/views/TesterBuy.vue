<template>
  <v-container style="max-width:600px">
    <v-app-bar class="mb-4" color="primary">
      <v-row>
        <v-col class="text-left">
          <router-link :to="{name:'testerList'}">
            <v-avatar>
              <v-icon color='white'>fas fa-chevron-left</v-icon>
            </v-avatar>
          </router-link>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-row class="">
      <template v-if="productName=='shoes'">
        <v-col cols="12">
          <div class="text-h4">รองเท้านันยาง</div>
            <v-img
            :src="require('../assets/shoes.jpg')"
            class="my-3"
            contain
            height="200"
            />
        </v-col>
        <v-col cols="12">
            <div>รองเท้าวิ่งสุดล้ำที่ช่วยปรับลดอาการปวดร้าวของเท้าคุณขณะวิ่ง</div>
            <div class="font-weight-bold" style="color:green">เช่าเพียง 100 บาท ต่อเดือน ฟรีค่าจัดส่ง และคืนของ</div>
        </v-col>
        </template>
        <template v-else-if="productName=='home'">
        <v-col cols="12">
          <div class="text-h4">Home-sharing</div>
            <v-img
            :src="require('../assets/airbnb.png')"
            class="my-3"
            contain
            height="200"
            />
        </v-col>
        <v-col cols="12">
            <div>ไม่ว่าคุณอยากจะเช่าที่พักแบบใด เป็นห้องเดี่ยวเล็ก ๆ บ้านทั้งหลัง หรือแม้แต่ปราสาท ก็สามารถหาได้จากแพลตฟอร์มนี้ 
                มีราคาไม่แพงเท่ากับโรงแรม แล้วยังได้เปิดประสบการณ์ใหม่ พูดคุยทำความรู้จักกับเจ้าของที่พักได้</div>
                </v-col>
        </template>
        <template v-else-if="productName=='drone'">
        <v-col cols="12">
          <div class="text-h4">Robot Service</div>
            <v-img
            :src="require('../assets/robot.png')"
            class="my-3"
            contain
            height="200"
            />
        </v-col>
        <v-col cols="12">
            <div>ฟรี! บริการตรวจสภาพฟาร์มข้าวของคุณแบบอัตโนมัติ ด้วยหุ่นยนต์</div>
            </v-col>
        </template>
        <template v-else>

        </template>
        <v-dialog
          v-model="dialog"
          width="500"
        >
          <template v-slot:activator="{ on, attrs }">
              <div class="d-flex mx-auto my-4" style="border:1px solid #284E8B;width:300px" v-bind="attrs"
              v-on="on">
                <div style="background-color:#284E8B">
                  <v-img
                  :src="require('../assets/facepay.png')"
                  contain
                  height="100"
                  max-width="100"
                  /> 
                </div>
                <div style="flex:1" class="pa-0 d-flex flex-column justify-center text-center">
                 <div>Pay</div>
                 <div class="text-h6 font-weight-bold">100 Baht</div>  
                </div>
              </div>  

          </template>

          <v-card>
            <v-card-text class="pt-4">
              Succesfully Purchased!
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <router-link :to="{name:'testerList'}">
                <v-btn
                  color="primary"
                  text
                  @click="dialog = false"
                >
                  Ok
              </v-btn>
              </router-link>
            </v-card-actions>
          </v-card>
        </v-dialog>
    </v-row>
        <v-row>
          <v-col>
            <div>จ่ายง่ายๆด้วย FacePay</div>
            <div class="font-weight-bold text-caption">Powered By RISE Bank</div>
          </v-col>
        </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'TesterBuy',
    computed:{
      productName:function(){
        console.log(this.$route.query.name)
        return this.$route.query.name
      }
    },
    data: () => ({
      dialog:false,
    }),
  }
</script>
