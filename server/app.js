import express from "express";
import AdminRoutes from "./routes/AdminRoutes.js";
import CustomerRoutes from "./routes/CustomerRoutes.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is running");
});
app.use("/admin", AdminRoutes);
app.use("/customer", CustomerRoutes);
// order = {
//     items: [
//         {
//             "name":
//             "price":
//             "quantity":
//         }
//     ]
// }

export default app;
