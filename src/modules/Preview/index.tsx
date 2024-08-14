import PreviewImage from "@/ui/Images/PreviewImage";
import Section from "@/ui/Section";

const plaseholderData = [
  "Комбо",
  "Френч",
  "Пидикюр",
  "Натурель",
  "Штучки",
  "Дрючки",
];

const Preview = () => {
  return (
    <Section title="Услуги которые могу вам понравиться">
      <div className="grid grid-cols-3 max-md:grid-cols-1 grid-rows-2 gap-3 w-full">
        {plaseholderData.map((item, index) => (
          <PreviewImage
            key={index}
            text={item}
            image="/image-plaseholder.png"
            price="1000"
          />
        ))}
      </div>
    </Section>
  );
};

export default Preview;
