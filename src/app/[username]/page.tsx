import Image from "@/components/Image";
import Link from "next/link";

const UserPage = () => {
  return (
    <div className="">
      {/* Profile title */}
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md m-4 z-10 bg-[#00000084]">
        <Link href={"/"}>
          <Image path="icons/back.svg" alt="back" w={24} h={24} />
        </Link>
        <h1>Guid0rizzi</h1>
      </div>
      <Image path="general/cover.jpeg" alt="" w={600} h={600} />
    </div>
  );
};
export default UserPage;
