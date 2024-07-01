import Link from "next/link";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  return (
    <div>
      <h1>Page : {router.query.slug}</h1>
      <div>
        <button
          type="button"
          onClick={() => {
            router.push({ pathname: "/[slug]", query: { slug: "push" } });
          }}
        >
          push
        </button>
      </div>
      <br></br>
      <div>
        <button
          type="button"
          onClick={() => {
            router.replace({ pathname: "/[slug]", query: { slug: "push" } });
          }}
        >
          replace
        </button>
      </div>
      <br></br>
      <div>
        <button
          type="button"
          onClick={() => {
            router.reload();
          }}
        >
          reload
        </button>
      </div>
    </div>
  );
}
