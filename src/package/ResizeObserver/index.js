import ResizeObserver from './ResizeObserver'

ResizeObserver.install = function (app) {
  app.component(ResizeObserver.name, ResizeObserver)
}

export default ResizeObserver
