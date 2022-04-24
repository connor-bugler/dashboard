import layout from '../styles/layout.module.css'

export default ({ title, children }) => (
  <header className={layout.header}>
    <h2 className={layout.title}>{title}</h2>
    {children}
  </header>
)