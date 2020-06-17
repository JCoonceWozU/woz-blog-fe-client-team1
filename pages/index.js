import Home from "../components/Home";
import Layout from "../layouts/Layout";
import Link from "next/link";

export default function App() {
  return (
    <Layout>
      <div className="container">
        <Home />
        <Link href="comments/1">Comment 1 </Link>
        <Link href="comments/2"> Comment 2</Link>
      </div>
    </Layout>
  );
}
