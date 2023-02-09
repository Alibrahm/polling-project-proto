import React, { useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import styled from "@emotion/styled";
import ClickAwayListener from '@mui/base/ClickAwayListener';
const Sidebar = () => {
  const [show, setShow] = useState(false);
  const handleClickAwayEvent = () => {
    setShow(!show);
  };
  return (
    <main className={show ? 'space-toggle' : null}>
      <header className={`header ${show ? 'space-toggle' : null}`}>

        <div className='header-toggle' onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`} style={{ color: 'white', width: 28 }}></i>
        </div>

        <div className='flex flex-row' style={{ display: 'flex', marginTop: 1 }}>
          <div className='mt-3' style={{ marginTop: 8, marginRight: 4 ,color:'white'}}>User</div>
          <div><Avatar /></div>
        </div>
      </header>
      {/* <ClickAwayListener onMouseOver={handleClickAwayEvent}> */}
      <aside onMouseEnter={() => setShow(true)} onMouseLeave={() => {
        setShow(false);
      }} className={`sidebar ${show ? 'show' : null}`}>
          <nav className='nav'>
            <div>
              <Link to='/' className='nav-logo'>
                <i className={`fas fa-home-alt nav-logo-icon`} style={{ color: 'white' }}></i>
                <span className='nav-logo-name' style={{ color: 'white' }} >Homepage</span>
              </Link>

              <div className='nav-list'>
                <Link to='/dashboard' className='nav-link active'>
                  <i className='fas fa-tachometer-alt nav-link-icon'></i>
                  <span className='nav-link-name'>Documents</span>
                </Link>
                <Link to='/meeting' className='nav-link'>
                  <i className='fas fa-hotel nav-link-icon'></i>
                  <span className='nav-link-name'>Meeting</span>
                </Link>
                <Link to='/gallery' className='nav-link'>
                  <i className='fas fa-image nav-link-icon'></i>
                  <span className='nav-link-name'>Polling</span>
                </Link>
                {/* <Link to='/gallery' className='nav-link'>
                <i className='fas fa-dollar-sign nav-link-icon'></i>
                <span className='nav-link-name'>Transaction</span>
              </Link> */}
              </div>
            </div>

            <Link to='/logout' className='nav-link'>
              <i className='fas fa-sign-out nav-link-icon'></i>
              <span className='nav-link-name'>Exit</span>
            </Link>
          </nav>
        </aside>
      {/* </ClickAwayListener> */}
      {/* <h1>Content</h1> */}
    </main>
  );
};

export default Sidebar;
