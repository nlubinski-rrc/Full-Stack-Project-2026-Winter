import "./Footer.css";

function Footer() {
    return(<div>
        <div className="page-links">
            <span>
                <a href="#">Home</a>
            </span>
            <span>
                <a href="#">Top Terms</a>
            </span>
            <span>
                <a href="#">My Terms</a>
            </span>
            <span>
                <a href="#">My Contexts</a>
            </span>
        </div>
        <div className="user-management-links">
            <span>
                <a href="#">Log In</a>
            </span>
        </div>
    </div>);
}

export default Footer;