exports.handler = async function(event, context){
    return {
        statusCode: 200,
        body:JSON.stringify({
            name: "jobs",
            age: 88,
            email: 'test@test.ac.kr'
        })
    }
}