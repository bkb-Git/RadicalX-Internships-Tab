import { useEffect, useState } from "react";
import { Chart } from "@antv/g2";
import { Col, List, Row, Statistic } from "antd";
// import { ReactComponent as Candidates } from "../../assets/Qualified Candidates.svg";

import "./InternshipPost.scss";

const data = [
  { x: "0", y: 65 },
  { x: "1", y: 84 },
  { x: "2", y: 94 },
  { x: "3", y: 85 },
  { x: "4", y: 84 },
  { x: "5", y: 67 },
  { x: "6", y: 90 },
  { x: "7", y: 108 },
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

  const [componentMounted, setComponentMounted] = useState(false);
  const [prevComponentMounted, setPrevComponentMounted] = useState(false);

  const internshipPostChartContainerId = `internship-post-${id}`;

  const renderColumnGraph = () => {
    const chart = new Chart({
      container: internshipPostChartContainerId,
      autoFit: true,
      height: 60,
      width: 160,
    });

    chart.data(data);
    chart.scale("y", {
      nice: true,
    });

    chart.tooltip({
      showMarkers: false,
    });

    chart.axis("y", false);
    chart.axis("x", false);
    chart.tooltip(false);
    chart.interaction("active-region");

    chart.tooltip({
      position: "top",
      showMarkers: false,
      title: (title, datum) => datum.y,
    });

    chart
      .interval()
      .position("x*y")
      .style("y", (val) => {
        if (val === qualifiedCandidates) return { fill: "#793ef5", radius: [20, 20, 0, 0] };
        return { fill: "#C4C4C4", radius: [20, 20, 0, 0] };
      });

    return chart.render();
  };

  useEffect(() => {
    if (!prevComponentMounted && componentMounted) {
      console.log(`data index : ${id}, qualifiedCandidates: ${qualifiedCandidates} mounted: ${componentMounted}`);
      renderColumnGraph();
    }

    setPrevComponentMounted(componentMounted);
    setComponentMounted(true);
  }, [componentMounted, prevComponentMounted]);

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
        <Col {...widths.qualifiedCandidates} className="post__candidates" id={internshipPostChartContainerId} />
        <Col {...widths.icons} className="post__icons">
          <Icons />
        </Col>
      </Row>
    </List.Item>
  );
};

export default InternshipPost;
