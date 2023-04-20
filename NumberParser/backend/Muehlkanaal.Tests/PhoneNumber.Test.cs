using Xunit;
using Muehlkanaal.NumberParser.Model;

namespace Muehlkanaal.Tests.Logic
{
    public class PhoneNumberTests
    {
        [Fact]
        public void PhoneNumber_ToString_WorksProperlyWithAllProperties()
        {
            var number = new PhoneNumber(49, 1528, 33720339, 333);
            var result = number.ToString();
            Assert.Equal<string>("+49-(1528)-33720339-333", result);
        }
        [Fact]
        public void PhoneNumber_ToString_WorksProperlyWithLessProperties()
        {
            var number = new PhoneNumber(49, 1528, 33720339);
            var result = number.ToString();
            Assert.Equal<string>("+49-(1528)-33720339", result);
        }
    }
}