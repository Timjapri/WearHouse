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

    public class UsersController : ControllerBase
    {
        public readonly AppDbContext _context;

        public UsersController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserResult>> Login([FromBody] LoginUserRequest request)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var checkUser = await _context.Users.Where(x => x.Email == request.Email && x.Password == request.Password)
                                                .Select(x => new UserResult{
                                                    Name = x.Name,
                                                    UserId = x.UserId.ToString()
                                                })
                                                .FirstOrDefaultAsync();
            if(checkUser == null)
            {
                return NotFound("Wrong Email and Password!");
            }

            return checkUser;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterUserRequest request)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var checkEmail = _context.Users.Where(x => x.Email == request.Email).Count();
            if(checkEmail > 0) return NotFound("Email already registered!");

            var checkName = _context.Users.Where(x => x.Name == request.Name).Count();
            if(checkName > 0) return NotFound("Name already registered!");

            var newUser = new Users{
                UserId = Guid.NewGuid(),
                Name = request.Name,
                Email = request.Email,
                Password = request.Password
            };

            _context.Users.Add(newUser);
            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}
