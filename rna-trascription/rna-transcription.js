var DnaTranscriber = function () { };

DnaTranscriber.prototype.toRna = function (input) {
  
  
  //this.toRna =function(input){
  
  //var dna = input;
  var rna = '';
var invalidInput = new Error("Invalid input");
    for (var i =0; i<input.length; i++){
    
        if (input[i]=='A'){
         rna = rna + "U";
        }
        else if (input[i]=='C'){
          rna = rna + "G";
         }
         else if (input[i]=='T'){
          rna = rna + "A";
         }
          else if (input[i]=='G'){
          rna = rna+"C";
         }
         else if (input[i]=='X'){
             throw invalidInput;
         }
         else if (input[i]==false){
             throw invalidInput;
         }
    }
    return rna;
};
module.exports = DnaTranscriber;