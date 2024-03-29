using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models.Requests
{
    public class LoginUserRequest
    {
        [Required]
        public string Email {get; set;}
        [Required]
        public string Password {get; set;}
    }
}
