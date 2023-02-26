import Header from '../../component/Header';
import Footer from '../../component/Footer';


function DefaultLayout({children}) {
    return ( 
        <>
            <Header/>
                <div className='main'>{children}</div>
            <Footer/>
        </>
     )
}

export default DefaultLayout;