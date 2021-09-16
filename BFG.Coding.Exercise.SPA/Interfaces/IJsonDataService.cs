using BFG.Coding.Exercise.SPA.Models;
using System.Threading.Tasks;

namespace BFG.Coding.Exercise.SPA.Interfaces
{
    public interface IJsonDataService
    {
        Task<JsonData> GetJsonData(string fileName);
        Task<string> AppendJsonData(JsonData data, string fileName);
    }
}
