import styled from 'styled-components';
import { Col, Row } from 'antd';

const Paragraph = styled.p`
	font-size: 20px;
	font-weight: lighter;
`;

const ColImage = styled.img`
	width: 20vh;
	margin-bottom: 40px;
	margin-right: 50px;
`;

function IntroSection() {
	return (
		<div style={{ height: 'auto' }}>
			<Row
				style={{ marginBottom: '100px' }}
				justify="space-around"
				align="middle"
				gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
			>
				<Col
					className="gutter-row"
					xs={24}
					md={8}
					align="middle"
					style={{ padding: '0% auto' }}
				>
					<ColImage src="../1.svg" />
				</Col>
				<Col className="gutter-row" xs={24} md={16}>
					<h1>사무국</h1>
					<Paragraph>
						사무국은 전체적인 동아리 활동에 필요한 상시서류를 작성하고, 신규등록
						및 재등록 관련 업무를 진행합니다. 징계 및 경고 동아리를 관리하고,
						동아리연합회 집행부회의, 전체동아리대표자회의 및 운영위원회의에
						참석하여 회의록을 작성하고 관리합니다.
					</Paragraph>
				</Col>
			</Row>
			<Row
				style={{ marginBottom: '100px' }}
				justify="space-around"
				align="middle"
				gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
			>
				<Col
					className="gutter-row"
					xs={24}
					md={8}
					align="middle"
					style={{ padding: '0% auto' }}
				>
					<ColImage src="../2.svg" />
				</Col>
				<Col className="gutter-row" xs={24} md={16}>
					<h1>사무국 총무팀</h1>
					<Paragraph>
						사무국 소속 총무팀은 성균관대학교 중앙동아리의 원활한 활동을
						보조하기 위해 동아리연합회 전반의 재정 관련 업무를 수행합니다.
						경상보조금, 회장장학금, 행사지원금의 지급 관련 행정을 전담합니다.
						또한 동아리연합회 사업 운영을 위한 학생회비 예산 수립, 집행, 학기별
						결산을 전문적으로 담당합니다.
					</Paragraph>
				</Col>
			</Row>
			<Row
				style={{ marginBottom: '100px' }}
				justify="space-around"
				align="middle"
				gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
			>
				<Col
					className="gutter-row"
					xs={24}
					md={8}
					align="middle"
					style={{ padding: '0% auto' }}
				>
					<ColImage src="../7.svg" />
				</Col>

				<Col className="gutter-row" xs={24} md={16}>
					<h1>비서 소통국</h1>
					<Paragraph>
						비서소통국은 회장단이 원활하게 업무를 수행할 수 있도록 회장단을
						보조하며, 본회 소속 중앙동아리 대표자와의 소통과 SKKLUB 웹사이트
						관리 등을 담당합니다. 중앙동아리 대표자와 동아리연합회 사이 징검다리
						역할을 하며, 고충을 접수하고 문제를 해결하기 위해 노력합니다.
						공용공간 대여사업 및 복지물품 대여사업을 진행하며, 익명 소통함을
						관리하여 회장단에게 내용을 전달합니다.
					</Paragraph>
				</Col>
			</Row>
			<Row
				style={{ marginBottom: '100px' }}
				justify="space-around"
				align="middle"
				gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
			>
				<Col
					className="gutter-row"
					xs={24}
					md={8}
					align="middle"
					style={{ padding: '0% auto' }}
				>
					<ColImage src="../3.svg" />
				</Col>
				<Col className="gutter-row" xs={24} md={16}>
					<h1>대내사업국</h1>
					<Paragraph>
						대내사업국은 동아리연합회 내부운영에 초점을 맞추어 동아리인의
						복지사업을 담당합니다. 동아리 운영의 편의와 효율을 고려하여 사업을
						기획하고, 원활한 활동이 이루어질 수 있도록 소속 중앙동아리를
						지원합니다.
					</Paragraph>
				</Col>
			</Row>
			<Row
				style={{ marginBottom: '100px' }}
				justify="space-around"
				align="middle"
				gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
			>
				<Col
					className="gutter-row"
					xs={24}
					md={8}
					align="middle"
					style={{ padding: '0% auto' }}
				>
					<ColImage src="../4.svg" />
				</Col>
				<Col className="gutter-row" xs={24} md={16}>
					<h1>행사기획국</h1>
					<Paragraph>
						행사기획국은 동아리연합회와 관련된 행사나 대외적인 사업 전반의
						기획과 진행 전 과정을 담당합니다. 중앙동아리의 더 나은 활동을
						보장하기 위해 사업을 기획하고, 그 과정에서 다양한 아이디어를
						제시합니다. 동아리 홍보부스와 동아리의 밤 행사 등을 직접 수행합니다.
					</Paragraph>
				</Col>
			</Row>
			<Row
				style={{ marginBottom: '100px' }}
				justify="space-around"
				align="middle"
				gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
			>
				<Col
					className="gutter-row"
					xs={24}
					md={8}
					align="middle"
					style={{ padding: '0% auto' }}
				>
					<ColImage src="../5.svg" />
				</Col>

				<Col className="gutter-row" xs={24} md={16}>
					<h1>홍보국</h1>
					<Paragraph>
						홍보국은 동아리연합회의 홍보와 문의답변과 관련된 업무를 담당합니다.
						동아리연합회에서 진행하는 각종 행사들과 중앙동아리의 소식을 종합하여
						홍보합니다. SNS 계정을 관리하며, 동아리 관련 문의에 답변하는
						소통창구의 역할도 겸행합니다.
					</Paragraph>
				</Col>
			</Row>
			<Row
				style={{ marginBottom: '100px' }}
				justify="space-around"
				align="middle"
				gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
			>
				<Col
					className="gutter-row"
					xs={24}
					md={8}
					align="middle"
					style={{ padding: '0% auto' }}
				>
					<ColImage src="../6.svg" />
				</Col>

				<Col className="gutter-row" xs={24} md={16}>
					<h1>홍보국 디자인팀</h1>
					<Paragraph>
						홍보국 소속 디자인팀은 동아리 홍보책자, 카드뉴스와 영상을 포함한 SNS
						콘텐츠 일체를 직접 디자인하고 이를 활용해 홍보사업을 수행합니다.
						시각적인 디자인 업무를 전문적으로 담당합니다.
					</Paragraph>
				</Col>
			</Row>
		</div>
	);
}

export default IntroSection;
