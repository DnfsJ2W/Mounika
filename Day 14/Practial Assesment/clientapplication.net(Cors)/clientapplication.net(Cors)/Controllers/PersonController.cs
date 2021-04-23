using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace clientapplication.net_Cors_.Controllers
{
    public class PersonController : Controller
    {
        // GET: Person
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult AddPerson()
        {
            return View();
        }
        public ActionResult GetPersonById()
        {
            return View();
        }
        public ActionResult UpdatePerson()
        {
            return View();
        }
        public ActionResult DeletePerson()
        {
            return View();
        }
    }
}