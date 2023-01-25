import BookList from "./pages/BookList";
import Book from "./pages/Book";
import NewBook from "./pages/NewBook";
import { Route, Routes } from "react-router-dom";
import BookLayout from "./pages/BookLayout";

const BookRoutes = () => {
    return (
        <>
            <Routes>
                <Route element={<BookLayout />}>
                    {/* <Route path="" element={<BookList />} /> */}
                    <Route index element={<BookList />} /> {/* BOTH ARE IDENTICAL */}
                    <Route path=":id" element={<Book />}></Route>
                    <Route path="new" element={<NewBook />} />
                </Route>
            </Routes>
        </>
    );
}

export default BookRoutes;