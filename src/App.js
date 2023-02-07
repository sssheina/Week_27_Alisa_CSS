import React from 'react';

import styles from './App.css';

import Cat from './components/cat';

const cats = [
  { name: "Носик", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCymWxyHnzJrDkfyNY79oX83oxzRtiM6rOsQ&usqp=CAU", text:"test"},
  { name: "Вася", img: "https://scientificrussia.ru/images/b/teb-full.jpg", isSelected: true,},
  { name: "Балу", img: "https://img5.goodfon.ru/wallpaper/nbig/0/c8/kotik-kotenok-fon.jpg"},
];

class App extends React.Component {
  render() {
    
  return (
    
    <div className={this.props.theme.App} >
      
      <div className={styles.card}>
      {
        cats.map((cat) =>
        <Cat name={cat.name} img={cat.img} text={cat.text} isSelected={cat.isSelected} />)
      }
      </div>
      <button className={styles.button} >Нажми меня</button>
      </div>
    
    
  );
}
}

export default App;
