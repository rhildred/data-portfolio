import readme from "../../README.md?raw";
import '../../public/index.js';

export default ()=>{
    return <data-markdown>{readme}</data-markdown>}