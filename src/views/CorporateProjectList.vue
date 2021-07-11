<template>
  <v-container>
    <v-row>
      <v-col></v-col>
      <v-col></v-col>
      <v-col></v-col>
    </v-row>
    <v-row class="">
        <v-col cols="12">
			<router-link :to="{name:'corporateProjectCreate'}">
				<v-btn>New Project</v-btn>
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
					<router-link :to="{name:'corporateTestList', query:{name:item.name}}">
						<v-btn color='blue'>
							<v-icon color="white">fas fa-info</v-icon>
						</v-btn>
					</router-link>
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
            text: 'Project Name',
			align: 'start',
			sortable: false,
            value: 'name',
          },
			{ text: 'Sales', value: 'sales' },
			{ text: 'Rating', value: 'rating' },
			{ text: 'action', value: 'action' },
        ],
        items: [
          {
            name: 'รองเท้า',
			sales: '100',
            rating: '4.2',
          },
                   {
            name: 'รองเท้า 2',
			sales: '100',
            rating: '5.4',
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
