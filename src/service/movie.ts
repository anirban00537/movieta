import request from '@/utils/request'


export const getRecommendedMovies = () =>
  request({
    url: "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22",
    method: "get",
  })