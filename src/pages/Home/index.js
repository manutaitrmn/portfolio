import { Link } from 'react-router-dom';

import image from 'assets/images/me.svg';

const header = [
    {
        title: "Projects",
        link: "#"
    },
    {
        title: "About",
        link: "#"
    }
]

const footerLinks = [
    {
        title: "LinkedIn",
        link: "https://www.linkedin.com/in/manutai"
    },
    {
        title: "Instagram",
        link: "https://www.instagram.com/ma.nutai"
    },
    {
        title: "Github",
        link: "https://github.com/manutaitrmn"
    },
    {
        title: "Codepen",
        link: "https://codepen.io/manutai"
    }
]

const Home = () => {
  return (
    <div className='relative z-10 w-full h-full px-10 bg-dark-gray'>
        <header className='h-1/10 flex flex-row justify-between px-2'>
            <div className='flex flex-row h-full items-center'>
               <Link to="/"><h1 className="uppercase text-white">Manutai</h1></Link>
            </div>
            <div>
                <nav className='flex h-full'>
                    <ul className='flex flex-row items-center h-full'>
                        { header.map((element, index) => 
                            <li key={index} className='list-none tracking-wider ml-14 text-white'><a href={element.link}>{element.title}</a></li>
                        )}
                    </ul>
                </nav>
            </div>
         </header>
         <section className='flex flex-row items-center justify-between w-full h-8/10 px-80'>
            <div>
               <h2 className='uppercase'><span className='text-xl tracking-widest text-dark-white'>Teraiamano</span><br/><span className='text-6xl text-white'>Manutai</span></h2>
               <br/>
               <hr className='w-2/5 h-2 border-none bg-rose' />
               <br/>
               <p className='text-white'>Junior full-stack developer</p>
               <br/>
            </div>
            <div className='flex items-end justify-end relative z-20 w-1/2 h-full overflow-hidden'>
                <img className='relative h-4/5 right-0' src={image} alt="" />
            </div>
         </section>
         <footer className='h-1/10'>
            <ul className='h-full flex flex-row items-center'>
               { footerLinks.map((element, index) =>
                    <li key={index} className='list-none mr-14 text-white'><a target='_blank' rel='noreferrer' href={element.link}>{element.title}</a></li>
                ) }
            </ul>
         </footer>
    </div>
  )
}

export default Home;
