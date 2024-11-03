import ServiceCardSmall from "@/components/ServiceCard/ServiceCardSmall";
import Section from "@/ui/Section";

const plaseholderData = [
  {
    title: "Manicure",
    subtitle: "nail extension",
    image: "/images/content-img/nail-1.jpg",
  },
  {
    title: "Manicure",
    subtitle: "nail extension",
    image: "/images/content-img/nail-2.jpg",
  },
  {
    title: "Manicure",
    subtitle: "nail extension",
    image: "/images/content-img/nail-3.jpg",
  },
  {
    title: "Manicure",
    subtitle: "nail extension",
    image: "/images/content-img/nail-4.jpg",
  },
  {
    title: "Manicure",
    subtitle: "nail extension",
    image: "/images/content-img/nail-5.jpg",
  },
  {
    title: "Manicure",
    subtitle: "nail extension",
    image: "/images/content-img/nail-1.jpg",
  },
  {
    title: "Manicure",
    subtitle: "nail extension",
    image: "/images/content-img/nail-2.jpg",
  },
  {
    title: "Manicure",
    subtitle: "nail extension",
    image: "/images/content-img/nail-3.jpg",
  },
];

const ServicePreview = () => {
  return (
    <Section title="Choose service">
      <div className="services-grid">
        {plaseholderData.map((item, index) => (
          <ServiceCardSmall key={index} {...item} />
        ))}
      </div>
    </Section>
  );
};

export default ServicePreview;
