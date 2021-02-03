using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChezJuanWebAPI.Models
{
    public class Recipe
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Time { get; set; }
        public string Image { get; set; }
        public int Servings { get; set; }
        public int Difficulty { get; set; }
        public int Rating { get; set; }
        public int RatingCount { get; set; }
        public int MadeIt { get; set; }
        public bool HasVideo { get; set; }
        public string Video { get; set; }
        public IEnumerable<RecipeIngrediant> RecipeIngrediants { get; set; }
        public IEnumerable<string> Tags { get; set; }
        public IEnumerable<string> Steps { get; set; }
    }

    public class RecipeIngrediant
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Ingrediant { get; set; }
        public int RecipeId { get; set; }
        public int CategoryId { get; set; }
        public int SortOrder { get; set; }
    }

}
