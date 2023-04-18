using SWQ.Model;

namespace SWQ.Logic
{

    public static class NumberParser
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
            Console.WriteLine(regionInfoLength);
            var regionInfo = mainNumber.Substring(0, regionInfoLength);
            var extension = parseResult.Extension;
            var numberType = phoneNumberUtil.GetNumberType(parseResult);
            Console.WriteLine(extension.GetType());
            Console.WriteLine($"{countryCode} {regionInfo} {mainNumber} {extension}");
            Console.WriteLine($"Number type: {numberType}");

            var phoneNumber = new PhoneNumber(countryCode, Int32.Parse(areaCode), Int32.Parse(mainNumber), 0);
            return phoneNumber;
        }
    }
}