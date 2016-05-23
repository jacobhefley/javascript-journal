exports.Entry = function Entry(title, body){
  this.title = title;
  this.body = body;
  this.words = function (){ 
  	return this.body.split(" ").length; 
  }
}