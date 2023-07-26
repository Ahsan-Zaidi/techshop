//CUSTOM ASYNC HANDLER
//function that resolves a promise, if the promise is resolved it will call next which will call the next peice of middleware
const asyncHandler = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
}

export default asyncHandler;