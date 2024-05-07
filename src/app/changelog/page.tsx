import Changelog from "@/components/changelog";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function ChangeLog() {
  const backButton = true;
  
  return (
    <main className="border-2 bg-gray-100 w-1/2 h-screen flex flex-col justify-between">
      <Header/>
      <Changelog/>
      <Footer backButton={backButton}/>
    </main>
  );
}
