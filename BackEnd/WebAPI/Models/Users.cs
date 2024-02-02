using System;
using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public class Users
    {
        [Key]
        public Guid UserId { get; set; }

        [MaxLength(255)]
        public string Name { get; set; }

        [MaxLength(255)]
        public string Email { get; set; }
        
        [MaxLength(255)]
        public string Password { get; set; }
    }
}
