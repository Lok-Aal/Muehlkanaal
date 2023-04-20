using Microsoft.AspNetCore.Mvc;
using Muehlkanaal.NumberParser.Logic;

namespace Muehlkanaal.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class NumberParserController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<NumberParserController> _logger;

        public NumberParserController(ILogger<NumberParserController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "ValidatePhoneNumber")]
        public bool Get(string numberString)
        {
            return Validator.ValidateNumber(numberString);
        }
    }
}