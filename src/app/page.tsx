import Footer from "@/components/footer";
import Header from "@/components/header";
import Main from "@/components/main";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-24 border-1">
      <div className="border-2 bg-gray-100 w-1/2 h-screen flex flex-col justify-between p-12">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </main>
  );
}
