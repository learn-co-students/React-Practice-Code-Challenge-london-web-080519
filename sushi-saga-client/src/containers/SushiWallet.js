import React, { Fragment } from "react";

const SushiWallet = props => {
  return (
    <div>
      <form onSubmit={event => props.handleSubmit(event)}>
        <label for="top-up">Top Up Money</label>
        <input type="number" name="top-up" id="top-up" />
        <input type="submit" value="Top Up!" />
      </form>
    </div>
  );
};

export default SushiWallet;
