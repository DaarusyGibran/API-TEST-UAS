<template>
    <b-row class="row-banner">
    <b-col>
        <h1 class="title">
            mealdb api
        </h1>
        <h2 class="subtitle">
            {{msg}}
        </h2>
    </b-col>
  </b-row>
</template>
<script>
export default {
  props: {
    msg: { String }
  }
}
</script>
<style>
.row-banner {
  background-color: #f5f5f5;
  padding: 100px;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
  "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
}

@media only screen and (max-width: 500px) {
  .row-banner {
    text-align: center;
  }
  .title {
    font-size: 45px;
  }

  .subtitle {
    font-size: 25px;
  }
}
</style>
