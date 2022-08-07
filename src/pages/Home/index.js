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

const ALink = (props) => {
    const to = props.to
    const target = props.target || null
    const rel = props.rel ? props.rel : props.target ? 'noreferrer' : null
    return <div className='border-b-2 border-transparent hover:border-white duration-100 ease-in'><a href={to} target={target} rel={rel}>{props.children}</a></div>
}

const Home = () => {
  return (
    <div className='relative z-10 w-full h-full px-5 xl:px-10 bg-dark-gray'>
        <header className='h-1/10 flex flex-row justify-between px-2'>
            <div className='flex flex-row h-full items-center'>
               <Link to="/"><h1 className="uppercase text-white">Manutai</h1></Link>
            </div>
            <div>
                <nav className='flex h-full'>
                    <ul className='flex flex-row items-center h-full'>
                        { header.map((element, index) => 
                            <li key={index} className='list-none tracking-wider ml-7 xl:ml-14 text-white'><ALink to={element.link}>{element.title}</ALink></li>
                        )}
                    </ul>
                </nav>
            </div>
         </header>
         <section className='flex flex-col xl:flex-row items-center xl:justify-between w-full h-8/10 xl:px-40 2xl:px-80'>
            <div>
               <h2 className='uppercase'><span className='text-md xl:text-xl tracking-widest text-dark-white'>Teraiamano</span><br/><span className='text-4xl xl:text-6xl text-white'>Manutai</span></h2>
               <br/>
               <hr className='w-2/5 h-2 border-none bg-rose' />
               <br/>
               <p className='text-white text-sm xl:text-xl'>Junior full-stack developer</p>
               <br/>
            </div>
            <div className='flex items-center justify-center xl:items-end xl:justify-end relative z-20 w-full xl:w-1/2 h-full overflow-hidden'>
                <img className='relative h-full xl:h-4/5 right-0' src={image} alt="" />
            </div>
         </section>
         <footer className='h-1/10'>
            <ul className='h-full flex flex-row items-center'>
               { footerLinks.map((element, index) =>
                    <li key={index} className='list-none mr-7 xl:mr-14 text-white'><ALink target='_blank' to={element.link}>{element.title}</ALink></li>
                ) }
            </ul>
         </footer>
    </div>
    
  )
}

export default Home;
