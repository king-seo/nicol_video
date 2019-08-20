import React from "react";
function Cat({ name, picture }) {
  return (
    <div>
      <h1>I love {name}</h1>
      <img src={picture} />
    </div>
  );
}

const catILike = [
  {
    name: "bengal",
    image:
      "https://www.thehappycatsite.com/wp-content/uploads/2018/01/bengal-cat-names.jpg"
  },
  {
    name: "abisinian",
    image:
      "http://mblogthumb2.phinf.naver.net/20130426_289/udadacat2_1366961321378tH3Ly_JPEG/%BE%C6%BA%F1%BD%C3%B4%CF%BE%C8%B0%ED%BE%E7%C0%CC2.jpg?type=w2"
  },
  {
    name: "munchikin",
    image: "http://cfile213.uf.daum.net/image/226FB84E53521AEA34816B"
  }
];
function App() {
  return (
    <div>
      {catILike.map(obj => (
        <Cat name={obj.name} picture={obj.image} />
      ))}
    </div>
  );
}

export default App;
