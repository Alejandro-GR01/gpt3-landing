

import './navbar.css';
import logo from '../../assets/logo.svg';
import { useState } from 'react';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';



const Menu = ({handleClosingMenu}) => (
  <>
    <p><a href="#home" className='link-underline' onClick={handleClosingMenu}>Home</a></p>
    <p><a href="#whgpt3" className='link-underline' onClick={handleClosingMenu}>What is GPT?</a></p>
    <p><a href="#possibility" className='link-underline' onClick={handleClosingMenu}>Open AI</a></p>
    <p><a href="#features" className='link-underline' onClick={handleClosingMenu}>Case Studies</a></p>
    <p><a href="#blog" className='link-underline' onClick={handleClosingMenu}>Library</a></p>
  </>
)


//BEM  Block__Element-Modifier

const Navbar = () => {
  const [toogleMenu, setToogleMenu] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  


  const handleClosingMenu = () => {
    if (!isClosing && toogleMenu) {
      setIsClosing(true)
      setTimeout(() => {
        setIsClosing(false),
          setToogleMenu(false)
      }, 500)
      return
    }
    setToogleMenu(true);
  }


  return (
    <header  className='animate-fade-in relative  gpt3__navbar w-svw '>
      <nav className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo" loading="eager"
  fetchPriority="high"/>
        </div>

        <div className='gpt3__navbar-links_container'>
          <Menu />
        </div>
      </nav>
      <div className='gpt3__navbar-sign'>
        <button className='button gpt3__navbar-menu__button-light'>Sign in</button>
        <button type='button' className='button gpt3__navbar-menu__button-orange'>Sign up</button>
      </div>
      <div className='gpt3__navbar-menu '>
        <button type='button' onClick={handleClosingMenu} >

          {toogleMenu
            ? <RiCloseLine color='fff' size={27} />
            : <RiMenu3Line color='fff' size={27} />
          }
        </button>
        {toogleMenu && (
          <>
            <div className={`${toogleMenu && !isClosing ? 'animate-fade-in' : isClosing && 'animate-fade-out'}  relative gpt3__navbar-menu_container scale-up_center`}>
              <div className='gpt3__navbar-menu_container-links'>
                <Menu handleClosingMenu={handleClosingMenu} />
                <div className='gpt3__navbar-menu_container-links-sign'>
                  <button className='button gpt3__navbar-menu__button-light'>Sign in</button>
                  <button type='button' className='button gpt3__navbar-menu__button-orange'>Sign up</button>
                </div>
              </div>
            </div>

          </>
        )}

      </div>
      {toogleMenu && (
        <div className='gpt3_navbar-menu_overlay' onClick={handleClosingMenu}>

        </div>
      )}
    </header>
  )
}

export default Navbar