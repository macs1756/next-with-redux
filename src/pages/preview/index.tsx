import { backend } from "@/RTK_Query";
import { IpostPageProps } from "@/Types";
import { useEffect } from "react";

function Posts() {

  useEffect(() => {
    fetch('http://localhost:1337/api/reviews?populate=*', {
      headers: {
        'preview': 'preview'
      }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching data:', error));
  }, []);
  
  return (
    <div>Give preview</div>
  );
}

export default Posts;