import { useRouter } from "next/router";
import useSwr from "swr";
import CommentList from "../../components/CommentList";
import CommentForm from "../../components/CommentForm";
import Layout from '../../layouts/Layout';

export default function Article() {
  const router = useRouter();
  console.log("User -> router", router.query.id);
  const { data, error } = useSwr(
    `http://localhost:8080/api/comments/${router.query.id}`,
    fetch
  );
  console.log("User -> data", data);
  console.log("Error", error);
  if (error) return <div>Failed to load comments</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <Layout>
      <h1>Comments</h1>
      <div className="container">
        <div className="commentBox panel panel-default">
          <div className="panel-body">            
            <CommentList/>
            <CommentForm/>
          </div>
        </div>
      </div>
    </Layout>
  );
}
 