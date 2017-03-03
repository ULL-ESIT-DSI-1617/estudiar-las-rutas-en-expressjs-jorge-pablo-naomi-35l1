var gitbook = require('gitbook');

var book = new gitbook.Book('./txt/', {

	config: {

		output: './_book'
	}
});

book.parse().then(function(){

	return book.generate("website");
});