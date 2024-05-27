import AllBubl from "@/components/Bubls/AllBubl";
import UnderHead from "@/components/UnderHead/UnderHead";
import { searchProps } from "@/types";
export default async function Home({
  searchParams,
}: {
  searchParams?: searchProps;
}) {
  return (
    <article>
      <UnderHead />
      <AllBubl search={searchParams?.search} />
    </article>
  );
}
