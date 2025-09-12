export type Book = {
  id: string;
  volumeInfo: {
    title?: string;
    authors?: string[];
    description?: string;
    categories?: string[];
    imageLinks?: {
      thumbnail?: string;
    };
    listPrice?: {
      amount?: number;
    };
    infoLink?: string;
  };
};
