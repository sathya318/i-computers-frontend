import { Link, Route, Routes } from "react-router-dom";
import { LuBoxes, LuClipboardList, LuUsers } from "react-icons/lu";
import { MdOutlineRateReview } from "react-icons/md";

export default function AdminPage(){
    return(
  <div className="w-full h-full max-h-full  flex bg-accent">
     <div className="w-[300px] bg-accent h-full">
     <div className="w-full h-[100px] flex items-center text-primary ">
        <img src="/logo.png" className="h-full" alt="Logo" />
        <h1 className="text-2xl"> Admin</h1>
     </div>
           <div className="w-full h-[400px] text-white text-2xl flex flex-col" >
              
              <Link to="/admin"className=""><LuClipboardList />Orders</Link>
               <Link to="/admin/products"><LuBoxes />Products</Link>
               <Link to="/admin/users"><LuUsers />Users</Link>
               <Link to="/admin/reviews"><MdOutlineRateReview />Reviews</Link>
              

           </div>

     </div>

     <div className="w-[calc(100%-300px)] h-full max-h-full bg-primary border-[10px] rounded-3xl overflow-y-scroll text-4xl border-accent ">
           <Routes> 
           <Route path="/*" element={<h1> Orders</h1>}/>
           <Route path="/products" element={<h1>Products</h1>}/>
           <Route path="/users" element={<h1>Users</h1>}/>
           <Route path="/reviews" element={<h1> Reviews</h1>}/>




           </Routes>
     </div>
     </div>
 
    )
}