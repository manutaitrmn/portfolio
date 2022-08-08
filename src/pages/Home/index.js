import { Link } from 'react-router-dom';
import tw from "tailwind-styled-components";
import { motion } from "framer-motion";

import image from 'assets/images/me.svg';
import polynesian from 'assets/images/polynesian.svg';


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
    return <div className='border-b-2 border-transparent hover:border-dark-gray duration-100 ease-in'><a href={to} target={target} rel={rel}>{props.children}</a></div>
}

const BlockWrapper = tw.div`
    relative z-10 w-full h-full px-5 xl:px-10 bg-white
`

const Main = tw.section`
    flex 
    flex-col xl:flex-row 
    items-center 
    xl:justify-between 
    w-full 
    h-8/10 
    xl:px-40 2xl:px-80
`

const PictureWrapper = tw.div`
    flex 
    items-center 
    justify-center 
    relative 
    z-20 
    w-full xl:w-1/2 
    h-4/6
`

const Header = tw.header`
    flex 
    flex-row 
    justify-between 
    h-1/10 
    px-2
`

const Footer = tw.footer`
    h-1/10
`

const Home = () => {

    return (
        <BlockWrapper>
            <Header>
                <div className='flex flex-row h-full items-center'>
                <Link to="/"><h1 className="uppercase text-dark-gray">Manutai</h1></Link>
                </div>
                <div>
                    <nav className='flex h-full'>
                        <ul className='flex flex-row items-center h-full'>
                            { header.map((element, index) => 
                                <li key={index} className='list-none tracking-wider ml-7 xl:ml-14 text-dark-gray'><ALink to={element.link}>{element.title}</ALink></li>
                            )}
                        </ul>
                    </nav>
                </div>
            </Header>
            <Main>
                <div className='h-2/6 flex flex-col justify-center'>
                    <h2 className='uppercase'>
                        <span className='text-md xl:text-xl tracking-widest text-dark-gray'>Teraiamano</span><br/>
                        <span className='text-4xl xl:text-6xl text-dark-gray'>Manutai</span>
                    </h2>
                    <hr className='w-2/5 h-2 border-none bg-rose my-5' />
                    <p className='text-dark-gray text-sm xl:text-md'>Junior full-stack developer</p>
                    <br/>
                </div>
                <PictureWrapper>
                    <div className='w-5/6 sm:w-5/12 h-auto xl:w-5/6 xl:h-auto z-20 rounded-full'>
                        <motion.div animate={{ rotate: [0, 360] }} transition={{ repeat: Infinity, duration: 100, ease: "linear" }}>
                                    <img className='w-full h-auto' src={polynesian} alt="polynesian design" />
                        </motion.div>
                    </div>
                    <div className='absolute w-4/12 sm:w-2/12 xl:h-auto xl:w-2/6'>
                        <img className='w-full h-auto' src={image} alt="me" />
                    </div>
                </PictureWrapper>
            </Main>
            <Footer>
                <ul className='h-full flex flex-row items-center'>
                { footerLinks.map((element, index) =>
                        <li key={index} className='list-none mr-7 xl:mr-14 text-dark-gray'><ALink target='_blank' to={element.link}>{element.title}</ALink></li>
                    ) }
                </ul>
            </Footer>
        </BlockWrapper>
    
  )
}

export default Home;
