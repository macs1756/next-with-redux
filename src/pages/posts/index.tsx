import { backend } from "@/RTK_Query";
import { IpostPageProps } from "@/Types";

function Posts({posts}: IpostPageProps ) {

  console.log(posts);
  

  return (
    <div>Give posts</div>
  );
}

export default Posts;


export async function getServerSideProps() {
  try {
    
    const {isError, isLoading, data:posts} = backend.useGetPostsQuery(null)
  
    return { props: { posts } };

  } catch (error) {
    console.error('Error fetching data:', error);
    return { props: { data: null } };
  }
}
