import Header from "./Header.js";
import Footer from './Footer';

export default function Layout (props) {
return ( <>      
      <Header {...props}
      />
        {props.children}
      <Footer /> 
  </>
)
};
