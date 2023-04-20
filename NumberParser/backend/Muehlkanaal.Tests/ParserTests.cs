using Xunit;
using Muehlkanaal.NumberParser.Logic;

namespace Muehlkanaal.Tests.Logic
{
    public class ParserTests{

        [Fact]
        public void Parser_ParseNumber_WorksProperlyWithValidNumber()
        {
            var number = "+49152833720339";
            var result = Parser.ParseNumber(number);
            Assert.Equal<string>("+49-(1528)-33720339", result.ToString());
        }
    }
}