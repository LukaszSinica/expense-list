import Footer from "@/components/footer";
import ExpenseList from "@/components/expenselist/expenseList";

export default function Home() {

  return (
    <>
      <div className="flex-1 overflow-y-auto">
        <ExpenseList/>
      </div>
      <Footer/>
    </>
  );
}
