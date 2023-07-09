import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="configuration-controls-container">
          <h1>Layout</h1>
          <div className="checkbox-group">
            <div>
              <input
                type="checkbox"
                id="Content"
                checked={showContent}
                onChange={onChangeContent}
              />
              <label htmlFor="Content" className="label-text">
                Content
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="leftNavbar"
                checked={showLeftNavbar}
                onChange={onChangeLeftNavbar}
              />
              <label htmlFor="leftNavbar" className="label-text">
                Left Navbar
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="rightNavbar"
                checked={showRightNavbar}
                onChange={onChangeRightNavbar}
              />
              <label htmlFor="rightNavbar" className="label-text">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
