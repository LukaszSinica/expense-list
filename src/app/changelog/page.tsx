import Changelog from "@/components/changelog";
import Footer from "@/components/footer";

export default function ChangeLog() {
  
  return (
    <>
      <div className='flex-1 overflow-y-auto'>
        <Changelog/>
      </div>
      <Footer backButton={true}/>
    </>
  );
}
