import { Col, DatePicker, Row } from "antd";

import ApprenticeshipFormItemCard from "components/ApprenticeshipFormItemCard";

import { ReactComponent as CalendarIcon } from "assets/calendar-2.svg";

import "./ApprenticeshipTimeline.scss";

const ApprenticeshipTimeline = () => {
  return (
    <ApprenticeshipFormItemCard title="Timeline" className="apprenticeshipTimeline" formName="timeline">
      <Row justify="center" align="middle" gutter={[16, 0]}>
        <Col span={12}>
          <DatePicker suffixIcon={<CalendarIcon />} className="apprenticeshipTimeline__datePicker" />
        </Col>
        <Col span={12}>
          <DatePicker
            placeholder="Estimated End Date"
            suffixIcon={<CalendarIcon />}
            className="apprenticeshipTimeline__datePicker"
          />
        </Col>
      </Row>
    </ApprenticeshipFormItemCard>
  );
};

export default ApprenticeshipTimeline;
