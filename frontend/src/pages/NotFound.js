import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/", {state: "Error not page"})
        }, 1000)
    }, [navigate])

    return (
        <h1>Not Found</h1>
    );
}

export default NotFound;