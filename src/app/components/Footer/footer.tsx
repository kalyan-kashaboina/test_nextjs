// components/Footer.tsx
import './footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>© {new Date().getFullYear()} My Company. All rights reserved.</p>
                <p>
                    <a href="/privacy" className="footer-link">Privacy Policy</a> | 
                    <a href="/terms" className="footer-link"> Terms of Service</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
