import { User } from "../models";
// Check if user has rights
export default function authorize(role) {
  return function(req, res, next) {
    User.findById(req.user.id).then(user => {
      if (user.role === role) {
        next();
      } else {
        next(new Error("Unauthorized."));
      }
    });
  };
}
