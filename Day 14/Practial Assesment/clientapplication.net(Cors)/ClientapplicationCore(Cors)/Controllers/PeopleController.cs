using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClientapplicationCore_Cors_.Controllers
{
    public class PeopleController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult AddPerson()
        {
            return View();
        }
        public IActionResult GetPersonById()
        {
            return View();
        }
        public IActionResult UpdatePerson()
        {
            return View();
        }
        public IActionResult DeletePerson()
        {
            return View();
        }
    }
}
