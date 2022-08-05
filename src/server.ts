import { app } from "./app.js"

const port=process.env.PORT || 5738
app.listen(port,()=>{console.log(`server up on port ${port}`)})
