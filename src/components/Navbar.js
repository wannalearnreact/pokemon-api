import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to='/' className='navbar-brand'>
                Home
            </Link>
            <form className='form-inline'>
                <input
                    className='form-control mr-sm-2'
                    type='search'
                    placeholder='Search'
                    aria-label='Search'
                />
                <button
                    className='btn btn-outline-success my-2 my-sm-0'
                    type='submit'
                >
                    Search
                </button>
            </form>
        </nav>
    );
};

export default Navbar;
