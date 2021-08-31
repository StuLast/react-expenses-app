import React from "react";

const EditExpensePage = (props) => {
  console.log(props.match.params);
  return (
    <div>
      <p>This is from my Edit Expense Component</p>
      <p>Editing the expense with ID of {props.match.params.id}.</p>
    </div>
  );
};

export default EditExpensePage;
