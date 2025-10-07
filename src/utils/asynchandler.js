const asyncHandler = (requesthandler) => {
    (req, res, next) => {
        Promise.resolve(requesthandler(req, res, next)).
        catch((err) => next(err))
    }
}



export {asyncHandler}


// const asyncHandler = () => {}

// const asyncHandler =(func ) => () => {}

// const asyncHandler =(fn) => () => {}
// const asyncHandler =(func ) =>async(req, res, next) => {
//     try {

//     } catch (error) {
//         res.status(error.code || 500). json ({
//             success: false,
//             message: err.message
//         })
//     }
// }