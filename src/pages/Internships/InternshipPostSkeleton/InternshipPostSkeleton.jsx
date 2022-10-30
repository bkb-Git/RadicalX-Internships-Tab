import { Col, Row, Skeleton } from "antd";
import "./InternshipPostSkeleton.scss";

const InternshipPostSkeleton = (props) => {
  const { widths } = props;
  return (
    <Row justify="center" align="middle" style={{ height: "100%", width: "100%", padding: "16px" }}>
      <Col {...widths.internshipTitle}>
        <Skeleton
          title
          paragraph={{
            rows: 1,
          }}
          active
        />
      </Col>
      <Col {...widths.completitionPeriod}>
        <Skeleton
          title
          paragraph={{
            rows: 1,
          }}
          active
        />
      </Col>
      <Col {...widths.totalEnrolled}>
        <Skeleton
          paragraph={{
            rows: 1,
          }}
          active
        />
      </Col>
      <Col {...widths.qualifiedCandidates}>
        <Skeleton
          title
          paragraph={{
            rows: 1,
          }}
          active
        />
      </Col>
      <Col {...widths.icons}>
        <Skeleton
          title
          paragraph={{
            rows: 1,
          }}
          active
        />
      </Col>
    </Row>
  );
};

export default InternshipPostSkeleton;
