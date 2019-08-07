using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Site_ducks.Models;
using System.IO;
using System.Web;

namespace Site_ducks.Controllers
{
    
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
           return View();
        }

        public IActionResult ProfilePage()
        {
            return View();
        }

        public IActionResult Authorisation()
        {
            return View();
        }
        public IActionResult StudentsPage()
        {
            return View();
        }

        public IActionResult Departments()
        {
            return View();
        }


        [HttpPost]
        public IActionResult SendAuthorisationData(AuthorisationData authData)
        {
            string line;
            using (StreamReader sr = new StreamReader("wwwroot/lib/LoginPassword.txt", System.Text.Encoding.Default))
            {
                while ((line = sr.ReadLine()) != null)
                {
                    string password = line.Split(" ")[1];
                    string login = line.Split(" ")[0];
                    bool w1 = string.Equals(authData.Login, login);
                    bool w2 = string.Equals(authData.Password, password);
                    if (string.Equals(authData.Login, login)
                        && string.Equals(authData.Password, password))
                    {
                        return View("Index");
                    }
                }
            }
            

            return View("Authorisation");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
