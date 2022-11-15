import { Image, Blockquote } from '@mantine/core';
import { IconQuote } from '@tabler/icons';

import '../../styles/components/sections/about.css';

export const About = () => {
  return (
    <section className='about'>
      <div className='aboutText'>
        <Blockquote icon={<IconQuote size={50} color='#6c757d' />}>
          <h2 className='quote'>Try, fail, learn, succeed, repeat...</h2>
        </Blockquote>
        <p>The tech industry always offers us new challenging paths to explore, and that's what I love about it. I am currently specialized in full stack web applications, but I am really curious about development in general. I enjoy stimulating my creativity and then thinking about the best and simple way to bring my ideas to the final users, and always try to push the projects further within a passionate team.</p>
      </div>
      <Image src='/mycoffee.png' alt='Me & My coffee' style={{
        width: '25vw',
        borderRadius: '100%',
        boxShadow: '0px 0px 20px grey'
      }} />
    </section>
  )
}