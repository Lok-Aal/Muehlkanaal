using Xunit;
using Muehlkanaal.NumberParser.Logic;

namespace Muehlkanaal.Tests.Logic
{
    public class ValidatorTests
    {
        [Fact]
        public void Validator_ValidateNumber_WorksProperlyWithNumberWithoutDelimiters()
        {
            var number = "+4915283372033";
            var result = Validator.ValidateNumber(number);
            Assert.True(result);
        }

        [Fact]
        public void Validator_ValidateNumber_DoesNotAcceptNumberWithoutPlus()
        {
            var number = "4915283372033";
            var result = Validator.ValidateNumber(number);
            Assert.False(result);
        }

        [Fact]
        public void Validator_ValidateNumber_DoesNotAcceptNumberWithMoreThanThreeWhitespaces()
        {
            var number = "+49 152 8337 203 3";
            var result = Validator.ValidateNumber(number);
            Assert.False(result);
        }

        [Fact]
        public void Validator_ValidateNumber_AcceptsStringSplitWithWhitespace()
        {
            var number = "+49 152 8337 2033";
            var result = Validator.ValidateNumber(number);
            Assert.True(result);
        }

        [Fact]
        public void Validator_ValidateNumber_AcceptsStringSplitWithForwardslash()
        {
            var number = "+49 152/8337/2033";
            var result = Validator.ValidateNumber(number);
            Assert.True(result);
        }

        [Fact]
        public void Validator_ValidateNumber_AcceptsStringSplitWithHyphen()
        {
            var number = "+49 152-8337-2033";
            var result = Validator.ValidateNumber(number);
            Assert.True(result);
        }

        [Fact]
        public void Validator_ValidateNumber_AcceptsCustomerExample1()
        {
            var number = "+49 0201 123456";
            var result = Validator.ValidateNumber(number);
            Assert.True(result);
        }

        [Fact]
        public void Validator_ValidateNumber_AcceptsCustomerExample2()
        {
            var number = "+44 0201123456";
            var result = Validator.ValidateNumber(number);
            Assert.True(result);
        }

        [Fact]
        public void Validator_ValidateNumber_AcceptsCustomerExample3()
        {
            var number = "+49 (941) 790-4780";
            var result = Validator.ValidateNumber(number);
            Assert.True(result);
        }

        [Fact]
        public void Validator_ValidateNumber_AcceptsCustomerExample4()
        {
            var number = "+440201123456";
            var result = Validator.ValidateNumber(number);
            Assert.True(result);
        }

        [Fact]
        public void Validator_ValidateNumber_AcceptsPhoneNumberWithLengthLessThan15()
        {
            var number = "+440201123456";
            var result = Validator.ValidateNumber(number);
            Assert.True(result);
        }

        [Fact]
        public void Validator_ValidateNumber_AcceptsPhoneNumberWithLengthEquals15()
        {
            var number = "+440201123456111";
            var result = Validator.ValidateNumber(number);
            Assert.True(result);
        }

        [Fact]
        public void Validator_ValidateNumber_DoesNotAcceptPhoneNumberWithLengthGreaterThan15()
        {
            var number = "+4402011234561111";
            var result = Validator.ValidateNumber(number);
            Assert.False(result);
        }
    }
}