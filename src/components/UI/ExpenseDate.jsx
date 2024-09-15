function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="w-24 bg-slate-500 rounded-md border-2 border-white ml-2 flex flex-col items-center">
      <div className="font-semibold text-white">{month}</div>
      <div className=" text-white">{day}</div>
      <div className="text-sm text-white">{year}</div>
    </div>
  );
}

export default ExpenseDate;
