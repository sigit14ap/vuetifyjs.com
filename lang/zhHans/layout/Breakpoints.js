export default {
  header: 'Breakpoints',
  headerText: 'Vuetify has a 12 point grid system. Built using <kbd>flex-box</kbd>, the grid is used to layout an application\'s content.  It contains 5 types of media breakpoints that are used for targeting specific screen sizes or orientations. The props for grid components are actually classes that are derived from their defined properties. This allows you to easily specify these helper classes as props, while still providing the classes to be used anywhere.',
  components: ['v-container', 'v-layout', 'v-flex', 'v-spacer'],
  toc: [
    {
      text: 'Introduction',
      href: 'introduction'
    },
    {
      text: 'Usage',
      href: 'usage'
    },
    {
      text: 'API',
      href: 'api'
    },
    {
      text: 'Supplemental',
      href: 'supplemental'
    },
    {
      text: 'Examples',
      href: 'examples'
    },
    {
      text: 'Breakpoint object',
      href: 'breakpoint-object'
    }
  ],
  breakpointHeader: 'Breakpoint object',
  breakpointText1: 'Vuetify将可用的断点转换为应用程序内的可访问对象。这将允许您根据视野大小分配/应用特定的属性和特性。该对象可以从一下位置被访问：',
  breakpointText2: '该对象包含与您已经习惯使用的栅格系统相同的语义属性。让我们尝试一个真实世界的例子。您有一个`v-dialog`组件，您想要在移动设备上转换成一个**全屏**对话框。通常情况下，您需要将视野大小绑定在观察者上，和/或在页面加载时进行检查。',
  breakpointText3: '这是很多的样板文字。即使您选择使用内置的[v-resize](/directives/resizing)指令，仍然必须定义调整大小的方法。使用**断点**对象，您可以完全跳过这个逻辑并重新构建您的应用程序。',
  breakpointText4: 'All **breakpoint** props:'
}
