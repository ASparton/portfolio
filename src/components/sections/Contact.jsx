import { Button } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons';

import '../../styles/components/sections/contact.css';

const Contact = () => {
  return (
    <section className='contact' id='contact'>
      <h1>Get In Touch</h1>
      <p>
        I'm always opened to new opportunities and discussions,
        so don't hesitate and contact me here if you have something to say :)
      </p>
      <a href='mailto:sparton.alexandre@gmail.com'>
        <Button 
          variant='gradient' 
          gradient={{ from: 'indigo', to: 'teal' }} 
        >
          Say hi!
        </Button>
      </a>
      <ul className='socials'>
        <li>
          <a 
            href='https://github.com/ASparton'
            target='_blank'
            rel='noreferrer noopener'
          >
            <IconBrandGithub size={40} />
          </a>
        </li>
        <li>
          <a 
            href='https://www.linkedin.com/in/alexandre-sparton/'
            target='_blank'
            rel='noreferrer noopener'
          >
            <IconBrandLinkedin size={40} />
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Contact;