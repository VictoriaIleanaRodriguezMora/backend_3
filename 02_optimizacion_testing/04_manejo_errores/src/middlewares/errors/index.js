import Errors from "../../services/errors/enum.js";

export default (error, req, res, next) => {
    console.log("Error cause:", error.cause);
    console.log("Error details:", {
        name: error.name,
        message: error.message,
        code: error.code
    });

    switch (error.code) {
        case Errors.INVALID_TYPES_ERROR:
            res.status(400).send({
                status: "error",
                error: error.name,
                message: error.message,
                cause: error.cause
            });
            break;

        // Nuevo codigo de error
        case Errors.INVALID_PARAM:
            res.status(400).send({
                status: "error",
                error: "Invalid Parameter",
                message: error.message,
                details: error.cause
            });
            break;

        default:
            res.status(500).send({
                status: "error",
                error: "Unhandled error",
                originalError: error.name
            });
    }
};