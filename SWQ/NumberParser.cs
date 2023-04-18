using SWQ.Model;

namespace SWQ.Logic
{

    public static class NumberParser
    {
        public static PhoneNumber ParseNumber(string number)
        {
            var phoneNumberUtil = PhoneNumbers.PhoneNumberUtil.GetInstance();
            var parseResult = phoneNumberUtil.Parse(number, null);
            var countryCode = parseResult.CountryCode;
            var regionInfo = phoneNumberUtil.GetRegionCodeForNumber(parseResult);
            var internationalNumber = phoneNumberUtil.Format(parseResult, PhoneNumbers.PhoneNumberFormat.INTERNATIONAL);
            var mainNumber = internationalNumber.Substring(internationalNumber.LastIndexOf(" "));
            var extension = parseResult.Extension;
            var numberType = phoneNumberUtil.GetNumberType(parseResult);
            Console.WriteLine($"{countryCode} {regionInfo} {mainNumber} {extension}");
            Console.WriteLine($"Number type {numberType}");

            var phoneNumber = new PhoneNumber(countryCode, Int32.Parse(regionInfo), Int32.Parse(mainNumber), Int32.Parse(extension));
            return phoneNumber;
        }
    }
}