using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Data;
using System.Data.SqlClient;
using System.Collections.Generic;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityDataController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CityDataController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet("{city}")]
        public async Task<IActionResult> GetCityData(string city)
        {
            var cityData = await _context.Citieses
                .FirstOrDefaultAsync(c => c.cityName.ToLower() == city.ToLower());

            if (cityData == null)
            {
                return NotFound();
            }

            return Ok(cityData);
        }

        [HttpPost]
        public async Task<IActionResult> PostCityData([FromBody] Cities cityData)
        {
            if (cityData == null)
            {
                return BadRequest("City data is null.");
            }

            cityData.cityName = cityData.cityName.ToLower();
            if (await _context.Citieses.AnyAsync(c => c.cityName == cityData.cityName))
            {
                return Conflict("City data already exists.");
            }

            _context.Citieses.Add(cityData);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetCityData), new { city = cityData.cityName }, cityData);
        }

        [HttpPut("{city}")]
        public async Task<IActionResult> PutCityData(string city, [FromBody] Cities cityData)
        {
            if (cityData == null)
            {
                return BadRequest("City data is null.");
            }

            var existingCityData = await _context.Citieses
                .FirstOrDefaultAsync(c => c.cityName.ToLower() == city.ToLower());

            if (existingCityData == null)
            {
                return NotFound();
            }

            existingCityData.TGBNumber = cityData.TGBNumber;
            existingCityData.buisnessCount = cityData.buisnessCount;
            existingCityData.projectCount = cityData.projectCount;

            _context.Citieses.Update(existingCityData);
            await _context.SaveChangesAsync();

            return Ok(existingCityData);
        }

        [HttpDelete("{city}")]
        public async Task<IActionResult> DeleteCityData(string city)
        {
            var cityData = await _context.Citieses
                .FirstOrDefaultAsync(c => c.cityName.ToLower() == city.ToLower());

            if (cityData == null)
            {
                return NotFound();
            }

            _context.Citieses.Remove(cityData);
            await _context.SaveChangesAsync();

            return NoContent();
        }


        //22222222222222222222222222222222222222222222222222222222222222

        // ikinci HTTP method: {category}  kısmı 


        [HttpGet("category/{category}")]
        public async Task<IActionResult> GetCategoryData(string category)
        {
            var categoryData = await _context.Categories
                .FirstOrDefaultAsync(c => c.categoryName.ToLower() == category.ToLower());

            if (categoryData == null)
            {
                return NotFound();
            }

            return Ok(categoryData);
        }




        //3. KISIM başlangıç
        // Belirli bir kategoriye sahip tüm şehirleri listeleyen endpoint
        [HttpGet("category/{category}/cities")]
        public async Task<IActionResult> GetCitiesWithCategory(string category)
        {
            var categoryData = await _context.Categories
                .FirstOrDefaultAsync(c => c.categoryName.ToLower() == category.ToLower());

            if (categoryData == null)
            {
                return NotFound();
            }

            // 3.1 kısım başlnagı.
            var citiesWithCategory = await _context.Citieses
                 .Where(c => c.categoryID == categoryData.categoryID)
                 .ToListAsync();

            //değişiklik ifin içinde oldu
            if (citiesWithCategory == null || !citiesWithCategory.Any())
            {
                return NotFound();
            }

            var result = new List<object>();
            foreach (var city in citiesWithCategory)
            {
                result.Add(new
                {
                    categoryID = categoryData.categoryID,
                    categoryName = categoryData.categoryName,
                    cityID = city.cityID,
                    city = city.cityName
                });
            }

            return Ok(result);
        }
        //3.1 son




        //3.kısım son


        // POST api/citydata/category
        [HttpPost("category")]
        public async Task<IActionResult> PostCategoryData([FromBody] Category categoryData)
        {
            if (categoryData == null)
            {
                return BadRequest("Category data is null.");
            }

            categoryData.categoryName = categoryData.categoryName.ToLower();
            if (await _context.Categories.AnyAsync(c => c.categoryName == categoryData.categoryName))
            {
                return Conflict("Category data already exists.");
            }

            _context.Categories.Add(categoryData);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetCategoryData), new { category = categoryData.categoryName }, categoryData);
        }


        // PUT api/citydata/category/{category}
        [HttpPut("category/{category}")]
        public async Task<IActionResult> PutCategoryData(string category, [FromBody] Category categoryData)
        {
            if (categoryData == null)
            {
                return BadRequest("Category data is null.");
            }

            var existingCategoryData = await _context.Categories
                .FirstOrDefaultAsync(c => c.categoryName.ToLower() == category.ToLower());

            if (existingCategoryData == null)
            {
                return NotFound();
            }

            _context.Categories.Update(existingCategoryData);
            await _context.SaveChangesAsync();

            return Ok(existingCategoryData);
        }



        // DELETE api/citydata/category/{category}
        [HttpDelete("category/{category}")]
        public async Task<IActionResult> DeleteCategoryData(string category)
        {
            var categoryData = await _context.Categories
                .FirstOrDefaultAsync(c => c.categoryName.ToLower() == category.ToLower());

            if (categoryData == null)
            {
                return NotFound();
            }

            _context.Categories.Remove(categoryData);
            await _context.SaveChangesAsync();

            return NoContent();
        }

    }
}

