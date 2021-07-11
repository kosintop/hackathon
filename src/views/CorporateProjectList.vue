<template>
  <v-container>
    <v-app-bar class="mb-4" color="primary">

    </v-app-bar>
    <v-row class="">
        <v-col cols="12" class="text-left">
          <router-link :to="{name:'corporateProjectCreate'}">
            <v-btn color='primary'>New Item</v-btn>
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
          <div class="d-flex  justify-end" style="width:100%">
            <router-link :to="{name:'corporateTestList', query:{name:item.name}}">
              <v-btn color='blue' max-width="40" min-width="40">
                <v-icon color="white">fas fa-info</v-icon>
              </v-btn>
            </router-link>
          </div>
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
		headers: [
          {
            text: 'Name',
			align: 'start',
			sortable: false,
            value: 'name',
          },
			{ text: 'Sales', value: 'sales' },
			{ text: 'RISE Score', value: 'rating' },
			{ text: '', value: 'action' },
        ],
        items: [
          {
            name: 'รองเท้านันยาง',
            sales: '4,217',
            rating: '4.2',
          },
          {
            name: 'Home Sharing',
            sales: '3,120',
            rating: '3.5',
          },
          {
            name: 'Robot Service',
            sales: '2,588',
            rating: '4.7',
          },
		]
    }),
  }
</script>
<style scoped>
	a{
		text-decoration: none !important;
	}
</style>
