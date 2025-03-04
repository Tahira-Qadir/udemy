import Heading from "@/components/Heading";
import Link from "next/link";
import { getFeaturedReview } from "@/lib/reviews";

export default async function Homepage() {
  const review = await getFeaturedReview();
  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">Only the best indie games, reviewed for you.</p>
      <div className="border w-80 bg-white shadow hover:shadow-xl sm:w-full">
        <Link
          href={`/reviews/${review.slug}`}
          className="flex flex-col sm:flex-row"
        >
          <img
            src={review.image}
            alt=""
            width="320"
            height="180"
            className="rounded-t sm:rounded-l sm:rounded-r-none"
          />
          <h2 className="font-bold font-orbitron py-1 text-center sm:px-2">
            {review.title}
          </h2>
        </Link>
      </div>
    </>
  );
}
