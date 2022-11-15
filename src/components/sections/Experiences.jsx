import { Tabs } from "@mantine/core";

import '../../styles/components/sections/experiences.css';
import Experience from "./Experience";

export const Experiences = () => {
  return (
    <section id='experiences'>
      <Tabs orientation='vertical' color='dark' defaultValue='hellowork'>
        <Tabs.List>
          <Tabs.Tab value='hellowork' className='tab'>
            <p>HelloWork</p>
          </Tabs.Tab>
          <Tabs.Tab value='tsukuba' className='tab'>
            <p>Tsukuba</p>
          </Tabs.Tab>
        </Tabs.List>
  
        <Tabs.Panel value='hellowork' pl='xl'>
          <Experience experience={{
            title: 'Python Developer',
            companyName: 'HelloWork',
            companyUrl: 'https://www.hellowork-group.com/en/uk/',
            startDate: 'January 2023',
            endDate: 'Current position',
            points: [
              'I like to test',
              'I like to test',
              'I like to test'
            ]
          }} />
        </Tabs.Panel>
        <Tabs.Panel value='tsukuba' pl='xl'>
          <Experience experience={{
              title: 'Machine Learning Intern',
              companyName: 'University of Tsukuba',
              companyUrl: 'https://www.tsukuba.ac.jp/en/',
              startDate: 'April 2022',
              endDate: 'June 2022',
              points: [
                'Contribution to N-Version Machine learning systems reliability research',
                'Development & Studies of Machine Learning systems able to recognize images of road signs',
                'Helped improve the current reliability model'
              ]
            }} />
        </Tabs.Panel>
      </Tabs>
    </section>
  )
}

export default Experiences;