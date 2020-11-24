import dynamic from 'next/dynamic';
import Navbar from "../../../components/global/navbar";

const NoSSRClubPageLayout = dynamic(
  () => import('../../../components/layout/clubPageLayout'),
  { ssr: false }
)

export default function clubPage() {
  return (
    <div>
      <Navbar></Navbar>
      <NoSSRClubPageLayout></NoSSRClubPageLayout>
    </div>
  );
}
