const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const books=getBook(3);



// install quokka extension



// const title=books.author;
// title
const {title,author,publicationDate,reviews,genres,pages,hasMovieAdaptation}=books
console.log(title,author,publicationDate,reviews,genres);
const [primaryGenre,secondaryGenre, ...otherrGenres]=genres
const [...otherrGenre]=genres
console.log(otherrGenre)
console.log(primaryGenre,secondaryGenre, otherrGenres)
const newGenres= [...genres, "epic fantacy"]   // spread operator
newGenres

const updatedBook ={...books,moviePublicationDate:'2001-08-11',pages:1210} //we can overwrite pages i.e content of books
updatedBook


const summary=`${title},is a ${pages} pages book, was written by ${author} in ${publicationDate.split("-")[0]}`  // template literal
summary



// ternaries instead of if else

const pagesRange=pages>1000? 'over one thousand':'less than one thousand';
pagesRange
console.log(`the book has ${pagesRange} pages`)

// function getYear(str){
//   return str.split("-")[0];
// }
const getYear= (str) => str.split("-")[0];
console.log(getYear(publicationDate))

//short circuiting
console.log(true && "some string");
console.log(false && "some string");
console.log(hasMovieAdaptation && "some string");

// falsy :0,', null,undefined
console.log('jonas')
console.log(0 && "some string")
console.log("" && "some string")
console.log(1 || "some string")

 const spanishTranslation= books.translations.spanish|| "Not Translated"
 spanishTranslation;



// optional chaining ?.
 console.log(books.reviews.librarything?.reviewsCount)
 const countWrong=books.reviews.librarything?.reviewsCount|| "no data"
 countWrong

 // knowledge collasing operator
 const count= books.reviews?.librarything?.reviewsCount?? "no data"
 count

 const getTotalcount=(book)=>{
  const goodread=book.reviews?.librarything?.reviewsCount;
  return goodread;
 }
 console.log(getTotalcount(books))


 
 // functional array method
 const bookss=getBooks();
 const x=[1,2,3,4,5].map((el)=>el*2);
 console.log(x)

 const titles=bookss.map((booksss)=>booksss.title);
 console.log(titles)

 const essentialData= bookss.map((booksss)=>{
    return [booksss.title,booksss.author]
    //   title:booksss.title,
    //   author:booksss.author,
    // };
 }); 
 essentialData

 const essentialDataa= bookss.map((booksss)=>{
  return {
    title:booksss.title,
    author:booksss.author,
  };
}); 
essentialDataa
const essentialDataaa= bookss.map((booksss)=>({
  title:booksss.title,
  author:booksss.author,
  reviewsCount:getTotalcount(booksss)
}))
essentialDataaa


const longBooks= bookss.filter((book)=>book.pages>500).filter((book)=>book.hasMovieAdaptation);
longBooks


const adventureBooks = bookss.filter((book)=>book.genres.includes("adventure")).map((book)=>book.title)
adventureBooks


const pagesAllBooks=bookss.reduce((acc,book)=>acc+book.pages,0)// accumulator
pagesAllBooks

const array=[33,53,55,4654,4534,5343,3534,53434];
const sorted = array.sort((a,b)=>b+a) //not functional it is muttable so not const variable is required
sorted
array
const sorted2 = array.slice().sort((a,b)=>b-a) // immutable
sorted2
array

const sortedByPages=bookss.slice().sort((a,b)=>b.pages-a.pages);
sortedByPages

// 1. Add Book object to array
const newBook={
  id:8,
  title: "Harry Potter and the Chamber of secrets",

};
const afterAdd=[...bookss,newBook]
afterAdd

const booksAfterDelete=afterAdd.filter((book)=>book.id!==3) //soft delete
booksAfterDelete

//3 update the book in the array
const booksAfterUpdate= booksAfterDelete.map((book)=>book.id===1?{...book,pages:1121}:book)
booksAfterUpdate


// Asynchronous js
console.log(fetch("https://jsonplaceholder.typicode.com/todos"));
fetch("https://jsonplaceholder.typicode.com/todos").then((res)=>res.json()).then((data)=>console.log(data))
console.log("rahul")


async function getTodos(){
  const res=await fetch("https://jsonplaceholder.typicode.com/todos");
  const data =await res.json;
  console.log(data);
  return data;
}

const todos= getTodos();
todos  //result of async is always a promise
console.log("vishwakarma")