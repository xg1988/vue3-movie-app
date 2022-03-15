/*
function a(){
    // 약속의객체
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('A');
            resolve('hello a');
        }, 1000);
    });
}

function b(){
    // 약속의객체
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('b');
            resolve('hello b');
        }, 1000);
    });
}
function c(){
    // 약속의객체
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('c');
            resolve('hello c');
        }, 1000);
    });
}
function d(){
    // 약속의객체
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('d');
            resolve('hello d');
        }, 1000);
    });
}

async function test(){
    await a();
    await b();
    await c();
    await d();
}

test();

function fetchMovies(){
    const OMDB_API_KEY = "a5e8fb9";
    return new Promise((resolve, reject)=>{
        const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`);
        resolve(res);
    })
}

function chosu(){
    const res = fetchMovies('frozen');
    console.log(res);
}

chosu();*/