import Image from 'next/image'

// images
import jsLogo from '/public/images/icons/js.png' 
import reactLogo from '/public/images/icons/react.png' 
import nextLogo from '/public/images/icons/nextjs.png' 
import csharpLogo from '/public/images/icons/csharp.png' 
import unityLogo from '/public/images/icons/unity.png' 
import godotLogo from '/public/images/icons/godot.svg' 
import pythonLogo from '/public/images/icons/python.png' 
import postgresqlLogo from '/public/images/icons/postgresql.png' 
import dockerLogo from '/public/images/icons/docker.png' 

function Technos() {
  return (
    <section name="technos">
      <h2>Technologies && Tools I like to work on these days</h2>
      <div>
        <Image src={jsLogo} alt="Javascript logo" />
        <Image src={reactLogo} alt="React.js logo" />
        <Image src={nextLogo} alt="Next.js logo" />
        <Image src={csharpLogo} alt="C# logo" />
        <Image src={unityLogo} alt="Unity logo" />
        <Image src={godotLogo} alt="Godot logo" />
        <Image src={pythonLogo} alt="Python logo" />
        <Image src={postgresqlLogo} alt="Postgresql logo" />
        <Image src={dockerLogo} alt="Docker logo" />
      </div>
    </section>
  )
}

export default Technos;