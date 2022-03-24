import { Outlet, Link } from 'react-router-dom'; 
import * as React from 'react';

const Layout = () => {

    const [selected, setSelected] = React.useState('home');
    
    return (
        <>
            <nav>
                <ul>
                    <li onClick={() => setSelected('home')}> 
                        <Link style={{color: selected === 'home'? 'green': 'red'}} to="/">Home</Link>
                    </li>
                    <li onClick={() => setSelected('blogs')}> 
                        <Link style={{color: selected === 'blogs'? 'green': 'red'}} to="/blogs">Blogs</Link>
                    </li>
                    <li onClick={() => setSelected('contacts')}> 
                        <Link style={{color: selected === 'contacts'? 'green': 'red'}} to="/contacts">Contacts</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Layout;