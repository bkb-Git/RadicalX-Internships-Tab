import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Card, Col, Divider, List, Row } from "antd";

import Category from "components/Category";
import InternshipPost from "components/InternshipPost";
import InternshipPostSkeleton from "../../../components/InternshipPostSkeleton";

import { ReactComponent as IconGroup } from "../../../assets/ButtonsGroup.svg";

import "./InternshipsList.scss";

const categoryWidths = {
  internshipTitle: { lg: 8, xl: 8, xxl: 8 },
  completitionPeriod: { lg: 4, xl: 4, xxl: 4 },
  totalEnrolled: { lg: 3, xl: 3, xxl: 3 },
  qualifiedCandidates: { lg: 6, xl: 6, xxl: 6 },
  icons: { lg: 3, xl: 3, xxl: 3 },
};

const mockData = {
  role: "Product Design GVI",
  description: "Amnet minim non deserunt est sit aliqua dolor do amet sint.",
  period: 120,
  dateCreated: "10/12/2021",
  totalEnrolled: 20000,
  qualifiedCandidates: 120,
  Icons: IconGroup,
  id: 1,
};

const generateMockDataList = (count) => {
  const list = [];
  let index = 0;

  while (index < count) {
    list.push({ ...mockData, id: `${Date.now()}-${index}` });
    index += 1;
  }

  return list;
};

const InternshipsList = () => {
  const [loading, setLoading] = useState(false);
  const [listLoading, setListLoading] = useState(true);
  const [listData, setListData] = useState([]);
  const [page, setPage] = useState(0);
  const pageSize = 10;

  const loadMoreData = () => {
    if (loading) {
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const fetchedData = generateMockDataList(pageSize);
      setListData([...listData, ...fetchedData]);
      setLoading(false);
      setListLoading(false);
    }, 2500);
  };

  useEffect(() => {
    loadMoreData();
  }, []);

  const renderCategoryRow = () => {
    return (
      <Row justify="center" align="center">
        <Category name="Internship Title" widths={categoryWidths.internshipTitle} />
        <Category name="Completition Period" widths={categoryWidths.completitionPeriod} />
        <Category name="Total Enrolled" widths={categoryWidths.totalEnrolled} />
        <Category name="Qualified Candidates" widths={categoryWidths.qualifiedCandidates} />
        <Category widths={categoryWidths.icons} />
      </Row>
    );
  };

  return (
    <Card bodyStyle={{ height: "100%", padding: "0px" }} className="internshipListCard">
      <Row style={{ height: "100%" }}>
        <Col span={24} className="internshipListCard__categoryRow">
          {renderCategoryRow()}
        </Col>
        <Col span={24} className="internshipListCard__list" id="internshipList">
          <InfiniteScroll
            dataLength={listData.length}
            next={() => {
              setPage(page + 1);

              loadMoreData();
            }}
            hasMore={listData.length < 50}
            loader={!listLoading && <InternshipPostSkeleton widths={categoryWidths} />}
            endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
            scrollableTarget="internshipList"
          >
            <List
              loading={listLoading}
              dataSource={listData}
              renderItem={(item) => <InternshipPost post={item} widths={categoryWidths} key={item.id} />}
            />
          </InfiniteScroll>
        </Col>
      </Row>
    </Card>
  );
};

export default InternshipsList;
