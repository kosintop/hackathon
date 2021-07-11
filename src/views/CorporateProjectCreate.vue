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
      <v-col cols="12" class="text-left text-h6 font-weight-bold">
        Create new Item
      </v-col>
      <v-col cols="6">
        <v-text-field outlined dense label="Name" v-model="name"/>
      </v-col>
      <v-col cols="6">
        <v-file-input outlined dense label="Image" v-model="file"/>
      </v-col>
      <v-col cols="12">
        <v-text-field outlined dense label="Description" v-model="description"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="text-left text-h6 font-weight-bold">
        Variables
      </v-col>
      <v-col>
        <v-text-field outlined dense label="Price A" v-model.number="price1"/>
      </v-col>
      <v-col>
        <v-text-field outlined dense label="Price B" v-model.number="price2"/>
      </v-col>
      <v-col>
        <v-text-field outlined dense label="Price C" v-model.number="price2"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-select outlined dense :items="['ชาย','หญิง']" label="Target Gender A" v-model="target1"/>
      </v-col>
      <v-col>
        <v-select outlined dense :items="['ชาย','หญิง']" label="Target Gender B" v-model="target2"/>
      </v-col>
      <v-col>
        <v-select outlined dense :items="['ชาย','หญิง']" label="Target Gender C" v-model="target2"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
         <v-select outlined dense :items="['<20','20-40','40>']" label="Target Age A" v-model="target1"/>
      </v-col>
      <v-col>
        <v-select outlined dense :items="['<20','20-40','40>']" label="Target Age B" v-model="target2"/>
      </v-col>
      <v-col>
        <v-select outlined dense :items="['<20','20-40','40>']" label="Target Age C" v-model="target2"/>
      </v-col>
    </v-row>
    <v-row class="">
        <v-col cols="12">
          <v-dialog
          v-model="dialog"
          width="500"
        >
          <template v-slot:activator="{ on, attrs }">
              <v-btn
                  color="primary"
                  v-bind="attrs"
                  v-on="on"
                >
                  Create
              </v-btn>

          </template>

          <v-card>
            <v-card-text class="pt-4">
              Succesfully Create New Item!
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <router-link :to="{name:'corporateProjectList'}">
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
            
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'ProjectCreate',
    data: () => ({
        dialog:false,
        name:'',
        price:0,
        description:'',
        file:undefined
    })
  }
</script>
