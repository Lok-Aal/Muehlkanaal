using Muehlkanaal.NumberParser.Model;

namespace Muehlkanaal.NumberParser.Logic
{

    public static class Parser
    {
        public static PhoneNumber ParseNumber(string number)
        {
            var phoneNumberUtil = PhoneNumbers.PhoneNumberUtil.GetInstance();
            var parseResult = phoneNumberUtil.Parse(number, null);
            var internationalNumber = phoneNumberUtil.Format(parseResult, PhoneNumbers.PhoneNumberFormat.INTERNATIONAL);
            var countryCode = parseResult.CountryCode;
            var areaCode = internationalNumber.Substring(internationalNumber.IndexOf(" "), internationalNumber.LastIndexOf(" ") - internationalNumber.IndexOf(" "));
            var mainNumber = internationalNumber.Substring(internationalNumber.LastIndexOf(" "));
            var regionInfoLength = phoneNumberUtil.GetLengthOfGeographicalAreaCode(parseResult);
            Console.WriteLine(areaCode);
            var extension = parseResult.Extension;
            var numberType = phoneNumberUtil.GetNumberType(parseResult);
            Console.WriteLine(extension.GetType());
            Console.WriteLine($"{countryCode} {areaCode} {mainNumber} {extension}");
            Console.WriteLine($"Number type: {numberType}");


            // TODO: Extension iwie lösen 
            // Entweder PhoneNumber nullable machen ODER verschiedene Constructor
            var phoneNumber = new PhoneNumber(countryCode, (areaCode != string.Empty ? (Int32.Parse(areaCode)) :  null), Int32.Parse(mainNumber), 0);
            return phoneNumber;
        }
    }
}