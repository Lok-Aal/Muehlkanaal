using System.Text.RegularExpressions;

namespace SWQ.Logic

{
    public static class Validator
    {
        public static bool ValidateNumber(String phoneNumber)
        {
            var validationRegex = @"^[+][0-9]{1,3}(\([0-9]+\)|0?[1-9]+)[\-/ ]?[0-9]*[\-/ ]?[0-9]*$";
            bool isValidNumber = Regex.Match(phoneNumber, validationRegex).Success;
            return isValidNumber;
        }
    }
}