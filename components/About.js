import Image from 'next/image'

// images
import mycoffee from '/public/images/photos/mycoffee.png';

function About() {
  return (
    <section name="about">
      <Image src={mycoffee} alt="Me & my coffee" />
      <h1>Hello World!</h1>
      <p>How many times were you frustrated while looking
        out for a good collection of programming/
        algorithm/ interview questions? What did you
        expect and what did you get? This portal has been
        created to provide well written, well thought and
        well explained solutions for selected questions.
        An IIT Roorkee alumnus and founder of
        GeeksforGeeks. He loves to solve programming
        problems in most efficient ways. Apart from
        GeeksforGeeks, he has worked with DE Shaw and
        Co. as a software developer and JIIT Noida as
        an assistant professor. It is a good platform
        to learn programming. It is an educational
        website. Prepare for the Recruitment drive of
        product    based companies like Microsoft, Amazon,
        Adobe etc with a free online placement
        preparation course.</p>
    </section>
  )
}

export default About;