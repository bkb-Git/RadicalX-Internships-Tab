/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import DataSet from "@antv/data-set";
import { Button, Card, Col, Row, Space, Typography } from "antd";
import { Chart } from "@antv/g2";
import { ReactComponent as Calendar } from "../../../assets/calendar-2.svg";

import "./Insights.scss";

const data = [
  { category: "Total Enrollments", day: "Monday", value: 13324, total: "100,000" },
  { category: "Total Enrollments", day: "Tuesday", value: 16662 },
  { category: "Total Enrollments", day: "Wednesday", value: 18136 },
  { category: "Total Enrollments", day: "Thursday", value: 17671 },
  { category: "Total Enrollments", day: "Friday", value: 15565 },
  { category: "Total Enrollments", day: "Saturday", value: 12918 },
  { category: "Total Enrollments", day: "End", value: 10284 },
  { category: "Completion", day: "Monday", value: 10284, total: "65,000" },
  { category: "Completion", day: "Tuesday", value: 8034 },
  { category: "Completion", day: "Wednesday", value: 6559 },
  { category: "Completion", day: "Thursday", value: 5369 },
  { category: "Completion", day: "Friday", value: 4907 },
  { category: "Completion", day: "Saturday", value: 5066 },
  { category: "Completion", day: "End", value: 5274 },
  { category: "Qualified Candidates", day: "Monday", value: 5274, total: "850" },
  { category: "Qualified Candidates", day: "Tuesday", value: 5250 },
  { category: "Qualified Candidates", day: "Wednesday", value: 5301 },
  { category: "Qualified Candidates", day: "Thursday", value: 5064 },
  { category: "Qualified Candidates", day: "Friday", value: 4695 },
  { category: "Qualified Candidates", day: "Saturday", value: 4235 },
  { category: "Qualified Candidates", day: "End", value: 3586 },
  { category: "Reached Out", day: "Monday", value: 3586, total: "375" },
  { category: "Reached Out", day: "Tuesday", value: 3352 },
  { category: "Reached Out", day: "Wednesday", value: 2954 },
  { category: "Reached Out", day: "Thursday", value: 2417 },
  { category: "Reached Out", day: "Friday", value: 2197 },
  { category: "Reached Out", day: "Saturday", value: 2126 },
  { category: "Reached Out", day: "End", value: 2044 },
  { category: "Interview set", day: "Monday", value: 2044, total: "300" },
  { category: "Interview set", day: "Tuesday", value: 1840 },
  { category: "Interview set", day: "Wednesday", value: 1693 },
  { category: "Interview set", day: "Thursday", value: 1873 },
  { category: "Interview set", day: "Friday", value: 2017 },
  { category: "Interview set", day: "Saturday", value: 1988 },
  { category: "Interview set", day: "End", value: 1839 },
  { category: "Candidates Hired", day: "Monday", value: 1839, total: "150" },
  { category: "Candidates Hired", day: "Tuesday", value: 2077 },
  { category: "Candidates Hired", day: "Wednesday", value: 1966 },
  { category: "Candidates Hired", day: "Thursday", value: 2116 },
  { category: "Candidates Hired", day: "Friday", value: 1891 },
  { category: "Candidates Hired", day: "Saturday", value: 1676 },
  { category: "Candidates Hired", day: "End", value: 1225 },
];

const { Title, Text } = Typography;

const Insights = () => {
  const [componentMounted, setComponentMounted] = useState(false);
  const [prevComponentMounted, setPrevComponentMounted] = useState(false);

  const renderAreaChart = () => {
    const ds = new DataSet();
    const dv = ds.createView().source(data);

    const chart = new Chart({
      container: "area-chart",
      autoFit: true,
      height: 175,
      width: "100%",
      padding: [30, 5, 30, 30],
    });

    chart.data(dv.rows);
    chart.scale({
      value: {
        max: 20000,
        min: -2500,
        nice: true,
      },
      day: {
        range: [0, 1],
        // eslint-disable-next-line no-sparse-arrays
        ticks: [, "End"],
      },
    });

    chart.tooltip(false);
    chart.axis("value", false);

    chart.facet("rect", {
      fields: ["category"],
      columnTitle: {
        style: {
          fontSize: 12,
          textAlign: "center",
          fontFamily: "Space Grotesk",
          fontWeight: 500,
          fill: "#5C5C5C",
        },
        position: "bottom",
        offsetX: 70,
        offsetY: 30,
      },
      padding: 0,
      eachView: (view, facet) => {
        const facetData = facet.data;

        view.area().position("day*value").shape("smooth").style({ fill: "#793ef5" });
        view.axis("day", {
          grid: {
            line: {
              style: {
                lineDash: [0, 0],
                lineWidth: 2,
                stroke: "#EFEFEF",
              },
            },
          },
          label: {
            style: {
              fontSize: 21,
              textAlign: "center",
              fontFamily: "Space Grotesk",
              fontWeight: 500,
              fill: "#5C5C5C",
            },
            offsetX: -70,
            offsetY: -18,
            formatter: (val, datum, index) => `${facetData[0].total} `,
          },
          line: false,
        });
        view.interaction("element-highlight");
      },
    });

    chart.interaction("element-highlight");
    chart.render();
  };

  useEffect(() => {
    if (!prevComponentMounted && componentMounted) renderAreaChart();

    setPrevComponentMounted(componentMounted);
    setComponentMounted(true);
  }, [componentMounted, prevComponentMounted]);

  const timeline = () => {
    return (
      <Row justify="space-between" align="middle" style={{ height: "100%" }}>
        <Col>
          <Space>
            <Button style={{ borderRadius: "8px" }} type="primary">
              This Week
            </Button>
            <Button style={{ borderRadius: "8px" }} type="default">
              This Month
            </Button>
          </Space>
        </Col>
        <Col>
          <Button
            icon={<Calendar style={{ marginRight: "8px" }} />}
            style={{ borderRadius: "8px", display: "flex", justifyContent: "center", alignItems: "center" }}
            type="default"
          >
            Select Dates
          </Button>
        </Col>
      </Row>
    );
  };

  const renderSummary = () => {
    return (
      <Col span={6} className="insights__summary">
        <Title level={4} className="insights__summary__title">
          Internships Insights
        </Title>
        <Text className="insights__summary__text">
          In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in which
          knowledge about space can be both a priori and synthetic.
        </Text>
      </Col>
    );
  };

  const renderDetails = () => {
    return (
      <Col span={18} className="insights__details">
        <Row justify="center" style={{ height: "100%" }}>
          <Col span={24} className="insights__details__timeline">
            {timeline()}
          </Col>
          <Col span={24} className="insights__details__graphics" id="area-chart" />
        </Row>
      </Col>
    );
  };

  return (
    <Card className="insights" bodyStyle={{ height: "100%", padding: "16px" }}>
      <Row justify="center" style={{ height: "100%" }}>
        {renderSummary()}
        {renderDetails()}
      </Row>
    </Card>
  );
};

export default Insights;
