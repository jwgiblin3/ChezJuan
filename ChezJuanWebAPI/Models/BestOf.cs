using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChezJuanWebAPI.Models
{
    public class BestOfItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
    }

    public class BestofDetail
    {
        public int PlaceId { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public string Address { get; set; }
        public string State { get; set; }
        public string City { get; set; }
        public int Votes { get; set; }
        public bool ChefJuanCertified { get; set; }
        public int CategoryId { get; set; }
    }

    public class BestOf
    {
        public BestOfItem Item { get; set; }

        public IEnumerable<BestofDetail> Places { get; set; }
    }
  
}
