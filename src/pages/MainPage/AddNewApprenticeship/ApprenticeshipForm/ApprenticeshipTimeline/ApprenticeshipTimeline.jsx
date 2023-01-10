import { useContext } from "react";
import { Col, DatePicker, Form, Row } from "antd";

import ApprenticeshipFormItemCard from "components/ApprenticeshipFormItemCard";
import { AddNewApprenticeshipFormContext } from "context/AddNewApprenticeshipFormContext";

import { ReactComponent as CalendarIcon } from "assets/calendar-2.svg";

import "./ApprenticeshipTimeline.scss";

const ApprenticeshipTimeline = () => {
  const fomrContext = useContext(AddNewApprenticeshipFormContext);
  const { setFormContext, timeline, ...otherValues } = fomrContext;

  const handleChangeStartDate = (date, dateString) => {
    setFormContext({ ...otherValues, timeline: { ...timeline, start_date: dateString } });
  };

  const handleChangeEndDate = (date, dateString) => {
    setFormContext({ ...otherValues, timeline: { ...timeline, end_date: dateString } });
  };

  return (
    <ApprenticeshipFormItemCard title="Timeline" className="apprenticeshipTimeline">
      <Row justify="center" align="middle" gutter={[16, 0]}>
        <Col span={12}>
          <Form.Item name="startDate" style={{ marginBottom: 0 }}>
            <DatePicker
              suffixIcon={<CalendarIcon />}
              onChange={handleChangeStartDate}
              className="apprenticeshipTimeline__datePicker"
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="endDate" style={{ marginBottom: 0 }}>
            <DatePicker
              placeholder="Estimated End Date"
              onChange={handleChangeEndDate}
              suffixIcon={<CalendarIcon />}
              className="apprenticeshipTimeline__datePicker"
            />
          </Form.Item>
        </Col>
      </Row>
    </ApprenticeshipFormItemCard>
  );
};

export default ApprenticeshipTimeline;
