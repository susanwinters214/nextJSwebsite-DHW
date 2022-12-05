import Link from "next/link";

function PageNotFound() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <Link href="/">Go to Home Page</Link>
    </div>
  );
}

export default PageNotFound;
