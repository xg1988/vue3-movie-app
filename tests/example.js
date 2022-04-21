import axios from "axios";

export function double(num){
    if(!num ){
        return 0;
    }
    return num * 2;
}


export function asyncFn(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve('Done');
        }, 2000); //최대 5초까지만 기다릴 수 있다.
    });
}


import _upperFirst from 'lodash/upperFirst'
import _toLower from 'lodash/toLower'
export async function fetchMovieTitle(){
    const res = await axios.get('https://omdbapi.com?apikey=7035c60c&i=tt4520988');
    //console.log(res);
    return _upperFirst(_toLower(res.data.Title));
}