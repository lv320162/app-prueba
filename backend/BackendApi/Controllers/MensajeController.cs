using Microsoft.AspNetCore.Mvc;

namespace BackendApi.Controllers
{
    [Route("api/saludar")]
    [ApiController]
    public class HelloController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            var response = new { message = "Hola, esta es una respuesta del backend!" };
            return Ok(response);  // Respondemos con un código 200 y el mensaje
        }
    }
}
