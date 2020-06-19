import { useRouter } from 'next/router'
import useSwr from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function SingleArticle() {
  const router = useRouter()
  /*console.log("slug", router.query);
  const { data, error } = useSwr(`http://localhost:8080/api/articles/${router.query.slug}`, fetcher)
  console.log("slug after", router.query.slug);
  if (error) return <div>Failed to load user</div>
  if (!data) return <div>Loading...</div>*/

  return <div>Title</div>
}
export async function getStaticProps({ params}) {
console.log("getStaticProps -> params", params)
  const {slug} = params
  const {data} = await fetch (`http://localhost:8080/api/articles/${slug}`);
  console.log("getStaticProps -> data", data)
  /*const data = response.json()
  console.log("getStaticProps -> data", data)*/

  return {
    props: {
     article: null
    },
  }
}
export async function getStaticPaths() {
  
  return {
    paths: [{params: {slug: "this-is-title-3"}}],
    fallback: true,
  }
}