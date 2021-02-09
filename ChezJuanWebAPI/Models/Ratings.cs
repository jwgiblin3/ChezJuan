using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChezJuanWebAPI.Models
{
    public class Ratings
    {
        public int RecipeId { get; set; }
        public int Rating { get; set; }
        public string Email { get; set; }
    }
}
