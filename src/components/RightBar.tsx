import Link from "next/link";
import PopularTags from "./PopularTags";
import Recommendations from "./Recomentadions";
import Search from "./Search";

export const RightBar = () => {
  return (
    <div className="pt-4 flex flex-col gap-4 sticky top-0 h-max ">
      <Search />
      <PopularTags />
      <Recommendations />
      <div className="text-textGray text-sm flex gap-x-4 flex-wrap">
        <Link href="/">Terms of service</Link>
        <Link href="/">Privacy Policy</Link>
        <Link href="/">Cookie Policy</Link>
        <Link href="/">Accessibility</Link>
        <Link href="/">Ads</Link>
        <span>© 2025 X Corp.</span>
      </div>
    </div>
  );
};
