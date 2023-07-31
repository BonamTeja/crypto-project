import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Header = () => {
    const listItem = useSelector((state) => state.list.Watchlist);
    const data = useSelector((state) => state.editpage.edit)
    const registerItems = useSelector((state) => state.register.register)
    //const editItems = useSelector((state) => state.editpage.edit)
    
    const dispatch = useDispatch()
    let count = 0;
    for(let item of listItem){
        count = count + item.quantity
    }
    const logoutFunction = (e) =>{
        alert("If you logout, You will directed to Login or Register Page.")
    }
  return (
    <React.Fragment>
        <nav className="navbar navbar-expand-lg" style={{backgroundColor:" #f0f0f0"}}>
            <main className="container-fluid">
                <Link className="navbar-brand fw-bold" to="/">Crypto Clash</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <section className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item dropdown">
                        <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to='/settings'>Settings</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to='/allCoins'>All Coins</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to='/portfolio'>Portfolio</Link>
                        </li>

                    </ul>
                    <article className="d-flex text-center">
                        <ul className='navbar-nav nav-pills me-auto mb-2 mb-lg-0'>
                            <li className="nav-item mx-2 my-1">
                                <Link className='btn btn-danger text-white fw-bold' to='/list'>Watchlist({count})</Link>
                            </li>
                            <li className="nav-item mx-2 my-1">
                                <Link className="nav-link" id='login_header' onClick={(e) => logoutFunction(e)}>Logout</Link>
                            </li>
                            <li className="nav-item my-1">
                                <Link className="nav-link" id='register_header' to='/'>Register</Link>
                            </li>
                        </ul>
                    </article>
                </section>
            </main>
        </nav>
    </React.Fragment>
  )
}

export default Header