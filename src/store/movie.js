//OMDB API KEY : a5e8fb9

import axios from "axios";
import _uniqBy from "lodash/uniqBy";

const _defaultMessage = 'Search for the movie title!';

export default{
    namespaced:true,
    //data
    state:()=>({ //mutations에서만 데이터를 수정할 수 있다.
        movies: [],
        message: _defaultMessage,
        loading: false,
        theMovie:{}
    }),
    //computed
    getters:{
    },
    //methods
    // 변이 변경할 수 있다. 데이터를 수정할 수 있다.
    mutations:{
        updateState(state, payload){
            console.log("updateState test");
            //movies, message, loading
            Object.keys(payload).forEach(key=>{
                state[key] = payload[key];
                //state.movies = payload.movies를 반복문으로 작성한 것
            });

            
        },// 통합적인 데이터 변경을 위한 함수
        resetMovies(state){
            state.movies=[];
            state.message = _defaultMessage;
            state.loading = false;
        }
    },
    // 비동기로 동작
    actions:{
        async searchMovies({state, commit}, payload){ //context를 구조분해할당한 commit
            if(state.loading){
                return;
            }

            commit('updateState', {
                message: ''
                , loading: true
            });

            try{
                //const {title, type, number, year} = payload;
                //const OMDB_API_KEY = "a5e8fb9";
                //const url = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`;
                //const res = await axios.get(url); //res 데이타를 MovieList로 전달해야한다.

                const res = await _fetchMovies({
                    ...payload,
                    page:1
                });

                const {Search, totalResults} = res.data;
                const uniqSearch = _uniqBy(Search, 'imdbID');

                commit('updateState', {
                    movies: uniqSearch
                }); //mutations 에 함수를 실행하는 방법

                const total = parseInt(totalResults, 10);
                const pageLength = Math.ceil(total/10); // 올림 처리
                //추가 요청 
                if(pageLength > 1){
                    for(let page = 2 ; page <= pageLength ; page+=1){
                        if(page > (payload.number/10))break;
                        // 페이징 처리

                        const res = await _fetchMovies({
                            ...payload,
                            page
                        });
                        const {Search} = res.data;
                        commit('updateState', {
                            movies: [... state.movies, ...uniqSearch] // 배열데이터를 전개한다. ( 새로 받은 데이터를 붙인다)
                        })
                    }
                }
            }catch({message}){
                commit('updateState', {
                    movies:[],
                    message
                })
            }finally{
                commit('updateState', {
                    loading: false
                })
                
            }
        },

        async searchMovieWithId({state, commit}, payload){
            if(state.loading) return;
            commit('updateState', {
                loading: true,
                theMovie:{}
            });
            try {
                const res = await _fetchMovies(payload);
                commit('updateState', {
                    theMovie: res.data
                });

            } catch (error) {
                commit('updateState', {
                    theMovie:{}
                });
            }finally{
                commit('updateState', {
                    loading: false
                })
            }
        }
    }
}


async function _fetchMovies(payload){
    return await axios.post('/.netlify/functions/movie', payload);
}

