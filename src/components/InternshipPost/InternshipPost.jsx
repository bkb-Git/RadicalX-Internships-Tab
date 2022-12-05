import { Col, List, Row, Statistic } from "antd";
import { Column } from "@ant-design/charts";

import "./InternshipPost.scss";

const data = [
  { x: "0", y: 65 },
  { x: "1", y: 84 },
  { x: "2", y: 94 },
  { x: "3", y: 85 },
  { x: "4", y: 84 },
  { x: "5", y: 67 },
  { x: "6", y: 90 },
  { x: "7", y: 100 },
  { x: "8", y: 110 },
  { x: "9", y: 120 },
  { x: "10", y: 115 },
  { x: "11", y: 108 },
  { x: "12", y: 154 },
  { x: "13", y: 131 },
  { x: "14", y: 104 },
  { x: "15", y: 84 },
  { x: "16", y: 98 },
  { x: "17", y: 66 },
  { x: "18", y: 66 },
  { x: "19", y: 54 },
  { x: "20", y: 34 },
];

const InternshipPost = (props) => {
  const { post, widths } = props;
  const { role, description, period, dateCreated, totalEnrolled, qualifiedCandidates, Icons, id } = post;

  // const internshipPostChartContainerId = `internship-post-${id}`;

  const config = {
    data,
    xField: "x",
    yField: "y",
    renderer: "svg",
    tooltip: {
      position: "bottom",
      formatter: (datum) => {
        return { title: datum.y };
      },
      domStyles: {
        "g2-tooltip": {
          backgroundColor: "#793ef5",
          color: "white",
          fontWeight: "600",
          fontFamily: "Space Grotesk, sans-serif ",
        },
        "g2-tooltip-list": { display: "none" },
      },
    },
    color: ({ x }) => {
      const obj = data.find((item) => item.y === qualifiedCandidates);
      if (obj.x === x) return "#793ef5";
      return "#C4C4C4";
    },
    yAxis: {
      label: false,
      grid: {
        line: false,
      },
    },
    xAxis: {
      label: false,
      tickLine: false,
      line: false,
      grid: {
        line: false,
      },
    },
    columnStyle: {
      radius: [20, 20, 0, 0],
    },
  };

  return (
    <List.Item key={id} className="post">
      <Row justify="center" align="middle" style={{ height: "100%", width: "100%" }}>
        <Col {...widths.internshipTitle} className="post__title">
          <List.Item.Meta title={role} description={description} />
        </Col>
        <Col {...widths.completitionPeriod} className="post__completitionPeriod">
          <List.Item.Meta title={`${period} days`} description={`(created on ${dateCreated})`} />
        </Col>
        <Col {...widths.totalEnrolled} className="post__enrolled">
          <Statistic value={totalEnrolled} className="post__enrolled__stat" />
        </Col>
        <Col {...widths.qualifiedCandidates} className="post__candidates">
          <Column {...config} width={230} height={32} autoFit={false} />
        </Col>
        <Col {...widths.icons} className="post__icons">
          <Icons />
        </Col>
      </Row>
    </List.Item>
  );
};

export default InternshipPost;
