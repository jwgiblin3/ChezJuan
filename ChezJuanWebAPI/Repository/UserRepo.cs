using ChezJuanWebAPI.Models;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace ChezJuanWebAPI.Repository
{
    
    public interface IUserRepo
    {
        Task<ResponseUser> GetUserById(string id);
        Task<ResponseUser> SaveUser(ResponseUser content);
    }
    
    public class UserRepo : IUserRepo
    {
        SqlServerConnectionProvider sqlProvider;

        public UserRepo(ISqlServerConnectionProvider _sqlProvider)
        {
            sqlProvider = (SqlServerConnectionProvider)_sqlProvider;
        }

        public async Task<ResponseUser> GetUserById(string id)
        {
            User content;
            using (var connection = sqlProvider.GetDbConnection())
            {
                var results = connection.QueryMultipleAsync("Users_GetById",
                    new
                    {
                        @Id = Guid.Parse(id)
                    }, commandTimeout: 60,
                    commandType: CommandType.StoredProcedure).Result;

                content = await results.ReadFirstAsync<User>();
            }

            return new ResponseUser { Id = content.Id.ToString(), Name = content.Name, Email = content.Email, ImageUrl = content.ImageUrl };
        }

        public async Task<ResponseUser> SaveUser(ResponseUser content)
        {
            
            using (var connection = sqlProvider.GetDbConnection())
            {
                var results = connection.QueryMultipleAsync("Users_Save",
                    new
                    {
                        @Email = content.Email,
                        @Name = content.Name,
                        @ImageUrl = content.ImageUrl,
                    }, commandTimeout: 60,
                    commandType: CommandType.StoredProcedure).Result;

                User content2 = await results.ReadFirstAsync<User>();

                content.Id = content2.Id.ToString();
            }

            return content;
        }
    }
}
