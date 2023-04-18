using SWQ.Model;
using SWQ.Logic;

Console.WriteLine("Enter a phone number: ");
var input = Console.ReadLine();

if(Validator.ValidateNumber(input)){
    NumberParser.ParseNumber(input);
}
else{
    Console.WriteLine("Invalid phone number");
}


