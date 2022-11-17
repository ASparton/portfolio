import { Image } from '@mantine/core';
import '../../styles/components/layout/intro.css';

const Intro = () => {
  return (
    <div className='intro-container'>
      <Image src='/logo_white.png' alt='AS Logo' style={{
        width: '10%'
      }} />
    </div>
  )
}

export default Intro;