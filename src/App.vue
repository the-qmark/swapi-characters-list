<template>
  <div class="main-container">
    <nav>
      <router-link to="/">ГЛАВНАЯ</router-link> |
      <router-link to="/characters">ПЕРСОНАЖИ</router-link> |
      <router-link to="/favorites">ИЗБРАННОЕ</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main-container {
  max-width: 1300px;
  margin: auto;
}

nav {
  padding: 30px;
  font-size: 35px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #000000;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
