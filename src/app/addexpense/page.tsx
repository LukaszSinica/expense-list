import AddExpense from "@/components/addExpense";
import Footer from "@/components/footer";

export default function Page() {
    return (
      <>
        <AddExpense/>
        <Footer backButton={true}/>
      </>
    );
  }