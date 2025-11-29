import { Component } from "react";
import styled from "styled-components";
   const Item = styled.li`
  list-style: none;           /* прибирає крапки */
  background-color: #f7f9fc;  /* світло-сірий фон */
  margin: 8px 0;              /* відступи між пунктами */
  padding: 10px 15px;         /* внутрішній відступ */
  border-radius: 8px;         /* заокруглені кути */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); /* легка тінь */
  font-size: 16px;
  display: flex;              /* для вирівнювання тексту/іконки */
  justify-content: space-between;
  align-items: center;
  width: 33%;
  margin: 10px auto;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 8px;
  border: none;
  border-radius: 8px;
  background-color: #e0e0e0;
  color: #333;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

`;

class ToDo extends Component {



render() {
           const {toDo, remove, cheked,} = this.props;
    return (

        <ul>
        {
            toDo.map((obj) => {
    return (
        <Item id={obj.id}>
            <p style={{ textDecoration: obj.completed ? 'line-through' : 'none' }} id='text'>{obj.text}</p>
            <Button onClick={()=>remove(obj.id)}>Delete</Button>
            <input checked={obj.completed} onChange={()=>cheked(obj.id)} type="checkbox" name="" id="check" />
        </Item>
    );
  })
        }
        </ul>
    )
}
}

export default ToDo