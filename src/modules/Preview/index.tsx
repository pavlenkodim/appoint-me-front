import Image from "next/image";

const ImagePlaseholder = () => (
  // <Image src={"/image-plaseholder.png"} width={100} height={30} alt="nails" />
  <div className="bg-gradient-to-r from-purple-500 to-pink-500 min-h-[150px] min-w-[100px] h-full w-full rounded-lg"></div>
);

const plaseholderData = ["", "", "", "", "", "", "", "", ""];

const Preview = () => {
  return (
    <div className="w-full text-center">
      <h2 className="p-2">Preview</h2>
      <div className="grid grid-cols-3 grid-rows-3 gap-3 w-full">
        {plaseholderData.map((item, index) => (
          <ImagePlaseholder key={index} />
        ))}
      </div>
    </div>
  );
};

export default Preview;
