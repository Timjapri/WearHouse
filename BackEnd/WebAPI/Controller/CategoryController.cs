using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Data;
using WebAPI.Models;
using WebAPI.Models.Requests;
using WebAPI.Models.Results;

namespace WebAPI.Controller
{
    [Route("api/[controller]")]
    [ApiController]

    public class CategoryController : ControllerBase
    {
        public readonly AppDbContext _context;

        public CategoryController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<CategoryResult>>> Get()
        {
            var categories = await _context.Category.Select(x => new CategoryResult{
                                                        ID = x.ID.ToString(),
                                                        Cat = x.Cat
                                                    }).ToListAsync();
            return categories;
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody] CreateCategoryRequest request)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var newCategory = new Category{
                ID = Guid.NewGuid(),
                Cat = request.Cat
            };

            _context.Category.Add(newCategory);
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpPut]
        public async Task<IActionResult> Edit(string id, [FromBody] EditCategoryRequest request)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var category = await _context.Category.FirstOrDefaultAsync(s => s.ID.ToString() == id);

            if(category == null)
            {
                return NotFound("Category not found");
            }

            category.Cat = request.Cat;

            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpDelete]
        public async Task<IActionResult> Delete(string id)
        {
            var category = await _context.Category.FirstOrDefaultAsync(s => s.ID.ToString() == id);

            if(category == null)
            {
                return NotFound("Category not found");
            }

            _context.Category.Remove(category);
            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}
