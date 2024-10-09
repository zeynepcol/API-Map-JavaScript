using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApplication1.Models
{
    public class Category
    {
        [Key]
        public int categoryID { get; set; }

        public string categoryName {  get; set; }

        [ForeignKey("Cities")]
        public int CityID { get; set; }

        public Cities City { get; set; }

    }
}
