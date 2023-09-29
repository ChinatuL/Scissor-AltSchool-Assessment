import { dropdownList } from "../data";
import logo from "../assets/images/icon-logo.svg";
import logoLine from "../assets/images/icon-logo-line.svg";
import dropdownIcon from "../assets/images/icon-dropdown-black.svg";
import "../assets/css/header.css";
const Navbar = () => {
    return (
        <header className='header'>
            <div className='container'>
                <nav className='nav'>
                    <div className='logo-container'>
                        <a href='#'>
                            <div>
                                <img src={logo} alt='Logo' className='logo-img' />
                                <img src={logoLine} alt='logo-img' />
                                <span className='logo-text'>Scissor</span>
                            </div>
                        </a>
                    </div>
                    <input type='checkbox' id='menu-toggle' />
                    <label htmlFor='menu-toggle' className='menu-button-container'>
                        <div className='menu-button'></div>
                    </label>
                    <div className='menu'>
                        <ul className='nav-list'>
                            <li className='nav-item'>
                                <a
                                    href='#'
                                    className='nav-link active'
                                    rel='noreferrer'
                                >
                                    my URLs
                                </a>
                            </li>
                            <li className='nav-item dropdown'>
                                <a
                                    href='#features'
                                    className='nav-link'
                                    rel='noreferrer'
                                >
                                    Features
                                </a>
                                <button type='button' className='dropdown-btn'>
                                    <img
                                        src={dropdownIcon}
                                        alt='Select Feature'
                                    />
                                </button>
                                <ul className='dropdown-list'>
                                    {dropdownList.map((item) => {
                                        const { id, href, text } = item;
                                        return (
                                            <li className='dropdown-item' key={id}>
                                                <a
                                                    href={href}
                                                    className='dropdown-link'
                                                >
                                                    {text}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </li>
                            <li className='nav-item'>
                                <a
                                    href='#pricing'
                                    className='nav-link'
                                    rel='noreferrer'
                                >
                                    Pricing
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a
                                    href='#get-started'
                                    className='nav-link'
                                    rel='noreferrer'
                                >
                                    Analytics
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a
                                    href='#faqs'
                                    className='nav-link'
                                    rel='noreferrer'
                                >
                                    FAQs
                                </a>
                            </li>
                        </ul>
                        <div className='header-btns'>
                            <button type='button' className='login-btn'>
                                Log in
                            </button>
                            <a href='#free-trial' className='try-btn'>
                                Try it for free
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};
export default Navbar;
