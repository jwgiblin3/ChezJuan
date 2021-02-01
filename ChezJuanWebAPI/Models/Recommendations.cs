﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChezJuanWebAPI.Models
{
    public class Recommendations
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Category { get; set; }
        public string Description { get; set; }
        public string Author { get; set; }
        public DateTime Date { get; set; }
        public string Image { get; set; }
        public string Link { get; set; }
        public decimal Price { get; set; }

    }
}
