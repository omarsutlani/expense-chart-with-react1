import './ExpenseFilter.css';

function ExpenseFilter(props){

    const filterHandler = (event) => {
        props.onChangeFilter(event.target.value);
        // console.log(event.target.value);
      };
    



    return(
        <div className='expense-filter'>
            <div className='expense-filter_control'>
             <label>Filter By Year</label>
             <select value={props.selected} onChange={filterHandler}>
                <option value='2019'>2019</option>
                <option value='2020'>2020</option>
                <option value='2021'>2021</option>
                <option value='2022'>2022</option>
             </select>
            </div>
        </div>
    )

}


export default ExpenseFilter;