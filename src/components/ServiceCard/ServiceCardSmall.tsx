import Image from "next/image";

type ServiceCardSmallProps = { title: string; subtitle: string; image: string };

const ServiceCardSmall = ({
  title,
  subtitle,
  image,
}: ServiceCardSmallProps) => {
  return (
    <div className="min-w-[100px] h-[100px] rounded-xl">
      <Image
        className="w-full h-full object-cover relative z-0 top-0 rounded-[10px] border-2 border-solid border-[#00000000]"
        width={100}
        height={100}
        src={image}
        alt={title}
      />
      <div className="service-card-small-content">
        <h3 className="text-sm">{title}</h3>
        <p className="text-xs">{subtitle}</p>
      </div>
    </div>
  );
};

export default ServiceCardSmall;
