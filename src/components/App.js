import React from 'react';
import './App.css';

import { Route, Switch, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

import Home from '../pages/Home';
import About from '../pages/About';
import Menu from '../pages/Menu';
import Contact from '../pages/Contact';


const App = (props) => {
    const location = useLocation();
    const transitions = useTransition(location, location => location.pathname, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 500 }
    });


    return (
        <div className="App">
            <Header 
                title = 'Donec cursus diam at nisi.'
                src = '/header2.jpg'
                width = '100%'
                height = '500px'
            >
                <Navbar
                    width = '70%'
                    height = '300px'
                />
            </Header>

            {transitions.map(({ item: location, props, key }) => (
                <animated.div key={key} style={props}>
                    <Switch location={location}>
                        <Route exact path="/" component={Home} />
                        <Route exact path={"/about"} component={About} />
                        <Route exact path={["/menu", "/menu/:id"]} component={Menu} />
                        <Route exact path={"/contact"} component={Contact} />
                    </Switch>
                </animated.div>
            ))}

            <Footer>
                Nunc auctor varius libero, at ornare nisl lacinia nec. Nunc pulvinar risus ac dictum viverra. Donec porttitor purus eu justo.
            </Footer>
        </div>
    );
}

export default App;