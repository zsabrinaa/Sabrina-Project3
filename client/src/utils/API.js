import axios from "axios";
// const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
// const APIKEY = "+intitle:&key=AIzaSyDZmnUZvW6P7vu_hPFq3CP3rA5Uihp6YnM";
export default {
  // search: function(query) {
  //   return axios.get(BASEURL + query + APIKEY);
  // },
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books/saved");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(a,b,c,d) {
    return axios.post("/api/books/saved",{
      title: a,
      author: b.toString(),
      src: c,
      synopsis: d
    });
  }
};
