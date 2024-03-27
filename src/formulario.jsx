import './formulario.css'

//Formulario
function formulario () {
    return(

       <div className='Form_1'>
        <div className='contactenos'>
        

         <h1>Contáctanos</h1>

        <p><b>Deja tus datos para comunicarnos contigo y resolver tus <br />dudas.</b></p>

        <p><b>Si eres menor de edad, todos los procesos deberán realizarse <br />con tu
            acudiente.</b>
        </p>
        

        <div className='form'>

         <form action="submit" className='form_2'>
            <label htmlFor="name" ></label>
            <input type="text" name='Nombre' id='name' placeholder='Nombre'  required/>
            <label htmlFor="name"></label>
            <input type="text" name='Apellido' id='apellido' placeholder='Apellido'/>
            <label htmlFor="Number"></label> <br />
            <input type="Number" name='Numero' id='Numero' placeholder='Numero celular' /> <br />
            <label htmlFor="email"></label>
            <input type="email" name="correo" id="email" placeholder='Correo'/> <br />
            <label htmlFor="sede"></label>
            <select name="select" id="sede">
                <option value="">Seleccione sede</option>
                <option value="Medellin">Medellin</option>
                <option value="Bello">Bello</option>
                <option value="Rionegro">Rionegro</option>
                <option value="La Pintada">La Pintada</option>
                <option value="Apartado">Apartado</option>
                <option value="Bogota">Bogota</option>
            </select> <br />
            <label htmlFor="programa"></label>
            <select name="select" id="programa">
                <option value="">Seleccione un programa</option>
                <option value="programa1">Tecnico Laboral en Arte Culinario en Medellin </option>
                <option value="programa2">Tecnico Laboral como Asesor Comercial y de Servicios en Medellin </option>
                <option value="programa3">Tecnico Laboral como Asistente Administrativo en Medellin </option>
                <option value="programa4">Tecnico Auxiliar de Enfermeria en Medellin  </option>
                <option value="programa5">Tecnico Laboral como Asistente en Desarrollo de Software en Medellin</option>
                <option value="programa6">Tecnico Laboral como Asistente en Diseño y Artes Graficos en Medellin </option>
                <option value="programa7">Tecnico Laboral como Asistente en Desarrollo de Videojuegos en Medellin </option>    
            </select> <br />
            <label htmlFor="select"></label>
            <select name="select" id="metodo">
                <option value="">Metodo por el cual se entero</option>
                <option value="one">Redes Sociales</option>
                <option value="two">Eventos</option>
                <option value="three">Página web</option>
                <option value="four">Publicidad</option>
                <option value="five">Recomendación</option>
            </select> <br />
       
         </form>
         <div className='Politicas'>
         <form action="politicas">
            <p><b>Politica de Tratamiento y Protección de Datos Personales</b></p>
            <input type="checkbox" required />
            <label htmlFor="terminos"><b>He leido y acepto la Politica de Tratamiento y Protección de <br />
            Datos Personales.</b></label> <br />

            <button className='btn_enviar'> <b>Enviar</b></button>
         </form>
         </div>
         </div>
         
         {/*Apartado de Nuestras Sedes*/}
         </div>
         <div className='container'>

            <h1 className='title'>Nuestras Sedes </h1>
            <div className='imagenes'>
            <ul>
              <b> <li><div className='img1' id='img'></div><span id='ciudad'>Medellin <br /> <p>calle 49-41 9.</p></span> 
                </li>
                <li><div className='img2' id='img'></div> <span id='ciudad'> Bello <br /> <p> Diagonal 50a #38-20 <br /> (Tierragro 5 piso)</p></span> <br /> </li>
                <li><div className='img3' id='img'></div> <span id='ciudad'> Rio negro <br />
                <p>carrera 51 51 - 42.</p> </span></li>
                <li><div className='img4' id='img'></div> <span id='ciudad'> La pintada <br />
                <p> Kilometro 2 Via Puente <br /> Iglesias. </p></span></li>
                <li><div className='img5' id='img'></div> <span id='ciudad'>Apartado <br />
               <p>calle 104 101 - 15.</p> </span></li>
                <li><div className='img6' id='img'></div> <span id='ciudad'>Bogota <br />
                <p>AK 14 63 - 09.</p></span> </li> </b>
            </ul>
            </div>

         </div>
       
        
     </div>
        




    );
    
}

export default formulario