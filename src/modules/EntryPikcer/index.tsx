import Section from "@/ui/Section";
import { Calendar } from "antd";

const EntryPikcer = () => {
  return (
    <Section title="Выберите дату и время для записи">
      <div>
        <Calendar />
      </div>
    </Section>
  );
};

export default EntryPikcer;
