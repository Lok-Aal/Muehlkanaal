using System.Text.RegularExpressions;

namespace Muehlkanaal.NumberParser.Logic

{
    public static class Validator
    {
        public static bool ValidateNumber(String phoneNumber)
        {
            /*
            folgendes gilt:
                - die Nummer muss mit der Ländervorwahl und dem + beginnen (darf nicht mit 0 beginnen)
                - wenn nach der Ländervorwahl ein Leerzeichen kommt, dürfen die anderen Delimiter für die Vor-,Haupt- und Durchwahl verwendet werden
                - ansonsten müssen die Zahlen ohne weitere Zeichen eingegeben werden
                - eckigen Klammern dürfen nicht verwendet werden
            folgende Nummern sollen gehen:
                +49 0201 123456
                +44 0201123456
                +49 (941) 790-4780
                +440201123456
            */
            var validationRegex = @"^[+][0-9]{1,3}(\s(\([0-9]+\)|0?[1-9]+)[\-/ ]?[0-9]*[\-/ ]?[0-9]*|[0-9]+)$";
            bool isValidNumber = Regex.Match(phoneNumber, validationRegex).Success;
            return isValidNumber;
        }
    }
}