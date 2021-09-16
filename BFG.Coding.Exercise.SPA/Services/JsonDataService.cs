using System;
using System.IO;
using System.Threading.Tasks;
using BFG.Coding.Exercise.SPA.Interfaces;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using BFG.Coding.Exercise.SPA.Models;
using Microsoft.Extensions.Configuration;

namespace BFG.Coding.Exercise.SPA.Services
{
    public class JsonDataService : IJsonDataService
    {
        public async Task<JsonData> GetJsonData(string fileName)
        {
            using StreamReader file = File.OpenText(Environment.CurrentDirectory + "\\"+ fileName);
            using JsonTextReader reader = new JsonTextReader(file);
            var data = await Task.Run(() => JToken.ReadFrom(reader));
            JsonData json = JsonConvert.DeserializeObject<JsonData>(data.ToString());
            return json;
        }
        public async Task<string> AppendJsonData(JsonData data, string fileName)
        {
            using StreamWriter file = File.CreateText(Environment.CurrentDirectory + "\\" + fileName);
            try
            {
                JsonSerializer serializer = new JsonSerializer();
                string json = JsonConvert.SerializeObject(data, Formatting.Indented);
                await Task.Run(() => serializer.Serialize(file, data));
                return "success";
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }
    }
}