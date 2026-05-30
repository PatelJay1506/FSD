import {BrowserRouter as Router,Routes,Route,Link}from 'react-router-dom'
import img1 from './assets/react.svg'
import img2 from './assets/vite.svg'
import img3 from './assets/hero.png'

    import Home from './Home.jsx'
    import Contact from './Contact.jsx'
    import Nopage from './Nopage.jsx'
    import About from './About.jsx'
    import Product from './Product.jsx'
    import US5 from './US5.jsx'
    import US1 from './US1.jsx'
    import US4 from './US4.jsx'
    import US7 from './US7.jsx'
    import US8 from './US8.jsx'
    import US9 from './US9.jsx'
   
    import US12 from './U12.jsx'
// var obj= [ 
//     {name:"MI",price:'2000',image:img1},
//     {name:"GT",price:'2200',image:img2},
//     {name:"RCB",price:'2500',image:img3}
// ]


    function MainR(){
        return(
            <>
               <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                        <li><Link to="/About">about</Link></li>
                        <li><Link to="/US7">US7</Link></li>
                        <li><Link to="/US8">US8</Link></li>
                        <li><Link to="/US9">US9</Link></li>
                        
                         <li><Link to="/US12">US12</Link></li>

                    </ul>
                </div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="Contact" element={<Contact/>}/>
                    <Route path="About" element={<About/>}/>
                    <Route path="*" element={<Nopage/>}/>
                    <Route path="US8" element={<US8/>}/>
                    
                    <Route path="US12" element={<US12/>}/>

                </Routes>
               </Router>
            </>

            
            // <Router>
            //     <>
            //     <li><link to='/Product'>Product</link></li>

            //     <Route path='Product' element='{<Product>}'/>
            //     </>
            // </Router>
        )
    }
export default MainR