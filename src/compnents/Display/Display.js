const Display =({isLogged})=>{
        console.log([isLogged]);

  return(
    <>
      {isLogged === true ? (
      <div className="ok">
        acertou
      </div>
        ):(
      <div className="wrong">
        usuario nao encontrado
      </div>

      )}
    </>
  )
}
export default Display;
