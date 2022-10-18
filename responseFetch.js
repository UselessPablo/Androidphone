import {baseUrl} from "./urlfetch";
const fetchData = ()async =>{
    try{
        let response = await fetch(`${baseUrl}?query='results'`);
        if(response.ok){
            let jsonResponse = await response.json();
        return jasonResponse;
        }
    }catch(error){
        console.log('error');
    }
}
export {fetchData};