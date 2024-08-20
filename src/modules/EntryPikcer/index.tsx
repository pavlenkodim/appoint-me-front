import Section from "@/ui/Section";
import Calendar from "@/components/Calendar/Calendar";

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
