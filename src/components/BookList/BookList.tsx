import { baseURL } from "src/api/constants";
import { BookType } from "src/types/book";

import { BookListContainer, StyledBookItem } from "./BookList.styles";

interface BookListProps {
  books: BookType[];
}

export const BookList = ({ books }: BookListProps) => {
  return (
    <BookListContainer data-testid="book-list-container">
      {books.map(({ id, imageSrc, title }) => {
        return (
          <StyledBookItem
            to={`/books/${id}`}
            key={id}
            data-testid={`book-item-${id}`}
          >
            <img
              src={`${baseURL}/${imageSrc}`}
              alt="book cover"
              data-testid={`book-image-${id}`}
            />
            <span data-testid={`book-title-${title}`}>{title}</span>
          </StyledBookItem>
        );
      })}
    </BookListContainer>
  );
};
