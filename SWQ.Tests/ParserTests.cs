using Xunit;
using SWQ.Logic;

namespace SWQ.Tests.Logic
{
    public class ParserTests{

        [Fact]
        public void Parser_ParseNumber_WorksProperlyWithValidNumber()
        {
            var number = "+49152833720339";
            var result = NumberParser.ParseNumber(number);
            Assert.Equal<string>("49152833720339", result.ToString());
        }
    }
}