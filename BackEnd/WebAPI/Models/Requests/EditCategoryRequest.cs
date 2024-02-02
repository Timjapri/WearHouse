using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models.Requests
{
    public class EditCategoryRequest
    {
        [Required]
        public string Cat {get; set;}
    }
}
