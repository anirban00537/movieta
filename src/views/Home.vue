<template>
  <div class="home">
    <div class="container">
      <div
        v-for="movie in movies"
        :key="movie.id"
      >
        <MovieCard />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import MovieCard from "@/components/MovieCard.vue";
import { Component, Vue } from "vue-property-decorator";
import { getRecommendedMovies } from "../service/movie";

@Component({
  components: { MovieCard },
})
export default class Home extends Vue {
  private movies: any[] = [];
  created() {
    this.getRecommendedMoviemethod();
  }

  private async getRecommendedMoviemethod() {
    const { data } = await getRecommendedMovies();
    this.movies = data.results;
    console.log(this.movies);
  }
}
</script>


<style lang="css">
</style>