/**
 * 简单工厂模式 alias 静态工厂方法
 * 由一个工厂对象决定创建某一产品对象类的实例，用来创建同一类对象
 */

type Book = {
    name: string
    publishTime: string
    type: string
    getBookName: () => void
}

function createBook(name: string, publishTime: string, type: string) {
    const book = new Object() as Book;
    book.name = name;
    book.publishTime = publishTime;
    book.type = type;

    book.getBookName = () => {
        console.log(`book name: ${book.name}`);
    }

    return book;
}

const artBook = createBook('梵高的哲思', '1900-12-12', 'art');

artBook.getBookName();
















