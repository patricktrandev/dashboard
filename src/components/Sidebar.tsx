import { FaAppStoreIos,FaApple } from "react-icons/fa";

const Sidebar = () => {

  return (
    
    <div className="vertical-header">

      <div className="logo-dashboard">
      <FaAppStoreIos />
      </div>
      <div className="menu__sidebar">
      <div className="menu__item">
      <span>
        <FaApple />
          </span>
        <h3 className="menu__item__text">  Products</h3>
      </div>
      </div>
    </div>
    
    
  )
}

export default Sidebar
