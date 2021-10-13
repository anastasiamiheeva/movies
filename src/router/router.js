import Movies from "../pages/Movies/Movies";
import Search from "../pages/Search/Search";
import Trending from "../pages/Trending/Trending";

export const routes = [
  {path: '/movies', component: Movies, exact: true},
  {path: '/search', component: Search, exact: true},
  {path: '/trending', component: Trending, exact: true},
]