import DefaultLayout from "./DefaultLayout";

function Layout({children}) {
    return ( 
        <DefaultLayout>
            {children}
        </DefaultLayout>
     )
}

export default Layout;