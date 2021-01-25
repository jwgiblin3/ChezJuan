using Microsoft.Extensions.Configuration;
using Dapper;
using System.Data;
using System.Data.SqlClient;

namespace ChezJuanWebAPI.Repository
{
    public interface ISqlServerConnectionProvider
    {
        IDbConnection GetDbConnection();
    }

    public class SqlServerConnectionProvider: ISqlServerConnectionProvider
    {
        private readonly string _connectionString;

        public SqlServerConnectionProvider(IConfiguration configuration)
        {
            _connectionString = configuration.GetValue<string>("ConnectionStrings:DefaultConnection");
        }

        public IDbConnection GetDbConnection()
        {
            return new SqlConnection(_connectionString);
        }
    }
}
