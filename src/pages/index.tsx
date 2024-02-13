import Link from "next/link";


export default function Home() {
  return (
    <div>
      <div>
        <Link href='/posts'>Get Posts</Link>
      </div>
      <div>
        <Link href='/preview'>Get previews</Link>
      </div>
    </div>
  );
}
