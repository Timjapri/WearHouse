using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models.Requests
{
    public class RegisterUserRequest
    {
        [Required]
        public string Name {get; set;}
        [Required]
        public string Email {get; set;}
        [Required]
        public string Password {get; set;}
    }
}