using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace WebAPI.Models
{
    public class Category
    {
        [Key]
        public Guid ID { get; set; }

        [MaxLength(255)]
        public string Cat { get; set; }
    }
}
