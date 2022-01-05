// import { html, render } from './standalone.module.js'
import htm from './htm.module.js'
import './react.production.min.js'
import './react-dom.production.min.js'
import './react-json-tree.min.js'

// @ts-ignore
const html = htm.bind(React.createElement)

const App = () => {
  // @ts-ignore
  const [data, setData] = React.useState(() => ({
    message: 'test',
    items: [
      {
        name: 'Jones',
      },
      {
        name: 'Smith',
      },
    ],
  }))

  // @ts-ignore
  const onClick = React.useCallback(() => {
    setData((data) => ({
      ...data,
      text: 'hello',
    }))
  }, [])

  return html`<div>
    <h1>State Viewer</h1>
    <button onClick=${onClick}>Click</button>
    <${
      // @ts-ignore
      ReactJsonTree
    }
      data=${data}
    />
  </div>`
}

// @ts-ignore
ReactDOM.render(html`<${App} />`, document.body)
