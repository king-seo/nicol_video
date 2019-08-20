import React from "react";
import PropTypes from "prop-types";

function Cat({ name, picture, rating }) {
  return (
    <div>
      <h1>I love {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}
Cat.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

const catILike = [
  {
    id: 1,
    name: "bengal",
    image:
      "https://www.thehappycatsite.com/wp-content/uploads/2018/01/bengal-cat-names.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "abisinian",
    image:
      "http://mblogthumb2.phinf.naver.net/20130426_289/udadacat2_1366961321378tH3Ly_JPEG/%BE%C6%BA%F1%BD%C3%B4%CF%BE%C8%B0%ED%BE%E7%C0%CC2.jpg?type=w2",
    rating: 4
  },
  {
    id: 3,
    name: "munchikin",
    image: "http://cfile213.uf.daum.net/image/226FB84E53521AEA34816B",
    rating: 5
  }
];
function renderCat(obj) {
  console.log(obj);
  return (
    <Cat key={obj.id} name={obj.name} picture={obj.image} rating={obj.rating} />
  );
}

function App() {
  return <div>{catILike.map(renderCat)}</div>;
}

export default App;
