import seoulClubs from "../../data/seoul.json";
import suwonClubs from "../../data/suwon.json";
import { useRouter } from "next/router";
const router = useRouter();

export default function clubPage() {
  let club = suwonClubs[router.query.동아리명];

  return <div>{club.동아리명}</div>;
}

clubPage.getInitialProps = ({ query }) => {
  let useData;
  let univLocation;

  switch (router.pathname) {
    case "/seoul":
      univLocation = "seoul";
      useData = seoulClubs;
      break;
    case "/suwon":
      univLocation = "suwon";
      useData = suwonClubs;
      break;
    default:
      univLocation = "undefined";
  }
  
  return {
    club: useData[query.동아리명],
  };
};
