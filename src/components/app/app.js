import AppInfo from '../app-info/app-info';
import './app.css';
import '../search-panel/search-panel'
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

const App = () => {
    
    const data = [
        {name: 'John C.', salary: 800, increase: true, id: 1},
        {name: 'Alex T.', salary: 3000, increase: false, id: 2},
        {name: 'Dewe U.', salary: 4500, increase: true, id: 3}
    ];
    
    return(
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            
            <EmployeesList data={data} />
            <EmployeesAddForm />
        </div>
    )
}

export default App;