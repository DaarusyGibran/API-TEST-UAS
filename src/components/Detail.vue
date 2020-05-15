<template>
  <b-container class="detail">
    <div v-for="result in results" :key="result.idMeal">
    <b-row style="padding-top: 3%; text-align: center">
          <b-col cols="4" style="background: #f8f9fa;">
            <div style="padding: 3%;">
              <h1>{{result.strMeal}}</h1>
              <b-img :src="result.strMealThumb" fluid></b-img>
              <b-button variant="primary" style="text-align: center; margin: 15px;" @click="addFav(result.idMeal,result.strMealThumb,result.strMeal,result.strCategory)"><b-icon icon="star" /> Add Favorite</b-button>
            </div>
          </b-col>
          <b-col cols="4" style="padding-top: 2%;">
        <div>
         <iframe :src="result.strYoutube.replace('watch?v=','embed/')" frameborder="0" width="640px" height="360px" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <ul>
            <dd>Area : <b-badge pill variant="danger">{{result.strArea}}</b-badge></dd>
            <dd>Category : <b-badge pill variant="warning">{{result.strCategory}}</b-badge></dd>
          </ul>
        </div>
      </b-col>
    <b-row style="background: #f8f9fa; margin-top: 2%; margin-bottom: 2%; padding: 1%">
      <b-col cols="12">
        <div style="text-align: center">
          <h1>Ingredients</h1>
          <hr>
        </div>
        <div style="text-align: left">
          <ul>
            <dd>{{result.strMeasure1}} {{result.strIngredient1}}</dd>
            <dd>{{result.strMeasure2}} {{result.strIngredient2}}</dd>
            <dd>{{result.strMeasure3}} {{result.strIngredient3}}</dd>
            <dd>{{result.strMeasure4}} {{result.strIngredient4}}</dd>
            <dd>{{result.strMeasure5}} {{result.strIngredient5}}</dd>
            <dd>{{result.strMeasure6}} {{result.strIngredient6}}</dd>
            <dd>{{result.strMeasure7}} {{result.strIngredient7}}</dd>
            <dd>{{result.strMeasure8}} {{result.strIngredient8}}</dd>
            <dd>{{result.strMeasure9}} {{result.strIngredient9}}</dd>
            <dd>{{result.strMeasure10}} {{result.strIngredient10}}</dd>
            <dd>{{result.strMeasure11}} {{result.strIngredient11}}</dd>
            <dd>{{result.strMeasure12}} {{result.strIngredient12}}</dd>
            <dd>{{result.strMeasure13}} {{result.strIngredient13}}</dd>
            <dd>{{result.strMeasure14}} {{result.strIngredient14}}</dd>
            <dd>{{result.strMeasure15}} {{result.strIngredient15}}</dd>
            <dd>{{result.strMeasure16}} {{result.strIngredient16}}</dd>
            <dd>{{result.strMeasure17}} {{result.strIngredient17}}</dd>
            <dd>{{result.strMeasure18}} {{result.strIngredient18}}</dd>
            <dd>{{result.strMeasure19}} {{result.strIngredient19}}</dd>
            <dd>{{result.strMeasure20}} {{result.strIngredient20}}</dd>
          </ul>
        </div>
      </b-col>
      <b-col cols="12" style="background: #f8f9fa;">
            <div style="padding: 1%;">
              <h1 style="text-align: center">Instructions</h1>
              <hr>
              <p style="text-align: left">{{result.strInstructions}}</p>
              <div style="float: left; padding-bottom: 2%;">
              </div>
            </div>
          </b-col>
    </b-row>
    </b-row>
    </div>
  </b-container>
</template>

<script>
import axios from 'axios'
const STORAGE_KEY = 'wishlist'
export default {
  name: 'Detail',
  data () {
    return {
      msg: 'Search',
      results: '',
      fav: []
    }
  },
  methods: {
    addFav (favId, favPict, favName, favCategory) {
      this.fav.push({ id: favId, picture: favPict, name: favName, category: favCategory })
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.fav))
      this.$toast.success('Added to favorites !', {
        theme: 'bubble',
        position: 'top-center',
        duration: '1500'
      })
    }
  },
  mounted () {
    axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php', {
      params: {
        i: this.$route.params.id
      }
    })
      .then(response => {
        this.results = response.data.meals
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
