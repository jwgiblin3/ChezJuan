using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChezJuanWebAPI.Models
{
    public class RecipeListtItem
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public string Time { get; set; }
        public int Difficulty { get; set; }
        public int Rating { get; set; }
        public int RatingCount { get; set; }
        public int Steps { get; set; }
    }
}
