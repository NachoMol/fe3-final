import React from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  return (
    <div>
      <form>
        <input type="text" placeholder="ingresá tu nombre"/>
        <input type="text" placeholder="ingresá tu email"/>
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Form;
