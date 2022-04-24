import cx from 'classnames'
import elements from '../styles/elements.module.css'

export default ({ className, ...props }) => (
  <button {...props} className={cx(
    elements.button,
    className,
  )} />
)