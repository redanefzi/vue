<template>
<v-app>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" md="2" >
          <v-text-field v-model="newProduct.name" :counter="10" label="Product Name:" required></v-text-field>
        </v-col>

        <v-col cols="12" md="4" >
          <v-text-field v-model="newProduct.description" :counter="100" label="Description:" required></v-text-field>
        </v-col>

        <v-col cols="12" md="2" >
          <v-text-field v-model="newProduct.price" label="Price:" required></v-text-field>
        </v-col>

        <v-col cols="12" md="2" >
          <v-file-input v-model="selectedImage" label="Image:" ref="image" accept="image/*" required></v-file-input>
        </v-col>

        <v-col cols="12" md="2" >
        <v-select v-model="newProduct.category" :items="categories" item-text="name" item-value="id" label="Category"></v-select>
        </v-col>
      </v-row>
      <v-btn class="mr-4" @click="submitForm" >
      submit
      </v-btn>
    </v-container>
  </v-form>
</v-app>
</template>

<script>
import axios from 'axios';
// import FormData from 'form-data'

export default {
  name: 'CreateProduct',
  props: {
    //
  },

  data(){
      return {
          categories: [],
          selectedCategory: null,
          selectedImage: [],
          newProduct: {
                name: '',
                description: '',
                price: '',
                category: ''
          }
      }
  },

    methods:{

        submitForm(){
            const formData = new FormData();
            formData.append("name", this.newProduct.name);
            formData.append("description", this.newProduct.description);
            formData.append("price", this.newProduct.price);
            formData.append("category", this.newProduct.category);
            formData.append("image", this.selectedImage);
            console.log(formData);
            axios.post("http://127.0.0.1:8000/products",
                formData
                )
                .then((res) => {
                     console.log(res)
                })
                .catch(err => console.log(err));
        }
    },

    created() {
        axios.get('http://127.0.0.1:8000/categories')
          .then(res => this.categories = res.data)
          .catch(err => console.log(err));
    },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
