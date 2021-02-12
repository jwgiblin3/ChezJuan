using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using ChezJuanWebAPI.Models;
using ChezJuanWebAPI.Repository;
using Dapper;
namespace ChezJuanWebAPI
{

    public interface IRecipeRepo
    {
        Task<IEnumerable<RecipeListtItem>> GetRecipesAll();
        Task<Recipe> GetRecipeById(int recipeId);
        Task<IEnumerable<RecipeCategory>> GetRecipeCatagories();
        Task<IEnumerable<Recommendations>> GetRecommendations();
        Task<IEnumerable<Comments>> GetComments(int recipeId);

        Task SaveComments(Comments content);
        Task<decimal> SaveRating(Ratings content);
    }

    public class RecipeRepo: IRecipeRepo
    {
        SqlServerConnectionProvider sqlProvider;

        public RecipeRepo(ISqlServerConnectionProvider _sqlProvider)
        {
            sqlProvider = (SqlServerConnectionProvider)_sqlProvider;
        }

        public async Task<Recipe> GetRecipeById(int recipeId)
        {
            Recipe recipe;
            using ( var connection = sqlProvider.GetDbConnection())
            {
                var results = connection.QueryMultipleAsync("Recipes_GetDetail",
                    new
                    {
                        @RecipeId = recipeId
                    }, commandTimeout: 60,
                    commandType: CommandType.StoredProcedure).Result;

                recipe = await results.ReadFirstAsync<Recipe>();
                recipe.RecipeIngrediants = await results.ReadAsync<RecipeIngrediant>();
                recipe.Steps = await results.ReadAsync<string>();
                recipe.Tags = await results.ReadAsync<string>();

            }

            return recipe;
        }

        public async Task<IEnumerable<RecipeCategory>> GetRecipeCatagories()
        {
            IEnumerable<RecipeCategory> content;
            using (var connection = sqlProvider.GetDbConnection())
            {
                var results = connection.QueryMultipleAsync("Recipes_GetCategories",
                    new
                    {
                    }, commandTimeout: 60,
                    commandType: CommandType.StoredProcedure).Result;

                content = await results.ReadAsync<RecipeCategory>();


            }

            return content;
        }

        public async Task<IEnumerable<RecipeListtItem>> GetRecipesAll()
        {
            IEnumerable<RecipeListtItem> content;
            using (var connection = sqlProvider.GetDbConnection())
            {
                var results = connection.QueryMultipleAsync("Recipes_GetAll",
                    new { }, 
                    commandTimeout: 60,
                    commandType: CommandType.StoredProcedure).Result;

                content = await results.ReadAsync<RecipeListtItem>();


            }

            return content;
        }

        public async Task<IEnumerable<Comments>> GetComments(int recipeId)
        {
            IEnumerable<Comments> content;
            using (var connection = sqlProvider.GetDbConnection())
            {
                var results = connection.QueryMultipleAsync("RecipeComment_GetByRecipeId",
                    new
                    {
                        @RecipeId = recipeId
                    }, commandTimeout: 60,
                    commandType: CommandType.StoredProcedure).Result;

                content = await results.ReadAsync<Comments>();
            }

            return content;
        }

        public async Task<IEnumerable<Recommendations>> GetRecommendations()
        {
            IEnumerable<Recommendations> content;
            using (var connection = sqlProvider.GetDbConnection())
            {
                var results = connection.QueryMultipleAsync("Recommendations_Get",
                    null, commandTimeout: 60,
                    commandType: CommandType.StoredProcedure).Result;

                content = await results.ReadAsync<Recommendations>();
            }

            return content;
        }
        public  Task SaveComments(Comments content)
        {

            using (var connection = sqlProvider.GetDbConnection())
            {
                var results = connection.QueryMultipleAsync("RecipeComment_Save",
                    new
                    {
                        @RecipeId = content.RecipeId,
                        @Name = content.Name,
                        @Email = content.Email,
                        @Image = content.Image,
                        @Comment = content.Comment,

                    }, commandTimeout: 60,
                    commandType: CommandType.StoredProcedure).Result;

            }

            return Task.CompletedTask;
        }

        public async Task<decimal> SaveRating(Ratings content)
        {
            decimal rating;

            using (var connection = sqlProvider.GetDbConnection())
            {

                var p = new DynamicParameters();
                p.Add("@RecipeId", content.RecipeId);
                p.Add("@Rating", content.Rating);
                p.Add("@Email",content.Email);
                p.Add("@RatingOut", dbType: DbType.Decimal, direction: ParameterDirection.Output);


                var results =  connection.QueryAsync<decimal>("RecipeRating_Save",
                    p, commandTimeout: 60,
                    commandType: CommandType.StoredProcedure).Result;

                rating =  p.Get<decimal>("@RatingOut");

            }

            return  rating;
        }
    }

}
