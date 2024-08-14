const PreviewImage = ({
  text,
  image,
  price,
}: {
  text?: string;
  image?: string;
  price?: string;
}) => (
  <div
    style={{ backgroundImage: `url(${image})` }}
    className="w-full h-full rounded-lg backdrop-opacity-10"
  >
    <div className="bg-gradient-to-tr from-purple-500 to-pink-500 min-h-[150px] min-w-[100px] h-full w-full rounded-lg flex justify-between items-end text-start font-semibold p-2 opacity-80">
      {text?.toUpperCase()}
      <span>{price}</span>
    </div>
  </div>
);

export default PreviewImage;
