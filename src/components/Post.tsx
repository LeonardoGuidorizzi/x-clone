import Image from "./Image";
import PostInfo from "./PostInfo";

const Post = () => {
  return (
    <div className="p-4 border-y-[1px] border-borderGray">
      {/* POST TYPE */}
      <div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold">
        icon
        <span>LeonardoMoreira reposted</span>
      </div>
      {/* POST CONTENT */}
      <div className="flex gap-4 ">
        {/* AVATAR */}
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            path="general/samuraiChamploo.png"
            alt=""
            w={100}
            h={100}
            tr={true}
          />
        </div>
        {/* CONTENT */}
        <div className="flex-1">
          {/* TOP */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-end gap-2 flex-wrap">
              <h1 className="text-md font-bold">Leonardo Moreira</h1>
              <span className="text-textGray">@guid0rizzi</span>
              <span className="text-textGray">1 day ago</span>
            </div>
            <PostInfo />
          </div>
          {/* TEXT E MEDIA */}
          <p className="flex-1 flex flex-col gap-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            delectus quis accusantium nesciunt, suscipit pariatur ea officia
            inventore quos veniam eius exercitationem, odio atque at ullam quas,
            qui sed repellat?
          </p>
          <Image path="general/post.jpeg" alt="" w={600} h={600} />
        </div>
      </div>
    </div>
  );
};
export default Post;
