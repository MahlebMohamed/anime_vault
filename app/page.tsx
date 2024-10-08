import AnimeCard, { AnimeProp } from "@/app/_components/AnimeCard";
import LoadMore from "./_components/LoadMore";
import { fetchAnime } from "./_lib/action";

async function Home() {
  const data = await fetchAnime(1);

  return (
    <main className="flex flex-col gap-10 px-8 py-16 sm:p-16">
      <h2 className="text-3xl font-bold text-white">Explore Anime</h2>

      <section className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item: AnimeProp, index: number) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))}
      </section>
      <LoadMore />
    </main>
  );
}

export default Home;
