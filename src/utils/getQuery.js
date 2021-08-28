// My Way



export const getQuery = (search) => {
    var searchParams = new URLSearchParams(search);
    var query = {}
    searchParams?.forEach((value, key) =>{
        query[key]=value
      });
    return query
}




// Other Way
// export default (query) => {
//     if(query){
//         const queryString = query.split("?")[1];
//         if(queryString.length > 0){
//             const params = queryString.split("&");
//             const paramsObj = {};
//             params.forEach(param => {
//                 const keyValue = param.split("=");
//                 paramsObj[keyValue[0]] = keyValue[1];
//             });

//             return paramsObj;
//         }
//     }

//     return {};
// }