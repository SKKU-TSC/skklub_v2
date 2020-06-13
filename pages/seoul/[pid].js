import dynamic from 'next/dynamic';
import Navbar from "../../components/navbar";

const NoSSRClubPageLayout = dynamic(
  () => import('../../components/clubPageLayout'),
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