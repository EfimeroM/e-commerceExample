export const listarArray = (stock) => {
    return new Promise((resolve, reject) => {
        //se simula lo que tardaria una peticion a una api
        setTimeout(()=>{
            resolve(stock)
        }, 1000)
    })
}