using Muehlkanaal.NumberParser.Model;
using Muehlkanaal.NumberParser.Logic;

Console.WriteLine("Enter a phone number: ");
var input = Console.ReadLine();

if(Validator.ValidateNumber(input)){
    Parser.ParseNumber(input);
}
else{
    Console.WriteLine("Invalid phone number");
}


