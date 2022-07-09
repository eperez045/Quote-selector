$(document).ready(function() {
    var quote;
    var author;
    
    function getQuote(){    
      var forismaticAPI = "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?";  
      
      $.getJSON(forismaticAPI, function(data) {
        console.log(data)
        quote = data.quoteText;
        author = data.quoteAuthor;
         $(".quote").text(data.quoteText);
         $(".author").text("-"+data.quoteAuthor);
      });   
    }; //getQuote function
    
  
      $("#newQuote").on("click", function(){
      getQuote();
      });
    
      getQuote();
  }); //docready