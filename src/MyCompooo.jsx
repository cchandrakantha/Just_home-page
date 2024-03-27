import React,{useEffect,useState} from 'react';




 function MyCompooo() {
    const [width,setWidth] = useState(window.innerWidth);
    const [height,setHeight] = useState(window.innerHeight);

    useEffect(() =>{
        window.addEventListener("resize",handleResize) ;
        console.log("Event Listener Added");

        return () =>{
            window.removeEventListener("resize",handleResize);
            console.log("Removed");
        }
    },[]);

    useEffect(() =>{
        document.title = `Size : ${width} x ${height}`
    })
   function handleResize(){
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
   }
  return (
    <div>
      <p>Widht: {width}</p>
      <p>Height: {height}</p>
    </div>
  )
}

export default MyCompooo;