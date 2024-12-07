// "use client";
import { useRouter } from "next/router";
export default function Secure() {
  // const router = useRouter();
  // const { id } = router.query;
  // console.log(`id is ${router}}`);
  return (
    <div>
      <p>This is secured</p>
      <p>id </p>
    </div>
  );
}
