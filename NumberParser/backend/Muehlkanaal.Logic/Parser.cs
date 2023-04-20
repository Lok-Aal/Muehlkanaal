using Muehlkanaal.NumberParser.Model;
using System.Text.RegularExpressions;

namespace Muehlkanaal.NumberParser.Logic
{

    public static class Parser
    {
        public static PhoneNumber ParseNumber(string number)
        {
            var phoneNumberUtil = PhoneNumbers.PhoneNumberUtil.GetInstance();
            Console.WriteLine(number);
            var segregators = Regex.Matches(number, @"[\-/ ]", RegexOptions.None,
                                               TimeSpan.FromSeconds(1));
            Console.WriteLine($"Segregator count: {segregators.Count}");
            foreach (Match match in segregators)
            {
                Console.WriteLine($"{match.Value} at {match.Index}");
            }
            Console.WriteLine();
            var parseResult = phoneNumberUtil.Parse(number, null);
            var internationalNumber = phoneNumberUtil.Format(parseResult, PhoneNumbers.PhoneNumberFormat.INTERNATIONAL);
            var countryCode = parseResult.CountryCode;
            var areaCode = internationalNumber.Substring(internationalNumber.IndexOf(" "), internationalNumber.LastIndexOf(" ") - internationalNumber.IndexOf(" "));
            var mainNumber = internationalNumber.Substring(internationalNumber.LastIndexOf(" "));
            var regionInfoLength = phoneNumberUtil.GetLengthOfGeographicalAreaCode(parseResult);
            var extension = parseResult.Extension;
            var numberType = phoneNumberUtil.GetNumberType(parseResult);
            Console.WriteLine($"{countryCode} {areaCode} {mainNumber} {extension}");
            Console.WriteLine($"Number type: {numberType}");

            var phoneNumber = new PhoneNumber(countryCode, (areaCode != string.Empty ? (Int32.Parse(areaCode)) : null), Int32.Parse(mainNumber), 0);
            return phoneNumber;
        }
    }
}