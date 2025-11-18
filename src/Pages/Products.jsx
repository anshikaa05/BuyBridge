import React, { useEffect , useState} from 'react'

const Products = () => {

    const [product,setproduct] = useState([]);
    const [err,seterr] = useState("");
    const [loading,setloading] = useState(false);
    const [page,setpage] = useState(1);

    useEffect(()=>{
       const fetchdata = async ()=>{
        try{
        const response = await fetch('https://dummyjson.com/products?limit=100');
        if(!response.ok){
            throw new Error("Not able to load");
        }
        const data = await response.json();
        setproduct(data.products); 
        console.log(product);
       }
    catch(error){
      seterr(error.message);
    }}
    fetchdata();
    },[])
  return (
    <>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
  {product.length > 0 ? (
    product.slice((page - 1) * 10, page * 10).map((value) => (
      <div key={value.id} className="border p-4 rounded-lg bg-gray-100 text-center">
        <img 
          src={value.thumbnail} 
          alt={value.title} 
          className="w-full h-40 object-cover rounded-md" 
        />
        <h4 className="mt-2 text-lg font-medium">{value.title}</h4>
      </div>
    ))
  ) : (
    <p>No Items Available</p>
  )}
</div>
 
      <button onClick={()=>setpage(page+1)}>⏩</button>
        {Array.from({ length: Math.ceil(product.length / 10) }, (_, i) => (
        <button key={i} onClick={()=>setpage(i+1)}>{i+1}</button>
      ))}
      <button onClick={()=>setpage(page-1)}>🔙</button>
    </>
  )
}

export default Products
