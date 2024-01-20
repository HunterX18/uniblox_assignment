import express from "express";
import AdminRoutes from "./routes/AdminRoutes.js";
import CustomerRoutes from "./routes/CustomerRoutes.js";

const app = express();

app.use(express.json());

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

app.get("/", (req, res) => {
	res.send("Server is running");
});

app.listen(5000, () => {
	console.log("server running on 5000");
});
