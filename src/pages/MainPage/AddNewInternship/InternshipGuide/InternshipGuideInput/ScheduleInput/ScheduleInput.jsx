import InternshipFormItemCard from "components/InternshipFormItemCard";
import InternshipGuideFormItem from "components/InternshipGuideFormItem";

import "./ScheduleInput.scss";

const ScheduleInput = (props) => {
  const { menus } = props;

  return (
    <InternshipFormItemCard scroll>
      {menus.map((menu) => (
        <InternshipGuideFormItem name={menu.name} formItemName={menu.name} key={menu.id} />
      ))}
    </InternshipFormItemCard>
  );
};

export default ScheduleInput;
