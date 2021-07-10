<template>
  <v-container>
    <v-row>
      <v-col class="text-center">
        <div>Membership</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
            <v-img
            :src="require('../assets/shoes.jpg')"
            class="my-3"
            contain
            height="200"
            />
      </v-col>
      <v-col>
        <div>นายข้าวสวย</div>
      </v-col>
    </v-row>
    <v-row class="">
        <v-col cols="12">
            <div>คุณมีคะแนน 126 คะแนน</div>
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
