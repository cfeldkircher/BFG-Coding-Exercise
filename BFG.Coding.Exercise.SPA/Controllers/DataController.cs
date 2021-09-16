using BFG.Coding.Exercise.SPA.Interfaces;
using System.Threading.Tasks;
using BFG.Coding.Exercise.SPA.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace BFG.Coding.Exercise.SPA.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DataController : ControllerBase
    {
        private readonly IJsonDataService _jsonDataService;
        private readonly IConfiguration _configuration;
        public DataController(IJsonDataService jsonDataService, IConfiguration configuration)
        {
            _jsonDataService = jsonDataService;
            _configuration = configuration;
        }
        
        [HttpGet]
        public async Task<IActionResult> GetJsonData()
        {
            return Ok(await _jsonDataService.GetJsonData(_configuration["AppSettings:fileName"]));
        }
        [HttpPost]
        public async Task<IActionResult> AppendJsonData([FromBody] JsonData data)
        {
            return Ok(await _jsonDataService.AppendJsonData(data,_configuration["AppSettings:fileName"]));
        }
    }
}