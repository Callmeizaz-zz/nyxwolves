import jwt from "jsonwebtoken";

export const jwtVerify = (req, res, next) => {
  console.log(req);
  const token = req.headers["x-access-token"];
  if (!token) {
    res.send("No token provided");
  } else {
    jwt.verify(token, "THISISASECRET", (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: "Authorization Failed" });
      } else {
        req.userId = decoded.id;
        next();
      }
    });
  }
};
