import { Header, Group, Image } from '@mantine/core';

import '../../styles/components/layout/appHeader.css';

const AppHeader = () => {
  return (
    <Header style={{
      height: '10vh',
      boxShadow: '5px 0px 20px grey',
      paddingLeft: '3em',
      paddingRight: '3em',
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky'
    }}>
      <Image src='/as_logo.png' alt='AS Logo' style={{width: '4em'}} />
      <nav>
        <Group position='apart' spacing='xl'>
          <a href='#about'>About me</a>
          <a href='#experiences'>Experiences</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contacts</a>
        </Group>
      </nav>
    </Header>
  )
}

export default AppHeader;