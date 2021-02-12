using ChezJuanWebAPI.Models;
using ChezJuanWebAPI.Repository;
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
        IRecipeRepo recipeRepo;
        IUserRepo userRepo;
        public RecipeController(IRecipeRepo _recipeRepo, IUserRepo _userRepo)
        {
            recipeRepo = _recipeRepo;
            userRepo = _userRepo;
        }

        [HttpGet]
        [Route("GetRecipeAll")]
        public async Task<IActionResult> GetRecipeAll()
        {
            var results = await recipeRepo.GetRecipesAll();
            return Ok(results);
        }


        [HttpGet]
        [Route("GetRecipe/{recipeId:int}")]
        public async Task<IActionResult> GetRecipe(int recipeId)
        {
            var results = await recipeRepo.GetRecipeById(recipeId);
            return Ok(results);
        }

        [HttpGet]
        [Route("GetRecipeCategory")]
        public async Task<IActionResult> GetRecipeCategory()
        {
            var results = await recipeRepo.GetRecipeCatagories();
            return Ok(results);
        }

        [HttpGet]
        [Route("GetRecommendations")]
        public async Task<IActionResult> GetRecommendations()
        {
            var results = await recipeRepo.GetRecommendations();
            return Ok(results);
        }

        [HttpGet]
        [Route("GetRecipeComments/{recipeId:int}")]
        public async Task<IActionResult> GetRecipeComments(int recipeId)
        {
            var results = await recipeRepo.GetComments(recipeId);
            return Ok(results);
        }

        [HttpPost]
        [Route("SaveRecipeComments")]
        public async Task<IActionResult> SaveRecipeComments([FromBody] Comments comment)
        {
            await recipeRepo.SaveComments(comment);
            return Ok("Saved");
        }

        [HttpPost]
        [Route("SaveRating")]
        public async Task<IActionResult> SaveRating([FromBody] Ratings comment)
        {
            var results = await recipeRepo.SaveRating(comment);
            return Ok(results);
        }

        #region "User"
        #endregion
        [HttpPost]
        [Route("SaveUser")]
        public async Task<IActionResult> SaveUser([FromBody] ResponseUser content)
        {
            var results = await userRepo.SaveUser(content);
            return Ok(results);
        }

        [HttpGet]
        [Route("GetUser/{id}")]
        public async Task<IActionResult> GetUser(string id)
        {
            var results = await userRepo.GetUserById(id);
  
            return Ok(results);
        }
    }
}
