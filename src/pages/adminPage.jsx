export default function AdminPage(){
    return(
  <div className="w-full h-full max-h-full  flex bg-accent">
     <div className="w-[300px] bg-accent h-full">
     <div className="w-full h-[100px] flex items-center text-primary border-white ">
        <img src="/logo.png" className="h-full"/>
        <h1> Admin Panal</h1>
     </div>
     </div>

     <div className="w-[calc(100%-300px)] h-full max-h-full bg-primary border-[10px] rounded-3xl overflow-y-scroll text-4xl border-accent ">
      
     </div>
     </div>
 
    )
}