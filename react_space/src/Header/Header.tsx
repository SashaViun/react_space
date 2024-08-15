import './Header.css';


function Header() {
    return (
        <>
        <div className="content">
        <div className="logo">
            <button className="button" role="button">LOGO</button>
        </div>
        <div>
            <header>
                <nav>
                    <ul className='header'>
                        <li><a href="/">HOME</a></li>
                        <li><a href="/about">ABOUT US</a></li>
                        <li><a href="/qa">QA</a></li>
                        <li><a href="/contact">CONTACT FORM</a></li>
                    </ul>
                </nav>
            </header>
        </div>
        <div className="contact">
            <button className="button" role="button">CONTACT FORM</button>           
        </div>
        </div>
        </>
    )
}

export default Header