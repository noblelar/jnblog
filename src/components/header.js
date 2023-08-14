import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../usercontext';

function Header() {
    const { setUserInfo, userInfo } = useContext(UserContext);
    useEffect(() => {
        fetch('https://blogserver-production.up.railway.app/profile', {
            credentials: 'include',
        }).then(response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
            });
        });
    },);

    function logout() {

        fetch('https://blogserver-production.up.railway.app/logout', {
            credentials: 'include',
            method: 'POST',
        });
        setUserInfo(null);

    }

    const username = userInfo?.username;

    return (
        <header>
            <Link to="/" className="logo" > Myblog </Link>
            <nav>
                {username && (
                    <>
                    <span>Hello, {username} </span>
                        <Link to={"/create"}> Create new post</Link>
                        <Link to={'/'} onClick={logout}> Logout</Link>
                    </>
                )}
                {!username && (
                    <>
                        <Link to="/login">Login </Link>
                        <Link to="/register">Register </Link>
                    </>
                )}
            </nav>
        </header>
    )
}

export default Header;
