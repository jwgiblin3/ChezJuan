using ChezJuanWebAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChezJuanWebAPI.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class RecipeController : ControllerBase
    {
        IRecipeRepo repo;
        public RecipeController(IRecipeRepo _repo)
        {
            repo = _repo;
        }

        [HttpGet]
        [Route("GetRecipeAll")]
        public async Task<IActionResult> GetRecipeAll()
        {
            var results = await repo.GetRecipesAll();
            return Ok(results);
        }


        [HttpGet]
        [Route("GetRecipe/{recipeId:int}")]
        public async Task<IActionResult> GetRecipe(int recipeId)
        {
            var results = await repo.GetRecipeById(recipeId);
            return Ok(results);
        }

        [HttpGet]
        [Route("GetRecipeCategory")]
        public async Task<IActionResult> GetRecipeCategory()
        {
            var results = await repo.GetRecipeCatagories();
            return Ok(results);
        }

        [HttpGet]
        [Route("GetRecommendations")]
        public async Task<IActionResult> GetRecommendations()
        {
            var results = await repo.GetRecommendations();
            return Ok(results);
        }

        [HttpGet]
        [Route("GetRecipeComments/{recipeId:int}")]
        public async Task<IActionResult> GetRecipeComments(int recipeId)
        {
            var results = await repo.GetComments(recipeId);
            return Ok(results);
        }

        [HttpPost]
        [Route("SaveRecipeComments")]
        public async Task<IActionResult> SaveRecipeComments([FromBody] Comments comment)
        {
            await repo.SaveComments(comment);
            return Ok("Saved");
        }

        [HttpPost]
        [Route("SaveRating")]
        public async Task<IActionResult> SaveRating([FromBody] Ratings comment)
        {
            await repo.SaveRating(comment);
            return Ok("Saved");
        }
    }
}
