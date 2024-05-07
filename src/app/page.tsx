import Footer from "@/components/footer";
import Header from "@/components/header";
import ExpenseList from "@/components/expenseList";

export default function Home() {
  return (
    <main className="border-2 bg-gray-100 w-1/2 h-screen flex flex-col justify-between">
      <Header/>
      <ExpenseList/>
      <Footer/>
    </main>
  );
}
