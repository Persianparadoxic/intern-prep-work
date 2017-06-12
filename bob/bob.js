var Bob = function(){

this.hey = function (input) {
  
    if (input.slice(-1)== '?'){
        return "Sure.";
    }
    else if (input.slice(-1)=='!'){
        return "Woah, chill out!";
    }
    else if(input.slice(-1)==' '){
        return "Fine. Be that way!";
    }    
    //Needs caps option
    
        
    
    
    else {
        return "Whatever.";
    }
}};
module.exports = Bob;