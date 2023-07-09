import axiosClient from "../config/axiosClient";
//{sexo,altura,cintura,cuello,cadera,peso}
const BFPService = async ({sexo,altura,cintura,cuello,peso,cadera=0})=>{
    const url = `http://localhost:5057/Person/calculateBodyFatPercentege?sexo=${sexo}&altura=${altura}&cuello=${cuello}&cintura=${cintura}&cadera=${cadera}`;
    console.log(url)
    console.log("http://localhost:5057/Person/calculateBodyFatPercentege?sexo=hombre&altura=170&cuello=30&cintura=60&cadera=0")
    try {
        
        let response = await axiosClient.get(url);
        response = await response.data;
        console.log(response);
        return response;

      } catch (error) {
        console.log(error);
      }

    // fetch(url)
    // .then(response => response.json())
    // .then(data => {
    //   // Aquí puedes manipular la respuesta del servicio
    //   console.log(data);
    //   return data;
    // })
    // .catch(error => {
    //   
    //   console.error(error);
    // });
}

export default BFPService;