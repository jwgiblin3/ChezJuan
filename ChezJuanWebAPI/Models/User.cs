using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChezJuanWebAPI.Models
{
    public class User
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string ImageUrl { get; set; }
    }

    public class ResponseUser
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string ImageUrl { get; set; }
    }
}
