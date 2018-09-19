import DateField from './DateField';
import ClassField from './ClassField';

export default [
    {   label: "Class Name", 
        name: "name", 
        noValueError: "You must provide a name for your class",
        Component: ClassField,
        type: "text",
        format: () => {}
    },
    {   label: "Date to be held", 
        name: "dateHeld", 
        noValueError: "You must specify the date on which your class is held",
        Component: DateField,
        type: "date",
        format: null
    },
]
