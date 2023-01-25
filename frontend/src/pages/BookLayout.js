import { Link, Outlet, useSearchParams } from "react-router-dom";

const BookLayout = () => {
    const [searchParams, setSearchParams] = useSearchParams({ n: 3 })
    const number = searchParams.get("n");

    return (
        <>
            <Link to="/books/1">Book 1</Link>
            <br></br>
            <Link to="/books/2">Book 2</Link>
            <br></br>
            <Link to={`/books/${number}`}>Book {number}</Link>
            <br></br>
            <Link to="/books/new">Add new book</Link>
            <Outlet context={{ hello: "World" }} />
            <input type="number" onChange={(e) => setSearchParams({ n: e.target.value })} value={number} />
        </>
    );
}

export default BookLayout;