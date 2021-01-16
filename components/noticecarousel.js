import { List, Typography, Divider } from "antd";

const data = [
  "공지 1",
  "공지 2",
  "공지 3",
  "공지 4",
  "공지 5",
  "공지 6",
];

function noticecarousel() {
  return (
    <>
      <Divider orientation="left">공지사항 </Divider>
      <List
        
        
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text mark>[공지]</Typography.Text> {item}
          </List.Item>
        )}
      />
    </>
  );
}

export default noticecarousel;