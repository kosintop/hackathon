<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-text-field outlined dense label="Name" v-model="name"/>
      </v-col>
      <v-col cols="12">
        <v-text-field outlined dense label="Price" v-model.number="price"/>
      </v-col>
      <v-col cols="12">
        <v-input label="Name"/>
      </v-col>
    </v-row>
    <v-row class="">
        <v-col cols="12">
            <v-btn>New Project</v-btn>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'ProjectCreate',
    data: () => ({
        name:'',
        price:0
    })
  }
</script>
