import React from "react";

function ExplorePage({ recipes, users }) {
  return (
    <div>
      Explore
      {recipes && <p>recipes ok</p>}
      {users && <p>users ok</p>}
    </div>
  );
}

export default ExplorePage;
