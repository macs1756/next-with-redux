import { backend } from "@/RTK_Query";
import { IpostPageProps } from "@/Types";
import { useEffect } from "react";

function Posts() {

  useEffect(()=>{
    fetch('http://localhost:1337/api/reviews?populate=*')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching data:', error));
  },[])

  return (
    <div>Give posts</div>
  );
}

export default Posts;

// export async function getServerSideProps() {
//   try {
//     // Отримання даних з бекенду асинхронно
//     const { isError, isLoading, data} = await backend.useGetPostsQuery(null);

//     console.log(data, isLoading);
    
//     // Повернення даних як властивості props
//     return { props: { data } };
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     // У разі помилки повертаємо null як дані
//     return { props: { posts: null } };
//   }
// }
