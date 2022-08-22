import { Row, Col } from 'antd';
import styled from 'styled-components';
import QueueAnim from 'rc-queue-anim';
import { OverPack } from 'rc-scroll-anim';

const DivContainer = styled.div`
	padding: 150px 60px 150px 60px;
	background-color: #f8f8f9;
	@media only screen and (max-width: 600px) {
		height: 1400px;
	}

	@media (min-width: 600px) {
		height: 1400px;
	}
	@media (min-width: 768px) {
		height: 1100px;
	}
	@media only screen and (min-width: 992px) {
		height: 1150px;
	}
`;

const StyledRow = styled(Row)`
	padding-bottom: 80px;
	padding-left: 30px;
	padding-right: 30px;
	@media (max-width: 768px) {
		padding-left: 0px;
		padding-right: 0px;
	}
`;

const FirstColumn = styled(Col)`
	text-align: right;
	padding-bottom: 10px;
	padding-right: 170px;
	@media (max-width: 985px) {
		text-align: left;
		padding-right: 0px;
	}
`;

const LeftText = styled.h1`
	font-weight: lighter;
	@media (max-width: 768px) {
		font-size: 1.7em;
	}
`;

const SecondColumn = styled(Col)`
	text-align: left;
`;

const RightTextTitle = styled.h1`
	@media (max-width: 768px) {
		font-size: 1.3em;
	}
`;

const RightTextParagraph = styled.p`
	font-size: 1.3em;
	font-weight: lighter;
	word-break: keep-all;
	@media (max-width: 768px) {
		font-size: 1.1em;
	}
`;

console.log('height:', StyledRow.offsetHeight);

function SecondContainer() {
	return (
		<div>
			<DivContainer>
				<OverPack always={false} style={{ height: StyledRow.offsetHeight }}>
					<QueueAnim
						className="queue-simple"
						ease={['easeOutQuart', 'easeInOutQuart']}
					>
						<StyledRow key="a">
							<FirstColumn xs={24} lg={10}>
								<LeftText>Who we are</LeftText>
							</FirstColumn>
							<SecondColumn xs={24} lg={14}>
								<RightTextTitle>
									안녕하세요,
									<br />
									동아리연합회 for:동 입니다!
								</RightTextTitle>
								<RightTextParagraph>
									성균관대학교 동아리연합회는 민주적인 절차를 통해 우리 대학
									캠퍼스 문화의 건전한 발전을 위한 기틀을 마련하며, 동아리 관련
									행정처리 및 행사 추진을 담당합니다. 동아리연합회는 중앙동아리
									소속 학우들의 활동을 장려하고 지원하는 것을 넘어서, 교내 모든
									동아리, 소모임, 학회 등이 이용할 수 있는 공간을 제공하고,
									중앙동아리 관련 정보를 신입생에게 가장 먼저 제공하는 등 성균인
									전체의 동아리 문화생활을 장려합니다.
								</RightTextParagraph>
							</SecondColumn>
						</StyledRow>
						<StyledRow key="b">
							<FirstColumn xs={24} lg={10}>
								<LeftText>What we do</LeftText>
							</FirstColumn>
							<SecondColumn xs={24} lg={14}>
								<RightTextTitle>저희는 이런 활동을 해요!</RightTextTitle>
								<RightTextParagraph>
									민주적 의견 수렴을 위해 상시로 운영위원회와
									전체동아리대표자회의를 개최하여 상호 정보를 공유하고,
									의결사항을 결정하고, 건의 및 논의안건에 대해 의견을 나눕니다.
									소통창구를 통해 항상 학내 구성원의 목소리에 귀를 기울이고
									있습니다. 동아리연합회는 특별기구로 중앙운영위원회를 구성하고,
									학생자치활동에 적극적으로 참여합니다. 학내 모든 동아리인의
									목소리를 대변하고, 서로 다른 목소리와 의견을 한데 모아 함께
									논의하는 과정을 통해 최선을 향해 나아가려 노력합니다.
									동아리연합회는 성균관대학교 전체 학생사회의 발전을 위해
									불철주야 노력하고 있습니다.
								</RightTextParagraph>
							</SecondColumn>
						</StyledRow>
						<StyledRow key="c">
							<FirstColumn xs={24} lg={10}>
								<LeftText>How we work</LeftText>
							</FirstColumn>
							<SecondColumn xs={24} lg={14}>
								<RightTextTitle>
									동아리연합회는 이렇게 구성되어 있어요!
								</RightTextTitle>
								<RightTextParagraph>
									동아리연합회는 원활한 업무수행을 위해 5개의 집행국과 2개의
									특별사무팀으로 구성됩니다. 대내사업국, 비서소통국, 사무국,
									행사기획국, 홍보국의 5국과 총무팀, 디자인팀의 2팀이 서로
									소통하며 업무를 함께 추진하고 있습니다. 이렇게 진행되는
									상시사업과 공약사업의 이행과정은 학우들에게 투명하게
									공개됩니다. 각 국의 업무는 아래와 같습니다.
								</RightTextParagraph>
							</SecondColumn>
						</StyledRow>
					</QueueAnim>
				</OverPack>
			</DivContainer>
		</div>
	);
}

export default SecondContainer;
