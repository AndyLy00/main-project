import React from 'react';
import '../index';
import {Outlet, NavLink} from 'react-router-dom';
import {faCat, faDog, faFeather} from '@fortawesome/free-solid-svg-icons';
import {Layout, Menu} from 'antd';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const {Footer, Sider} = Layout;
const cat = <FontAwesomeIcon icon={faCat}/>;
const dog = <FontAwesomeIcon icon={faDog}/>;
const parrot = <FontAwesomeIcon icon={faFeather}/>;


const MainPage: React.FC = () => {

    return (
        <Layout>
            <Sider className="sider" style={{position: "fixed", background: "#9BBEFF"}}>
                <input style={{height: 32, margin: 16, background: 'white', opacity: "0.8"}}/>
                <Menu style={{background: "#9BBEFF"}} mode="inline" defaultSelectedKeys={['4']}>
                    <div className="menu">
                        <header className="titles">
                            <NavLink to="/" className={({ isActive }) => (isActive ? 'active_title' : 'title')}> {cat}  Cat</NavLink>
                            <NavLink to="/dog" className={({ isActive }) => (isActive ? 'active_title' : 'title')}> {dog}  Dog</NavLink>
                            <NavLink to="/parrot" className={({ isActive }) => (isActive ? 'active_title' : 'title')}> {parrot}  Parrot</NavLink>
                        </header>
                    </div>
                </Menu>
            </Sider>
            <Layout className="site-layout" style={{marginLeft: 200}}>
                <main> <Outlet /> </main>
                <Footer style={{textAlign: 'center', zIndex: "1"}}>AndyLy Project ©2022</Footer>
            </Layout>
        </Layout>
    );
};

export default MainPage;