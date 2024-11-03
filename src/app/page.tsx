import DateTimePikcer from "@/modules/DateTimePicker";
import Map from "@/modules/Map";
import RegisterOnService from "@/modules/RegisterOnService";
import ServicePreview from "@/modules/ServicePreview";

export default function Home() {
  return (
    <>
      <ServicePreview />
      <DateTimePikcer />
      <RegisterOnService />
      <Map />
    </>
  );
}
