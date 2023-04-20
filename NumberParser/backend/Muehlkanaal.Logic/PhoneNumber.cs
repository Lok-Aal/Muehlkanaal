namespace Muehlkanaal.NumberParser.Model {
    public class PhoneNumber {

        public PhoneNumber(int countryCode, int? areaCode, int localNumber, int extension) {
            CountryCode = countryCode;
            AreaCode = areaCode;
            LocalNumber = localNumber;
            Extension = extension;
        }

        public PhoneNumber(int countryCode, int? areaCode, int localNumber) {
            CountryCode = countryCode;
            AreaCode = areaCode;
            LocalNumber = localNumber;
        }

        public int CountryCode { get; set; }
        public int? AreaCode { get; set; }
        public int LocalNumber { get; set; }
        public int? Extension { get; set; }

        public override string ToString() {
            return '+' + CountryCode.ToString() + 
            '-' + '(' + AreaCode.ToString() + ')' + 
            '-' + LocalNumber.ToString() + 
            (Extension != null ? ('-' + (Extension.ToString())) : "");
        }
    }
}
