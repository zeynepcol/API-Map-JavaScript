using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApplication1.Models
{
    public class Cities
    {
        [Key]
        public int cityID {  get; set; }

        public string cityName { get; set; }

        public string cityCode { get; set; }

        public int TGBNumber { get; set; }

        public int buisnessCount {  get; set; }

        public int projectCount { get; set; }

      
        //zeynep start
        public int categoryID { get; set; }
        //zeynep end

        public ICollection<Category> categories { get; set; }
    }
}
