// pages/index.tsx
"use client";
import './home.css'; // Import your CSS for styling

export default function Home() {
    return (
        <>
            <div className="home">
                <h1>Welcome to Our Next.js App!</h1>
                <p className="greeting">We&apos;re glad to have you here. Explore our features and services!</p>
                
                <div className="cta-container">
                    <button className="cta-button" onClick={() => alert('Welcome! Enjoy your stay!')}>
                        Click Me for a Welcome Message
                    </button>
                </div>

                <div className="features">
                    <h2>What We Offer</h2>
                    <ul>
                        <li>🔍 Search our extensive library of resources.</li>
                        <li>📊 Access interactive data visualizations.</li>
                        <li>📝 Create and manage your own content.</li>
                        <li>🤝 Connect with others in our community.</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
