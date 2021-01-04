<template>
  <v-app>
      <v-main>
          <v-container>
            <h2> Product List</h2>
            <v-row>
                <v-col md="3">
                    <v-text-field v-model="search" append-icon="mdi-magnify" label="Category" single-line hide-details />
                </v-col>
            </v-row>
            <v-data-table
                :headers="headers"
                :items="products"
                :items-per-page="10"
                item-key="id"
                class="elevation-1"
                :search="search"
                :custom-filter="filterItems"
            >
            
             <template v-slot:item.image="{ item }">
                <v-img :src="'http://127.0.0.1:8000/storage/images/' + item.image" height="100px" :alt="item.image" width="100px" >
                </v-img>
            </template>

            </v-data-table>
           </v-container>
        </v-main>
    </v-app>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ProductList',
  data: () => ({
      search: "",
      products: [],
  }),

  methods: {

    filterItems(value, search, item) {

      if(item.category == null){
        return false;
      }
        return value != null &&
          search != null &&
          typeof item.category.name === 'string' && item.category.name.toString().toLowerCase().indexOf(search) !== -1
    }
  },

  computed: {
    headers() {
      return [
          {
            text: 'ID',
            sortable: false,
            value: 'id',
          },
          { text: 'Name', value: 'name' },
          { text: 'Description', sortable: false, value: 'description' },
          { text: 'Price', value: 'price' },
          { text: 'Image', sortable: false, value: 'image' },
          { text: 'Category', sortable: false, value: 'category.name'}
        ];
    }
  },

  created() {
    axios.get('http://127.0.0.1:8000/products')
          .then(res => this.products = res.data)
          .catch(err => console.log(err));
  },

}
</script>


<style scoped>


</style>
