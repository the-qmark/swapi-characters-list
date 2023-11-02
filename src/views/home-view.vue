<template>
  <div class="home">
    <article>
      Получение и вывод персонажей StarWars с
      <a
        href="https://swapi.dev/"
        target="_blank"
        >https://swapi.dev/</a
      >
    </article>
    <ul>
      <li class="big-li">
        Вкладка "Персонажи"
        <ul>
          <li>Поиск персонажа по имени</li>
          <li>Таблица с персонажами</li>
          <li>Возможность добавить/удалить в/из избранного</li>
          <li>Пагинация</li>
        </ul>
      </li>
      <li class="big-li">
        Вкладка "Избранное"
        <ul>
          <li>Таблица с персонажами добавленными в избранное</li>
          <li>Возможность удалить из избранного</li>
        </ul>
      </li>
      <li class="big-li">
        Страница персонажа (ссылка в поиске на вкладке "Персонажи")
        <ul>
          <li>Таблица со всеми характеристиками персонажа</li>
          <li>Возможность добавить/удалить в/из избранного</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.home {
  text-align: left;
  font-size: 20px;
}

.big-li {
  margin-bottom: 20px;
}
</style>
