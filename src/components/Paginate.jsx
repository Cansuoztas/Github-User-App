import React from 'react'
import Pagination from 'react-bootstrap/Pagination';

const Paginate = ({pages,setCurrentPage}) => {
  const [activePage,setActivePage] = React.useState(1)
  
let items = [];
for (let number = 1; number <= pages; number++) {
  items.push(
    <Pagination.Item key={number} active={number === activePage} onClick={()=>setActivePage(number)}>
      {number}
    </Pagination.Item>,
  );
}
 React.useEffect(()=>{
  setCurrentPage(activePage)
 },[activePage,setCurrentPage])
  return (
    <div className='pagination-section'>
      <Pagination className='p-4' size="lg">{items}</Pagination>
    </div>
  )
}

export default Paginate