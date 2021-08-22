const Book = class {
    constructor(title, author, genre, description, colorful, blackAndWhite , pagesNumber, price, dateIssued) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.description = description;
        this.colorful = colorful;
        this.blackAndWhite = blackAndWhite;
        this.pagesNumber = pagesNumber;
        this.price = price;
        this.dateIssued = dateIssued;
    };
    bookAge() {
        let now = new Date();
        let acquired = new Date(this.dateIssued);
        let elapsed = now - acquired;
        let YearsSinceIssued = Math.floor(elapsed / (1000 * 3600 * 24 * 360));
        return YearsSinceIssued;
    };
};
export default Book;