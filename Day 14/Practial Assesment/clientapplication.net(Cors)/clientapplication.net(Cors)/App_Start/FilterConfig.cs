using System.Web;
using System.Web.Mvc;

namespace clientapplication.net_Cors_
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
