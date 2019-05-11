import axios from "axios";

export default {
  // search: function(query) {
  //   return axios.get(BASEURL + query + APIKEY);
  // },
  // Gets all books
  getItems: function() {
    return axios.get("/api/items");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  createAccount: function(a,b){
    return axios.post("/api/signup",{
      email: a,
      password: b
    });
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // saveSignUp: function()
  // Saves a book to the database
  // saveBook: function(a,b,c,d) {
  //   return axios.post("/api/books/saved",{
  //     title: a,
  //     author: b.toString(),
  //     src: c,
  //     synopsis: d
  //   });
  // }
};
