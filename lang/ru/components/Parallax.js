export default {
  header: 'Параллакс',
  headerText: 'Компонент `v-parallax` создает 3D-эффект, который заставляет изображение прокручиваться медленнее, чем окно.',
  components: ['v-parallax'],
  examples: [{
    default: {
      header: 'По умолчанию',
      desc: 'Параллакс вызывает смещение фонового изображения, когда пользователь прокручивает страницу.'
    },
    content: {
      header: 'С контентом',
      desc: 'Вы также можете разместить любой контент внутри параллакса. Это позволяет использовать параллакс в качестве героя изображения.'
    },
    customHeight: {
      header: 'Пользовательская высота',
      desc: 'Вы можете указать произвольную высоту параллакса. Имейте в виду, что это может привести к поломке параллакса, если изображение неправильного размера'
    },
    jumbotron: {
      header: 'Jumbotron',
      desc: 'Параллакс может быть отключен для использования в качестве стандартного **jumbotron**'
    }
  }]
}