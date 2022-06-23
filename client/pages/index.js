import Layout from "../components/Layout";
import Link from "next/link";

const Index = () => {
  return (
    <Layout>
      <h1 className="text-danger">Index Page</h1>
      <Link href="/signup">
        <a>Signup</a>
      </Link>
      <div>
        <Link href="/signin">
          <a>Signin</a>
        </Link>
      </div>
    </Layout>
  );
};

export default Index;
