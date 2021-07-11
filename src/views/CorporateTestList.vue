<template>
  <v-container>

    <v-row class="">
        <v-col cols="12">
            <router-link :to="{name:'corporateTestCreate'}">
              <v-btn>New Test</v-btn>
            </router-link>
        </v-col>
    </v-row>
    <v-row class="">
      <v-col cols="12">
        <v-data-table
        :headers="headers"
        :items="items"
        >
				<template v-slot:item.action="{ item }">
					<v-btn :to="{name:'corporateTestList'}">{{item.name}}</v-btn>
				</template>

			</v-data-table>
    </v-col>
	</v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'ProjectList',
    data: () => ({
      headers:[
          {
            text: 'Test Name',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Attribute Name', value: 'attribute' },
          { text: 'Attribute Value', value: 'value' },
          { text: 'action', value: 'action' },
        ],
        items: [
          {
            name: 'Test 2',
            attribute: 'ชื่อ',
            value: 'รองเท้ายางยืด',
          },
          {
            name: 'Test 2',
            attribute: 'ราคา',
            value: '70 (+20)',
          },
		]
    }),
  }
</script>
