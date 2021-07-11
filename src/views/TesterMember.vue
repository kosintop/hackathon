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
    <v-row>
      <v-col class="text-center">
        <div class="text-h4 mb-4">Membership</div>
      </v-col>
    </v-row>
    <div class="d-flex" style="border:1px solid black" >
      <v-row align="center">
        <v-col cols="6">
          <v-avatar size="200" class="my-4">
              <v-img
              :src="require('../assets/avatar.png')"
              
              />
          </v-avatar>
        </v-col>
        <v-col cols="6">
          <div>นายข้าวสวย</div>
          <div>Gold Membership</div>
          <div class="mt-2">คุณมีคะแนน</div>
          <div class="text-h4 font-weight-bold">126</div>
          <div>คะแนน</div>
        </v-col>
      </v-row>
    </div>

      <v-row class="">
        <v-col cols="12">
            <div class="mt-4 text-left text-h6">แลกของรางวัล</div>
        </v-col>
      </v-row>
      <v-divider/>
      <v-row align="center">
        <v-col cols="6">
            <v-img
            :src="require('../assets/disney.png')"
            contain
            height="200"
            />
        </v-col>
        <v-col class="flex-column justify-space-between">
          <div>
            Disney+ 6 months Subscription
          </div>
                  
        <v-dialog
          v-model="dialog1"
          width="500"
        >
          <template v-slot:activator="{ on }">
              <v-btn class="mt-4" v-bind="attrs"
              v-on="on" color="primary">Redeem</v-btn>
          </template>

          <v-card>
            <v-card-text class="pt-4">
              Succesfully Redeem!
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  text
                  @click="dialog1 = false"
                >
                  Ok
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        </v-col>
      </v-row>
      <v-divider/>
      <v-row align="center">
        <v-col cols="6">
            <v-img
            :src="require('../assets/lotus.png')"
            contain
            height="200"
            />
        </v-col>
        <v-col>
          <div>
            คูปองส่วนลดเทสโก้
          </div>
        <v-dialog
          v-model="dialog2"
          width="500"
        >
          <template v-slot:activator="{ on }">
              <v-btn class="mt-4" v-bind="attrs"
              v-on="on" color="primary">Redeem</v-btn>
          </template>

          <v-card>
            <v-card-text class="pt-4">
              Succesfully Redeem!
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  text
                  @click="dialog2 = false"
                >
                  Ok
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'TesterList',

    data: () => ({
      dialog1:false,
      dialog2:false
    }),
  }
</script>
