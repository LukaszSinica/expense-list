import Footer from "@/components/footer";
import Header from "@/components/header";
import ExpenseList from "@/components/expenseList";

export default function Home() {

  return (
    <main className="md:border-2 sm:border-0 bg-gray-100 dark:bg-slate-800 md:w-1/3 sm:w-full h-screen flex flex-col justify-between">
      <Header/>
      <div className="flex-1 overflow-y-auto">
        <ExpenseList/>
      </div>
      <Footer/>
    </main>
  );
}
