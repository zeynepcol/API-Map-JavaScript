using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Data;
using System.Data.SqlClient;
using System.Collections.Generic;
using WebApplication1.Models;


namespace WebApplication1.Controllers
{
    public class AdminController : Controller
    {
        // Giriş sayfasını göster
        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }

        // Giriş işlemini yönet
        [HttpPost]
        public IActionResult Login(string ad, string soyad, string email, string sifre)
        {
            if (ModelState.IsValid)
            {
                // Basit bir kontrol. Burada gerçek kimlik doğrulama işlemleri yapılabilir.
                if (email == "admin@example.com" && sifre == "admin")
                {
                    // Giriş başarılı, Ana Sayfaya yönlendir
                    return RedirectToAction("Index", "Home");
                }
                else
                {
                    // Giriş başarısız, hata mesajı göster
                    ModelState.AddModelError("", "Geçersiz e-posta veya şifre.");
                }
            }

            return View();
        }

        // Ana Sayfayı göster
        public IActionResult Index()
        {
            return View();
        }
    }

}
