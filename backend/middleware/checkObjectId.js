import { isValidObjectId } from "mongoose";

//If the Id passed into the Url is not valid send error message 
function checkObjectId(req, res, next) {
    if (!isValidObjectId(req.params.id)) {
        res.status(404);
        throw new Error(`Invalid ObjectId of: ${req.params.id}`);
    }
    next();
};

export default checkObjectId;