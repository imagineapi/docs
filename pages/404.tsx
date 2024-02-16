function NotFound() {
    return (
        <div
            style={{
                textAlign: "center",
                padding: "20px",
                height: "100vh",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <h1 style={{ color: "#2c3e50" }}>Sorry, Page Not Found!</h1>
            <p style={{ color: "#7f8c8d" }}>
                It seems like you're lost. Let's get you back home.
            </p>
            <a
                href="https://docs.imagineapi.dev/"
                style={{
                    display: "inline-block",
                    marginTop: "20px",
                    padding: "10px 20px",
                    color: "#fff",
                    backgroundColor: "#3498db",
                    borderRadius: "5px",
                    textDecoration: "none",
                }}
            >
                Home
            </a>
        </div>
    );
}

export default NotFound;
