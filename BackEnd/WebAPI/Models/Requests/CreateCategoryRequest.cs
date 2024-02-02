using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models.Requests
{
    public class CreateCategoryRequest
    {
        [Required]
        public string Cat {get; set;}
    }
}
