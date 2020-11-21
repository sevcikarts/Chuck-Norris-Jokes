import React from "react";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const CheckedHistory = ({ checkedHistry, setCheckedHistry,listOfJokes }) => {
  function scrollWin() {
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 500);
  }
  console.log(document.body.scrollHeight);

  return (
    <div>
      <FormControlLabel
        control={
          <Switch
            checked={checkedHistry}
            onChange={(e) => setCheckedHistry(e.target.checked)}
            onClick={() => scrollWin()}
            color="primary"
          />
        }
        label= { `show searched jokes (${listOfJokes.length-1})` }
      />
    </div>
  );
};

export default CheckedHistory;
