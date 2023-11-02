import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/home-view.vue";
import CharactersListView from "@/views/characters-list-view.vue";
import FavoritesListView from "@/views/favorites-list-view.vue";
import CharacterIdView from "@/views/character-id-view.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/characters",
    name: "characters",
    component: CharactersListView,
  },
  {
    path: "/characters/:id",
    name: "characters-id",
    component: CharacterIdView,
  },
  {
    path: "/favorites",
    name: "favorites",
    component: FavoritesListView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
