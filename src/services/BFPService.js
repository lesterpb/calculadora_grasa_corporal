import axiosClient from "../config/axiosClient";
//{sexo,altura,cintura,cuello,cadera,peso}
const BFPService = async ({sexo,altura,cintura,cuello,peso,cadera=92})=>{

    const url = `http://localhost:5057/Person/calculateBodyFatPercentege?sexo=${sexo}&altura=${altura}&cuello=${cuello}&cintura=${cintura}&cadera=${cadera}`;

    try {
        
        let response = await axiosClient.get(url);
        response = await response.data;
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