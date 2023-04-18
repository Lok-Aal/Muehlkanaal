using Xunit;
using SWQ.Logic;

namespace SWQ.Tests.Logic
{
    public class ValidatorTests
    {
        [Fact]
        public void Validator_ValidateNumber_WorksProperlyWithNumberWithoutDelimiters()
        {
            var number = "+49152833720339";
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
        public void Validator_ValidateNumber_DoesNotAcceptNumberWithMoreThanTwoWhitespaces()
        {
            var number = "+49152 8337 203 3";
            var result = Validator.ValidateNumber(number);
            Assert.False(result);
        }

        [Fact]
        public void Validator_ValidateNumber_AcceptsStringSplitWithWhitespace()
        {
            var number = "+49152 8337 2033";
            var result = Validator.ValidateNumber(number);
            Assert.True(result);
        }

        [Fact]
        public void Validator_ValidateNumber_AcceptsStringSplitWithForwardslash()
        {
            var number = "+49152/8337/2033";
            var result = Validator.ValidateNumber(number);
            Assert.True(result);
        }

        [Fact]
        public void Validator_ValidateNumber_AcceptsStringSplitWithHyphen()
        {
            var number = "+49152-8337-2033";
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
    }
}