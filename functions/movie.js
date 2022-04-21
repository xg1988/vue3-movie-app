const axios = require('axios');
const { OMDB_API_KEY } = process.env;

console.log(process.env.OMDB_API_KEY);

exports.handler = async function(event, context){
    const payload = JSON.parse(event.body);
    const {title, type, page, year, id} = payload;
    //const OMDB_API_KEY = "a5e8fb9";
    const url = id
            ? `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}`  
            :`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`;
    //const url = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}`; //에러발생 케이스
    console.log("url: "+ url);

    //const url2 = "http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev";

    try{
        const {data} = await axios.get(url);

        if(data.Error){
            return{
                statusCode: 400,
                body: data.Error
            }
        }

        return {
            statusCode: 200,
            body: JSON.stringify(data)
        }
    }catch(error){
        return {
            statusCode: error.response.status,
            body: error.message
        }
    }
}