import { useState } from 'react';

import { Header, Image } from '@mantine/core';
import { Sling as Hamburger } from 'hamburger-react';

import '../../styles/components/layout/appHeader.css';

const AppHeader = ({windowWidth}) => {
  const [opened, setOpened] = useState(false);

  return (
    <Header className='header'>
      {
        windowWidth <= 650 &&
        <Hamburger toggled={opened} toggle={setOpened} className='burger' />
      }
      <Image src='/logo_black.png' alt='AS Logo' style={{width: '4em'}} />
      <nav className={
        windowWidth <= 650 && (opened ? 'nav-displayed' : 'nav-hidden')
      }>
        <ul className='links-container'>
          <a href='#about'>About me</a>
          <a href='#experiences'>Experiences</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contacts</a>
        </ul>
      </nav>
    </Header>
  )
}

export default AppHeader;