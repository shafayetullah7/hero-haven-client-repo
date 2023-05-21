import { useEffect } from "react";

const PageTitle = ({ title }) => {
  
    useEffect(() => {
      document.title = `Hero Haven | ${title}`;
    }, [title]);
  
    return null;
  };
export default PageTitle;  