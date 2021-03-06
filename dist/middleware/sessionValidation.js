"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sessionValidation(request, response, next) {
    console.log("session in sessionValidation - ", request.session);
    if (request.isAuthenticated()) {
        console.log("is authenticated");
        next();
    }
    else {
        console.log("is not authenticated");
        response.status(401).json({ message: "Not authorized" });
    }
}
;
exports.default = sessionValidation;
//# sourceMappingURL=sessionValidation.js.map