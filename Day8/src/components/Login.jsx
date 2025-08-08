import './Login.css';

function Login() {
    return (
        <div className="container">
            <h1>Please Login</h1>
            <form >
                <div className="form-control">
                    <input id="username" type="text" required/>
                    <label htmlFor="username">
                        <span style={{ transitionDelay: "0ms" }}>E</span>
                        <span style={{ transitionDelay: "50ms" }}>m</span>
                        <span style={{ transitionDelay: "100ms" }}>a</span>
                        <span style={{ transitionDelay: "150ms" }}>i</span>
                        <span style={{ transitionDelay: "200ms" }}>l</span>
                    </label>
                </div>
                <div className="form-control">
                    <input id="password" type="password" required/>
                    <label htmlFor="password">
                        <span style={{ transitionDelay: "0ms" }}>P</span>
                        <span style={{ transitionDelay: "50ms" }}>a</span>
                        <span style={{ transitionDelay: "100ms" }}>s</span>
                        <span style={{ transitionDelay: "150ms" }}>s</span>
                        <span style={{ transitionDelay: "200ms" }}>w</span>
                        <span style={{ transitionDelay: "250ms" }}>o</span>
                        <span style={{ transitionDelay: "300ms" }}>r</span>
                        <span style={{ transitionDelay: "350ms" }}>d</span>
                    </label>
                </div>
                <button id="btn-login" type="submit">Login</button>
                <div className="footer">
                    <p>Don't have an account? <a id="btn-rg"href="#">Register</a></p>
                </div>
            </form>
        </div>
    )
}

export default Login;