import { Link, useOutletContext, useParams } from "react-router-dom";

const Book = () => {
    const { id } = useParams();
    const obj = useOutletContext();
    return (
        <>
            <h1>Book {id} </h1>
            <h2>obj.hello: {obj.hello}</h2>
            <Link to="/books">Back to BookList</Link>
        </>
    );
}

export default Book;