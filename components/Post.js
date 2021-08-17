import Image from "next/image";

function Post({ name, message, email, postImage, image, timestamp }) {
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <img
            src={image}
            width={40}
            height={40}
            alt=""
            className="rounded-full"
          />
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-xs text-gray-400">
              {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          </div>
        </div>

        <p className="pt-4">{message}</p>
      </div>

      {postImage && (
        <div className="relative h-56 md:h-96 bg-white">
          <Image
            unoptimized={process.env.ENVIRONMENT !== "PRODUCTION"}
            src={postImage}
            objectFit="cover"
            layout="fill"
          />
        </div>
      )}
    </div>
  );
}

export default Post;
